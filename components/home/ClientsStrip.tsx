import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { homeClients } from "@/lib/clients";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

const copy = {
  it: { eyebrow: "Clienti" },
  en: { eyebrow: "Clients" },
} as const;

/**
 * Per-logo height — mobile stays in a tight band so the 2-col grid reads evenly;
 * sm+ can breathe a bit more for mark-heavy logos.
 */
const sizeClass: Record<string, string> = {
  "pb-srl": "h-10 sm:h-16",
  baroni: "h-11 sm:h-[4.5rem]",
  steelera: "h-9 sm:h-12",
  "gp-piazzon": "h-11 sm:h-[4.5rem]",
  arcameccanica: "h-9 sm:h-14",
  "cre-system": "h-8 sm:h-12",
  "st-performance": "h-9 sm:h-14",
  tecnosida: "h-9 sm:h-14",
  roversi: "h-9 sm:h-14",
  tecnoprogetti: "h-9 sm:h-14",
  superstudio: "h-8 sm:h-12",
  spinelli: "h-7 sm:h-10",
  prismac: "h-8 sm:h-11",
  cibin: "h-12 sm:h-[5.5rem]",
};

/**
 * Optical vertical nudge: tagline logos center above wordmark-only ones.
 * Positive = down. Applied from sm up (mobile uses tighter cells).
 */
const opticalClass: Record<string, string> = {
  "st-performance": "sm:translate-y-[2px]",
  tecnosida: "sm:translate-y-[3px]",
  roversi: "sm:translate-y-[1px]",
  spinelli: "sm:translate-y-[4px]",
  tecnoprogetti: "sm:translate-y-px",
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
      className={`lazy-section ${ui.brandGradient} ${layoutGutterXClass} py-10 sm:py-14`}
      aria-label={t.eyebrow}
    >
      <div className={`${layoutContentMaxClass} reveal-block`}>
        <ul className="m-0 grid list-none grid-cols-2 items-center justify-items-center gap-x-5 gap-y-7 p-0 sm:grid-cols-4 sm:gap-x-12 sm:gap-y-14">
          {homeClients.map((client) => (
            <li
              key={client.id}
              className="flex h-[4.25rem] w-full max-w-[10.5rem] items-center justify-center sm:h-[6.5rem] sm:max-w-[13rem]"
            >
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                title={client.name}
                className="group flex h-full w-full items-center justify-center px-1 opacity-80 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 sm:px-0 sm:opacity-75"
              >
                <Image
                  src={client.src}
                  alt={locale === "en" ? client.altEn : client.altIt}
                  width={client.width}
                  height={client.height}
                  className={`${sizeClass[client.id] ?? "h-9 sm:h-12"} ${opticalClass[client.id] ?? ""} w-auto max-w-[92%] object-contain object-center sm:max-w-full${
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
