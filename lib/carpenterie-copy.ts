/** Copy for /progettazione-strutturale-per-carpenterie
 *  and /en/structural-design-for-steel-fabricators.
 */

/** Anonymized sample shop-drawing pack (cartigli cleaned). */
export const carpenterieDownloadHref: string | null =
  "/assets/downloads/studio-capoferri-esempi-elaborati-officina.zip";

export const carpenterieCopy = {
  it: {
    title: "Progettazione strutturale per carpenterie metalliche",
    lead:
      "Partner di progettazione per officine certificate EN 1090: dal calcolo agli elaborati firmati, al modello 3D e ai disegni d'officina (disegni di montaggio, assemblaggi e file NC per controllo numerico). Direzione lavori e pratiche, se richieste, si definiscono caso per caso.",
    downloadHeading: "Esempi di elaborati d'officina",
    downloadBody:
      "Esempi di tavole d'officina consegnate dallo studio. Solo a scopo di valutazione dello standard elaborati, non per uso costruttivo.",
    downloadHint: "Il pacchetto ZIP è disponibile a seguito della",
    downloadHintLink: "richiesta qui sotto",
    formHeading: "Richiesta di preventivo",
    formLead:
      "A seguito del completamento del modulo, la richiesta viene inviata allo studio e parte il download degli elaborati forniti dallo studio al cliente.",
    sections: [
      {
        id: "cosa-facciamo",
        heading: "Cosa possiamo seguire per voi",
        items: [
          ["Calcolo strutturale", "Relazioni e elaborati secondo NTC / Eurocodici con Sismicad."],
          ["Modello 3D", "Modellazione per officina in Tekla Structures (licenza ufficiale)."],
          ["Nodi e connessioni", "Verifica FEM di giunti e dettagli critici con IDEA StatiCa (licenza ufficiale)."],
          ["Disegni d'officina", "Disegni di montaggio, assemblaggi e file NC (controllo numerico)."],
          ["Continuità", "Rapporto di partner su più commesse, non solo un singolo incarico isolato."],
        ],
      },
      {
        id: "flusso",
        heading: "Dal brief agli elaborati di officina",
        items: [
          [
            "1. Brief e vincoli",
            "Tipologia (capannone, scala, soppalco, villa), carichi, vincoli di montaggio e standard di officina.",
          ],
          [
            "2. Calcolo (Sismicad)",
            "Modello FEM, verifiche NTC / Eurocodici, relazioni e elaborati firmati quando richiesti.",
          ],
          [
            "3. Modello Tekla",
            "Profili, bulloneria, saldature e ancoraggi in Tekla Structures: una sola fonte per produzione e montaggio.",
          ],
          [
            "4. Nodi critici (IDEA StatiCa)",
            "Verifica FEM locale di giunti, piastre e dettagli dove il modello globale non basta.",
          ],
          [
            "5. Estrazione elaborati",
            "Tavole, assemblaggi, distinte e file NC coerenti col modello — senza ridisegnare a mano pezzo per pezzo.",
          ],
        ],
      },
      {
        id: "deliverable",
        heading: "Cosa consegnamo all'officina",
        items: [
          ["Tavole d'officina", "Viste, sezioni, quote e specifiche di materiale per ogni elemento."],
          ["Assemblaggi e montaggio", "Disegni di assemblaggio e di montaggio con sequenza e giunti di cantiere."],
          ["Distinte", "Distinte di taglio / materiale per ordine e produzione."],
          ["File NC", "Dati orientati al controllo numerico, dove il flusso di officina lo richiede."],
          ["Scambio dati", "IFC o altri formati di scambio per coordinamento con committenza e impresa, se concordato."],
          [
            "Modello Tekla",
            "Consegna del modello all'officina quando usate Tekla in produzione: si valuta in incarico.",
          ],
        ],
      },
      {
        id: "come-lavoriamo",
        heading: "Come lavoriamo con l'officina",
        body: [
          "Voi restate il riferimento per produzione e, tipicamente, per direzione lavori e pratiche verso committenza e enti. Noi consegniamo il pacchetto progettuale e costruttivo necessario a fabbricare e montare in sicurezza: Sismicad per il calcolo, Tekla Structures e IDEA StatiCa (licenze ufficiali) per modello, officina e nodi critici.",
          "Lavoriamo soprattutto con officine in Lombardia (Brescia, Bergamo, Milano) e su commesse in Veneto, Piemonte ed Emilia-Romagna. Se l'officina non usa Tekla, gli elaborati restano leggibili in PDF/DWG standard.",
        ],
      },
    ],
    faqHeading: "Domande frequenti",
    faq: [
      [
        "Potete mandare esempi di tavole d'officina?",
        "Sì: dopo l'invio della richiesta potete scaricare un pacchetto ZIP con tavole tipologiche (casa, scala, soppalco).",
      ],
      [
        "Lavorate con Tekla?",
        "Sì: usiamo Tekla Structures con licenza ufficiale per modellazione e elaborati d'officina. Il calcolo strutturale è su Sismicad; per i nodi critici integriamo IDEA StatiCa (licenza ufficiale).",
      ],
      [
        "Consegnate anche il modello Tekla?",
        "Se l'officina lo usa in produzione, sì: si definisce in incarico. Altrimenti consegniamo tavole, assemblaggi e distinte estratte dal modello in formati standard.",
      ],
      [
        "Cosa include tipicamente il pacchetto d'officina?",
        "Tavole d'officina, disegni di assemblaggio e montaggio, distinte di taglio/materiale e, dove serve, file NC. I nodi critici si verificano con IDEA StatiCa.",
      ],
      [
        "Seguite anche direzione lavori e pratiche?",
        "Spesso restano a carico dell'officina o del committente. Se servono, segnalatelo nella richiesta: si valuta per singola commessa.",
      ],
      [
        "In quali zone lavorate con le carpenterie?",
        "Bacino principale: Lombardia (Brescia, Bergamo, Milano). Accettiamo anche commesse in Veneto, Piemonte ed Emilia-Romagna.",
      ],
    ],
    form: {
      successTitle: "Richiesta inviata",
      successBody:
        "Vi risponderemo al più presto. Se il download degli esempi non parte da solo, usate il pulsante qui sotto.",
      successDownload: "Scarica esempi elaborati (ZIP)",
      successDownloadStarted: "Download avviato…",
      company: "Azienda",
      name: "Nome e cognome",
      email: "Email",
      phone: "Telefono",
      location: "Luogo",
      scope: "Cosa chiedete allo studio",
      scopes: [
        { id: "calcolo", label: "Calcolo / elaborati firmati" },
        { id: "modello3d", label: "Modello 3D / Tekla" },
        { id: "officina", label: "Disegni d'officina" },
        { id: "altro", label: "Altro" },
      ],
      message: "Dettagli della richiesta",
      messagePlaceholder: "Scrivi qui i dettagli della tua richiesta",
      privacyLead: "Ho letto e accetto la",
      privacyLink: "privacy policy",
      submit: "Invia richiesta",
      submitting: "Invio in corso…",
      error: "Invio non riuscito. Riprova o scrivi a",
      errors: {
        name: "Inserisci nome e cognome.",
        email: "Email non valida.",
        message: "Messaggio troppo breve (min. 20 caratteri).",
        privacy: "Accetta la privacy per inviare.",
      },
    },
  },
  en: {
    title: "Structural engineers for EN 1090 steel fabricators",
    lead:
      "Structural engineers in Northern Italy for EN 1090-certified workshops: analysis and digitally signed deliverables, 3D models and fabrication drawings (general arrangement, assemblies and NC files for numerical control). Site supervision and filings, where needed, are agreed case by case.",
    downloadHeading: "Sample fabrication drawings",
    downloadBody:
      "Examples of shop drawings delivered by the practice. For evaluation of drawing standard only, not for construction use.",
    downloadHint: "The ZIP pack is available after completing the",
    downloadHintLink: "enquiry form below",
    formHeading: "Quote enquiry",
    formLead:
      "Upon completion of the form, the enquiry is sent to the studio and the sample drawings download starts.",
    sections: [
      {
        id: "what-we-do",
        heading: "What we can cover for you",
        items: [
          ["Structural analysis", "Reports and drawings to NTC / Eurocodes with Sismicad."],
          ["3D model", "Workshop modelling in Tekla Structures (official licence)."],
          ["Connections and details", "Local FEM checks on joints and critical details with IDEA StatiCa (official licence)."],
          ["Shop drawings", "General arrangement drawings, assemblies and NC files (numerical control)."],
          ["Ongoing partner", "A working relationship across jobs, not only one-off commissions."],
        ],
      },
      {
        id: "workflow",
        heading: "From brief to fabrication drawings",
        items: [
          [
            "1. Brief and constraints",
            "Building type (hall, stair, mezzanine, house), loads, erection constraints and workshop standards.",
          ],
          [
            "2. Analysis (Sismicad)",
            "FEM model, NTC / Eurocode checks, reports and signed deliverables when required.",
          ],
          [
            "3. Tekla model",
            "Members, bolts, welds and anchors in Tekla Structures — one source for fabrication and erection.",
          ],
          [
            "4. Critical connections (IDEA StatiCa)",
            "Local FEM checks on joints, base plates and details where the global model is not enough.",
          ],
          [
            "5. Drawing extraction",
            "Shop drawings, assemblies, material lists and NC data coherent with the model — without redrawing piece by piece.",
          ],
        ],
      },
      {
        id: "deliverables",
        heading: "What we deliver to the workshop",
        items: [
          ["Shop drawings", "Views, sections, dimensions and material specs for each member."],
          ["Assemblies and erection", "Assembly and erection drawings with sequence and site joints."],
          ["Material lists", "Cutting / material lists for ordering and production."],
          ["NC files", "NC-oriented data where the workshop workflow requires it."],
          ["Data exchange", "IFC or other exchange formats for client and contractor coordination, if agreed."],
          [
            "Tekla model",
            "Model handover when the workshop runs Tekla in production — agreed per commission.",
          ],
        ],
      },
      {
        id: "how-we-work",
        heading: "How we work with the workshop",
        body: [
          "You typically remain the lead for fabrication and often for site supervision and filings. We deliver the design and fabrication package needed to manufacture and erect safely: Sismicad for analysis, Tekla Structures and IDEA StatiCa (official licences) for modelling, shop drawings and critical connections.",
          "We work mainly with fabricators in Lombardy (Brescia, Bergamo, Milan) and on jobs in Veneto, Piedmont and Emilia-Romagna. If the workshop does not use Tekla, deliverables remain readable as standard PDF/DWG.",
        ],
      },
    ],
    faqHeading: "FAQ",
    faq: [
      [
        "Can you send sample shop drawings?",
        "Yes — after you submit the enquiry you can download a ZIP with typical drawings (house, stair, mezzanine).",
      ],
      [
        "Do you work in Tekla?",
        "Yes — we use Tekla Structures with an official licence for modelling and fabrication drawings. Structural analysis runs in Sismicad; for critical connections we integrate IDEA StatiCa (official licence).",
      ],
      [
        "Do you also deliver the Tekla model?",
        "If the workshop uses it in production, yes — agreed per commission. Otherwise we deliver shop drawings, assemblies and lists extracted from the model in standard formats.",
      ],
      [
        "What does a typical shop package include?",
        "Shop drawings, assembly and erection drawings, cutting/material lists and, where needed, NC files. Critical connections are checked with IDEA StatiCa.",
      ],
      [
        "Do you also handle site supervision and filings?",
        "Often those stay with the fabricator or client. If you need them, say so in the enquiry — we assess per job.",
      ],
      [
        "Where do you work with fabricators?",
        "Main basin: Lombardy (Brescia, Bergamo, Milan). We also take commissions in Veneto, Piedmont and Emilia-Romagna.",
      ],
    ],
    form: {
      successTitle: "Enquiry sent",
      successBody:
        "We will get back to you shortly. If the sample drawings download does not start on its own, use the button below.",
      successDownload: "Download sample drawings (ZIP)",
      successDownloadStarted: "Download started…",
      company: "Company",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      location: "Location",
      scope: "What you need from us",
      scopes: [
        { id: "calcolo", label: "Analysis / signed deliverables" },
        { id: "modello3d", label: "3D / Tekla" },
        { id: "officina", label: "Shop drawings" },
        { id: "altro", label: "Other" },
      ],
      message: "Request details",
      messagePlaceholder: "Write the details of your enquiry here",
      privacyLead: "I have read and accept the",
      privacyLink: "privacy policy",
      submit: "Send enquiry",
      submitting: "Sending…",
      error: "Send failed. Please try again or email",
      errors: {
        name: "Enter your full name.",
        email: "Invalid email.",
        message: "Message too short (min. 20 characters).",
        privacy: "Accept the privacy policy to send.",
      },
    },
  },
} as const;
