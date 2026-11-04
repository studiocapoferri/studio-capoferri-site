/** Shared EN copy + IT why-bullets for steel city landings. */

export const steelLandingCopyEn = {
  heroTitle: (city: string) => `Structural engineer in ${city} for steel buildings`,
  process:
    "From structural calculations in accordance with NTC 2018 and Eurocodes to fabrication shop drawings, site supervision and final testing, we follow every phase of the project, from the initial idea through to the construction site.",
  whyTitle: "Why choose a steel structure",
  whyBullets: [
    ["Seismic performance", "lightness and ductility make steel ideal in seismic areas."],
    ["Faster construction", "steelwork is prefabricated in the workshop and dry-assembled on site."],
    ["Architectural freedom", "large spans, cantilevers and open volumes without intermediate columns."],
    ["Vertical extensions", "reduced weight makes steel ideal for adding levels to existing buildings."],
    ["Sustainability", "fully recyclable material suitable for high-efficiency envelopes and PV-ready roofs."],
  ] as const,
  scopeTitle: "What we design: from residential to industrial",
  scopeLead:
    "We design steel structures for every intended use: villas and private residences, multi-storey buildings, industrial sheds with overhead cranes, commercial buildings and event spaces. Some recent projects include:",
  faqTitle: "Questions for a structural engineer",
  cities: {
    brescia: {
      h1: "Structural engineer in Brescia: steel from Adro across the province",
      introLead:
        "The office is in Adro, in Franciacorta — site visits across the Brescia province start from here. We design steel houses and vertical extensions, industrial halls (including crane buildings) and shop drawings for local fabricators. Not a remote list of cities we “cover”.",
      process:
        "Calculations to NTC 2018 and the Eurocodes, fabrication shop drawings, site supervision and testing. Around Brescia and Franciacorta the site is minutes from the office: we follow erection and variations without a shop-front branch.",
      scopeTitle: "What we design in the Brescia province",
      scopeLead:
        "Day-to-day work is residential and industrial on our home ground: halls in Franciacorta, mezzanines and roofs, steel houses. Published cases:",
      areaHeading: "From Adro: Franciacorta, the province, then further afield",
      areaBody:
        "Based in Adro, between Franciacorta, Val Calepio and Lake Iseo. We work across Brescia and the province — Franciacorta, Val Trompia, the Brescia side of Lake Garda, the plain — from this office, not from a city letterhead.",
      areaBodySecondary:
        "Outside the province we also take work in Bergamo, Milan and, on specific commissions, Veneto, Piedmont and Emilia-Romagna.",
      ctaHeading: "A steel project in Franciacorta or the Brescia province?",
      faqCostAnswer:
        "It depends on size, use and whether shop drawings are included. From Adro a first visit in the province is quick; after that, or after a technical call, we send a no-obligation quote for calculation, fabrication drawings and site supervision.",
      faqAreaAnswer:
        "Yes. The office is in Adro (Brescia): Brescia and Franciacorta are the daily radius. We also work across the rest of Lombardy and, on commission, in Veneto, Piedmont and Emilia-Romagna.",
      featuredProjects: [
        ["Industrial building in Erbusco (BS)", "two overhead cranes, sandwich panels and shop drawings — Franciacorta"],
        ["Headquarters mezzanine in Provaglio d'Iseo (BS)", "steel mezzanine and fabrication on an existing industrial building"],
        ["Steel villa in Salsomaggiore Terme (PR)", "steel frame, piles and a photovoltaic roof — a house type we also design in the province"],
        ["Superstudio Village in Milan", "when the job leaves the province: new steel structure and strengthening"],
      ] as const,
    },
    bergamo: {
      h1: "Steel structures across the Bergamo province",
      introLead:
        "We design across the whole Bergamo province: the city, hinterland, Isola, the plain, Val Seriana and Val Brembana. Steel houses and vertical extensions, halls and fabrication drawings. The office is in Adro, on the provincial border: we visit the site in the province; calculation stays in the studio.",
      process:
        "NTC 2018 and Eurocode calculations, shop drawings, site supervision. For Bergamo clients and contractors it is the same sequence as in Franciacorta — without needing a city-centre engineer.",
      scopeTitle: "What we design in the Bergamo province",
      scopeLead:
        "Residential and industrial across the province: steel houses and villas, halls, mezzanines, roofs. Type cases:",
      areaHeading: "The whole province: city, plain, Isola, valleys",
      areaBody:
        "Bergamo city and hinterland, Isola Bergamasca, the plain, Val Seriana, Val Brembana, Val Cavallina. We do not have a Bergamo office: we leave from Adro and go to site where needed.",
      areaBodySecondary:
        "Brescia remains the home basin. Milan and the other provinces come by commission.",
      ctaHeading: "A steel project in the Bergamo province?",
      faqCostAnswer:
        "It depends on size and use. For work in the province the first step is a call or a site visit; then a no-obligation quote for calculation, shop drawings and site supervision.",
      faqAreaAnswer:
        "Yes: the whole Bergamo province — city, plain, Isola and the valleys. The office is in Adro, on the provincial border.",
      featuredProjects: [
        ["Industrial hall in Erbusco (BS)", "overhead cranes and shop drawings — an industrial type we also take in Bergamo province"],
        ["Headquarters mezzanine in Provaglio d'Iseo (BS)", "steel mezzanine on an existing building — the same approach on plants in the province"],
        ["Steel villa in Salsomaggiore Terme (PR)", "frame and photovoltaic roof — steel houses for Bergamo-area clients"],
        ["Superstudio Maxi in Milan Famagosta", "reuse and new steel, outside the province"],
      ] as const,
    },
    milano: {
      h1: "Steel structures in Milan: venues, reuse, fabrication",
      introLead:
        "In Milan the published work is not a Franciacorta villa: it is new steel and strengthening on existing buildings. Superstudio Village in Bovisa and Superstudio Maxi in Famagosta — steel frames, consolidations, seismic upgrading — are the public cases. The office stays in Adro; the site is in the city or hinterland.",
      process:
        "A Milan quote starts from the building type (hall to convert, event venue, addition, hinterland house) and from existing constraints, not from a rate card. Then NTC 2018 / Eurocode calculations, shop drawings and site supervision with the contractor and fabricator.",
      scopeTitle: "What we have designed in Milan",
      scopeLead:
        "The two Superstudio jobs are the city reference. Alongside: industrial and residential types we also take in the hinterland and Brianza.",
      areaHeading: "Milan and hinterland — calculation from Adro",
      areaBody:
        "Sites in the city (Bovisa, Famagosta) and in the northern/southern hinterland, Monza and Brianza. We do not have a Milan office: calculation is in Franciacorta; we visit the site when needed.",
      areaBodySecondary:
        "Brescia and Bergamo remain the home basin. Milan commissions come by type (reuse, venues, steelwork), not because we “cover all of Lombardy”.",
      ctaHeading: "A reuse or steel structure in Milan?",
      faqCostAnswer:
        "In Milan, existing-building constraints, seismic work and site logistics often weigh more than floor area alone. After a brief (building type, district, programme) or a visit, we send a no-obligation quote: calculation, shop drawings, site supervision.",
      faqAreaAnswer:
        "Yes, on commission: city and hinterland, as on the Superstudio jobs. The office is in Adro (Brescia) — a Franciacorta structural practice that has already worked in Milan, not a neighbourhood studio.",
      featuredProjects: [
        ["Superstudio Village in Milan Bovisa", "new steel structure around 16 metres high, strengthening and reconstruction"],
        ["Superstudio Maxi in Famagosta", "industrial hall reuse, seismic upgrading and new steel"],
        ["Industrial hall in Erbusco (BS)", "crane building — the same approach on hinterland commissions"],
        ["Steel villa in Salsomaggiore Terme (PR)", "frame and photovoltaic roof — steel houses also outside the city"],
      ] as const,
    },
  },
  faqFixed: [
    [
      "How much does a structural engineer charge for a steel building?",
      "Costs depend on size, complexity and the intended use of the building. After an initial inspection or technical call, we provide a detailed, no-obligation quotation for structural design, fabrication drawings and site supervision.",
    ],
    [
      "What advantages does steel offer compared with reinforced concrete?",
      "Steel combines lightness, seismic performance, faster site operations through workshop prefabrication and major architectural flexibility. It is also recyclable and well suited to sustainable construction.",
    ],
    [
      "Do you also handle construction supervision and steel erection support?",
      "Yes. We follow the full process: structural calculations to NTC 2018 and Eurocodes, fabrication drawings, site erection assistance and structural site supervision up to final testing.",
    ],
    [
      "Can a steel extension be added on top of an existing building?",
      "Yes. The low self-weight of steel makes it ideal for vertical extensions. We first verify the structural suitability of the existing building, then design the new addition while minimising extra loads.",
    ],
  ] as const,
} as const;

export const steelWhyIt = [
  ["Resistenza sismica", "leggerezza e duttilità rendono l'acciaio ideale nelle zone sismiche della Lombardia."],
  ["Tempi di cantiere ridotti", "la carpenteria metallica viene prefabbricata in officina e montata a secco in cantiere."],
  ["Libertà architettonica", "grandi luci, sbalzi e volumi aperti senza pilastri intermedi."],
  ["Sopraelevazioni", "il peso contenuto consente di ampliare in altezza edifici esistenti."],
  ["Sostenibilità", "materiale riciclabile al 100%, perfetto per involucri ad alta efficienza energetica e coperture fotovoltaiche."],
] as const;

export type SteelLandingCitySlug = keyof typeof steelLandingCopyEn.cities;
