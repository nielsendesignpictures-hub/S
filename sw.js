/* Kaiser HQ – service worker.
   Bump CACHE-navnet (v1 -> v2) når du opdaterer app'en, så telefonen henter nyt. */
const CACHE = "kaiserhq-v3";
const FILER = ["./", "./index.html", "./app.js", "./data.js", "./manifest.webmanifest",
  "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILER)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  // API-kald og eksterne domæner: altid netværk
  if (url.origin !== location.origin) return;
  // Egne filer: netværk først (så opdateringer slår igennem), cache som fallback (offline)
  e.respondWith(
    fetch(e.request).then(res => {
      const klon = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, klon));
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});
