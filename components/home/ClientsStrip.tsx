import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { homeClients } from "@/lib/clients";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

const copy = {
  it: { eyebrow: "Collaborazioni" },
  en: { eyebrow: "Collaborations" },
} as const;

/**
 * Per-logo height — mobile stays in a tight band so the 2-col grid reads evenly;
 * sm+ can breathe a bit more for mark-heavy logos.
 */
const sizeClass: Record<string, string> = {
  "pb-srl": "h-9 sm:h-14",
  baroni: "h-10 sm:h-16",
  steelera: "h-8 sm:h-11",
  "gp-piazzon": "h-10 sm:h-16",
  arcameccanica: "h-8 sm:h-12",
  tecnosida: "h-8 sm:h-12",
  tecnoprogetti: "h-8 sm:h-12",
  superstudio: "h-7 sm:h-11",
  spinelli: "h-6 sm:h-9",
  cibin: "h-10 sm:h-[4.75rem]",
};

/**
 * Optical vertical nudge: tagline logos center above wordmark-only ones.
 * Positive = down. Applied from sm up (mobile uses tighter cells).
 */
const opticalClass: Record<string, string> = {
  tecnosida: "sm:translate-y-[3px]",
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
  "tecnosida",
  "tecnoprogetti",
  "cibin",
]);

export function ClientsStrip({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className={`lazy-section ${ui.brandGradient} ${layoutGutterXClass} py-8 sm:py-11`}>
      <div className={`${layoutContentMaxClass} reveal-block`}>
        <p className="eyebrow mb-6 text-center text-[0.68rem] tracking-[0.16em] text-white/55 sm:mb-8">
          {t.eyebrow}
        </p>
        <ul className="m-0 grid list-none grid-cols-2 items-center justify-items-center gap-x-5 gap-y-6 p-0 sm:grid-cols-5 sm:gap-x-10 sm:gap-y-10">
          {homeClients.map((client) => (
            <li
              key={client.id}
              className="flex h-[3.75rem] w-full max-w-[9.5rem] items-center justify-center sm:h-[5.5rem] sm:max-w-[11rem]"
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
                  className={`${sizeClass[client.id] ?? "h-8 sm:h-11"} ${opticalClass[client.id] ?? ""} w-auto max-w-[92%] object-contain object-center sm:max-w-full${
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
