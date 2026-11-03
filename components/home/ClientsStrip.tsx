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
 * Larger marks; max-width keeps six per row from colliding under justify-between.
 */
const sizeClass: Record<string, string> = {
  "fonderie-ariotti": "h-10 sm:h-14",
  "pb-srl": "h-12 sm:h-16",
  tecnoprogetti: "h-10 sm:h-14",
  "gp-piazzon": "h-12 sm:h-16",
  superstudio: "h-10 sm:h-14",
  baroni: "h-12 sm:h-16",
  steelera: "h-10 sm:h-14",
  spinelli: "h-9 sm:h-12",
  muzzolon: "h-10 sm:h-14",
  tecnosida: "h-10 sm:h-14",
  arcameccanica: "h-10 sm:h-14",
  cibin: "h-12 sm:h-16",
};

const opticalClass: Record<string, string> = {
  tecnosida: "sm:translate-y-[2px]",
  spinelli: "sm:translate-y-[3px]",
  muzzolon: "sm:translate-y-px",
};

/** Already white-on-transparent (or white-on-black) — do not invert. */
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
  "cibin",
]);

const ROWS = [homeClients.slice(0, 6), homeClients.slice(6, 12)] as const;

function ClientMark({ client, locale }: { client: ClientLogo; locale: Locale }) {
  return (
    <a
      href={client.href}
      target="_blank"
      rel="noopener noreferrer"
      title={client.name}
      className="group inline-flex items-center opacity-80 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 sm:opacity-75"
    >
      <Image
        src={client.src}
        alt={locale === "en" ? client.altEn : client.altIt}
        width={client.width}
        height={client.height}
        className={`${sizeClass[client.id] ?? "h-10 sm:h-14"} ${opticalClass[client.id] ?? ""} w-auto max-w-[9.5rem] object-contain object-center sm:max-w-[11.5rem]${
          skipInvert.has(client.id) ? "" : " brightness-0 invert"
        }`}
        loading="lazy"
        unoptimized
      />
    </a>
  );
}

export function ClientsStrip({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className={`lazy-section ${ui.brandGradient} ${layoutGutterXClass} py-9 sm:py-12`}>
      <div className={`${layoutContentMaxClass} reveal-block`}>
        <p className="eyebrow mb-7 text-center text-[0.68rem] tracking-[0.16em] text-white/55 sm:mb-9">
          {t.eyebrow}
        </p>
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-11">
          {ROWS.map((row) => (
            <ul
              key={row.map((c) => c.id).join("-")}
              className="m-0 grid w-full list-none grid-cols-2 items-center justify-items-center gap-x-5 gap-y-8 p-0 sm:grid-cols-3 sm:gap-x-7 sm:gap-y-9 lg:flex lg:items-center lg:justify-between lg:gap-0 lg:gap-y-0"
            >
              {row.map((client) => (
                <li key={client.id} className="flex h-[4.25rem] items-center sm:h-[5.75rem]">
                  <ClientMark client={client} locale={locale} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
