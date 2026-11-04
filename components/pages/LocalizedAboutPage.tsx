"use client";

import Image from "next/image";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { useLocale } from "@/components/LocaleProvider";
import { chiSiamoEnParagraphs } from "@/lib/about-copy";
import { chiSiamoPage } from "@/lib/content";
import { aboutPageJsonLd } from "@/lib/jsonld";
import { professionisti } from "@/lib/professionisti";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

/** Coda del team — non il blocco “Abilitazioni” della home. */
const teamCredentials = {
  it: {
    title: "Iscrizioni e strumenti del gruppo",
    intro:
      "Restano nelle persone sopra, non in un elenco generico: chi può fare CSP/CSE, chi è in elenco antincendio, chi redige APE — e lo stack di calcolo che usiamo in studio.",
    items: [
      ["CSP / CSE", "Coordinamento sicurezza nei cantieri"],
      ["Prevenzione incendi", "Elenchi del Ministero dell'Interno (art. 16 d.lgs. 139/2006)"],
      ["Certificazione energetica", "Attestato di Prestazione Energetica (APE)"],
      ["In studio", "CAD, analisi FEM, calcolo strutturale, modellazione BIM"],
    ] as const,
  },
  en: {
    title: "Registrations and tools in the team",
    intro:
      "They sit with the people above, not in a generic catalogue: who can act as CSP/CSE, who is on the fire-safety lists, who issues APE certificates — and the calculation stack we use in the office.",
    items: [
      ["CSP / CSE", "Site safety coordination"],
      ["Fire prevention", "Ministry of the Interior lists (art. 16, Legislative Decree 139/2006)"],
      ["Energy certification", "Building Energy Performance Certificate (APE)"],
      ["In the office", "CAD, FEM analysis, structural calculation, BIM modelling"],
    ] as const,
  },
} as const;

export function LocalizedAboutPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const title = isEn ? "Structural engineers in Northern Italy" : chiSiamoPage.title;
  const paragraphs = isEn ? chiSiamoEnParagraphs : chiSiamoPage.paragraphs;
  const peopleTitle = isEn ? "Engineers" : "Professionisti";
  const peopleIntro = isEn
    ? "The same people who write the calculation stay with fabrication drawings and the site — one team from model to erection."
    : "Le stesse persone del calcolo restano su disegni d'officina e cantiere: un solo team dal modello al montaggio.";
  const linkedinLabel = isEn ? "LinkedIn profile" : "Profilo LinkedIn";
  const sectionHeading = ui.longFormSectionHeading;
  const aboutLd = aboutPageJsonLd(locale);
  const cred = teamCredentials[locale];

  return (
    <main id="main-content" className="section-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className={`reveal-block home-plate home-plate--well ${ui.articleMax}`}>
            <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>{title}</h1>
            {paragraphs.map((p, i) => (
              <p key={i} className={`mb-4 last:mb-0 ${ui.body}`}>
                {p}
              </p>
            ))}

            <section id="professionisti" className={scrollAnchorClass} aria-labelledby="professionisti-heading">
              <h2 id="professionisti-heading" className={sectionHeading}>
                {peopleTitle}
              </h2>
              <p className={`mb-8 max-w-[40rem] ${ui.bodyMuted}`}>{peopleIntro}</p>
              <ul className="m-0 flex list-none flex-col gap-10 border-t border-[#1c1e21]/12 p-0 pt-8 sm:gap-12 sm:pt-10">
                {professionisti.map((person) => {
                  const bio = isEn ? person.bioEn : person.bioIt;
                  return (
                    <li key={person.id} className="reveal-block">
                      <figure className="m-0 grid gap-5 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:items-start sm:gap-8 md:grid-cols-[minmax(0,15.5rem)_minmax(0,1fr)] md:gap-10">
                        <div
                          className={`group ${ui.contentImage} relative aspect-[3/4] w-full max-w-[16rem] bg-[#e4e6eb] sm:max-w-none`}
                        >
                          <Image
                            src={person.src}
                            alt={isEn ? person.altEn : person.altIt}
                            fill
                            className="portrait-mann object-cover object-top"
                            sizes="(min-width:640px) 15.5rem, 88vw"
                            unoptimized={person.src.endsWith(".svg")}
                          />
                          <span aria-hidden className="portrait-mann-wash" />
                        </div>
                        <figcaption className="min-w-0 border-l-2 border-[#b01010]/55 pl-4 sm:pl-5">
                          <p className="font-display text-xl font-medium tracking-tight text-[#1c1e21] sm:text-2xl">
                            {person.name}
                          </p>
                          <p className="mt-1 text-[0.92rem] font-medium text-[#555]">
                            {isEn ? person.roleEn : person.roleIt}
                          </p>
                          {bio ? <p className={`mt-3 ${ui.bodyMuted}`}>{bio}</p> : null}
                          {person.linkedin ? (
                            <p className="mt-3 text-sm">
                              <a
                                href={person.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-accent"
                                title={linkedinLabel}
                              >
                                LinkedIn
                              </a>
                            </p>
                          ) : null}
                        </figcaption>
                      </figure>
                    </li>
                  );
                })}
              </ul>

              <div
                id="abilitazioni"
                className={`mt-12 border-t border-[#1c1e21]/12 pt-8 sm:mt-14 sm:pt-10 ${scrollAnchorClass}`}
                aria-labelledby="abilitazioni-heading"
              >
                <h3
                  id="abilitazioni-heading"
                  className="font-display m-0 text-lg font-medium tracking-tight text-[#1c1e21] sm:text-xl"
                >
                  {cred.title}
                </h3>
                <p className={`mt-3 max-w-[40rem] ${ui.bodyMuted}`}>{cred.intro}</p>
                <ul className="m-0 mt-6 list-none space-y-4 p-0">
                  {cred.items.map(([itemTitle, text]) => (
                    <li key={itemTitle} className="text-[0.95rem] leading-snug text-[#444] sm:text-[1.02rem]">
                      <span className="font-medium text-[#1c1e21]">{itemTitle}</span>
                      <span className="text-[#888]"> — </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </article>
        </div>
      </div>

      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <ContactCtaSection locale={locale} />
        </div>
      </div>
    </main>
  );
}
