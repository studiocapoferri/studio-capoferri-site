"use client";

import { ContactForm } from "@/components/ContactForm";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MapEmbed } from "@/components/MapEmbed";
import { useLocale } from "@/components/LocaleProvider";
import { contactPageJsonLd } from "@/lib/jsonld";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedContactsPageContent() {
  const locale = useLocale();
  const isEn = locale === "en";
  const openingHours = isEn ? site.openingHoursDisplayEn : site.openingHoursDisplay;
  const contactLd = contactPageJsonLd(locale);

  const rows = [
    {
      label: isEn ? "Address" : "Indirizzo",
      value: (
        <address className="not-italic [hyphens:none]">
          {isEn ? site.addressLineEn : site.addressLine}
        </address>
      ),
    },
    {
      label: isEn ? "Phone" : "Telefono",
      value: (
        <a
          href={`tel:${site.phoneTel}`}
          title={linkTitles.telefono(site.phoneDisplay, locale)}
          className="inline-block min-h-[44px] py-1 underline-offset-2 hover:underline"
        >
          {site.phoneDisplay}
        </a>
      ),
    },
    {
      label: "Email",
      value: (
        <a
          href={`mailto:${site.email}`}
          title={linkTitles.email(site.email, locale)}
          className="inline-block min-h-[44px] py-1 underline-offset-2 hover:underline"
        >
          {site.email}
        </a>
      ),
    },
    {
      label: isEn ? "Hours" : "Orari",
      value: openingHours,
    },
  ] as const;

  return (
    <main id="main-content" className="section-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }} />
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <header className="reveal-block mb-8 sm:mb-10">
            <h1 className={`font-display reveal-title ${ui.pageTitle}`}>
              {isEn ? "Contact structural engineers in Italy" : "Contatti"}
            </h1>
            <p className="mt-3 max-w-[36rem] text-left text-[0.98rem] text-[#555] sm:mt-4 sm:text-[1.05rem]">
              {isEn
                ? "Studio Capoferri in Adro (Brescia). Call, write, or send a brief below."
                : "Studio Capoferri ad Adro (Brescia). Chiama, scrivi o invia una richiesta qui sotto."}
            </p>
          </header>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start lg:gap-14">
            <section aria-labelledby="recapiti-heading" className="reveal-block">
              <h2 id="recapiti-heading" className="font-display text-lg font-medium tracking-tight text-[#1c1e21]">
                {site.gmbName}
              </h2>
              <dl className="mt-6 space-y-5 border-t border-[#1c1e21]/12 pt-6">
                {rows.map((row) => (
                  <div key={row.label}>
                    <dt className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[#888]">{row.label}</dt>
                    <dd className="mt-1.5 text-[0.98rem] leading-snug text-[#1c1e21] sm:text-[1.02rem]">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[0.95rem]">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  {isEn ? "Open on Google Maps" : "Apri su Google Maps"}
                </a>
                <span className="mx-2 text-[#bbb]" aria-hidden>
                  ·
                </span>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  {isEn ? "Google reviews" : "Recensioni Google"}
                </a>
              </p>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title={linkTitles.linkedin(locale)}
                aria-label={isEn ? "Follow us on LinkedIn - Studio Capoferri" : "Seguici su LinkedIn - Studio Capoferri"}
                className="mt-6 inline-flex min-h-[44px] items-center gap-2.5 text-sm font-semibold text-[#1c1e21] underline-offset-2 transition hover:text-[#b01010] hover:underline"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#1c1e21]/15 bg-[#1c1e21]/5 text-[#1c1e21]">
                  <LinkedInIcon className="h-4 w-4" />
                </span>
                {isEn ? "Follow us on LinkedIn" : "Seguici su LinkedIn"}
              </a>
            </section>

            <section aria-labelledby="mappa-heading" className="reveal-block min-w-0">
              <h2 id="mappa-heading" className="sr-only">
                {isEn ? "Where we are" : "Dove siamo"}
              </h2>
              <MapEmbed />
            </section>
          </div>

          <section id="form-contatti" className={`mt-14 border-t border-[#1c1e21]/12 pt-10 sm:mt-16 sm:pt-12 ${scrollAnchorClass}`}>
            <div className="reveal-block max-w-[640px]">
              <h2 className="font-display text-2xl font-medium tracking-tight text-[#1c1e21] sm:text-[1.75rem]">
                {isEn ? "Speak with our engineers" : "Scrivici"}
              </h2>
              <p className="mt-3 mb-8 text-left text-[0.95rem] text-[#555] sm:text-[1.02rem]">
                {isEn
                  ? "Tell us about scope, programme and constraints. We reply in English."
                  : "Oggetto, tempi e vincoli dell'intervento. Rispondiamo con un riscontro tecnico."}
              </p>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
