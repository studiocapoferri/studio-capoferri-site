import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { homeClients } from "@/lib/clients";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

const copy = {
  it: { eyebrow: "Clienti" },
  en: { eyebrow: "Clients" },
} as const;

/** Per-logo height on dark strip — kept in a tight band for even rhythm. */
const sizeClass: Record<string, string> = {
  "pb-srl": "h-14 sm:h-16",
  baroni: "h-16 sm:h-[4.5rem]",
  steelera: "h-11 sm:h-12",
  "gp-piazzon": "h-16 sm:h-[4.5rem]",
  arcameccanica: "h-12 sm:h-14",
  "cre-system": "h-10 sm:h-12",
  "st-performance": "h-12 sm:h-14",
  tecnosida: "h-12 sm:h-14",
  roversi: "h-12 sm:h-14",
  tecnoprogetti: "h-12 sm:h-14",
  superstudio: "h-11 sm:h-12",
  spinelli: "h-9 sm:h-10",
  prismac: "h-10 sm:h-11",
  cibin: "h-[4.75rem] sm:h-[5.5rem]",
};

/**
 * Optical vertical nudge: tagline logos center above wordmark-only ones.
 * Positive = down.
 */
const opticalClass: Record<string, string> = {
  "st-performance": "translate-y-[2px]",
  tecnosida: "translate-y-[3px]",
  roversi: "translate-y-[1px]",
  spinelli: "translate-y-[4px]",
  tecnoprogetti: "translate-y-px",
};

/** Already white-on-transparent — do not apply brightness-0 invert. */
const skipInvert = new Set([
  "baroni",
  "pb-srl",
  "steelera",
  "gp-piazzon",
  "arcameccanica",
  "cre-system",
  "st-performance",
  "tecnosida",
  "roversi",
  "prismac",
  "tecnoprogetti",
  "cibin",
]);

export function ClientsStrip({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section
      className={`lazy-section ${ui.brandGradient} ${layoutGutterXClass} py-12 sm:py-14`}
      aria-label={t.eyebrow}
    >
      <div className={`${layoutContentMaxClass} reveal-block`}>
        <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-10 gap-y-10 p-0 sm:gap-x-12 sm:gap-y-14">
          {homeClients.map((client) => (
            <li
              key={client.id}
              className="flex h-[5.5rem] w-[calc(50%-1.25rem)] items-center justify-center sm:h-[6.5rem] sm:w-[calc(25%-2.25rem)]"
            >
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                title={client.name}
                className="group flex h-full w-full max-w-[11rem] items-center justify-center opacity-75 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 sm:max-w-[13rem]"
              >
                <Image
                  src={client.src}
                  alt={locale === "en" ? client.altEn : client.altIt}
                  width={client.width}
                  height={client.height}
                  className={`${sizeClass[client.id] ?? "h-10 sm:h-12"} ${opticalClass[client.id] ?? ""} w-auto max-w-full object-contain object-center${
                    skipInvert.has(client.id) ? "" : " brightness-0 invert"
                  }`}
                  loading="lazy"
                  unoptimized
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
