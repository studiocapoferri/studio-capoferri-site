"use client";

import Image from "next/image";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { useLocale } from "@/components/LocaleProvider";
import { chiSiamoEnParagraphs } from "@/lib/about-copy";
import { certifications, chiSiamoPage } from "@/lib/content";
import { aboutPageJsonLd } from "@/lib/jsonld";
import { homeCopy } from "@/lib/home-copy";
import { professionisti } from "@/lib/professionisti";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

const aboutCredentials = {
  it: {
    title: "Abilitazioni dello studio",
    intro:
      "Oltre al calcolo strutturale, nel team ci sono le abilitazioni richieste per sicurezza di cantiere, prevenzione incendi e certificazione energetica — e gli strumenti di progettazione che usiamo ogni giorno.",
  },
  en: {
    title: "Practice qualifications",
    intro:
      "Beyond structural calculation, the team holds the registrations needed for site safety, fire prevention and energy certification — plus the design tools we use every day.",
  },
} as const;

export function LocalizedAboutPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const title = isEn ? "Structural engineers in Northern Italy" : chiSiamoPage.title;
  const paragraphs = isEn ? chiSiamoEnParagraphs : chiSiamoPage.paragraphs;
  const peopleTitle = isEn ? "Engineers" : "Professionisti";
  const linkedinLabel = isEn ? "LinkedIn profile" : "Profilo LinkedIn";
  const sectionHeading = ui.longFormSectionHeading;
  const aboutLd = aboutPageJsonLd(locale);
  const cred = aboutCredentials[locale];
  const credItems = isEn
    ? homeCopy.en.certifications
    : certifications.map((item) => [item.title, item.text] as [string, string]);

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
              <ul className="m-0 flex list-none flex-col gap-12 p-0 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-10 sm:gap-y-14">
                {professionisti.map((person) => {
                  const bio = isEn ? person.bioEn : person.bioIt;
                  return (
                    <li key={person.id} className="reveal-block w-full min-w-0 sm:w-[21rem] sm:shrink-0">
                      <figure className="m-0 w-full max-w-[21rem]">
                        <div className={`group ${ui.contentImage} relative aspect-[3/4] w-full bg-[#e4e6eb]`}>
                          <Image
                            src={person.src}
                            alt={isEn ? person.altEn : person.altIt}
                            fill
                            className="portrait-mann object-cover object-top"
                            sizes="(min-width:640px) 21rem, 88vw"
                            unoptimized={person.src.endsWith(".svg")}
                          />
                          <span aria-hidden className="portrait-mann-wash" />
                        </div>
                        <figcaption className="mt-4 w-full">
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
            </section>

            <section
              id="abilitazioni"
              className={scrollAnchorClass}
              aria-labelledby="abilitazioni-heading"
            >
              <h2 id="abilitazioni-heading" className={sectionHeading}>
                {cred.title}
              </h2>
              <p className={`mb-6 ${ui.bodyMuted}`}>{cred.intro}</p>
              <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
                {credItems.map(([itemTitle, text]) => (
                  <li key={itemTitle} className="border-l-2 border-[#b01010]/55 pl-4">
                    <p className="font-display m-0 text-base font-medium tracking-tight text-[#1c1e21] sm:text-lg">
                      {itemTitle}
                    </p>
                    <p className="mt-1 text-[0.88rem] leading-snug text-[#555] sm:text-[0.95rem]">{text}</p>
                  </li>
                ))}
              </ul>
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
