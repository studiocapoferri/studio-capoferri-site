"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { openCookiePreferences, readCookiePreferences, type CookiePreferences } from "@/lib/cookie-consent";
import { site } from "@/lib/site";

export function MapEmbed() {
  const locale = useLocale();
  const isEn = locale === "en";
  const [prefs, setPrefs] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    setPrefs(readCookiePreferences());
    const onCustom = (e: Event) => {
      setPrefs((e as CustomEvent<CookiePreferences>).detail);
    };
    window.addEventListener("cookie-consent", onCustom as EventListener);
    return () => window.removeEventListener("cookie-consent", onCustom as EventListener);
  }, []);

  if (prefs?.maps !== true) {
    return (
      <div
        className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-sm border border-[#1c1e21]/10 bg-[#f7f6f2] px-4 text-center text-[0.82rem] text-[#444] sm:min-h-[300px] sm:px-5 sm:text-sm md:min-h-[400px]"
        role="region"
        aria-label={isEn ? "Map disabled until cookie consent" : "Mappa disattivata fino al consenso cookie"}
      >
        <p className="m-0 max-w-md">
          {isEn
            ? "The Google Maps embed loads only if you enable maps in cookie preferences (banner or footer)."
            : "La mappa Google Maps si carica solo se abiliti le mappe nelle preferenze cookie (banner o footer)."}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button type="button" className="link-accent font-medium" onClick={() => openCookiePreferences()}>
            {isEn ? "Cookie preferences" : "Preferenze cookie"}
          </button>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-accent font-medium">
            {isEn ? "Open on Google Maps" : "Apri su Google Maps"}
          </a>
        </div>
      </div>
    );
  }

  return (
    <iframe
      className="h-[220px] w-full rounded-sm border-0 sm:h-[300px] md:h-[420px]"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title={isEn ? "Studio Capoferri office, Via Piave 35, Adro (BS)" : "Sede Studio Capoferri, Via Piave 35, Adro (BS)"}
      src={site.mapsEmbedSrc}
    />
  );
}
