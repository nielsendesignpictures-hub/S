/* ============================================================
   KAISER HQ – DRIFT-BRO  (Google Apps Script)
   ------------------------------------------------------------
   Denne lille bro gør, at din personlige Kaiser HQ-app kan læse
   udvalgte faner fra dit Google Sheet – men KUN dem du vælger
   herunder, og KUN hvis det rigtige token sendes med.
   Fanen "easytable_settings" (API-nøgler) udleveres ALDRIG.

   === SÅDAN SÆTTER DU DEN OP (engangsarbejde, ca. 5 min) ===
   1. Åbn dit ark "Kaiser Catering" i Google Sheets.
   2. Menu: Udvidelser → Apps Script.
   3. Slet evt. eksempelkode, og indsæt HELE denne fil.
   4. Skift TOKEN-linjen herunder til din egen lange, tilfældige tekst
      (fx tryk vilkårligt – 25+ tegn. Det er din "adgangskode").
   5. Klik Gem (diskette-ikon).
   6. Klik "Udrul" (Deploy) → "Ny udrulning".
      - Type: vælg "Webapp".
      - "Kør som": Mig.
      - "Hvem har adgang": Alle (Anyone).
      - Klik Udrul, godkend adgang (vælg din konto → Avanceret → Tillad).
   7. Kopiér "Webapp-URL'en" der vises.
   8. I Kaiser HQ-appen: ⚙︎ → Drift-dashboard → indsæt URL + samme TOKEN → Gem.

   Når du senere ændrer denne kode, skal du udrulle igen
   (Udrul → Administrer udrulninger → blyant → Ny version).
   ============================================================ */

// >>> SKIFT denne til din egen lange, tilfældige tekst <<<
const TOKEN = "skift-mig-til-en-lang-tilfaeldig-tekst-1234";

// Faner der må udleveres til appen (alt andet holdes privat):
const TABS = [
  "catering_events",
  "supplier_issues",
  "faults_issues",
  "guest_complaints",
  "soldout_products"
];

function doGet(e) {
  const out = ContentService.createTextOutput();
  out.setMimeType(ContentService.MimeType.JSON);

  // Tjek token
  if (!e || !e.parameter || e.parameter.token !== TOKEN) {
    return out.setContent(JSON.stringify({ error: "unauthorized" }));
  }

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const tz = Session.getScriptTimeZone();
    const data = {};

    TABS.forEach(function (name) {
      const sh = ss.getSheetByName(name);
      if (!sh) { data[name] = []; return; }
      const values = sh.getDataRange().getValues();
      if (values.length < 2) { data[name] = []; return; }

      const headers = values[0].map(function (h) { return String(h).trim(); });
      const rows = [];
      for (let i = 1; i < values.length; i++) {
        const r = values[i];
        if (r.every(function (c) { return c === "" || c === null; })) continue; // spring tomme rækker over
        const obj = {};
        headers.forEach(function (h, j) {
          let v = r[j];
          if (v instanceof Date) v = Utilities.formatDate(v, tz, "yyyy-MM-dd");
          obj[h] = v === undefined || v === null ? "" : v;
        });
        rows.push(obj);
      }
      data[name] = rows;
    });

    data.updatedAt = new Date().toISOString();
    return out.setContent(JSON.stringify(data));
  } catch (err) {
    return out.setContent(JSON.stringify({ error: String(err) }));
  }
}
