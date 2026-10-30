import Link from "next/link";
import type { ReactNode } from "react";

/** Testi riportati dalle pagine HTML attuali (index, chi-siamo, progetti index). */

export type homeChiSiamoBlock = {
  text: ReactNode;
  /** Versione più corta usata solo sotto md (mobile). */
  textMobile?: ReactNode;
  image: "struttura" | "cantiere";
};

export const homeChiSiamo: { title: string; blocks: homeChiSiamoBlock[] } = {
  title: "Chi siamo",
  blocks: [
    {
      text: (
        <>
          <strong>Studio Capoferri</strong> è uno studio di progettazione strutturale ad Adro (Brescia), Italia. Da oltre
          quarant&apos;anni progettiamo strutture (acciaio, cemento armato, muratura) in Franciacorta e nel Nord e Centro
          Italia. Calcolo, disegni d&apos;officina, direzione lavori. Architettura e urbanistica quando l&apos;incarico lo
          richiede.
        </>
      ),
      textMobile: (
        <>
          <strong>Studio Capoferri</strong> è uno studio di progettazione strutturale ad Adro (Brescia), Italia. Da oltre
          quarant&apos;anni progettiamo strutture in acciaio, cemento armato e muratura in Franciacorta e nel Nord e Centro
          Italia.
        </>
      ),
      image: "struttura",
    },
    {
      text: (
        <>
          Lavoriamo con imprese generali, general contractor, architetti e studi tecnici soprattutto sul residenziale e
          sull&apos;industriale: ville e case in acciaio, capannoni, silos, sopraelevazioni, carpenterie, interventi su
          esistenti.
          Sede ad Adro; commesse in Lombardia (Brescia, Bergamo, Milano) e nelle regioni vicine. Progettazione antincendio
          quando il brief lo chiede.
        </>
      ),
      textMobile: (
        <>
          Residenziale e industriale: ville in acciaio, capannoni, silos, sopraelevazioni, carpenterie. Lombardia e
          Nord-Centro Italia. Antincendio quando serve.
        </>
      ),
      image: "cantiere",
    },
  ],
};

export const homeServiziIntro =
  "Acciaio, cemento armato, muratura per imprese generali e committenze tecniche. Calcolo, disegni d'officina, direzione lavori. Architettura, pratiche e sicurezza di cantiere quando l'incarico lo richiede.";

/** Home pillars only (full catalogue lives on /servizi). */
export const homeServiceCards = [
  {
    title: "Progettazione strutturale",
    description:
      "Strutture in acciaio, cemento armato e muratura. Analisi FEM, modellazione BIM, verifiche sismiche e progettazione antincendio.",
    href: "/servizi#progettazione-strutturale",
  },
  {
    title: "Direzione lavori",
    description: "Supervisione tecnica, assistenza in cantiere, verifiche strutturali e relazioni tecniche.",
    href: "/servizi#direzione-lavori",
  },
  {
    title: "Sicurezza cantieri",
    description: "Coordinamento sicurezza (CSP/CSE), piani di sicurezza e gestione rischi.",
    href: "/servizi#sicurezza-cantieri",
  },
  {
    title: "Urbanistica e architettura",
    description: "Progettazione architettonica, piani attuativi, varianti urbanistiche e analisi di conformità.",
    href: "/servizi#urbanistica-architettura",
  },
] as const;

export const homeProgettiIntro =
  "Capannoni, silos, ville in acciaio, sopraelevazioni, carpenterie. Una selezione per ambito: residenziale, industriale, eventi.";

export const progettiIndexIntro =
  "Case history dello studio: strutture in acciaio, anche in abbinamento a cemento armato e muratura, e incarichi su prodotti in acciaio come le lamiere da getto. Raggruppate per ambito: case e ville, industria, spazi per mostre e convegni.";

export const certificationsIntro =
  "Tutte le attività sono svolte da professionisti in possesso delle abilitazioni richieste dalla normativa di settore.";

export const certifications = [
  {
    title: "Abilitazione CSP/CSE",
    text: "Professionisti abilitati per il ruolo di CSP e CSE nei cantieri",
  },
  {
    title: "Pratiche di prevenzione incendi",
    text: "Professionisti iscritti agli elenchi del Ministero dell'interno di cui all'articolo 16 del decreto legislativo 8 marzo 2006, n. 139",
  },
  {
    title: "Certificazioni energetiche",
    text: "Certificazioni energetiche per redigere l'Attestato di Prestazione Energetica (APE) degli edifici",
  },
  {
    title: "Software professionali",
    text: "CAD, analisi FEM, calcolo strutturale, modellazione BIM.",
  },
] as const;

export const zoneContent = {
  title: "Dove operiamo",
  heading: "Nord e Centro Nord Italia",
};

export const zoneDescription = (
  <>
    Operiamo in tutto il Nord e Centro Nord Italia (Lombardia, Veneto, Piemonte, Emilia-Romagna, Toscana), in particolare nelle province di{" "}
    <Link
      href="/progettazione-strutture-acciaio-brescia"
      title="Progettazione strutture in acciaio a Brescia - Studio Capoferri"
      className="link-accent"
    >
      Brescia
    </Link>
    ,{" "}
    <Link
      href="/progettazione-strutture-acciaio-bergamo"
      title="Progettazione strutture in acciaio a Bergamo - Studio Capoferri"
      className="link-accent"
    >
      Bergamo
    </Link>{" "}
    e{" "}
    <Link
      href="/progettazione-strutture-acciaio-milano"
      title="Progettazione strutture in acciaio a Milano - Studio Capoferri"
      className="link-accent"
    >
      Milano
    </Link>
    . Sede ad Adro (BS).
  </>
);

export const zoneFooter = (
  <>
    Per imprese generali e general contractor in Lombardia:{" "}
    <Link
      href="/progettazione-strutturale-per-general-contractor"
      title="Progettazione strutturale per general contractor - Studio Capoferri"
      className="link-accent"
    >
      progettazione strutturale dedicata
    </Link>
    . Accettiamo anche commesse all&apos;estero:{" "}
    <Link href="/contatti#form-contatti" title="Contattaci - Studio Capoferri" className="link-accent">
      contattaci
    </Link>
    .
  </>
);

export const chiSiamoPage = {
  title: "Studio di progettazione strutturale",
  paragraphs: [
    <>
      <strong>Studio Capoferri</strong> è uno studio di progettazione strutturale ad Adro (Brescia). Da oltre
      quarant&apos;anni lavoriamo con imprese generali, general contractor, architetti e studi tecnici su strutture in
      acciaio, cemento armato e muratura: residenziale, industriale, silos, sopraelevazioni e interventi su esistenti.
      Sede in Franciacorta; commesse soprattutto in Lombardia (Brescia, Bergamo, Milano) e nelle regioni vicine.
    </>,
    <>
      Restiamo sul lavoro dal calcolo al cantiere: NTC ed Eurocodici, disegni d&apos;officina, direzione lavori e
      verifiche su esistenti. Architettura, urbanistica e pratiche edilizie entrano quando l&apos;incarico è
      integrato. Lo stesso team segue modello, officina e montaggio: meno passaggi, più chiarezza su tempi e
      responsabilità.
    </>,
  ],
};
