# Kaiser HQ 🌿

Din personlige F&B-arbejdsflade som PWA – menuudvikling med smagstræ, idéværktøj og to-do for Café Kaisers 6 caféer.

## Kom i gang (10 minutter)

### 1. Læg den på GitHub
1. Opret en konto på [github.com](https://github.com) (hvis du ikke har en).
2. Klik **New repository** → kald det fx `kaiser-hq` → vælg **Public** → **Create repository**.
3. Klik **uploading an existing file** og træk ALLE filer fra denne mappe ind (index.html, app.js, data.js, sw.js, manifest.webmanifest og de 3 png-ikoner).
4. Klik **Commit changes**.

### 2. Tænd GitHub Pages
1. I dit repository: **Settings** → **Pages** (venstre menu).
2. Under *Branch*: vælg **main** og **/ (root)** → **Save**.
3. Vent 1–2 min. Din app ligger nu på `https://DIT-BRUGERNAVN.github.io/kaiser-hq/`

### 3. Installér på din iPhone
1. Åbn adressen i **Safari** (skal være Safari).
2. Tryk på **del-knappen** (firkant med pil op) → **Føj til hjemmeskærm**.
3. Nu ligger Kaiser HQ som en app på din hjemmeskærm – fuld skærm, uden browser-bjælke.

### 4. (Valgfrit) Tænd AI-spørgsmål i idéværktøjet
1. Opret en API-nøgle på [console.anthropic.com](https://console.anthropic.com) → **API Keys**.
2. I app'en: tryk **⚙︎** → indsæt nøglen → **Gem**.
3. Nøglen gemmes kun lokalt på din telefon. Normalt forbrug koster få kroner om måneden.

## Gode ting at vide
- **Alle data (to-dos og idéer) gemmes lokalt på telefonen** – ikke på GitHub. Tag en backup via ⚙︎ → Backup en gang imellem.
- **Opdatér app'en:** redigér filerne direkte på github.com (blyant-ikonet). Husk at ændre `kaiserhq-v1` til `v2` osv. i `sw.js`, så telefonen henter den nye version.
- **Tilpas data:** al sæson-, parrings- og trenddata ligger i `data.js` i et letlæseligt format. Tilføj selv råvarer, retter-idéer og spørgsmål – app'en læser det hele derfra.
- Repositoriet er offentligt (gratis GitHub Pages), men der ligger ingen persondata i koden – kun menudata.
