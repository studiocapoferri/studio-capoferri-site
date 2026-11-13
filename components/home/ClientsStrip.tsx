import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { homeClients, type ClientLogo } from "@/lib/clients";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

const copy = {
  it: { eyebrow: "Collaborazioni" },
  en: { eyebrow: "Collaborations" },
} as const;

/**
 * Desktop sizes first; max-sm: shrinks only on phones so tablet/desktop stay large.
 */
const sizeClass: Record<string, string> = {
  tecnoprogetti: "h-14 max-sm:h-8",
  "fonderie-ariotti": "h-14 max-sm:h-8",
  "pb-srl": "h-14 max-sm:h-9",
  "gp-piazzon": "h-14 max-sm:h-9",
  superstudio: "h-12 max-sm:h-7",
  baroni: "h-14 max-sm:h-9",
  steelera: "h-12 max-sm:h-7",
  spinelli: "h-11 max-sm:h-6",
  muzzolon: "h-24 max-sm:h-14",
  tecnosida: "h-12 max-sm:h-7",
  arcameccanica: "h-12 max-sm:h-7",
  prismac: "h-12 max-sm:h-7",
};

const opticalClass: Record<string, string> = {
  tecnosida: "translate-y-[2px]",
  spinelli: "translate-y-[3px]",
  muzzolon: "translate-y-px",
};

/** Wider cap for tall/square marks so height can actually grow. */
const maxWidthClass: Record<string, string> = {
  muzzolon: "max-w-[12rem] max-sm:max-w-[8.5rem]",
};

/**
 * Already white-on-transparent (or white-on-black) — do not invert.
 * Everything else is forced to bright white via brightness-0 invert.
 */
const skipInvert = new Set([
  "fonderie-ariotti",
  "muzzolon",
  "baroni",
  "pb-srl",
  "steelera",
  "gp-piazzon",
  "arcameccanica",
  "tecnosida",
  "tecnoprogetti",
  "prismac",
]);

function ClientMark({
  client,
  locale,
  inertLink,
}: {
  client: ClientLogo;
  locale: Locale;
  inertLink?: boolean;
}) {
  return (
    <a
      href={client.href}
      target="_blank"
      rel="noopener noreferrer"
      title={client.name}
      tabIndex={inertLink ? -1 : undefined}
      aria-hidden={inertLink || undefined}
      className="clients-marquee__item focus-ring inline-flex shrink-0 items-center justify-center px-7 sm:px-10"
    >
      <Image
        src={client.src}
        alt={locale === "en" ? client.altEn : client.altIt}
        width={client.width}
        height={client.height}
        className={`${sizeClass[client.id] ?? "h-12 max-sm:h-7"} ${opticalClass[client.id] ?? ""} w-auto ${
          maxWidthClass[client.id] ?? "max-w-[10.5rem] max-sm:max-w-[7rem]"
        } object-contain object-center opacity-100${
          skipInvert.has(client.id) ? "" : " brightness-0 invert"
        }`}
        loading="lazy"
        unoptimized
      />
    </a>
  );
}

function ClientsTrack({ locale, ariaHidden }: { locale: Locale; ariaHidden?: boolean }) {
  return (
    <div className="clients-marquee__group" aria-hidden={ariaHidden || undefined}>
      {homeClients.map((client) => (
        <ClientMark key={client.id} client={client} locale={locale} inertLink={ariaHidden} />
      ))}
    </div>
  );
}

export function ClientsStrip({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className={`lazy-section ${ui.brandGradient} py-9 sm:py-12`} aria-label={t.eyebrow}>
      <div className={`${layoutGutterXClass} mb-7 sm:mb-9`}>
        <p className={`eyebrow text-center text-[0.68rem] tracking-[0.16em] text-white/55 ${layoutContentMaxClass}`}>
          {t.eyebrow}
        </p>
      </div>

      <div className="clients-marquee clients-marquee--pause">
        <div className="clients-marquee__track">
          <ClientsTrack locale={locale} />
          <ClientsTrack locale={locale} ariaHidden />
        </div>
      </div>
    </section>
  );
}
