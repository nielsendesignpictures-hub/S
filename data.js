/* ============================================================
   KAISER HQ – Datasæt
   Dansk/nordisk sæsonkalender, smagsparringer & trends
   Redigér frit – app'en læser alt herfra.
   ============================================================ */

window.KDATA = {

  cafeer: ["Alle", "Helsingør", "Hillerød", "Farum", "Hørsholm", "Vanløse", "Enghave Brygge"],

  todoKategorier: ["Menu", "Indkøb", "IT & Kasse", "Personale", "Drift", "Leverandør", "Andet"],

  maaneder: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],

  /* ---------- FOOD TRENDS 2026 ---------- */
  trends: [
    { id: "fermentering", navn: "Fermentering & syrning", desc: "Hjemmesyltet, kimchi, misosmør og syrnede dressinger giver dybde uden dyre råvarer." },
    { id: "hyperlokal", navn: "Hyperlokalt & nordisk", desc: "Råvarens oprindelse på menukortet – gæster betaler gerne mere for 'dansk' og 'lokal'." },
    { id: "planterig", navn: "Planterig komfortmad", desc: "Grøntsager som hovedrolle, ikke erstatning – jeres ærtepasta er allerede et eksempel." },
    { id: "swicy", navn: "Swicy – sødt møder stærkt", desc: "Hot honey, chili-karamel, gochujang-mayo. Oplagt til crispy chicken og burgere." },
    { id: "nostalgi", navn: "Premium nostalgi", desc: "Retro-klassikere løftet med bedre råvarer – pariserbøf, stjerneskud og stegt flæsk er i tiden." },
    { id: "zerowaste", navn: "Zero waste & hele råvaren", desc: "Skræller til chips, stilke i pesto, blade i salat. Sænker food cost og fortæller en historie." },
    { id: "funktionel", navn: "Funktionelle drikke & lav-alkohol", desc: "Kombucha, shrubs, 0%-serveringer og 'mocktails' med sæsonbær." },
    { id: "smorrebrod", navn: "Smørrebrøds-revival", desc: "Højtbelagt er hipt igen – sæsonvarianter (stenbiderrogn, nye kartofler) trækker presse og gæster." },
    { id: "asiatisk", navn: "Koreansk & japansk i cafémad", desc: "Gochujang, miso, furikake, karaage – små tilføjelser med stor effekt på kendte retter." },
    { id: "pistacie", navn: "Pistacie, matcha & dessert-hype", desc: "Pistaciecreme, 'dubai-chokolade' og matcha dominerer dessert- og kaffekort." },
    { id: "protein", navn: "Protein-brunch", desc: "Gæster vælger efter protein – æg, skyr, kylling og laks som tydelige brunch-elementer." }
  ],

  /* ---------- RÅVARER ----------
     saeson = måneder hvor den er god (dansk/nordisk)
     peak   = måneder hvor den er bedst & billigst
     par    = klassiske + moderne parringer
     menu   = konkrete idéer i Kaiser-kontekst
     trends = kobling til trends ovenfor                    */
  raavarer: [

    /* —— FORÅR —— */
    { id: "ramsloeg", navn: "Ramsløg", kat: "urter", saeson: [4,5], peak: [4,5],
      par: ["kartoffel", "æg", "lam", "frisk ost", "fisk", "smør", "rugbrød"],
      menu: ["Ramsløgsmayo til sandwich og burger i april–maj", "Ramsløgspesto på serrano-sandwichen i stedet for alm. pesto", "Brunch: røræg med ramsløg"],
      trends: ["hyperlokal", "zerowaste"] },

    { id: "rabarber", navn: "Rabarber", kat: "frugt & bær", saeson: [4,5,6], peak: [5,6],
      par: ["vanilje", "jordbær", "hyldeblomst", "ingefær", "mascarpone", "hvid chokolade", "kamille", "and"],
      menu: ["Jeres rabarber-crumble: kør den kun apr–jun og fortæl det er sæson", "Rabarberkompot på brunch-brættet", "Drik: rabarber-ingefær lemonade / shrub"],
      trends: ["hyperlokal", "funktionel", "nostalgi"] },

    { id: "asparges_hvid", navn: "Hvide asparges", kat: "grønt", saeson: [5,6], peak: [5,6],
      par: ["hollandaise", "rejer", "morkler", "skinke", "æg", "brunet smør", "purløg"],
      menu: ["LTO-smørrebrød: hvide asparges, rejer og purløgshollandaise", "Aftenret: dampede asparges m. brunet smør som sæson-tilbehør"],
      trends: ["hyperlokal", "smorrebrod", "nostalgi"] },

    { id: "asparges_groen", navn: "Grønne asparges", kat: "grønt", saeson: [5,6], peak: [5,6],
      par: ["parmesan", "citron", "burrata", "bacon", "æg", "estragon", "serrano"],
      menu: ["Opgradér oksemørbradens asparges-saute med danske asparges i maj–jun", "Brunch-element: grillede asparges m. parmesan", "Salat: asparges + burrata + citron"],
      trends: ["hyperlokal", "planterig"] },

    { id: "nye_kartofler", navn: "Nye kartofler", kat: "grønt", saeson: [5,6,7], peak: [6],
      par: ["dild", "smør", "sild", "rygeost", "mayonnaise", "purløg", "stenbiderrogn", "flæsk"],
      menu: ["Sæson-smørrebrød: nye kartofler, rygeostcreme, ristede løg og purløg", "Tilbehør til stegt flæsk: nye kartofler jun–jul (skriv det på kortet!)"],
      trends: ["smorrebrod", "hyperlokal", "nostalgi"] },

    { id: "hyldeblomst", navn: "Hyldeblomst", kat: "frugt & bær", saeson: [5,6], peak: [6],
      par: ["jordbær", "rabarber", "citron", "gin", "hvid chokolade", "agurk", "yoghurt"],
      menu: ["Hjemmelavet hyldeblomstsaft på drikkekortet (lav koncentrat til hele året)", "Dessert: jordbær marineret i hyldeblomst til vaniljeis"],
      trends: ["hyperlokal", "funktionel"] },

    { id: "stenbiderrogn", navn: "Stenbiderrogn", kat: "fisk & skaldyr", saeson: [2,3,4], peak: [3],
      par: ["blini", "creme fraiche", "rødløg", "dild", "kartoffel", "æg", "citron"],
      menu: ["Vinter-LTO smørrebrød: æg, stenbiderrogn og dildcreme (presse-magnet)", "Opgradering af stjerneskuddet feb–apr"],
      trends: ["smorrebrod", "hyperlokal"] },

    { id: "hornfisk", navn: "Hornfisk", kat: "fisk & skaldyr", saeson: [5,6], peak: [5],
      par: ["persille", "smør", "citron", "agurkesalat", "remoulade", "rugbrød"],
      menu: ["Maj-smørrebrød: stegt hornfisk m. persillesmør og agurkesalat"],
      trends: ["hyperlokal", "smorrebrod", "nostalgi"] },

    { id: "radise", navn: "Radiser", kat: "grønt", saeson: [4,5,6,7,8,9], peak: [5,6],
      par: ["smør", "salt", "rugbrød", "skyr", "dild", "torskerogn"],
      menu: ["Crunch på brunch-brættet og i salater apr–sep", "Garniture på smørrebrød i stedet for købte mikrogrønt"],
      trends: ["hyperlokal", "zerowaste"] },

    { id: "spinat", navn: "Spinat", kat: "grønt", saeson: [5,6,7,8,9,10], peak: [5,6],
      par: ["æg", "muskatnød", "fløde", "feta", "laks", "citron", "hvidløg"],
      menu: ["Brunch-element: cremet spinat m. pocheret æg", "Boost den veganske poké bowl med frisk spinat"],
      trends: ["planterig", "protein"] },

    /* —— SOMMER —— */
    { id: "jordbaer", navn: "Jordbær", kat: "frugt & bær", saeson: [6,7,8], peak: [6,7],
      par: ["basilikum", "mascarpone", "hyldeblomst", "rabarber", "sort peber", "hvid chokolade", "lakrids", "mandel"],
      menu: ["Sommerdessert: danske jordbær, mascarpone & basilikum", "Brunch-element jun–jul: jordbær m. skyr og ristede mandler", "Drik: jordbær-hyldeblomst lemonade"],
      trends: ["hyperlokal", "funktionel"] },

    { id: "aerter", navn: "Ærter", kat: "grønt", saeson: [6,7,8], peak: [6,7],
      par: ["mynte", "burrata", "ricotta", "citron", "bacon", "salat", "fisk"],
      menu: ["Jeres ærtepasta: friske danske ærter + mynte jun–aug = bedre & billigere", "Brunch: ærtemos m. mynte på ølandsbrød"],
      trends: ["planterig", "hyperlokal"] },

    { id: "kirsebaer", navn: "Kirsebær", kat: "frugt & bær", saeson: [7,8], peak: [7],
      par: ["mørk chokolade", "mandel", "vanilje", "and", "vildt", "portvin", "timian", "skyr"],
      menu: ["Dessert: lun kirsebærsauce over chokoladekagen jul–aug", "Vinter: kirsebærsauce (frosne bær) til and og vildt-LTO", "Drik: kirsebær-shrub med danskvand"],
      trends: ["hyperlokal", "funktionel", "nostalgi"] },

    { id: "hindbaer", navn: "Hindbær", kat: "frugt & bær", saeson: [6,7,8,9], peak: [7,8],
      par: ["hvid chokolade", "lakrids", "citron", "rose", "pistacie", "mandel", "skyr"],
      menu: ["Dessert: hindbær + pistaciecreme (rammer pistacie-trenden)", "Brunch: hindbærkompot til pandekager"],
      trends: ["pistacie", "hyperlokal"] },

    { id: "blaabaer", navn: "Blåbær", kat: "frugt & bær", saeson: [7,8,9], peak: [8],
      par: ["citron", "vanilje", "havre", "skyr", "hvid chokolade", "kanel"],
      menu: ["Brunch-element: skyr m. blåbær og havrecrunch (protein-trend)", "Blåbær-muffin/kage til kaffekortet aug–sep"],
      trends: ["protein", "hyperlokal"] },

    { id: "ribs", navn: "Ribs", kat: "frugt & bær", saeson: [7,8], peak: [7],
      par: ["marengs", "vanilje", "mandel", "vildt", "gamle oste"],
      menu: ["Ribs drysset over salater og oste-elementer jul–aug (syre + farve)", "Dessert: ribs-marengs med vaniljeis"],
      trends: ["hyperlokal", "zerowaste"] },

    { id: "solbaer", navn: "Solbær", kat: "frugt & bær", saeson: [7,8], peak: [7],
      par: ["lakrids", "mørk chokolade", "and", "vildt", "rødkål", "gin"],
      menu: ["Solbærsauce til vildt/and-LTO om vinteren (frys sommerbær)", "Drik: solbær-skum/sodavand"],
      trends: ["hyperlokal", "funktionel"] },

    { id: "brombaer", navn: "Brombær", kat: "frugt & bær", saeson: [8,9], peak: [8,9],
      par: ["æble", "kanel", "mørk chokolade", "vildt", "rosmarin", "skyr"],
      menu: ["Sensommer-dessert: brombær-æble crumble (afløser rabarber-crumblen)"],
      trends: ["hyperlokal", "zerowaste"] },

    { id: "agurk", navn: "Agurk", kat: "grønt", saeson: [5,6,7,8,9], peak: [6,7,8],
      par: ["dild", "mynte", "yoghurt", "chili", "sesam", "laks", "gin"],
      menu: ["Hjemmesyltede agurker (allerede jeres styrke – fortæl det mere!)", "Asiatisk agurkesalat m. sesam og chili til crispy chicken (swicy)"],
      trends: ["fermentering", "asiatisk"] },

    { id: "tomat", navn: "Danske tomater", kat: "grønt", saeson: [6,7,8,9], peak: [7,8],
      par: ["basilikum", "burrata", "brød", "estragon", "vandmelon", "oliven", "kapers"],
      menu: ["Sommersalat: danske tomater, burrata & basilikum (let at eksekvere i alle 6 køkkener)", "Opgradér bagte cherrytomater i serrano-sandwich med danske jul–sep"],
      trends: ["hyperlokal", "planterig"] },

    { id: "squash", navn: "Squash", kat: "grønt", saeson: [6,7,8,9], peak: [7,8],
      par: ["citron", "feta", "mynte", "chili", "parmesan", "hvidløg"],
      menu: ["Grillet squash m. feta og mynte som brunch-element/salat-base", "Squash-fritter m. chilimayo som snack"],
      trends: ["planterig", "zerowaste"] },

    { id: "fennikel", navn: "Fennikel", kat: "grønt", saeson: [6,7,8,9,10], peak: [7,8,9],
      par: ["citrus", "fisk", "dild", "æble", "parmesan", "anis"],
      menu: ["Fennikelsalat m. citron til fish'n'chips og laksesalat", "Råmarineret fennikel i poké bowlen"],
      trends: ["planterig", "hyperlokal"] },

    { id: "majs", navn: "Majs", kat: "grønt", saeson: [8,9], peak: [8,9],
      par: ["smør", "chili", "lime", "koriander", "bacon", "parmesan"],
      menu: ["Grillet majs m. chilimayo & parmesan som snack/tilbehør aug–sep", "Majs-elote-style topping til nachos"],
      trends: ["swicy", "planterig"] },

    { id: "fjordrejer", navn: "Fjordrejer", kat: "fisk & skaldyr", saeson: [6,7,8,9], peak: [7,8],
      par: ["mayonnaise", "dild", "citron", "hvidt brød", "æg", "asparges"],
      menu: ["Sommer-LTO: fjordrejemad (premium-version af jeres æg & rejer)", "Fortæl 'håndpillede' historien endnu tydeligere i sæson"],
      trends: ["hyperlokal", "smorrebrod", "nostalgi"] },

    { id: "makrel", navn: "Makrel", kat: "fisk & skaldyr", saeson: [5,6,7,8], peak: [6,7],
      par: ["tomat", "rugbrød", "æggeblomme", "purløg", "peberrod", "stikkelsbær"],
      menu: ["Klassiker-smørrebrød: makrel i tomat 2.0 med røget makrel", "Sommersalat m. røget makrel som laks-alternativ"],
      trends: ["nostalgi", "smorrebrod", "hyperlokal"] },

    { id: "roedspaette", navn: "Rødspætte", kat: "fisk & skaldyr", saeson: [5,6,7,8,9], peak: [6,7,8],
      par: ["remoulade", "citron", "rejer", "smør", "persille", "kapers"],
      menu: ["Jeres fiskefilet-smørrebrød: kommunikér 'dansk rødspætte i sæson' maj–sep", "Sommerudgave af stjerneskud m. ekstra rejer"],
      trends: ["hyperlokal", "nostalgi"] },

    { id: "lam", navn: "Dansk lam", kat: "kød & vildt", saeson: [7,8,9,10], peak: [8,9],
      par: ["rosmarin", "hvidløg", "mynte", "feta", "aubergine", "ærter", "ramsløg"],
      menu: ["Aften-LTO: braiseret lammeskank m. sæsongrønt sep–okt", "Lammeburger som månedens burger"],
      trends: ["hyperlokal"] },

    /* —— EFTERÅR —— */
    { id: "aeble", navn: "Danske æbler", kat: "frugt & bær", saeson: [8,9,10,11,12,1,2,3], peak: [9,10],
      par: ["karamel", "kanel", "valnød", "selleri", "svinekød", "vanilje", "brombær", "cheddar"],
      menu: ["Jeres æble-karameltærte: brug danske æbler sep–nov og sig det på kortet", "Æble-selleri-valnød salat (efterårets cæsar-alternativ)", "Varm æblemost m. kanel på drikkekortet okt–dec"],
      trends: ["hyperlokal", "nostalgi", "zerowaste"] },

    { id: "paere", navn: "Pærer", kat: "frugt & bær", saeson: [8,9,10], peak: [9],
      par: ["blåskimmel", "valnød", "honning", "vanilje", "chokolade", "rucola"],
      menu: ["Efterårssalat: pære, blåskimmel & valnød", "Dessert: pocheret pære m. chokolade og vaniljeis"],
      trends: ["hyperlokal", "planterig"] },

    { id: "blomme", navn: "Blommer", kat: "frugt & bær", saeson: [8,9], peak: [8,9],
      par: ["kanel", "stjerneanis", "mandel", "svinekød", "vanilje", "rødvin"],
      menu: ["Bagte blommer m. mandelcrumble og is som sensommer-dessert", "Blommekompot på brunch-brættet aug–sep"],
      trends: ["hyperlokal", "nostalgi"] },

    { id: "mirabelle", navn: "Mirabeller", kat: "frugt & bær", saeson: [8,9], peak: [8],
      par: ["vanilje", "mandel", "honning", "timian", "and"],
      menu: ["Mirabelle-kompot til oste-element på brunch (gratis råvare hvis I plukker selv!)"],
      trends: ["zerowaste", "hyperlokal"] },

    { id: "havtorn", navn: "Havtorn", kat: "frugt & bær", saeson: [9,10], peak: [9,10],
      par: ["hvid chokolade", "havre", "honning", "gulerod", "skaldyr"],
      menu: ["Nordisk signatur-dessert: havtorncreme m. hvid chokolade", "Havtorn-shot/juice på drikkekortet (funktionel C-vitamin historie)"],
      trends: ["hyperlokal", "funktionel"] },

    { id: "kvaede", navn: "Kvæde", kat: "frugt & bær", saeson: [9,10], peak: [10],
      par: ["vanilje", "manchego", "honning", "kanel", "and"],
      menu: ["Kvædegelé til osteelementer på brunch-brættet okt–dec"],
      trends: ["hyperlokal", "fermentering"] },

    { id: "graeskar", navn: "Hokkaido-græskar", kat: "grønt", saeson: [9,10,11], peak: [10],
      par: ["salvie", "parmesan", "chili", "ingefær", "kokos", "brunet smør", "ristede kerner"],
      menu: ["Efterårsret: græskarsuppe m. chili & ristede kerner (høj margin, let at eksekvere)", "Bagt græskar i poké bowlen okt–dec i stedet for sommergrønt"],
      trends: ["planterig", "zerowaste"] },

    { id: "kantarel", navn: "Kantareller", kat: "svampe", saeson: [7,8,9,10], peak: [8,9],
      par: ["æg", "fløde", "timian", "persille", "brød", "kylling", "hvidløg"],
      menu: ["Brunch-LTO: kantarel-toast m. blødkogt æg jul–sep", "Kantarel-flødesauce til oksemørbrad i sæson"],
      trends: ["hyperlokal"] },

    { id: "karljohan", navn: "Karl Johan", kat: "svampe", saeson: [8,9,10], peak: [9],
      par: ["smør", "timian", "parmesan", "trøffel", "oksekød", "pasta"],
      menu: ["Sæson-burger: Karl Johan-mayo i stedet for trøffelmayo (lokal historie)", "Svampe-risotto/pasta som efterårets vegetar-aftenret"],
      trends: ["hyperlokal", "planterig"] },

    { id: "oestershat", navn: "Østershatte", kat: "svampe", saeson: [1,2,3,4,5,6,7,8,9,10,11,12], peak: [10,11],
      par: ["hvidløg", "soja", "smør", "timian", "gochujang", "brød"],
      menu: ["'Crispy mushroom burger' – friteret østershat som vegetar-upgrade (planterig + swicy)"],
      trends: ["planterig", "asiatisk", "swicy"] },

    { id: "roedbede", navn: "Rødbeder", kat: "grønt", saeson: [7,8,9,10,11,12,1,2,3], peak: [9,10],
      par: ["gedeost", "valnød", "dild", "peberrod", "æble", "sild", "balsamico"],
      menu: ["Jeres hjemmesyltede rødbeder: lav også en bagt rødbede-salat m. gedeost", "Rødbedehummus som brunch-element"],
      trends: ["fermentering", "planterig", "hyperlokal"] },

    { id: "gulerod", navn: "Gulerødder", kat: "grønt", saeson: [6,7,8,9,10,11,12,1,2,3], peak: [7,8,9],
      par: ["spidskommen", "appelsin", "ingefær", "havtorn", "yoghurt", "valnød", "honning"],
      menu: ["Jeres gulerodskage er klassikeren – prøv bagte gulerødder m. yoghurt & dukkah som brunch-element", "Gulerod-ingefær juice/shot"],
      trends: ["planterig", "funktionel"] },

    { id: "pastinak", navn: "Pastinak", kat: "grønt", saeson: [9,10,11,12,1,2,3], peak: [10,11],
      par: ["honning", "timian", "æble", "brunet smør", "muskatnød", "parmesan"],
      menu: ["Pastinak-fritter m. parmesan som vinter-snack (alternativ til pommes)", "Cremet pastinaksuppe m. æble"],
      trends: ["zerowaste", "planterig", "hyperlokal"] },

    { id: "jordskok", navn: "Jordskokker", kat: "grønt", saeson: [10,11,12,1,2,3], peak: [11,12],
      par: ["trøffel", "hasselnød", "citron", "fløde", "æble", "bacon"],
      menu: ["Vinter: jordskokkesuppe m. sprød bacon & hasselnødder", "Jordskokkechips som garniture på smørrebrød (zero waste)"],
      trends: ["hyperlokal", "zerowaste"] },

    { id: "knoldselleri", navn: "Knoldselleri", kat: "grønt", saeson: [9,10,11,12,1,2,3], peak: [10,11],
      par: ["æble", "valnød", "trøffel", "brunet smør", "fløde", "peberrod"],
      menu: ["'Selleri-schnitzel' som vegetar-aftenret om vinteren (planterig komfort)", "Selleriremoulade til fiskeretterne"],
      trends: ["planterig", "zerowaste"] },

    { id: "porre", navn: "Porrer", kat: "grønt", saeson: [7,8,9,10,11,12,1,2,3], peak: [9,10,11],
      par: ["æg", "fløde", "vinaigrette", "bacon", "ost", "sennep"],
      menu: ["Brunch: porre-tærte m. ost og bacon", "Brændte porrer m. sennepsvinaigrette som tilbehør"],
      trends: ["planterig", "hyperlokal"] },

    { id: "spidskaal", navn: "Spidskål", kat: "grønt", saeson: [6,7,8,9,10], peak: [7,8,9],
      par: ["sesam", "miso", "lime", "bacon", "brunet smør", "kommen"],
      menu: ["Allerede basen i jeres poké bowl – prøv også grillet spidskål m. misosmør som tilbehør", "Sommerslaw til burgere og crispy chicken"],
      trends: ["asiatisk", "planterig"] },

    { id: "hvidkaal", navn: "Hvidkål", kat: "grønt", saeson: [9,10,11,12,1,2,3], peak: [10,11],
      par: ["kommen", "æble", "sennep", "bacon", "chili", "ingefær"],
      menu: ["Hjemmelavet kimchi til burgere/bowls (fermenterings-trend, næsten gratis)", "Vinterslaw m. æble og sennep"],
      trends: ["fermentering", "zerowaste"] },

    { id: "roedkaal", navn: "Rødkål", kat: "grønt", saeson: [9,10,11,12], peak: [11,12],
      par: ["and", "æble", "appelsin", "kanel", "portvin", "valnød"],
      menu: ["Jule-LTO: andeburger/confit-sandwich m. syltet rødkål nov–dec"],
      trends: ["nostalgi", "hyperlokal"] },

    { id: "groenkaal", navn: "Grønkål", kat: "grønt", saeson: [10,11,12,1,2,3], peak: [11,12,1],
      par: ["citron", "parmesan", "æble", "hasselnød", "chili", "hvidløg"],
      menu: ["Vinter-cæsar: grønkål i stedet for/sammen med sprød salat (massér i dressingen)", "Grønkålschips som snack-drys"],
      trends: ["planterig", "hyperlokal", "protein"] },

    { id: "rosenkaal", navn: "Rosenkål", kat: "grønt", saeson: [10,11,12,1,2], peak: [11,12],
      par: ["bacon", "kastanje", "parmesan", "balsamico", "honning", "chili"],
      menu: ["Friterede rosenkål m. hot honey & parmesan som vinter-snack (swicy!)"],
      trends: ["swicy", "planterig"] },

    { id: "blomkaal", navn: "Blomkål", kat: "grønt", saeson: [6,7,8,9,10], peak: [7,8,9],
      par: ["kapers", "brunet smør", "karry", "mandel", "parmesan", "tahin"],
      menu: ["Heel bagt blomkål m. karry-mayo som vegetar-aftenret", "Blomkåls-'popcorn' m. chilimayo som snack"],
      trends: ["planterig", "zerowaste"] },

    { id: "broccoli", navn: "Broccoli / aspargesbroccoli", kat: "grønt", saeson: [6,7,8,9,10], peak: [7,8,9],
      par: ["chili", "hvidløg", "mandel", "citron", "soja", "sesam"],
      menu: ["Jeres Black Angus-tilbehør: grillet m. chili & citron løfter den i sæson", "Broccolisalat m. mandler i poké bowl"],
      trends: ["planterig"] },

    /* —— VINTER —— */
    { id: "torsk", navn: "Torsk", kat: "fisk & skaldyr", saeson: [10,11,12,1,2], peak: [1,2],
      par: ["sennep", "æg", "rødbede", "peberrod", "bacon", "brunet smør", "kapers"],
      menu: ["Nytårs-LTO: bagt torsk m. sennepssauce og det hele (jan–feb klassiker)", "Vinter fish'n'chips: kommunikér 'dansk vintertorsk'"],
      trends: ["nostalgi", "hyperlokal"] },

    { id: "muslinger", navn: "Blåmuslinger", kat: "fisk & skaldyr", saeson: [9,10,11,12,1,2,3,4], peak: [10,11,12,1],
      par: ["hvidvin", "fløde", "porre", "timian", "karry", "æble", "pommes frites"],
      menu: ["Moules frites som vinter-aftenret – I har pommes-setuppet allerede", "Dampede muslinger m. æblecider og porre (nordisk twist)"],
      trends: ["hyperlokal", "planterig"] },

    { id: "sild", navn: "Sild", kat: "fisk & skaldyr", saeson: [5,6,10,11], peak: [10,11],
      par: ["karry", "æble", "rødløg", "dild", "rugbrød", "æg", "kapers"],
      menu: ["Karrysild på smørrebrødskortet – uundgåelig til jul og påske", "Stegte sild i eddike som efterårs-LTO"],
      trends: ["smorrebrod", "nostalgi", "fermentering"] },

    { id: "vildt", navn: "Vildt (hjort/dåvildt)", kat: "kød & vildt", saeson: [10,11,12,1], peak: [11,12],
      par: ["solbær", "kirsebær", "rosenkål", "svampe", "enebær", "timian", "selleri"],
      menu: ["Efterårs-LTO: vildtgryde eller hjorteburger m. solbær og svampe", "Vildt-smørrebrød m. syltede svampe nov–dec"],
      trends: ["hyperlokal", "nostalgi"] },

    { id: "and", navn: "And", kat: "kød & vildt", saeson: [10,11,12], peak: [11],
      par: ["rødkål", "appelsin", "kirsebær", "æble", "timian", "kanel"],
      menu: ["Mortensaften-event 10. nov i alle caféer (book bord-kampagne)", "Confit-and sandwich m. rødkål som nov–dec LTO"],
      trends: ["nostalgi", "hyperlokal"] },

    /* —— URTER & ÅRET RUNDT —— */
    { id: "dild", navn: "Dild", kat: "urter", saeson: [5,6,7,8,9], peak: [6,7],
      par: ["fisk", "kartoffel", "agurk", "æg", "rejer", "creme fraiche", "citron"],
      menu: ["Kernen i jeres fiskeretter – dyrk relationen til én fast urteleverandør", "Dildolie til at løfte stjerneskud og laksesalat visuelt"],
      trends: ["hyperlokal"] },

    { id: "basilikum", navn: "Basilikum", kat: "urter", saeson: [6,7,8,9], peak: [7,8],
      par: ["tomat", "jordbær", "burrata", "citron", "fersken", "pinjekerner"],
      menu: ["Hjemmelavet pesto (allerede på kortet) – fortæl historien", "Jordbær-basilikum dessert og lemonade om sommeren"],
      trends: ["planterig"] },

    { id: "mynte", navn: "Mynte", kat: "urter", saeson: [5,6,7,8,9], peak: [6,7,8],
      par: ["ærter", "lam", "chokolade", "agurk", "lime", "vandmelon", "yoghurt"],
      menu: ["Mynte i ærtepastaen i sæson", "Frisk mynte-te og mojito-style mocktails på drikkekortet"],
      trends: ["funktionel", "planterig"] },

    { id: "estragon", navn: "Estragon", kat: "urter", saeson: [5,6,7,8,9], peak: [6,7],
      par: ["kylling", "æg", "bearnaise", "tomat", "fisk", "sennep"],
      menu: ["Jeres bearnaise-DNA! Hjemmelavet bearnaise m. frisk estragon som signatur", "Estragon-mayo til kyllingesandwich"],
      trends: ["nostalgi"] },

    { id: "timian", navn: "Timian", kat: "urter", saeson: [5,6,7,8,9,10], peak: [6,7,8],
      par: ["svampe", "kylling", "citron", "honning", "kartoffel", "vildt"],
      menu: ["Jeres timian-croutoner i cæsar – udvid med timian-honning til oste-brunch"],
      trends: ["hyperlokal"] },

    { id: "purloeg", navn: "Purløg", kat: "urter", saeson: [4,5,6,7,8,9], peak: [5,6],
      par: ["æg", "rejer", "kartoffel", "creme fraiche", "fisk", "smør"],
      menu: ["Allerede på æg & rejer – purløgsolie kan løfte alle smørrebrød visuelt"],
      trends: ["smorrebrod"] },

    { id: "hyldebaer", navn: "Hyldebær", kat: "frugt & bær", saeson: [8,9], peak: [9],
      par: ["æble", "kanel", "and", "vildt", "honning", "ingefær"],
      menu: ["Varm hyldebærdrik m. æble på drikkekortet sep–dec (gratis råvare ved selvpluk)"],
      trends: ["zerowaste", "funktionel", "hyperlokal"] },

    /* ============================================================
       ÅRET RUNDT / IMPORT  (saeson + peak tomme = vises som "Året rundt",
       holdes ude af sæson-dashboardet, men kan altid søges frem og sparres med)
       ============================================================ */

    /* —— FRUGT & CITRUS —— */
    { id: "citron", navn: "Citron", kat: "frugt & citrus", saeson: [], peak: [], aaretrundt: true,
      par: ["fisk", "olivenolie", "hvidløg", "persille", "kapers", "smør", "honning", "timian", "rejer"],
      menu: ["Citron-DNA i alle fiskeretter og dressinger – syre løfter alt", "Konfiteret/saltcitron som hemmelig umami i mayo og dressinger"],
      trends: ["zerowaste"] },

    { id: "lime", navn: "Lime", kat: "frugt & citrus", saeson: [], peak: [], aaretrundt: true,
      par: ["koriander", "chili", "kokos", "avocado", "rejer", "mynte", "fiskesauce", "ingefær"],
      menu: ["Lime-koriander dressing til poké bowl og crispy chicken", "Mocktails m. lime og mynte på drikkekortet"],
      trends: ["asiatisk", "funktionel"] },

    { id: "appelsin", navn: "Appelsin", kat: "frugt & citrus", saeson: [], peak: [], aaretrundt: true,
      par: ["and", "fennikel", "rødbede", "chokolade", "kanel", "oliven", "gulerod"],
      menu: ["Appelsin-fennikelsalat til fisk og laks", "Friskpresset juice på brunchkortet"],
      trends: ["funktionel"] },

    { id: "blodappelsin", navn: "Blodappelsin", kat: "frugt & citrus", saeson: [], peak: [1,2,3], aaretrundt: true,
      par: ["fennikel", "burrata", "oliven", "chokolade", "rødløg", "rosmarin"],
      menu: ["Vintersalat: blodappelsin, burrata & oliven (farve på et gråt kort jan–mar)"],
      trends: ["planterig"] },

    { id: "grapefrugt", navn: "Grapefrugt", kat: "frugt & citrus", saeson: [], peak: [], aaretrundt: true,
      par: ["avocado", "rejer", "fennikel", "mynte", "honning", "chili"],
      menu: ["Frisk grapefrugt i poké bowl og rejesalat (bitter-sød kontrast)"],
      trends: ["planterig", "funktionel"] },

    { id: "mandarin", navn: "Mandarin / clementin", kat: "frugt & citrus", saeson: [], peak: [11,12,1], aaretrundt: true,
      par: ["chokolade", "kanel", "and", "mandel", "vanilje"],
      menu: ["Mandarin på julebrunch og i desserter nov–jan"],
      trends: ["nostalgi"] },

    { id: "banan", navn: "Banan", kat: "frugt & citrus", saeson: [], peak: [], aaretrundt: true,
      par: ["chokolade", "peanut", "karamel", "havre", "kanel", "kaffe", "kokos"],
      menu: ["Bananpandekager og banana bread på brunch/kaffekortet", "Frosne bananer i smoothies (zero waste for overmodne)"],
      trends: ["protein", "zerowaste"] },

    { id: "ananas", navn: "Ananas", kat: "frugt & citrus", saeson: [], peak: [], aaretrundt: true,
      par: ["chili", "kokos", "lime", "mynte", "rom", "svinekød", "koriander"],
      menu: ["Grillet ananas-salsa til crispy chicken og pulled pork (swicy)", "Ananas i mocktails"],
      trends: ["swicy", "funktionel"] },

    { id: "mango", navn: "Mango", kat: "frugt & citrus", saeson: [], peak: [], aaretrundt: true,
      par: ["chili", "lime", "kokos", "avocado", "rejer", "koriander", "yoghurt"],
      menu: ["Mango-salsa til fisk og bowls", "Mango-lassi / smoothie på drikkekortet"],
      trends: ["asiatisk", "funktionel"] },

    { id: "avocado", navn: "Avocado", kat: "frugt & citrus", saeson: [], peak: [], aaretrundt: true,
      par: ["lime", "chili", "koriander", "æg", "tomat", "feta", "laks", "rugbrød"],
      menu: ["Avocado-toast som fast brunch-element (æg + chiliflager)", "Smashed avocado i poké bowl og sandwich"],
      trends: ["protein", "planterig"] },

    { id: "fersken", navn: "Fersken", kat: "frugt & citrus", saeson: [], peak: [7,8], aaretrundt: true,
      par: ["basilikum", "burrata", "serrano", "vanilje", "mandel", "honning", "rosmarin", "mascarpone"],
      menu: ["Sommersalat: fersken, burrata & serrano (bedst jul–aug)", "Grillet fersken m. mascarpone som dessert"],
      trends: ["planterig"] },

    { id: "nektarin", navn: "Nektarin", kat: "frugt & citrus", saeson: [], peak: [7,8], aaretrundt: true,
      par: ["basilikum", "mandel", "honning", "yoghurt", "vanilje", "skyr"],
      menu: ["Skyr m. nektarin og ristede mandler på brunch (protein)"],
      trends: ["protein"] },

    { id: "abrikos", navn: "Abrikos", kat: "frugt & citrus", saeson: [], peak: [6,7], aaretrundt: true,
      par: ["mandel", "vanilje", "rosmarin", "honning", "lam", "pistacie"],
      menu: ["Abrikos-mandeltærte på kaffekortet", "Tørrede abrikoser i tagine/lammeretter"],
      trends: ["nostalgi"] },

    { id: "vandmelon", navn: "Vandmelon", kat: "frugt & citrus", saeson: [], peak: [6,7,8], aaretrundt: true,
      par: ["feta", "mynte", "lime", "chili", "agurk", "basilikum"],
      menu: ["Sommersalat: vandmelon, feta & mynte", "Vandmelon-mocktail med lime og mynte"],
      trends: ["funktionel", "planterig"] },

    { id: "melon", navn: "Melon (cantaloupe/honning)", kat: "frugt & citrus", saeson: [], peak: [7,8], aaretrundt: true,
      par: ["serrano", "mynte", "lime", "feta", "ingefær"],
      menu: ["Klassiker: melon m. serrano som let forret/brunch-element"],
      trends: ["nostalgi"] },

    { id: "vindruer", navn: "Vindruer", kat: "frugt & citrus", saeson: [], peak: [9,10], aaretrundt: true,
      par: ["blåskimmel", "valnød", "ost", "rosmarin", "honning"],
      menu: ["Friske druer på oste-/brunch-brættet", "Ovnbagte druer m. rosmarin til ost"],
      trends: ["planterig"] },

    { id: "figen", navn: "Figen", kat: "frugt & citrus", saeson: [], peak: [8,9], aaretrundt: true,
      par: ["serrano", "blåskimmel", "honning", "valnød", "balsamico", "gedeost"],
      menu: ["Figen, serrano & gedeost-salat (sensommer)", "Figen-honning på oste-brunch"],
      trends: ["planterig", "nostalgi"] },

    { id: "granataeble", navn: "Granatæble", kat: "frugt & citrus", saeson: [], peak: [10,11,12], aaretrundt: true,
      par: ["feta", "valnød", "mynte", "bulgur", "lam", "yoghurt", "sumak"],
      menu: ["Granatæblekerner som farve-/syredrys på salater og bowls vinter", "Tabbouleh-style salat m. granatæble"],
      trends: ["planterig", "funktionel"] },

    { id: "passionsfrugt", navn: "Passionsfrugt", kat: "frugt & citrus", saeson: [], peak: [], aaretrundt: true,
      par: ["hvid chokolade", "mango", "kokos", "vanilje", "lime", "yoghurt"],
      menu: ["Passion-curd / topping på cheesecake og pavlova", "Tropisk mocktail på drikkekortet"],
      trends: ["funktionel"] },

    { id: "kokos", navn: "Kokos", kat: "frugt & citrus", saeson: [], peak: [], aaretrundt: true,
      par: ["lime", "chili", "mango", "karry", "koriander", "ananas", "chokolade"],
      menu: ["Kokos-karry base til veganske bowls og supper", "Kokosmakroner/bounty-snack på kaffekortet"],
      trends: ["asiatisk", "planterig"] },

    /* —— GRØNT (året rundt / import) —— */
    { id: "kartoffel", navn: "Kartofler", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["smør", "rosmarin", "hvidløg", "creme fraiche", "purløg", "bacon", "parmesan"],
      menu: ["Pommes-/wedges-setuppet I allerede har – krydr med rosmarin & parmesan", "Kartoffelmos som comfort-tilbehør til aftenretter"],
      trends: ["nostalgi"] },

    { id: "sod_kartoffel", navn: "Søde kartofler", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["chili", "lime", "feta", "koriander", "bacon", "ahornsirup", "spidskommen"],
      menu: ["Sweet potato fries m. chilimayo (swicy snack/tilbehør)", "Bagt sød kartoffel i veganske bowls"],
      trends: ["planterig", "swicy"] },

    { id: "salat", navn: "Salat (romaine/iceberg)", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["parmesan", "croutoner", "ansjos", "citron", "bacon", "kylling"],
      menu: ["Basen i jeres cæsar – romaine giver crunch hele året", "Sprød salat i wraps og sandwich"],
      trends: ["protein"] },

    { id: "rucola", navn: "Rucola", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["parmesan", "balsamico", "pinjekerner", "pære", "serrano", "citron"],
      menu: ["Pebret topping på pizza, sandwich og salater", "Rucola-pesto som variation"],
      trends: ["planterig"] },

    { id: "peberfrugt", navn: "Peberfrugt", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["feta", "hvidløg", "chili", "olivenolie", "koriander", "spidskommen", "tomat"],
      menu: ["Ovnbagte/marinerede peberfrugter i bowls og sandwich", "Rød peber-/ajvar-dip"],
      trends: ["planterig"] },

    { id: "chili", navn: "Frisk chili", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["lime", "hvidløg", "ingefær", "koriander", "honning", "soja", "mango"],
      menu: ["Hjemmelavet chiliolie/chilimayo til crispy chicken og burgere", "Hot honey: chili + honning (swicy-trend)"],
      trends: ["swicy", "asiatisk"] },

    { id: "aubergine", navn: "Aubergine", kat: "grønt", saeson: [], peak: [7,8,9], aaretrundt: true,
      par: ["miso", "tahin", "hvidløg", "tomat", "feta", "granatæble", "basilikum"],
      menu: ["Miso-glaseret aubergine som vegetar-aftenret (asiatisk)", "Baba ganoush som dip/brunch-element"],
      trends: ["asiatisk", "planterig"] },

    { id: "champignon", navn: "Champignon", kat: "svampe", saeson: [], peak: [], aaretrundt: true,
      par: ["hvidløg", "persille", "smør", "fløde", "timian", "soja", "æg"],
      menu: ["Hvidløgschampignon på brunch og som tilbehør", "Stegte svampe i burgere og bowls"],
      trends: ["planterig"] },

    { id: "portobello", navn: "Portobello", kat: "svampe", saeson: [], peak: [], aaretrundt: true,
      par: ["hvidløg", "timian", "blåskimmel", "soja", "balsamico", "parmesan"],
      menu: ["Grillet portobello som vegetar-burgerbøf (planterig)", "Fyldt portobello m. ost"],
      trends: ["planterig", "swicy"] },

    { id: "loeg", navn: "Løg", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["smør", "timian", "balsamico", "ost", "bacon", "sennep"],
      menu: ["Karamelliserede løg på burgere og i sandwich", "Sprøde ristede løg som crunch-drys"],
      trends: ["zerowaste"] },

    { id: "rodloeg", navn: "Rødløg", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["balsamico", "feta", "sild", "rugbrød", "chili", "koriander"],
      menu: ["Hurtigt syltede rødløg som syre/farve på alt (smørrebrød, burgere, bowls)"],
      trends: ["fermentering"] },

    { id: "forarsloeg", navn: "Forårsløg", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["sesam", "soja", "ingefær", "chili", "æg", "laks"],
      menu: ["Frisk drys på poké bowl, ramen-style og asiatiske retter"],
      trends: ["asiatisk"] },

    { id: "hvidloeg", navn: "Hvidløg", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["olivenolie", "persille", "chili", "smør", "citron", "rosmarin"],
      menu: ["Sort hvidløg som umami-bombe i mayo og dressinger", "Hvidløgssmør/aioli til pommes og brød"],
      trends: ["fermentering"] },

    { id: "ingefaer", navn: "Ingefær", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["lime", "chili", "hvidløg", "soja", "gulerod", "citron", "honning"],
      menu: ["Ingefær-shot på drikkekortet (funktionel)", "Ingefær i dressinger og asiatiske marinader"],
      trends: ["funktionel", "asiatisk"] },

    { id: "broenne", navn: "Grønne bønner", kat: "grønt", saeson: [], peak: [7,8], aaretrundt: true,
      par: ["mandel", "hvidløg", "citron", "bacon", "smør", "sennep"],
      menu: ["Hurtige bønner m. mandler som grønt tilbehør til aftenretter"],
      trends: ["planterig"] },

    { id: "edamame", navn: "Edamame", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["salt", "chili", "sesam", "soja", "lime"],
      menu: ["Edamame m. flagesalt som protein-snack/tilbehør", "Topping i poké bowl"],
      trends: ["protein", "asiatisk"] },

    { id: "pakchoi", navn: "Pak choi", kat: "grønt", saeson: [], peak: [], aaretrundt: true,
      par: ["soja", "hvidløg", "ingefær", "sesam", "chili", "østerssauce"],
      menu: ["Wok-stegt pak choi som asiatisk tilbehør og i bowls"],
      trends: ["asiatisk", "planterig"] },

    /* —— KØD & FJERKRÆ —— */
    { id: "oksekoed", navn: "Oksekød (Black Angus)", kat: "kød & vildt", saeson: [], peak: [], aaretrundt: true,
      par: ["sort peber", "bearnaise", "rødvin", "svampe", "blåskimmel", "rosmarin", "hvidløg"],
      menu: ["Jeres Black Angus – signatur-bearnaise og svampetilbehør", "Månedens burger med skiftende toppings"],
      trends: ["nostalgi"] },

    { id: "hakket_okse", navn: "Hakket oksekød", kat: "kød & vildt", saeson: [], peak: [], aaretrundt: true,
      par: ["løg", "cheddar", "bacon", "sennep", "pickles", "gochujang"],
      menu: ["Smash-burger basen i alle 6 caféer", "Pariserbøf 2.0 (premium nostalgi)"],
      trends: ["nostalgi", "swicy"] },

    { id: "kylling", navn: "Kylling", kat: "kød & vildt", saeson: [], peak: [], aaretrundt: true,
      par: ["citron", "hvidløg", "estragon", "gochujang", "honning", "timian", "chili"],
      menu: ["Crispy chicken med hot honey eller gochujang-mayo (swicy)", "Kyllingesandwich m. estragon-mayo"],
      trends: ["swicy", "asiatisk", "protein"] },

    { id: "svinekoed", navn: "Svinekød / nakkefilet", kat: "kød & vildt", saeson: [], peak: [], aaretrundt: true,
      par: ["æble", "sennep", "fennikel", "salvie", "bbq", "hvidløg", "rødkål"],
      menu: ["Pulled pork til sandwich/burger og takeaway", "Stegt flæsk som nostalgi-aftenret (med nye kartofler i sæson)"],
      trends: ["nostalgi"] },

    { id: "bacon", navn: "Bacon", kat: "kød & vildt", saeson: [], peak: [], aaretrundt: true,
      par: ["æg", "ahornsirup", "cheddar", "salat", "avocado", "løg"],
      menu: ["Fast brunch-element (æg & bacon)", "Candied bacon m. ahornsirup på burgere (swicy)"],
      trends: ["protein", "swicy"] },

    { id: "skinke", navn: "Serrano / parmaskinke", kat: "kød & vildt", saeson: [], peak: [], aaretrundt: true,
      par: ["melon", "figen", "burrata", "rucola", "parmesan", "fersken"],
      menu: ["Jeres serrano-sandwich – løft med sæsonfrugt (fersken/figen)", "Serrano som salt crunch på salater"],
      trends: ["nostalgi"] },

    { id: "chorizo", navn: "Chorizo", kat: "kød & vildt", saeson: [], peak: [], aaretrundt: true,
      par: ["kikærter", "peberfrugt", "æg", "hvidløg", "tomat", "kartoffel"],
      menu: ["Chorizo-hash på brunch (æg + kartoffel)", "Krydret olie fra stegt chorizo til bowls"],
      trends: ["protein"] },

    { id: "kalkun", navn: "Kalkun", kat: "kød & vildt", saeson: [], peak: [11,12], aaretrundt: true,
      par: ["tranebær", "salvie", "bacon", "æble", "timian"],
      menu: ["Kalkun-club-sandwich som mager protein-mulighed"],
      trends: ["protein"] },

    /* —— FISK & SKALDYR (året rundt / opdræt) —— */
    { id: "laks", navn: "Laks", kat: "fisk & skaldyr", saeson: [], peak: [], aaretrundt: true,
      par: ["dild", "citron", "avocado", "soja", "sesam", "creme fraiche", "agurk", "peberrod"],
      menu: ["Laksesalat og laks i poké bowl hele året", "Røget/gravad laks på smørrebrød og brunch"],
      trends: ["protein", "asiatisk"] },

    { id: "tun", navn: "Tun", kat: "fisk & skaldyr", saeson: [], peak: [], aaretrundt: true,
      par: ["soja", "sesam", "lime", "avocado", "chili", "wasabi", "ingefær"],
      menu: ["Seared tun / poké med soja-sesam", "Tunmousse-smørrebrød som klassiker"],
      trends: ["asiatisk", "protein"] },

    { id: "rejer", navn: "Rejer (kogte/tiger)", kat: "fisk & skaldyr", saeson: [], peak: [], aaretrundt: true,
      par: ["hvidløg", "chili", "citron", "mayonnaise", "dild", "avocado", "lime"],
      menu: ["Hvidløgs-/chilirejer som tapas-tilbehør", "Rejer på smørrebrød og i bowls hele året"],
      trends: ["protein"] },

    { id: "roeget_laks", navn: "Røget laks", kat: "fisk & skaldyr", saeson: [], peak: [], aaretrundt: true,
      par: ["flødeost", "dild", "rødløg", "kapers", "citron", "rugbrød", "æg"],
      menu: ["Røget laks + flødeost-bagel på brunchkortet", "Smørrebrød m. røget laks og dildcreme"],
      trends: ["smorrebrod", "protein"] },

    { id: "kammusling", navn: "Kammuslinger", kat: "fisk & skaldyr", saeson: [], peak: [10,11,12], aaretrundt: true,
      par: ["brunet smør", "blomkål", "bacon", "citron", "ærter", "vanilje"],
      menu: ["Pandestegte kammuslinger m. blomkål som premium forret/LTO"],
      trends: ["nostalgi"] },

    /* —— MEJERI & ÆG —— */
    { id: "aeg", navn: "Æg", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["bacon", "avocado", "hollandaise", "purløg", "chili", "spinat", "rejer", "trøffel"],
      menu: ["Æg i alle afskygninger på brunch (pocheret, røræg, benedict)", "Æg & rejer-smørrebrød (jeres klassiker)"],
      trends: ["protein", "smorrebrod"] },

    { id: "smoer", navn: "Smør", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["hvidløg", "persille", "citron", "salvie", "ramsløg", "honning"],
      menu: ["Brunet smør som hemmelig dybde i saucer og grønt", "Kryddersmør til brød og bøffer"],
      trends: ["nostalgi"] },

    { id: "flode", navn: "Fløde", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["svampe", "muskatnød", "hvidløg", "parmesan", "vanilje", "estragon"],
      menu: ["Base i flødesaucer (svampe, bearnaise-DNA) og supper", "Pisket flødeskum til desserter"],
      trends: ["nostalgi"] },

    { id: "cremefraiche", navn: "Creme fraiche", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["dild", "purløg", "rygeost", "citron", "rødløg", "kartoffel"],
      menu: ["Base i dressinger og dips (rygeostcreme, dildcreme)"],
      trends: ["smorrebrod"] },

    { id: "skyr", navn: "Skyr", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["bær", "honning", "havre", "vanilje", "mandel", "citron"],
      menu: ["Skyr-bowl m. bær og granola (protein-brunch)", "Skyr som let base i dressinger og desserter"],
      trends: ["protein", "funktionel"] },

    { id: "yoghurt", navn: "Yoghurt", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["mynte", "agurk", "hvidløg", "spidskommen", "honning", "granatæble"],
      menu: ["Tzatziki-style yoghurtdip til crispy chicken og bowls", "Yoghurtmarineret kylling"],
      trends: ["protein", "planterig"] },

    { id: "parmesan", navn: "Parmesan", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["pasta", "rucola", "balsamico", "citron", "svampe", "ærter", "pinjekerner"],
      menu: ["Umami-drys på salater, pasta og pommes", "Parmesan-crisp som crunch-garniture"],
      trends: ["nostalgi"] },

    { id: "feta", navn: "Feta", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["vandmelon", "mynte", "tomat", "oliven", "granatæble", "honning", "squash"],
      menu: ["Salt friskhed i sommersalater og bowls", "Bagt feta m. tomat og honning som dip"],
      trends: ["planterig"] },

    { id: "mozzarella", navn: "Mozzarella / burrata", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["tomat", "basilikum", "fersken", "olivenolie", "balsamico", "ærter", "pesto"],
      menu: ["Caprese/burrata-salat med skiftende sæsontilbehør", "Burrata-toast på brunch"],
      trends: ["planterig", "nostalgi"] },

    { id: "cheddar", navn: "Cheddar", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["bacon", "løg", "æble", "chili", "sennep", "hakket okse"],
      menu: ["Smelteost på burgere og grilled cheese", "Cheddar-jalapeño twist (swicy)"],
      trends: ["nostalgi", "swicy"] },

    { id: "gedeost", navn: "Gedeost", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["rødbede", "honning", "valnød", "figen", "timian", "rucola"],
      menu: ["Bagt gedeost m. honning til salater og brunch-brættet"],
      trends: ["planterig"] },

    { id: "flodeost", navn: "Flødeost", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["røget laks", "dild", "purløg", "citron", "bær", "vanilje"],
      menu: ["Cheesecake på kaffekortet (skift topping efter sæson)", "Flødeostcreme på bagel og smørrebrød"],
      trends: ["smorrebrod"] },

    { id: "halloumi", navn: "Halloumi", kat: "mejeri & æg", saeson: [], peak: [], aaretrundt: true,
      par: ["citron", "honning", "chili", "mynte", "vandmelon", "granatæble"],
      menu: ["Grillet halloumi som vegetar-protein i bowls og salater", "Halloumi-fries m. hot honey (swicy snack)"],
      trends: ["planterig", "swicy"] },

    /* —— NØDDER & KERNER —— */
    { id: "mandler", navn: "Mandler", kat: "nødder & kerner", saeson: [], peak: [], aaretrundt: true,
      par: ["chokolade", "bær", "vanilje", "citron", "honning", "rosmarin"],
      menu: ["Ristede mandler som crunch på brunch og salater", "Mandelcrumble på desserter"],
      trends: ["protein"] },

    { id: "valnodder", navn: "Valnødder", kat: "nødder & kerner", saeson: [], peak: [], aaretrundt: true,
      par: ["blåskimmel", "pære", "æble", "rødbede", "honning", "gedeost"],
      menu: ["Ristede valnødder i efterårssalater", "Valnød i gulerodskagen"],
      trends: ["planterig"] },

    { id: "hasselnodder", navn: "Hasselnødder", kat: "nødder & kerner", saeson: [], peak: [], aaretrundt: true,
      par: ["chokolade", "jordskok", "kaffe", "brunet smør", "pære"],
      menu: ["Hasselnød-praliné/dukkah som crunch", "Nutella-style dessert på kaffekortet"],
      trends: ["nostalgi"] },

    { id: "pistacie_n", navn: "Pistacie", kat: "nødder & kerner", saeson: [], peak: [], aaretrundt: true,
      par: ["hindbær", "rose", "hvid chokolade", "citron", "lam", "kardemomme"],
      menu: ["Pistaciecreme på desserter (rammer pistacie-trenden)", "Pistaciedrys på bowls og kager"],
      trends: ["pistacie"] },

    { id: "cashew", navn: "Cashewnødder", kat: "nødder & kerner", saeson: [], peak: [], aaretrundt: true,
      par: ["chili", "lime", "soja", "kokos", "karry", "koriander"],
      menu: ["Cashew-crunch i asiatiske bowls", "Cashew-base i veganske cremesaucer"],
      trends: ["asiatisk", "planterig"] },

    { id: "pinjekerner", navn: "Pinjekerner", kat: "nødder & kerner", saeson: [], peak: [], aaretrundt: true,
      par: ["basilikum", "parmesan", "rucola", "spinat", "rosin", "citron"],
      menu: ["Ristede pinjekerner i pesto og på salater"],
      trends: ["planterig"] },

    { id: "sesam", navn: "Sesam", kat: "nødder & kerner", saeson: [], peak: [], aaretrundt: true,
      par: ["soja", "lime", "ingefær", "agurk", "laks", "tahin", "honning"],
      menu: ["Sesam-soja dressing til poké bowl og slaw", "Furikake-/sesamdrys som crunch"],
      trends: ["asiatisk"] },

    /* —— BASIS & KORN —— */
    { id: "mel", navn: "Hvedemel", kat: "basis & korn", saeson: [], peak: [], aaretrundt: true,
      par: ["gær", "smør", "æg", "surdej", "sukker"],
      menu: ["Surdej og bagværk in-house som kvalitetsfortælling", "Pandekager og waffles til brunch"],
      trends: ["nostalgi"] },

    { id: "ris", navn: "Ris (jasmin/sushi)", kat: "basis & korn", saeson: [], peak: [], aaretrundt: true,
      par: ["soja", "sesam", "laks", "avocado", "edamame", "nori", "lime"],
      menu: ["Sushiris-base i poké bowls", "Stegte ris som takeaway-venlig ret"],
      trends: ["asiatisk"] },

    { id: "pasta", navn: "Pasta", kat: "basis & korn", saeson: [], peak: [], aaretrundt: true,
      par: ["parmesan", "ærter", "basilikum", "svampe", "citron", "chili", "tomat"],
      menu: ["Jeres ærtepasta – fast favorit, opgradér med sæsongrønt", "Cacio e pepe / svampepasta som vegetar-aftenret"],
      trends: ["planterig", "nostalgi"] },

    { id: "havregryn", navn: "Havregryn", kat: "basis & korn", saeson: [], peak: [], aaretrundt: true,
      par: ["bær", "banan", "kanel", "honning", "skyr", "mandel", "æble"],
      menu: ["Granola/overnight oats på brunch (protein + funktionel)", "Havrecrunch som drys"],
      trends: ["protein", "funktionel"] },

    { id: "kikaerter", navn: "Kikærter", kat: "basis & korn", saeson: [], peak: [], aaretrundt: true,
      par: ["tahin", "citron", "spidskommen", "hvidløg", "chili", "koriander"],
      menu: ["Hjemmelavet hummus som brunch-element/dip", "Sprøde krydrede kikærter som crunch-topping"],
      trends: ["planterig", "zerowaste"] },

    { id: "linser", navn: "Linser", kat: "basis & korn", saeson: [], peak: [], aaretrundt: true,
      par: ["karry", "kokos", "spinat", "citron", "spidskommen", "gulerod"],
      menu: ["Dahl/linsegryde som varm vegetar-aftenret (planterig komfort)", "Linsesalat som proteinrig frokost"],
      trends: ["planterig", "protein"] },

    { id: "quinoa", navn: "Quinoa", kat: "basis & korn", saeson: [], peak: [], aaretrundt: true,
      par: ["feta", "granatæble", "mynte", "citron", "avocado", "agurk"],
      menu: ["Quinoa-base i protein-bowls og salater"],
      trends: ["protein", "planterig"] },

    /* —— OLIE, EDDIKE & KONDIMENT —— */
    { id: "olivenolie", navn: "Olivenolie", kat: "olie & kondiment", saeson: [], peak: [], aaretrundt: true,
      par: ["citron", "hvidløg", "tomat", "basilikum", "brød", "balsamico"],
      menu: ["God olie som finish på salater, burrata og supper", "Urteolie til at løfte tallerkenen visuelt"],
      trends: ["planterig"] },

    { id: "balsamico", navn: "Balsamico", kat: "olie & kondiment", saeson: [], peak: [], aaretrundt: true,
      par: ["tomat", "jordbær", "parmesan", "rødløg", "rucola", "figen"],
      menu: ["Balsamicoreduktion som syre/sødme på salater og ost"],
      trends: ["nostalgi"] },

    { id: "soja", navn: "Sojasovs", kat: "olie & kondiment", saeson: [], peak: [], aaretrundt: true,
      par: ["sesam", "ingefær", "lime", "hvidløg", "honning", "chili", "laks"],
      menu: ["Soja-base i alle asiatiske dressinger og marinader", "Teriyaki-glace til kylling og laks"],
      trends: ["asiatisk"] },

    { id: "miso", navn: "Miso", kat: "olie & kondiment", saeson: [], peak: [], aaretrundt: true,
      par: ["smør", "aubergine", "laks", "honning", "sesam", "spidskål"],
      menu: ["Misosmør til grønt og fisk (umami-dybde)", "Miso i dressinger og supper"],
      trends: ["asiatisk", "fermentering"] },

    { id: "gochujang", navn: "Gochujang", kat: "olie & kondiment", saeson: [], peak: [], aaretrundt: true,
      par: ["honning", "kylling", "sesam", "lime", "hvidløg", "mayo"],
      menu: ["Gochujang-mayo til crispy chicken og burgere (swicy + koreansk)", "Korean glaze til wings"],
      trends: ["swicy", "asiatisk"] },

    { id: "sennep", navn: "Sennep (dijon)", kat: "olie & kondiment", saeson: [], peak: [], aaretrundt: true,
      par: ["honning", "estragon", "svinekød", "vinaigrette", "porre", "torsk"],
      menu: ["Honning-sennep dressing og dip", "Sennepssauce til torsk (nostalgi)"],
      trends: ["nostalgi"] },

    { id: "honning", navn: "Honning", kat: "olie & kondiment", saeson: [], peak: [], aaretrundt: true,
      par: ["chili", "gedeost", "blåskimmel", "citron", "timian", "halloumi"],
      menu: ["Hot honey (honning + chili) til alt sprødt og ost (swicy)", "Honning-timian til ost og brunch"],
      trends: ["swicy", "funktionel"] },

    { id: "tahin", navn: "Tahin", kat: "olie & kondiment", saeson: [], peak: [], aaretrundt: true,
      par: ["citron", "hvidløg", "kikærter", "honning", "aubergine", "spidskommen"],
      menu: ["Tahindressing til bowls, blomkål og salater", "Tahin i hummus og dips"],
      trends: ["planterig"] },

    { id: "kapers", navn: "Kapers", kat: "olie & kondiment", saeson: [], peak: [], aaretrundt: true,
      par: ["citron", "fisk", "brunet smør", "rødløg", "persille", "røget laks"],
      menu: ["Stegte sprøde kapers som crunch på fisk og smørrebrød"],
      trends: ["smorrebrod"] },

    { id: "oliven", navn: "Oliven", kat: "olie & kondiment", saeson: [], peak: [], aaretrundt: true,
      par: ["feta", "tomat", "citron", "rosmarin", "appelsin", "brød"],
      menu: ["Marinerede oliven som tapas/snack til drikkekortet", "Tapenade som spread"],
      trends: ["planterig"] },

    { id: "kokosmaelk", navn: "Kokosmælk", kat: "olie & kondiment", saeson: [], peak: [], aaretrundt: true,
      par: ["karry", "lime", "chili", "ingefær", "koriander", "citrongræs"],
      menu: ["Base i karry-/kokossupper og veganske cremesaucer", "Kokos-dahl og curry-bowls"],
      trends: ["asiatisk", "planterig"] },

    /* —— KRYDDERIER & TØRRET —— */
    { id: "spidskommen", navn: "Spidskommen (cumin)", kat: "krydderier", saeson: [], peak: [], aaretrundt: true,
      par: ["gulerod", "kikærter", "yoghurt", "lam", "koriander", "chili"],
      menu: ["Varm base i hummus, dressinger og rodfrugter"],
      trends: ["planterig"] },

    { id: "roeget_paprika", navn: "Røget paprika", kat: "krydderier", saeson: [], peak: [], aaretrundt: true,
      par: ["kartoffel", "kylling", "chorizo", "æg", "mayo", "majs"],
      menu: ["Røget paprika-mayo og krydrede fries", "Smag på rub til crispy chicken"],
      trends: ["swicy"] },

    { id: "karry", navn: "Karry", kat: "krydderier", saeson: [], peak: [], aaretrundt: true,
      par: ["sild", "æble", "kokos", "blomkål", "æg", "kylling"],
      menu: ["Karrysild og karrysalat (nostalgi-smørrebrød)", "Karry-kokos base til veganske bowls"],
      trends: ["nostalgi", "asiatisk"] },

    { id: "kanel", navn: "Kanel", kat: "krydderier", saeson: [], peak: [], aaretrundt: true,
      par: ["æble", "banan", "kaffe", "vanilje", "havre", "kardemomme"],
      menu: ["Kanelsnegle/kanelbrunch og chai-latte på kaffekortet", "Kanel i æbledesserter"],
      trends: ["nostalgi"] },

    { id: "vanilje", navn: "Vanilje", kat: "krydderier", saeson: [], peak: [], aaretrundt: true,
      par: ["bær", "rabarber", "chokolade", "kaffe", "pære", "mascarpone"],
      menu: ["Vaniljecreme/is som dessert-base til alle sæsonbær"],
      trends: ["nostalgi"] },

    { id: "sumak", navn: "Sumak", kat: "krydderier", saeson: [], peak: [], aaretrundt: true,
      par: ["yoghurt", "granatæble", "kylling", "agurk", "feta", "løg"],
      menu: ["Syrligt drys på bowls, hummus og grillet kylling"],
      trends: ["planterig"] },

    { id: "dukkah", navn: "Dukkah", kat: "krydderier", saeson: [], peak: [], aaretrundt: true,
      par: ["yoghurt", "gulerod", "æg", "hummus", "olivenolie", "brød"],
      menu: ["Nøddet crunch-drys på brunch-grønt, æg og dips"],
      trends: ["planterig", "zerowaste"] },

    { id: "furikake", navn: "Furikake", kat: "krydderier", saeson: [], peak: [], aaretrundt: true,
      par: ["ris", "laks", "avocado", "æg", "edamame", "sesam"],
      menu: ["Umami-crunch på poké bowls, ris og avocado-toast"],
      trends: ["asiatisk"] },

    /* —— FRISKE URTER (året rundt) —— */
    { id: "persille", navn: "Persille", kat: "urter", saeson: [], peak: [], aaretrundt: true,
      par: ["hvidløg", "citron", "fisk", "smør", "kapers", "bulgur"],
      menu: ["Gremolata og persillesmør til fisk og bøf", "Friskhed i tabbouleh og dressinger"],
      trends: ["zerowaste"] },

    { id: "koriander", navn: "Koriander", kat: "urter", saeson: [], peak: [], aaretrundt: true,
      par: ["lime", "chili", "kokos", "avocado", "mango", "soja", "ingefær"],
      menu: ["Frisk topping på bowls, tacos og asiatiske retter", "Koriander-lime dressing"],
      trends: ["asiatisk", "planterig"] },

    { id: "rosmarin", navn: "Rosmarin", kat: "urter", saeson: [], peak: [], aaretrundt: true,
      par: ["kartoffel", "lam", "hvidløg", "citron", "honning", "svinekød"],
      menu: ["Rosmarin-fries og ovnkartofler", "Rosmarin-honning til ost og cocktails"],
      trends: ["nostalgi"] },

    { id: "salvie", navn: "Salvie", kat: "urter", saeson: [], peak: [], aaretrundt: true,
      par: ["græskar", "brunet smør", "svinekød", "parmesan", "pasta", "kalkun"],
      menu: ["Salvie-brunet smør til græskar-/svamperetter og pasta"],
      trends: ["planterig"] },

    { id: "oregano", navn: "Oregano", kat: "urter", saeson: [], peak: [], aaretrundt: true,
      par: ["tomat", "feta", "olivenolie", "citron", "hvidløg", "lam"],
      menu: ["Middelhavs-DNA i tomatsaucer, dressinger og på feta"],
      trends: ["planterig"] },

    { id: "citrongraes", navn: "Citrongræs", kat: "urter", saeson: [], peak: [], aaretrundt: true,
      par: ["kokos", "ingefær", "lime", "chili", "koriander", "rejer"],
      menu: ["Aromatisk base i kokos-/karrysupper og asiatiske bouilloner"],
      trends: ["asiatisk"] }
  ],

  /* ---------- IDÉVÆRKTØJ: SPØRGSMÅLSRAMMER ---------- */
  rammer: {
    produkt: {
      navn: "Ny ret / nyt produkt",
      ikon: "🍽️",
      spm: [
        "Hvem er gæsten til denne ret – og hvornår på dagen bestiller de den?",
        "Hvilken sæson/råvarer bygger den på – kan den køre hele året, eller skal den skiftes ud?",
        "Hvad er target food cost (kr. og %) – og hvad skal udsalgsprisen være?",
        "Kan alle 6 køkkener eksekvere den ens? Hvad er det sværeste element?",
        "Hvor lang er tilberedningstiden i service – og presser den en station i peak?",
        "Kannibaliserer den en eksisterende ret, eller udfylder den et hul i kortet?",
        "Hvordan tester du den – smagning, én café først eller tidsbegrænset tilbud (LTO)?",
        "Hvordan ser den ud på et foto til SoMe og Wolt?"
      ]
    },
    kanal: {
      navn: "Ny kanal (Wolt / takeaway / catering)",
      ikon: "🛵",
      spm: [
        "Hvilke retter overlever 20–30 min. transport – og hvilke skal redesignes eller udgå?",
        "Emballage: hvad koster den pr. ordre, og holder den maden varm/kold og præsentabel?",
        "Hvad er kommissionen/gebyret – og hvad skal priserne være for at bevare marginen?",
        "Hvordan håndterer køkkenet platform-ordrer i peak uden at gæster i caféen venter længere?",
        "Hvilken café tester først – og hvad er succeskriteriet efter 4 uger (ordrer/uge, rating, snit-basket)?",
        "Hvem pakker og kvalitetstjekker ordren, før kureren får den?",
        "Hvordan ser menuen ud på platformen – billeder, beskrivelser, bundles og upsells?",
        "Hvem ejer dårlige anmeldelser og fejlordrer – og hvad er svartiden?"
      ]
    },
    event: {
      navn: "Event / kampagne",
      ikon: "🎉",
      spm: [
        "Hvad er målet – omsætning, nye gæster, branding eller at fylde stille timer?",
        "Hvem er målgruppen, og hvorfor kommer de til netop dette?",
        "Hvilken dato/sæson – og spiller den sammen med noget (højtid, lokalt event, mærkedag)?",
        "Hvad kræver det af bemanding og indkøb – pr. café?",
        "Hvad er budgettet, og hvornår er det en succes (break-even i covers/omsætning)?",
        "Hvordan markedsføres det – SoMe, lokalt, skilte i caféen, nyhedsbrev?",
        "Kan det gentages eller skaleres til alle 6 caféer, hvis det virker?"
      ]
    },
    drift: {
      navn: "Drift / proces",
      ikon: "⚙️",
      spm: [
        "Hvilket konkret problem løser idéen – og hvor ofte opstår det i dag?",
        "Hvordan gøres det i dag, og hvad koster det i tid, penge eller svind?",
        "Hvem påvirkes – køkken, service, ledelse – og hvad vil de sige til ændringen?",
        "Hvad kræver implementeringen: udstyr, oplæring, nye rutiner?",
        "Hvordan måler du efter 30 dage, om det virker?",
        "Hvad er risikoen, hvis det fejler – og kan du rulle tilbage uden skade?"
      ]
    },
    it: {
      navn: "IT / system / kasse",
      ikon: "💻",
      spm: [
        "Hvilket behov løser systemet – og hvem er de daglige brugere?",
        "Spiller det sammen med kassesystemet og jeres eksisterende setup (mails, booking, Wolt)?",
        "Hvad koster det samlet for 6 caféer – oprettelse, månedligt og pr. transaktion?",
        "Hvor lang er oplæringen – kan en ny medarbejder bruge det en travl lørdag?",
        "Hvad er planen, når det går ned midt i service?",
        "Hvem ejer leverandørkontakten og jeres data – og hvor svært er det at komme ud af aftalen?"
      ]
    },
    andet: {
      navn: "Andet / fri idé",
      ikon: "💡",
      spm: [
        "Beskriv idéen med én sætning – hvad er kernen?",
        "Hvilket problem løser den, eller hvilken mulighed griber den?",
        "Hvem skal gøre arbejdet – og har de tiden?",
        "Hvad koster den at teste i lille skala?",
        "Hvad skal være sandt, for at den bliver en succes?",
        "Hvad er første konkrete skridt i denne uge?"
      ]
    }
  }
};
