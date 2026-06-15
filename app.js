/* ============================================================
   KAISER HQ – app-logik
   ============================================================ */
(function () {
  "use strict";
  const D = window.KDATA;
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const NU = () => new Date();
  const MND = NU().getMonth() + 1;

  /* ---------- Lager ---------- */
  const store = {
    get(k, fb) { try { const v = localStorage.getItem("khq_" + k); return v ? JSON.parse(v) : fb; } catch (e) { return fb; } },
    set(k, v) { localStorage.setItem("khq_" + k, JSON.stringify(v)); }
  };
  let todos = store.get("todos", []);
  let ideer = store.get("ideer", []);

  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = s => String(s).toLowerCase().replace(/é/g, "e").trim();

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(t._tm); t._tm = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------- Navigation ---------- */
  function go(view) {
    $$(".view").forEach(v => v.classList.remove("active"));
    $("#view-" + view).classList.add("active");
    $$("nav button").forEach(b => b.classList.toggle("on", b.dataset.go === view));
    window.scrollTo(0, 0);
    if (view === "hjem") renderDash();
    if (view === "drift") renderDriftView();
  }
  $$("nav button").forEach(b => b.addEventListener("click", () => go(b.dataset.go)));
  $$("[data-go]", $("main")).forEach(b => b.addEventListener("click", () => {
    go(b.dataset.go);
    const q = b.dataset.quick;
    if (q === "todo") setTimeout(() => $("#todoInput").focus(), 250);
    if (q === "ide") setTimeout(aabnIdeModal, 100);
    if (q === "trends") visAlleTrends();
  }));

  /* ============================================================
     DASHBOARD
  ============================================================ */
  function renderDash() {
    const d = NU();
    const dage = ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
    const mdr = ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"];
    $("#dashDato").textContent = `${dage[d.getDay()]} ${d.getDate()}. ${mdr[d.getMonth()]}`;
    const h = d.getHours();
    $("#dashHilsen").textContent = (h < 10 ? "Godmorgen" : h < 17 ? "Goddag" : "Godaften") + ", Stefan";

    const aabne = todos.filter(t => !t.done);
    const ideerAktive = ideer.filter(i => i.status !== "parkeret").length;
    $("#dashStatus").textContent = `${aabne.length} åbne opgaver · ${ideerAktive} aktive idéer`;

    // Sæson lige nu (peak først)
    const iPeak = D.raavarer.filter(r => r.peak.includes(MND));
    const iSaeson = D.raavarer.filter(r => !r.peak.includes(MND) && r.saeson.includes(MND));
    const vis = [...iPeak, ...iSaeson].slice(0, 14);
    $("#dashSaeson").innerHTML = vis.map(r =>
      `<button class="saeson-pill" data-rid="${r.id}"><em>${r.peak.includes(MND) ? "✦ peak" : "i sæson"}</em>${esc(r.navn)}</button>`
    ).join("");
    $$("#dashSaeson [data-rid]").forEach(b => b.addEventListener("click", () => { go("trae"); visTrae(b.dataset.rid); }));

    // Top-opgaver
    const prioV = { h: 0, m: 1, l: 2 };
    const top = aabne.slice().sort((a, b) =>
      (prioV[a.prio] - prioV[b.prio]) || ((a.frist || "9999") < (b.frist || "9999") ? -1 : 1)
    ).slice(0, 3);
    $("#dashTodos").innerHTML = top.length
      ? top.map(t => `<div class="dash-item"><div class="prio-dot prio-${t.prio}" style="margin-top:0;"></div>
          <div>${esc(t.tekst)}</div><div class="meta">${esc(t.cafe !== "Alle" ? t.cafe : t.kat)}</div></div>`).join("")
      : `<div class="empty">Ingen åbne opgaver – nyd det, mens det varer 🌿</div>`;

    // Seneste idé
    const sidste = ideer[0];
    $("#dashIde").innerHTML = sidste
      ? `<div class="dash-item" data-iid="${sidste.id}" style="border:none;cursor:pointer;">
           <div>💡 ${esc(sidste.titel)}</div><div class="meta">${esc(D.rammer[sidste.kat]?.navn || "")}</div></div>`
      : `<div class="empty">Ingen idéer endnu – tryk “Ny idé” når den rammer dig</div>`;
    const ideEl = $("#dashIde [data-iid]");
    if (ideEl) ideEl.addEventListener("click", () => { go("ideer"); redigerIde(sidste.id); });
  }

  /* ============================================================
     SMAGSTRÆ
  ============================================================ */
  const find = id => D.raavarer.find(r => r.id === id);
  const findByNavn = navn => D.raavarer.find(r => norm(r.navn) === norm(navn) || r.id === norm(navn).replace(/\s+/g, "_"));

  function renderTraeQuick() {
    const peak = D.raavarer.filter(r => r.peak.includes(MND)).slice(0, 8);
    $("#traeQuick").innerHTML = peak.map(r => `<button class="chip" data-rid="${r.id}">✦ ${esc(r.navn)}</button>`).join("");
    $$("#traeQuick [data-rid]").forEach(b => b.addEventListener("click", () => visTrae(b.dataset.rid)));
  }

  $("#traeSearch").addEventListener("input", e => {
    const q = norm(e.target.value);
    const box = $("#traeSuggest");
    if (q.length < 2) { box.innerHTML = ""; return; }
    const hits = D.raavarer.filter(r => norm(r.navn).includes(q) || r.par.some(p => norm(p).includes(q))).slice(0, 6);
    box.innerHTML = hits.map(r => {
      const viaPar = !norm(r.navn).includes(q);
      return `<div class="suggest-item" data-rid="${r.id}">${esc(r.navn)}<small>${viaPar ? "parring-match" : (r.peak.includes(MND) ? "✦ peak nu" : r.saeson.includes(MND) ? "i sæson nu" : (!r.saeson.length ? "året rundt" : ""))}</small></div>`;
    }).join("") || `<div class="empty">Ingen match – prøv en anden råvare</div>`;
    $$("#traeSuggest [data-rid]").forEach(el => el.addEventListener("click", () => {
      $("#traeSearch").value = ""; box.innerHTML = ""; visTrae(el.dataset.rid);
    }));
  });

  function visTrae(id) {
    const r = find(id); if (!r) return;
    $("#trendPanel").innerHTML = "";
    $("#traeCard").style.display = "block";
    tegnTrae(r);

    const sm = D.maaneder;
    const aaret = !r.saeson || r.saeson.length === 0;
    const saesonTxt = r.saeson.map(m => sm[m - 1]).join(" · ");
    const peakTxt = (r.peak && r.peak.length) ? r.peak.map(m => sm[m - 1]).join(", ") : "";
    const tilgang = aaret
      ? `Tilgang: <b>Året rundt</b>${peakTxt ? ` &nbsp;·&nbsp; <span style="color:var(--gold)">✦ bedst: ${peakTxt}</span>` : ""}`
      : `Sæson: ${saesonTxt}${peakTxt ? ` &nbsp;·&nbsp; <span style="color:var(--gold)">✦ peak: ${peakTxt}</span>` : ""}`;
    const trends = (r.trends || []).map(tid => D.trends.find(t => t.id === tid)).filter(Boolean);
    $("#traeInfo").innerHTML = `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <h3 style="margin:0;font-size:19px;">${esc(r.navn)}</h3>
          <span class="badge green">${esc(r.kat)}</span>
        </div>
        <p class="hint" style="margin:8px 0 4px;">${tilgang}</p>
        <div style="margin-top:8px;">${trends.map(t => `<span class="badge">${esc(t.navn)}</span>`).join("")}</div>
      </div>
      ${(r.menu && r.menu.length) ? `<h2 class="section">Idéer til Kaiser-kortet</h2>` + r.menu.map(m => `<div class="menu-idea">${esc(m)}</div>`).join("") : ""}
      ${trends.length ? `<h2 class="section">Hvorfor nu</h2>` + trends.map(t =>
        `<div class="card" style="padding:12px 14px;"><b style="color:var(--gold);font-size:13.5px;">${esc(t.navn)}</b><p class="hint" style="margin:4px 0 0;">${esc(t.desc)}</p></div>`).join("") : ""}
    `;
    $("#traeCard").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function tegnTrae(r) {
    const W = 440, H = 500, cx = 220;
    const forkY = 250, baseY = 332;                 // kronens hjerte og stammens bund
    const NS = "http://www.w3.org/2000/svg";
    const svg = $("#traeSvg");
    svg.innerHTML = `
      <defs>
        <filter id="fglow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="kerne" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#2c4a36"/><stop offset="100%" stop-color="#101c14"/>
        </radialGradient>
        <radialGradient id="krone" cx="50%" cy="42%">
          <stop offset="0%" stop-color="rgba(139,227,168,.10)"/><stop offset="100%" stop-color="rgba(139,227,168,0)"/>
        </radialGradient>
        <linearGradient id="bark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3f5340"/><stop offset="50%" stop-color="#4a3c28"/><stop offset="100%" stop-color="#33291a"/>
        </linearGradient>
        <linearGradient id="grenG" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="rgba(120,150,118,.55)"/><stop offset="100%" stop-color="rgba(139,227,168,.5)"/>
        </linearGradient>
      </defs>`;

    const add = (tag, attrs, parent) => {
      const el = document.createElementNS(NS, tag);
      for (const k in attrs) el.setAttribute(k, attrs[k]);
      (parent || svg).appendChild(el);
      return el;
    };
    const lysPaaSti = (sti, dur, farve, rad, delay) => {
      const c = add("circle", { r: rad, fill: farve, filter: "url(#fglow)", opacity: ".9" });
      const am = document.createElementNS(NS, "animateMotion");
      am.setAttribute("dur", dur + "s");
      am.setAttribute("repeatCount", "indefinite");
      am.setAttribute("begin", delay + "s");
      const mp = document.createElementNS(NS, "mpath");
      mp.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + sti);
      am.appendChild(mp); c.appendChild(am);
    };
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    const DEG = Math.PI / 180;

    /* —— Rødder (sæson, nedad) – tegnes først, bag stammen —— */
    const mdr = D.maaneder;
    mdr.forEach((m, i) => {
      const mnr = i + 1;
      const iSaeson = r.saeson.includes(mnr);
      const iPeak = r.peak.includes(mnr);
      const t = i / 11;
      const ang = (202 + 136 * t) * DEG;                  // vifte nedad, venstre -> højre
      const rrx = iSaeson ? 152 : 104;
      const rry = iSaeson ? 122 : 90;
      let ex = clamp(cx + Math.cos(ang) * rrx, 26, W - 26);
      const ey = baseY + 4 - Math.sin(ang) * rry;
      const cpx = cx + (ex - cx) * 0.42, cpy = baseY + 36;
      const pid = "rod" + i;
      add("path", { id: pid, d: `M ${cx} ${baseY} Q ${cpx} ${cpy} ${ex} ${ey}`, class: "gren",
        stroke: iPeak ? "rgba(233,200,123,.6)" : iSaeson ? "rgba(139,227,168,.32)" : "rgba(74,60,40,.45)",
        "stroke-width": iPeak ? 2.6 : iSaeson ? 2 : 1.4 });
      if (iSaeson) lysPaaSti(pid, 3.4 + (i % 3) * .6, iPeak ? "#e9c87b" : "#8be3a8", iPeak ? 2.6 : 1.8, i * .28);
      add("circle", { cx: ex, cy: ey, r: iPeak ? 3.6 : 2.4,
        fill: iPeak ? "#e9c87b" : iSaeson ? "#8be3a8" : "#3a2e1f",
        filter: iPeak ? "url(#fglow)" : "", class: iPeak ? "lys" : "" });
      const tx = add("text", { x: clamp(ex, 20, W - 20), y: ey + 13, "text-anchor": "middle",
        fill: iPeak ? "#e9c87b" : iSaeson ? "#8fa698" : "#5d4a33", "font-size": "9",
        "font-family": "-apple-system, sans-serif" });
      tx.textContent = m;
      if (mnr === MND) add("circle", { cx: ex, cy: ey, r: 7, fill: "none",
        stroke: "rgba(233,200,123,.85)", "stroke-width": 1, class: "lys" });
    });

    /* —— Stamme (bark) —— */
    add("path", { d:
      `M ${cx - 7} ${forkY} C ${cx - 9} ${forkY + 34} ${cx - 16} ${baseY - 22} ${cx - 22} ${baseY} ` +
      `C ${cx - 13} ${baseY + 3} ${cx - 6} ${baseY + 3} ${cx} ${baseY} ` +
      `C ${cx + 6} ${baseY + 3} ${cx + 13} ${baseY + 3} ${cx + 22} ${baseY} ` +
      `C ${cx + 16} ${baseY - 22} ${cx + 9} ${forkY + 34} ${cx + 7} ${forkY} Z`,
      fill: "url(#bark)", stroke: "rgba(139,227,168,.12)", "stroke-width": 1 });

    /* —— Løvkrone-glød (foliage) —— */
    add("ellipse", { cx, cy: 140, rx: 162, ry: 108, fill: "url(#krone)" });

    /* —— Grene + blade (parringer, opad) —— */
    const par = r.par.slice(0, 8);
    const n = par.length;
    par.forEach((p, i) => {
      const t = n === 1 ? .5 : i / (n - 1);
      const ang = (160 - 140 * t) * DEG;                  // venstre -> højre over kronen
      let ex = clamp(cx + Math.cos(ang) * 142, 104, W - 104);
      const ey = 150 - Math.sin(ang) * 104;
      const cpx = cx + (ex - cx) * 0.45, cpy = (forkY + ey) / 2 - 6;
      const pid = "gren" + i;
      add("path", { id: pid, d: `M ${cx} ${forkY - 6} Q ${cpx} ${cpy} ${ex} ${ey}`,
        class: "gren", stroke: "url(#grenG)", "stroke-width": 2.4 });
      lysPaaSti(pid, 2.6 + (i % 4) * .5, "#8be3a8", 2.2, i * .35);

      const match = findByNavn(p);
      const g = add("g", { class: "node-label", "data-rid": match ? match.id : "" });
      add("circle", { cx: ex, cy: ey, r: match ? 5 : 3.6, fill: match ? "#8be3a8" : "#46604f",
        filter: match ? "url(#fglow)" : "", class: match ? "lys" : "" }, g);
      const mid = Math.abs(ex - cx) < 24;
      const anchor = mid ? "middle" : (ex < cx ? "end" : "start");
      const tx = add("text", { x: mid ? ex : ex + (ex < cx ? -10 : 10),
        y: mid ? ey - 11 : ey + 4, "text-anchor": anchor,
        fill: match ? "#cfeeda" : "#8fa698", "font-size": "11",
        "font-family": "-apple-system, sans-serif" }, g);
      tx.textContent = p;
      if (match) g.addEventListener("click", () => visTrae(match.id));
    });

    /* —— Hjerte / kerne med råvarens navn —— */
    add("circle", { cx, cy: forkY, r: 33, fill: "url(#kerne)", stroke: "rgba(139,227,168,.55)",
      "stroke-width": 1.5, filter: "url(#fglow)" });
    const navnDele = r.navn.split(" ");
    navnDele.slice(0, 2).forEach((del, i) => {
      const tt = add("text", { x: cx, y: forkY + (navnDele.length > 1 ? -2 + i * 13 : 4),
        "text-anchor": "middle", fill: "#e9f0ea", "font-size": navnDele.length > 1 ? "10.5" : "12",
        "font-weight": "700", "font-family": "-apple-system, sans-serif" });
      tt.textContent = del;
    });
  }

  function visAlleTrends() {
    $("#traeCard").style.display = "none";
    $("#traeInfo").innerHTML = "";
    const mdrNavn = ["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"][MND - 1];
    $("#trendPanel").innerHTML = `<h2 class="section">Food trends · 2026</h2>` +
      D.trends.map(t => {
        const rel = D.raavarer.filter(r => (r.trends || []).includes(t.id) && r.saeson.includes(MND)).slice(0, 5);
        return `<div class="card"><b style="color:var(--gold);">${esc(t.navn)}</b>
          <p class="hint" style="margin:6px 0 8px;">${esc(t.desc)}</p>
          ${rel.length ? `<div class="chips">${rel.map(r => `<button class="chip" data-rid="${r.id}">${esc(r.navn)}</button>`).join("")}</div>
          <p class="hint" style="margin-top:6px;">↑ i sæson i ${mdrNavn}</p>` : ""}</div>`;
      }).join("");
    $$("#trendPanel [data-rid]").forEach(b => b.addEventListener("click", () => visTrae(b.dataset.rid)));
  }

  /* ============================================================
     IDÉVÆRKTØJ
  ============================================================ */
  let aktivIde = null; // {id?, kat}

  function aabnIdeModal(ide) {
    aktivIde = ide ? { ...ide } : { kat: null, svar: {}, aiSpm: [], aiSvar: {} };
    $("#ideModalTitel").textContent = ide ? "Redigér idé" : "Ny idé";
    $("#ideTitel").value = ide ? ide.titel : "";
    renderIdeKat();
    renderIdeSpm();
    $("#modalIde").classList.add("open");
    if (!ide) setTimeout(() => $("#ideTitel").focus(), 200);
  }
  function lukIdeModal() { $("#modalIde").classList.remove("open"); aktivIde = null; }

  function renderIdeKat() {
    $("#ideKatChips").innerHTML = Object.entries(D.rammer).map(([k, v]) =>
      `<button class="chip ${aktivIde.kat === k ? "gold-on" : ""}" data-k="${k}">${v.ikon} ${esc(v.navn)}</button>`).join("");
    $$("#ideKatChips [data-k]").forEach(b => b.addEventListener("click", () => {
      aktivIde.kat = b.dataset.k; renderIdeKat(); renderIdeSpm();
    }));
  }

  function renderIdeSpm() {
    const c = $("#ideSpmContainer"), ai = $("#ideAiContainer");
    if (!aktivIde.kat) { c.innerHTML = `<p class="hint" style="margin:4px 0 16px;">Vælg en kategori, så stiller jeg de skarpe spørgsmål.</p>`; ai.innerHTML = ""; return; }
    const ramme = D.rammer[aktivIde.kat];
    c.innerHTML = `<h2 class="section">Spørgsmål der holder dig skarp</h2>` +
      ramme.spm.map((s, i) => `<div class="spm-block">
        <label><b>${i + 1}.</b> ${esc(s)}</label>
        <textarea data-spm="${i}" placeholder="Dit svar…">${esc(aktivIde.svar?.[i] || "")}</textarea>
      </div>`).join("");
    $$("#ideSpmContainer textarea").forEach(t => t.addEventListener("input", () => {
      aktivIde.svar = aktivIde.svar || {}; aktivIde.svar[t.dataset.spm] = t.value;
    }));
    renderAiBlok();
  }

  function renderAiBlok() {
    const ai = $("#ideAiContainer");
    const key = store.get("apikey", "");
    let html = "";
    if (aktivIde.aiSpm && aktivIde.aiSpm.length) {
      html += `<h2 class="section">AI-opfølgning ✨</h2>` + aktivIde.aiSpm.map((s, i) =>
        `<div class="spm-block ai-spm"><label><b>✦</b> ${esc(s)}</label>
         <textarea data-aispm="${i}" placeholder="Dit svar…">${esc(aktivIde.aiSvar?.[i] || "")}</textarea></div>`).join("");
    }
    html += key
      ? `<button class="btn ghost" id="btnAiSpm" style="margin-bottom:14px;">✨ Stil mig skarpere spørgsmål (AI)</button>`
      : `<p class="hint" style="margin:0 0 14px;">Tip: Tilføj din Claude API-nøgle under ⚙︎ Indstillinger, så stiller AI'en skræddersyede opfølgende spørgsmål til netop denne idé.</p>`;
    ai.innerHTML = html;
    $$("#ideAiContainer textarea").forEach(t => t.addEventListener("input", () => {
      aktivIde.aiSvar = aktivIde.aiSvar || {}; aktivIde.aiSvar[t.dataset.aispm] = t.value;
    }));
    const btn = $("#btnAiSpm");
    if (btn) btn.addEventListener("click", hentAiSpm);
  }

  async function hentAiSpm() {
    const key = store.get("apikey", "");
    const titel = $("#ideTitel").value.trim();
    if (!titel) { toast("Skriv idéen først"); return; }
    if (!aktivIde.kat) { toast("Vælg en kategori først"); return; }
    const btn = $("#btnAiSpm");
    btn.innerHTML = `<span class="spinner"></span> Tænker…`; btn.disabled = true;

    const ramme = D.rammer[aktivIde.kat];
    const besvarede = ramme.spm.map((s, i) => aktivIde.svar?.[i] ? `Spm: ${s}\nSvar: ${aktivIde.svar[i]}` : null).filter(Boolean).join("\n\n");
    const prompt = `Du er sparringspartner for Stefan, F&B-chef for Café Kaiser – en dansk cafékæde med 6 caféer (Helsingør, Hillerød, Farum, Hørsholm, Vanløse, Enghave Brygge). Menuen: brunch-bræt, brunchbuffet, sandwich, byg-selv-burger, salater, højtbelagt smørrebrød, aftenretter (stegt flæsk, wienerschnitzel m.m.), desserter. Mad fra bunden, gode råvarer.

Stefan har en idé: "${titel}" (kategori: ${ramme.navn}).
${besvarede ? "Han har allerede svaret på:\n" + besvarede : "Han har ikke besvaret standardspørgsmålene endnu."}

Stil præcis 5 skarpe, konkrete opfølgende spørgsmål på dansk, som han IKKE allerede er blevet stillet, og som tester idéens svage punkter. Vær specifik for caféerne og idéen – ingen generiske spørgsmål.
Svar KUN med et JSON-array af 5 strenge, intet andet.`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1024, messages: [{ role: "user", content: prompt }] })
      });
      if (!res.ok) throw new Error("API-fejl " + res.status);
      const data = await res.json();
      const txt = (data.content || []).map(c => c.text || "").join("");
      const m = txt.match(/\[[\s\S]*\]/);
      const nye = JSON.parse(m ? m[0] : txt);
      aktivIde.aiSpm = [...(aktivIde.aiSpm || []), ...nye];
      renderAiBlok();
      toast("5 nye spørgsmål ✨");
    } catch (e) {
      toast(e.message.includes("401") ? "Ugyldig API-nøgle – tjek ⚙︎" : "Kunne ikke nå AI'en – tjek netværk/nøgle");
      const b = $("#btnAiSpm"); if (b) { b.innerHTML = "✨ Stil mig skarpere spørgsmål (AI)"; b.disabled = false; }
    }
  }

  function gemIde() {
    const titel = $("#ideTitel").value.trim();
    if (!titel) { toast("Skriv idéen først"); return; }
    if (!aktivIde.kat) { toast("Vælg en kategori"); return; }
    if (aktivIde.id) {
      const i = ideer.findIndex(x => x.id === aktivIde.id);
      ideer[i] = { ...ideer[i], ...aktivIde, titel };
    } else {
      ideer.unshift({ ...aktivIde, id: Date.now(), titel, status: "ny", oprettet: new Date().toISOString().slice(0, 10) });
    }
    store.set("ideer", ideer);
    lukIdeModal(); renderIdeer(); toast("Idé gemt 💡");
  }

  const statusFlow = { ny: "arbejde", arbejde: "klar", klar: "parkeret", parkeret: "ny" };
  const statusNavn = { ny: "Ny", arbejde: "I gang", klar: "Klar til test", parkeret: "Parkeret" };

  function renderIdeer() {
    const el = $("#ideListe");
    el.innerHTML = ideer.length ? ideer.map(i => {
      const ramme = D.rammer[i.kat];
      const antalSvar = Object.values(i.svar || {}).filter(v => v && v.trim()).length +
                        Object.values(i.aiSvar || {}).filter(v => v && v.trim()).length;
      return `<div class="card ide-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">
          <h3>${esc(i.titel)}</h3>
          <button class="status-pill status-${i.status}" data-status="${i.id}">${statusNavn[i.status]}</button>
        </div>
        <div class="sub">${ramme ? ramme.ikon + " " + esc(ramme.navn) : ""} · ${antalSvar} svar · ${esc(i.oprettet || "")}</div>
        <div class="row" style="margin-top:12px;">
          <button class="btn ghost small" data-aaben="${i.id}">Åbn &amp; arbejd videre</button>
          <button class="btn ghost small" data-slet="${i.id}" style="flex:0 0 auto;color:var(--red);">Slet</button>
        </div>
      </div>`;
    }).join("") : `<div class="card"><div class="empty">Ingen idéer endnu.<br>Næste gang du tænker “det kunne vi prøve…” – skriv den her.</div></div>`;

    $$("#ideListe [data-aaben]").forEach(b => b.addEventListener("click", () => redigerIde(+b.dataset.aaben)));
    $$("#ideListe [data-status]").forEach(b => b.addEventListener("click", () => {
      const i = ideer.find(x => x.id === +b.dataset.status);
      i.status = statusFlow[i.status]; store.set("ideer", ideer); renderIdeer();
    }));
    $$("#ideListe [data-slet]").forEach(b => b.addEventListener("click", () => {
      if (!confirm("Slet idéen?")) return;
      ideer = ideer.filter(x => x.id !== +b.dataset.slet);
      store.set("ideer", ideer); renderIdeer();
    }));
  }
  function redigerIde(id) { const i = ideer.find(x => x.id === id); if (i) aabnIdeModal(i); }

  $("#btnNyIde").addEventListener("click", () => aabnIdeModal());
  $("#btnIdeLuk").addEventListener("click", lukIdeModal);
  $("#btnIdeGem").addEventListener("click", gemIde);

  /* ============================================================
     TO-DO
  ============================================================ */
  let valgtCafe = "Alle", valgtKat = D.todoKategorier[0], filter = "aabne";

  function renderTodoChips() {
    $("#todoCafeChips").innerHTML = D.cafeer.map(c =>
      `<button class="chip ${c === valgtCafe ? "gold-on" : ""}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
    $$("#todoCafeChips [data-c]").forEach(b => b.addEventListener("click", () => { valgtCafe = b.dataset.c; renderTodoChips(); }));
    $("#todoKatChips").innerHTML = D.todoKategorier.map(k =>
      `<button class="chip ${k === valgtKat ? "on" : ""}" data-k="${esc(k)}">${esc(k)}</button>`).join("");
    $$("#todoKatChips [data-k]").forEach(b => b.addEventListener("click", () => { valgtKat = b.dataset.k; renderTodoChips(); }));
  }

  function tilfoejTodo() {
    const tekst = $("#todoInput").value.trim();
    if (!tekst) { toast("Skriv opgaven først"); return; }
    todos.unshift({ id: Date.now(), tekst, cafe: valgtCafe, kat: valgtKat,
      prio: $("#todoPrio").value, frist: $("#todoFrist").value || null, done: false });
    store.set("todos", todos);
    $("#todoInput").value = ""; $("#todoFrist").value = ""; $("#todoPrio").value = "m";
    renderTodos(); toast("Opgave tilføjet ✓");
  }
  $("#btnTodoAdd").addEventListener("click", tilfoejTodo);
  $("#todoInput").addEventListener("keydown", e => { if (e.key === "Enter") tilfoejTodo(); });

  function renderTodoFilter() {
    const cafes = ["aabne", "alle", "faerdige", ...D.cafeer.slice(1).filter(c => todos.some(t => t.cafe === c))];
    const navne = { aabne: "Åbne", alle: "Alle", faerdige: "Færdige" };
    $("#todoFilter").innerHTML = cafes.map(f =>
      `<button class="chip ${filter === f ? "on" : ""}" data-f="${esc(f)}">${esc(navne[f] || f)}</button>`).join("");
    $$("#todoFilter [data-f]").forEach(b => b.addEventListener("click", () => { filter = b.dataset.f; renderTodos(); }));
  }

  function renderTodos() {
    renderTodoFilter();
    let liste = todos;
    if (filter === "aabne") liste = todos.filter(t => !t.done);
    else if (filter === "faerdige") liste = todos.filter(t => t.done);
    else if (filter !== "alle") liste = todos.filter(t => t.cafe === filter);

    const prioV = { h: 0, m: 1, l: 2 };
    liste = liste.slice().sort((a, b) => (a.done - b.done) || (prioV[a.prio] - prioV[b.prio]) || ((a.frist || "9999") < (b.frist || "9999") ? -1 : 1));

    const idag = new Date().toISOString().slice(0, 10);
    $("#todoListe").innerHTML = liste.length ? liste.map(t => `
      <div class="todo-item ${t.done ? "done" : ""}">
        <div class="prio-dot prio-${t.prio}"></div>
        <button class="todo-check" data-tg="${t.id}">✓</button>
        <div class="todo-body">
          <div class="todo-tekst">${esc(t.tekst)}</div>
          <div class="todo-tags">
            ${t.cafe !== "Alle" ? `<span class="ttag cafe">${esc(t.cafe)}</span>` : ""}
            <span class="ttag">${esc(t.kat)}</span>
            ${t.frist ? `<span class="ttag frist ${t.frist < idag && !t.done ? "over" : ""}">${t.frist < idag && !t.done ? "⚠ " : ""}${esc(t.frist.slice(8, 10))}/${esc(t.frist.slice(5, 7))}</span>` : ""}
          </div>
        </div>
        <button class="todo-del" data-del="${t.id}">✕</button>
      </div>`).join("")
      : `<div class="empty">Ingen opgaver her</div>`;

    $$("#todoListe [data-tg]").forEach(b => b.addEventListener("click", () => {
      const t = todos.find(x => x.id === +b.dataset.tg); t.done = !t.done;
      store.set("todos", todos); renderTodos();
    }));
    $$("#todoListe [data-del]").forEach(b => b.addEventListener("click", () => {
      todos = todos.filter(x => x.id !== +b.dataset.del);
      store.set("todos", todos); renderTodos();
    }));
  }

  /* ============================================================
     DRIFT – live dashboard fra Google Sheet (via sikker bro)
  ============================================================ */
  const DRIFT_CAFEER = ["Helsingør", "Hillerød", "Farum", "Hørsholm", "Vanløse", "Enghave Brygge"];

  function cafeKort(loc) {
    const s = String(loc || "");
    for (const c of DRIFT_CAFEER) if (s.toLowerCase().includes(c.toLowerCase())) return c;
    return s.trim() ? "Andet" : "Ukendt";
  }
  function parseDato(s) {
    if (!s) return null;
    s = String(s).trim();
    let m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
    m = s.match(/^(\d{1,2})[\/.](\d{1,2})[\/.](\d{4})/);
    if (m) return new Date(+m[3], +m[2] - 1, +m[1]);
    const d = new Date(s); return isNaN(d) ? null : d;
  }
  function ddmm(d) { return d ? `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}` : ""; }
  const erAaben = st => { const s = String(st || "").toLowerCase().trim(); return s !== "closed" && s !== "lukket" && s !== "resolved"; };
  const sevKlasse = sv => { const s = String(sv || "").toLowerCase(); return s === "critical" ? "sev-crit" : (s === "high" ? "sev-high" : ""); };
  const klip = (s, n) => { s = String(s || "").replace(/\s+/g, " ").trim(); return s.length > n ? s.slice(0, n - 1) + "…" : s; };

  function temaer(t) {
    const x = String(t || "").toLowerCase();
    const har = (...ws) => ws.some(w => x.includes(w));
    const res = [];
    if (har("brød", "rugbrød", "bolle", "wienerbrød", "tebirkes", "croissant") && har("tør", "hård", "gammel", "knas", "over bag", "overbag", "halv bag", "smuldr", "underbag")) res.push("Tørt/dårligt brød");
    if (har("kold", "halvkold", "lunken")) res.push("Kold mad");
    if (har("vente", "ventetid", "langsom", "en time", "1 time", "time før", "halv time", " min ", "30 min", "40 min", "45 min", "20 minutter", "tog ")) res.push("Lang ventetid");
    if (har("tør", "gennemstegt", "oversteg", "well done", "sej", "tørstegt") && har("bøf", "flæsk", "kylling", "angus", "schnitzel", "kød", "steak", "pariserbøf")) res.push("Tørt/oversteg kød");
    if (har("crumble", "cumble", "rabarber")) res.push("Crumble / rabarber");
    if (har("hår", "plastik", "sten", "skæghår", "fremmed", "prismærke", "datomærke", "stok ")) res.push("Fremmedlegeme / hygiejne");
    if (har("larm", "støj", "akustik", "lydniveau", "højt lyd")) res.push("Larm / akustik");
    if (har("service", "tjener", "personale", "uopmærksom", "stresset", "betjening", "serviceminded")) res.push("Service / personale");
    if (har("udvalg", "kedelig", "portion", "for lille", "for lidt", "mindre end", "småt med")) res.push("Udvalg / portion");
    return res;
  }

  function driftCfg() { return { url: store.get("driftUrl", ""), token: store.get("driftToken", "") }; }

  function driftSetupHtml() {
    return `<div class="card">
      <h3 style="margin:0 0 8px;">Forbind dit driftsark 📊</h3>
      <p class="hint" style="margin:0 0 12px;">Drift-fanen viser åbne sager, kommende catering og klage-temaer live fra dine 6 caféers Google Sheet – via en sikker bro, så følsomme data (og API-nøgle-fanen) aldrig bliver offentlige.</p>
      <p class="hint" style="margin:0 0 14px;">Opsætning tager ca. 5 min. og er beskrevet i filen <b>kaiser-drift-bro.gs</b>. Derefter indsætter du URL + token her:</p>
      <button class="btn" id="driftGoSettings">⚙︎ Åbn indstillinger</button>
    </div>`;
  }

  async function hentDrift(force) {
    const { url, token } = driftCfg();
    const box = $("#driftBody");
    if (!url) { box.innerHTML = driftSetupHtml(); const b = $("#driftGoSettings"); if (b) b.addEventListener("click", aabnSettings); return; }
    const cache = store.get("driftCache", null);
    if (cache) renderDrift(cache);
    else box.innerHTML = `<div class="card"><div class="empty"><span class="spinner"></span> Henter drift…</div></div>`;
    try {
      const sep = url.includes("?") ? "&" : "?";
      const res = await fetch(url + sep + "token=" + encodeURIComponent(token), { redirect: "follow" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      if (data.error) throw new Error(data.error === "unauthorized" ? "Forkert token – tjek ⚙︎" : data.error);
      store.set("driftCache", data);
      store.set("driftHentet", Date.now());
      renderDrift(data);
      if (force) toast("Drift opdateret ✓");
    } catch (e) {
      if (cache) { if (force) toast("Kunne ikke opdatere – viser sidste hentning"); }
      else box.innerHTML = `<div class="card"><div class="empty">Kunne ikke hente data.<br><small>${esc(e.message)}</small><br>Tjek URL/token under ⚙︎.</div></div>`;
    }
  }

  function renderDrift(data) {
    const box = $("#driftBody");
    const gc = (data.guest_complaints || []).filter(r => r.id || r.description || r.severity);
    const si = (data.supplier_issues || []).filter(r => r.id || r.productName || r.supplierName);
    const fi = (data.faults_issues || []).filter(r => r.id || r.description || r.area);
    const so = (data.soldout_products || []).filter(r => r.productName);
    const ce = (data.catering_events || []).filter(r => r.customerName && r.deliveryDate);

    const gcO = gc.filter(r => erAaben(r.status));
    const siO = si.filter(r => erAaben(r.status));
    const fiO = fi.filter(r => erAaben(r.status));
    const soO = so.filter(r => erAaben(r.status));

    const t0 = NU(); t0.setHours(0, 0, 0, 0);

    // ---- Kommende catering ----
    const kommende = ce.map(r => ({ ...r, _d: parseDato(r.deliveryDate) }))
      .filter(r => r._d && r._d >= t0)
      .sort((a, b) => a._d - b._d).slice(0, 8);

    // ---- Klage-temaer ----
    const temaTal = {};
    gc.forEach(r => temaer(r.description).forEach(t => temaTal[t] = (temaTal[t] || 0) + 1));
    const temaListe = Object.entries(temaTal).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const temaMax = temaListe.length ? temaListe[0][1] : 1;

    // ---- Pr. café ----
    const perCafe = {};
    const tael = (arr) => arr.forEach(r => { const c = cafeKort(r.location); perCafe[c] = (perCafe[c] || 0) + 1; });
    tael(gcO); tael(siO); tael(fiO); tael(soO);
    const cafeListe = Object.entries(perCafe).filter(([c]) => c !== "Ukendt").sort((a, b) => b[1] - a[1]);

    // ---- Seneste åbne sager ----
    const sorter = arr => arr.map(r => ({ ...r, _d: parseDato(r.date || r.createdAt) })).sort((a, b) => (b._d || 0) - (a._d || 0));
    const fiSen = sorter(fiO).slice(0, 6);
    const siSen = sorter(siO).slice(0, 6);
    const gcSen = sorter(gcO.filter(r => !/^nps:/i.test(String(r.description || "").trim()))).slice(0, 6);

    const hentet = store.get("driftHentet", 0);
    const hTxt = hentet ? new Date(hentet).toLocaleString("da-DK", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "–";

    const itemHtml = (titel, meta, desc, sev) =>
      `<div class="drift-item ${sevKlasse(sev)}">
        <div class="di-top"><span class="di-title">${esc(titel)}</span><span class="di-meta">${esc(meta)}</span></div>
        ${desc ? `<div class="di-desc">${esc(desc)}</div>` : ""}
      </div>`;

    box.innerHTML = `
      <div class="drift-meta">
        <span>Live fra 6 caféer · opdateret ${esc(hTxt)}</span>
        <button class="btn ghost small" id="driftRefresh" style="width:auto;padding:6px 12px;">↻ Opdatér</button>
      </div>

      <div class="stat-grid">
        <div class="stat"><div class="num ${gcO.length ? "bad" : ""}">${gcO.length}</div><div class="lbl">Åbne gæsteklager</div></div>
        <div class="stat"><div class="num ${siO.length ? "warn" : ""}">${siO.length}</div><div class="lbl">Åbne leverandørfejl</div></div>
        <div class="stat"><div class="num ${fiO.length ? "warn" : ""}">${fiO.length}</div><div class="lbl">Åbne café-fejl</div></div>
        <div class="stat"><div class="num">${soO.length}</div><div class="lbl">Udsolgt-meldinger</div></div>
      </div>

      ${cafeListe.length ? `<h2 class="section">Åbne sager pr. café</h2>
        <div class="card">${cafeListe.map(([c, n]) => `<div class="cafe-row"><span>${esc(c)}</span><b>${n}</b></div>`).join("")}</div>` : ""}

      ${kommende.length ? `<h2 class="section">Kommende catering</h2>
        ${kommende.map(r => itemHtml(
          `${ddmm(r._d)} · ${esc(cafeKort(r.location) === "Ukendt" ? r.location : cafeKort(r.location))} · ${esc(r.guests || "?")} pers.`,
          esc(r.deliveryTime || ""),
          `${r.customerName ? esc(r.customerName) + " — " : ""}${klip(r.note, 120)}`, ""
        )).join("")}` : ""}

      ${temaListe.length ? `<h2 class="section">Gennemgående klage-temaer</h2>
        <div class="card">${temaListe.map(([t, n]) => `
          <div class="theme-row">
            <span class="tname">${esc(t)}</span>
            <span class="tbarwrap"><span class="tbar" style="width:${Math.round(n / temaMax * 100)}%"></span></span>
            <span class="tcount">${n}</span>
          </div>`).join("")}
          <p class="hint" style="margin:6px 0 0;">Tæller alle registrerede gæsteklager – flest øverst.</p></div>` : ""}

      ${gcSen.length ? `<h2 class="section">Seneste åbne gæsteklager</h2>
        ${gcSen.map(r => itemHtml(
          `${cafeKort(r.location)} · ${esc(r.category || "Klage")}`,
          `${esc(r.severity || "")} · ${ddmm(r._d)}`,
          klip(r.description, 150), r.severity
        )).join("")}` : ""}

      ${fiSen.length ? `<h2 class="section">Seneste café-fejl & mangler</h2>
        ${fiSen.map(r => itemHtml(
          `${cafeKort(r.location)} · ${esc(r.area || "")}${r.issueType ? " · " + esc(r.issueType) : ""}`,
          `${esc(r.severity || "")} · ${ddmm(r._d)}`,
          klip(r.description, 150), r.severity
        )).join("")}` : ""}

      ${siSen.length ? `<h2 class="section">Seneste leverandørfejl</h2>
        ${siSen.map(r => itemHtml(
          `${cafeKort(r.location)} · ${esc(r.supplierName || "Leverandør")}`,
          `${esc(r.issueType || "")} · ${ddmm(r._d)}`,
          klip([r.productName, r.description].filter(Boolean).join(" — "), 150), ""
        )).join("")}` : ""}
    `;
    const rb = $("#driftRefresh"); if (rb) rb.addEventListener("click", () => hentDrift(true));
  }

  function renderDriftView() { hentDrift(false); }

  /* ============================================================
     INDSTILLINGER
  ============================================================ */
  function aabnSettings() {
    $("#apiKeyInput").value = store.get("apikey", "");
    $("#driftUrlInput").value = store.get("driftUrl", "");
    $("#driftTokenInput").value = store.get("driftToken", "");
    $("#modalSettings").classList.add("open");
  }
  $("#btnSettings").addEventListener("click", aabnSettings);
  $("#btnSettingsLuk").addEventListener("click", () => $("#modalSettings").classList.remove("open"));
  $("#btnApiGem").addEventListener("click", () => {
    store.set("apikey", $("#apiKeyInput").value.trim());
    toast("Nøgle gemt lokalt 🔒");
    $("#modalSettings").classList.remove("open");
  });
  $("#btnDriftGem").addEventListener("click", () => {
    store.set("driftUrl", $("#driftUrlInput").value.trim());
    store.set("driftToken", $("#driftTokenInput").value.trim());
    $("#modalSettings").classList.remove("open");
    toast("Drift-forbindelse gemt 🔒");
    go("drift"); hentDrift(true);
  });

  $("#btnExport").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify({ todos, ideer, eksporteret: new Date().toISOString() }, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "kaiser-hq-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    a.click();
  });
  $("#btnImport").addEventListener("click", () => $("#importFile").click());
  $("#importFile").addEventListener("change", e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const d = JSON.parse(r.result);
        if (d.todos) { todos = d.todos; store.set("todos", todos); }
        if (d.ideer) { ideer = d.ideer; store.set("ideer", ideer); }
        renderTodos(); renderIdeer(); renderDash(); toast("Data gendannet ✓");
      } catch (err) { toast("Kunne ikke læse filen"); }
    };
    r.readAsText(f);
  });

  // Luk modaler ved tryk udenfor
  $$(".modal").forEach(m => m.addEventListener("click", e => { if (e.target === m) m.classList.remove("open"); }));

  /* ---------- Init ---------- */
  renderDash();
  renderTraeQuick();
  renderTodoChips();
  renderTodos();
  renderIdeer();
})();


