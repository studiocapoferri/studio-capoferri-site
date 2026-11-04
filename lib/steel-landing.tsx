import type { Metadata } from "next";
import { LocalizedSteelLandingPage } from "@/components/pages/LocalizedSteelLandingPage";
import { buildPageMetadata } from "@/lib/seo";

export type SteelLandingConfig = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage: string;
  h1: string;
  introLead: string;
  process: string;
  scopeTitle: string;
  scopeLead: string;
  areaHeading: string;
  areaBody: string;
  areaBodySecondary?: string;
  ctaHeading: string;
  faqCostQuestion: string;
  faqCostAnswer: string;
  faqAreaAnswer: string;
  areaServedPrimary: string;
  heroImage: { src: string; alt: string; altEn: string };
  secondaryImage: { src: string; alt: string; altEn: string };
  featuredProjects: { href: string; title: string; description: string }[];
};

export function buildSteelLandingMetadata(config: SteelLandingConfig): Metadata {
  return buildPageMetadata({
    title: config.metaTitle,
    description: config.metaDescription,
    path: `/progettazione-strutture-acciaio-${config.slug}`,
    image: config.ogImage,
    keywords: [...config.keywords],
  });
}

export function SteelLandingPage({ config }: { config: SteelLandingConfig }) {
  return <LocalizedSteelLandingPage config={config} />;
}

export const steelLandingBrescia: SteelLandingConfig = {
  slug: "brescia",
  city: "Brescia",
  metaTitle: "Ingegnere strutturista a Brescia: acciaio in Franciacorta",
  metaDescription:
    "Sede ad Adro (BS): ville, capannoni e sopraelevazioni in acciaio in Franciacorta e provincia. Calcolo NTC 2018, disegni d'officina, direzione lavori.",
  keywords: [
    "progettazione strutture in acciaio Brescia",
    "strutture in acciaio Lombardia",
    "calcolo strutturale acciaio Brescia",
    "ingegnere strutturista Brescia",
    "carpenteria metallica progettazione",
    "capannoni in acciaio Brescia",
    "ville in acciaio Franciacorta",
    "sopraelevazioni in acciaio",
    "disegni costruttivi officina acciaio",
    "NTC 2018 strutture metalliche",
  ],
  ogImage: "/assets/residenziale/ingegneria-civile-brescia.webp",
  h1: "Ingegnere strutturista a Brescia: acciaio da Adro alla provincia",
  introLead:
    "Lo studio è ad Adro, in Franciacorta: da qui partono i sopralluoghi in provincia di Brescia. Progettiamo ville e sopraelevazioni, capannoni (anche con carroponte) e carpenteria per le imprese del territorio — non un elenco di città coperte a distanza.",
  process:
    "Calcolo secondo NTC 2018 ed Eurocodici, disegni costruttivi d'officina, direzione lavori e collaudo. Su Brescia e Franciacorta il cantiere è a pochi minuti dalla sede: seguiamo montaggio e varianti senza una filiale di facciata.",
  scopeTitle: "Cosa progettiamo in provincia di Brescia",
  scopeLead:
    "Il lavoro quotidiano è residenziale e industriale sul territorio: capannoni in Franciacorta, soppalchi e coperture, ville in acciaio. Qualche caso pubblicato:",
  areaHeading: "Da Adro: Franciacorta, provincia e cantieri oltre Brescia",
  areaBody:
    "Sede ad Adro, tra Franciacorta, Val Calepio e lago d'Iseo. Interveniamo su Brescia città e provincia — Franciacorta, Val Trompia, Garda bresciano, pianura — con sopralluogo dalla stessa sede, non da un recapito in città.",
  areaBodySecondary:
    "Fuori provincia lavoriamo anche su Bergamo, Milano e, per incarichi specifici, Veneto, Piemonte ed Emilia-Romagna.",
  ctaHeading: "Un progetto in acciaio in Franciacorta o in provincia di Brescia?",
  faqCostQuestion: "Quanto costa la progettazione di una struttura in acciaio a Brescia?",
  faqCostAnswer:
    "Dipende da dimensioni, destinazione e se serve anche l'officina. Da Adro il primo sopralluogo in provincia è rapido: dopo quello, o dopo una chiamata tecnica, inviamo un preventivo senza impegno per calcolo, costruttivi e direzione lavori.",
  faqAreaAnswer:
    "Sì. La sede è ad Adro (BS): Brescia e Franciacorta sono il raggio quotidiano. Operiamo anche sul resto della Lombardia e, per incarichi, in Veneto, Piemonte ed Emilia-Romagna.",
  areaServedPrimary: "Provincia di Brescia",
  heroImage: {
    src: "/assets/residenziale/ingegneria-civile-brescia.webp",
    alt: "Progettazione di strutture in acciaio a Brescia — villa residenziale con telaio metallico",
    altEn: "Steel structure design in Brescia — residential villa with steel frame",
  },
  secondaryImage: {
    src: "/assets/industriale/centro-direzionale-provaglio-diseo/vista-generale-soppalco-centro-direzionale-provaglio-diseo.webp",
    alt: "Soppalco in acciaio a Provaglio d'Iseo — progettazione strutturale in provincia di Brescia",
    altEn: "Steel mezzanine in Provaglio d'Iseo — structural design in the Brescia province",
  },
  featuredProjects: [
    {
      href: "/progetti/industriali/capannone-erbusco",
      title: "Capannone industriale a Erbusco (BS)",
      description: "due carroponti, pannelli sandwich e disegni d'officina — Franciacorta",
    },
    {
      href: "/progetti/industriali/centro-direzionale-provaglio-diseo",
      title: "Centro direzionale a Provaglio d'Iseo (BS)",
      description: "soppalco e carpenteria su edificio industriale esistente",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-salsomaggiore",
      title: "Villa in acciaio a Salsomaggiore Terme (PR)",
      description: "telaio in acciaio, pali e copertura fotovoltaica — tipologia residenziale che progettiamo anche in provincia",
    },
    {
      href: "/progetti/ricettivi/superstudio-village",
      title: "Superstudio Village a Milano",
      description: "quando l'incarico esce dalla provincia: nuova struttura in acciaio e consolidamenti",
    },
  ],
};

export const steelLandingBergamo: SteelLandingConfig = {
  slug: "bergamo",
  city: "Bergamo",
  metaTitle: "Ingegnere strutturista a Bergamo e in provincia",
  metaDescription:
    "Strutture in acciaio in tutta la provincia di Bergamo: città, pianura, Isola, valli. Calcolo NTC 2018, disegni d'officina, direzione lavori. Sede ad Adro.",
  keywords: [
    "progettazione strutture in acciaio Bergamo",
    "strutture in acciaio Bergamo",
    "calcolo strutturale acciaio Bergamo",
    "ingegnere strutturista Bergamo",
    "carpenteria metallica Bergamo",
    "capannoni in acciaio Bergamo",
    "ville in acciaio Val Seriana",
    "sopraelevazioni in acciaio Bergamo",
    "disegni costruttivi officina acciaio",
    "NTC 2018 strutture metalliche",
  ],
  ogImage: "/assets/residenziale/strutture-acciaio-bergamo.webp",
  h1: "Strutture in acciaio in provincia di Bergamo",
  introLead:
    "Progettiamo in tutta la provincia di Bergamo: città, hinterland, Isola, pianura, Val Seriana e Val Brembana. Ville e sopraelevazioni, capannoni e carpenteria. La sede è ad Adro, a ridosso del confine: il sopralluogo è in provincia, il calcolo in studio.",
  process:
    "Calcolo NTC 2018 ed Eurocodici, disegni costruttivi d'officina, direzione lavori. Per imprese e committenti bergamaschi è lo stesso flusso che in Franciacorta — senza dover avere uno strutturista in città.",
  scopeTitle: "Cosa progettiamo in provincia di Bergamo",
  scopeLead:
    "Residenziale e industriale su tutta la provincia: case e ville in acciaio, capannoni, soppalchi, coperture. Casi di tipologia:",
  areaHeading: "Tutta la provincia: città, pianura, Isola, valli",
  areaBody:
    "Bergamo città e hinterland, Isola Bergamasca, pianura, Val Seriana, Val Brembana, Val Cavallina. Non abbiamo una sede a Bergamo: partiamo da Adro e andiamo in cantiere dove serve.",
  areaBodySecondary:
    "Brescia resta il bacino di sede. Milano e le altre province arrivano per incarico.",
  ctaHeading: "Un progetto in acciaio in provincia di Bergamo?",
  faqCostQuestion: "Quanto costa la progettazione di una struttura in acciaio a Bergamo?",
  faqCostAnswer:
    "Dipende da dimensioni e destinazione. Per incarichi in provincia il primo passo è una chiamata o un sopralluogo; poi un preventivo senza impegno su calcolo, costruttivi e direzione lavori.",
  faqAreaAnswer:
    "Sì: tutta la provincia di Bergamo — città, pianura, Isola e valli. La sede è ad Adro, a ridosso del confine.",
  areaServedPrimary: "Provincia di Bergamo",
  heroImage: {
    src: "/assets/residenziale/strutture-acciaio-bergamo.webp",
    alt: "Progettazione di strutture in acciaio a Bergamo — villa residenziale con telaio metallico",
    altEn: "Steel structure design in Bergamo — residential villa with steel frame",
  },
  secondaryImage: {
    src: "/assets/residenziale/villa-acciaio-salsomaggiore/carpenteria-metallica-villa-acciaio.webp",
    alt: "Carpenteria metallica per ville e residenziale in acciaio — tipologia progettata anche in provincia di Bergamo",
    altEn: "Steel fabrication for houses — a type we also design in the Bergamo province",
  },
  featuredProjects: [
    {
      href: "/progetti/industriali/capannone-erbusco",
      title: "Capannone industriale a Erbusco (BS)",
      description: "carroponti e disegni d'officina — tipologia industriale che portiamo anche in Bergamasca",
    },
    {
      href: "/progetti/industriali/centro-direzionale-provaglio-diseo",
      title: "Centro direzionale a Provaglio d'Iseo (BS)",
      description: "soppalco e carpenteria su esistente — stesso approccio su impianti in provincia",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-salsomaggiore",
      title: "Villa in acciaio a Salsomaggiore Terme (PR)",
      description: "telaio e copertura fotovoltaica — residenze in acciaio per committenti bergamaschi",
    },
    {
      href: "/progetti/ricettivi/superstudio-maxi",
      title: "Superstudio Maxi a Milano Famagosta",
      description: "recupero e nuove strutture in acciaio, fuori provincia",
    },
  ],
};

export const steelLandingMilano: SteelLandingConfig = {
  slug: "milano",
  city: "Milano",
  metaTitle: "Strutture in acciaio a Milano: eventi, recupero, carpenteria",
  metaDescription:
    "A Milano il lavoro pubblicato è Superstudio Bovisa e Famagosta: nuove strutture, consolidamenti, adeguamento sismico. Calcolo e disegni d'officina da Adro.",
  keywords: [
    "progettazione strutture in acciaio Milano",
    "strutture in acciaio Milano",
    "calcolo strutturale acciaio Milano",
    "ingegnere strutturista Milano",
    "carpenteria metallica Milano",
    "capannoni in acciaio Milano",
    "ville in acciaio Milano",
    "sopraelevazioni in acciaio Milano",
    "disegni costruttivi officina acciaio",
    "NTC 2018 strutture metalliche",
  ],
  ogImage: "/assets/superstudio-maxi/strutture-acciaio-milano.webp",
  h1: "Strutture in acciaio a Milano: spazi per eventi, recupero, carpenteria",
  introLead:
    "A Milano il lavoro che mostriamo non è la villa in Franciacorta: è il recupero e la nuova carpenteria su immobili esistenti. Superstudio Village a Bovisa e Superstudio Maxi a Famagosta — strutture in acciaio, consolidamenti, adeguamento sismico — sono i casi pubblici. La sede resta Adro; il cantiere è in città o in hinterland.",
  process:
    "Il preventivo milanese parte dal tipo di immobile (capannone da convertire, spazio eventi, addizione, villa in hinterland) e dai vincoli esistenti, non da un listino. Poi calcolo NTC 2018 / Eurocodici, costruttivi d'officina e direzione lavori in coordinamento con impresa e carpenteria.",
  scopeTitle: "Cosa abbiamo progettato a Milano",
  scopeLead:
    "I due Superstudio sono il riferimento in città. Accanto: tipologia industriale e residenziale che portiamo anche in hinterland e Brianza.",
  areaHeading: "Milano città, hinterland — calcolo da Adro",
  areaBody:
    "Cantieri in città (Bovisa, Famagosta) e in hinterland nord/sud, Monza e Brianza. Non abbiamo una sede milanese: il calcolo è in Franciacorta, il sopralluogo sul posto quando serve.",
  areaBodySecondary:
    "Brescia e Bergamo restano il bacino di sede. Gli incarichi milanesi arrivano per tipologia (recupero, eventi, carpenteria), non perché «copriamo tutta la Lombardia».",
  ctaHeading: "Un recupero o una struttura in acciaio a Milano?",
  faqCostQuestion: "Quanto costa la progettazione di una struttura in acciaio a Milano?",
  faqCostAnswer:
    "Su Milano pesano vincoli dell'esistente, sismica e interferenze di cantiere più che i soli mq. Dopo una scheda (tipo di edificio, zona, tempi) o un sopralluogo, mandiamo un preventivo senza impegno: calcolo, costruttivi, direzione lavori.",
  faqAreaAnswer:
    "Sì, su incarico: città e hinterland, come sui Superstudio. La sede è ad Adro (BS); non è uno studio di quartiere milanese, è lo strutturista di Franciacorta che ha già lavorato in città.",
  areaServedPrimary: "Provincia di Milano",
  heroImage: {
    src: "/assets/superstudio-maxi/strutture-acciaio-milano.webp",
    alt: "Progettazione di strutture in acciaio a Milano — struttura portante in acciaio",
    altEn: "Steel structure design in Milan — load-bearing steel structure",
  },
  secondaryImage: {
    src: "/assets/superstudio-village-struttura-acciaio.webp",
    alt: "Struttura in acciaio per edificio a Milano — Superstudio Village Bovisa",
    altEn: "Steel structure for a building in Milan — Superstudio Village Bovisa",
  },
  featuredProjects: [
    {
      href: "/progetti/ricettivi/superstudio-village",
      title: "Superstudio Village a Milano Bovisa",
      description: "nuova struttura in acciaio alta circa 16 metri, consolidamenti e ricostruzioni",
    },
    {
      href: "/progetti/ricettivi/superstudio-maxi",
      title: "Superstudio Maxi a Famagosta",
      description: "recupero di capannone, adeguamento sismico e nuove strutture in acciaio",
    },
    {
      href: "/progetti/industriali/capannone-erbusco",
      title: "Capannone industriale a Erbusco (BS)",
      description: "tipologia industriale con carroponti — lo stesso approccio su incarichi in hinterland",
    },
    {
      href: "/progetti/residenziali/villa-acciaio-salsomaggiore",
      title: "Villa in acciaio a Salsomaggiore Terme (PR)",
      description: "telaio e copertura fotovoltaica — residenze in acciaio anche fuori città",
    },
  ],
};
