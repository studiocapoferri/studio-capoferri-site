"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactCtaSection } from "@/components/ContactCtaSection";
import { FeatureList } from "@/components/FeatureList";
import { useLocale } from "@/components/LocaleProvider";
import { localizeHref } from "@/lib/i18n";
import { servicesPageJsonLd } from "@/lib/jsonld";
import { linkTitles } from "@/lib/link-seo";
import { servicesCopy } from "@/lib/services-copy";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

/** One photo per major service block — existing project assets, not stock. */
const sectionMedia: Record<string, { src: string; altIt: string; altEn: string }> = {
  "progettazione-strutturale": {
    src: "/assets/industriale/centro-raccolta-rifiuti-chiuduno/copertura-reticolare-cielo-blu-chiuduno.webp",
    altIt: "Struttura reticolare in acciaio, progettazione strutturale Studio Capoferri",
    altEn: "Steel lattice structure, structural design by Studio Capoferri",
  },
  "urbanistica-architettura": {
    src: "/assets/residenza-privata-acciaio.webp",
    altIt: "Residenza in acciaio, architettura e struttura integrate",
    altEn: "Steel residence with integrated architecture and structure",
  },
  "direzione-lavori": {
    src: "/assets/industriale/copertura-edificio-verniciatura-maranello/montaggio-copertura-spaziale-acciaio-verniciatura-maranello.webp",
    altIt: "Montaggio copertura metallica in cantiere, direzione lavori strutturali",
    altEn: "Steel canopy erection on site, structural construction supervision",
  },
};

export function LocalizedServicesPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const copy = servicesCopy[locale];
  const servicesLd = servicesPageJsonLd(locale);

  return (
    <main id="main-content" className="section-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <header className="reveal-block mb-8 max-w-[42rem] sm:mb-10">
            <h1 className={`font-display reveal-title ${ui.pageTitle}`}>{copy.title}</h1>
            <p className={`mt-4 text-left ${ui.body}`}>{copy.lead}</p>
          </header>

          <nav
            aria-label={isEn ? "Service sections" : "Sezioni servizi"}
            className="reveal-block mb-10 border-y border-[#1c1e21]/10 py-4 sm:mb-12"
          >
            <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-2 p-0 text-[0.88rem] sm:text-[0.92rem]">
              {copy.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="link-accent font-medium text-[#1c1e21]">
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="reveal-block mb-12 list-none space-y-2 border-b border-[#1c1e21]/10 pb-10 text-left text-[0.92rem] text-[#555] sm:mb-14 sm:text-[0.98rem]">
            {"fabricatorsNote" in copy && copy.fabricatorsNote ? (
              <li>
                {copy.fabricatorsNote}{" "}
                <Link
                  href={localizeHref("/progettazione-strutturale-per-carpenterie", locale)}
                  title={linkTitles.fabricators(locale)}
                  className="link-accent"
                >
                  {isEn ? "structural design for steel fabricators" : "progettazione strutturale per carpenterie"}
                </Link>
                .
              </li>
            ) : null}
            {"gcNote" in copy && copy.gcNote ? (
              <li>
                {copy.gcNote}{" "}
                <Link
                  href={localizeHref("/progettazione-strutturale-per-general-contractor", locale)}
                  title={linkTitles.generalContractor(locale)}
                  className="link-accent"
                >
                  {isEn
                    ? "structural design for general contractors"
                    : "progettazione strutturale per general contractor"}
                </Link>
                .
              </li>
            ) : null}
            {"internationalNote" in copy && copy.internationalNote ? (
              <li>
                {copy.internationalNote}{" "}
                <Link
                  href={localizeHref("/clienti-internazionali", locale)}
                  title={linkTitles.international(locale)}
                  className="link-accent"
                >
                  {isEn ? "International clients" : "Clienti internazionali"}
                </Link>
                .
              </li>
            ) : null}
          </ul>

          <div className={`space-y-16 sm:space-y-20 ${ui.articleMax}`}>
            {copy.sections.map((section) => {
              const media = sectionMedia[section.id];
              return (
                <section key={section.id} id={section.id} className={`reveal-block ${scrollAnchorClass}`}>
                  <h2 className="font-display section-title text-2xl tracking-tight text-[#2a2a2a] sm:text-[1.75rem]">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p) => (
                    <p key={p} className={`mt-3 text-left ${ui.bodyMuted}`}>
                      {p}
                    </p>
                  ))}
                  {media ? (
                    <div className={`${ui.contentImage} relative mt-6 aspect-[16/9] w-full`}>
                      <Image
                        src={media.src}
                        alt={isEn ? media.altEn : media.altIt}
                        fill
                        className="object-cover"
                        sizes="(min-width:860px) 860px, 100vw"
                      />
                    </div>
                  ) : null}
                  <FeatureList items={section.items} />
                </section>
              );
            })}
          </div>

          <ContactCtaSection locale={locale} title={copy.ctaTitle} description={copy.ctaDescription} />
        </div>
      </div>
    </main>
  );
}
