"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import {
  type CookiePreferences,
  openCookiePreferences,
  persistCookiePreferences,
  readCookiePreferences,
  resetCookieConsent,
} from "@/lib/cookie-consent";
import { chromeCopy, localizeHref } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass } from "@/lib/site";
import { ui } from "@/lib/ui";

export type { CookieChoice, CookiePreferences } from "@/lib/cookie-consent";
export { openCookiePreferences, resetCookieConsent };

export function CookieBanner() {
  const locale = useLocale();
  const copy = chromeCopy[locale].cookie;
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [draft, setDraft] = useState<CookiePreferences>({ analytics: false, maps: false });

  useEffect(() => {
    const stored = readCookiePreferences();
    setVisible(stored === null);
    if (stored) setDraft(stored);

    const onOpen = () => {
      const current = readCookiePreferences() ?? { analytics: false, maps: false };
      setDraft(current);
      setCustomize(true);
      setVisible(true);
    };
    window.addEventListener("cookie-preferences-open", onOpen);
    return () => window.removeEventListener("cookie-preferences-open", onOpen);
  }, []);

  const persist = useCallback((prefs: CookiePreferences) => {
    persistCookiePreferences(prefs);
    setVisible(false);
    setCustomize(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={copy.dialogLabel}
      aria-modal="false"
      className={`fixed inset-x-0 bottom-0 z-[10000] border-t-2 border-white/15 ${ui.brandGradient} pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 text-white shadow-[0_-8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md sm:pt-5`}
    >
      <div className={layoutGutterXClass}>
        <div className={`flex flex-col gap-3 sm:gap-4 ${layoutContentMaxClass}`}>
          <div className="min-w-0 flex-1 text-sm leading-relaxed md:text-base">
            <p className="font-semibold">{copy.title}</p>
            <p className="mt-0.5 text-white/95 sm:mt-1">
              {copy.body}{" "}
              <Link href={localizeHref("/privacy-policy#cookie", locale)} title={linkTitles.cookiePolicy(locale)} className="underline underline-offset-2 hover:text-white">
                {copy.more}
              </Link>
            </p>
          </div>

          {customize ? (
            <div className="space-y-3 rounded-sm border border-white/20 bg-black/15 p-3 sm:p-4">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-white/95">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-white"
                  checked={draft.analytics}
                  onChange={(e) => setDraft((d) => ({ ...d, analytics: e.target.checked }))}
                />
                <span>
                  <span className="font-medium">{copy.analyticsLabel}</span>
                  <span className="mt-0.5 block text-white/80">{copy.analyticsHint}</span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-white/95">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-white"
                  checked={draft.maps}
                  onChange={(e) => setDraft((d) => ({ ...d, maps: e.target.checked }))}
                />
                <span>
                  <span className="font-medium">{copy.mapsLabel}</span>
                  <span className="mt-0.5 block text-white/80">{copy.mapsHint}</span>
                </span>
              </label>
              <div className="flex flex-wrap gap-2 pt-1">
                <button type="button" className={`focus-ring ${ui.cookieAccept}`} onClick={() => persist(draft)}>
                  {copy.save}
                </button>
                <button
                  type="button"
                  className={`focus-ring ${ui.cookieReject}`}
                  onClick={() => {
                    setCustomize(false);
                    if (readCookiePreferences() !== null) setVisible(false);
                  }}
                >
                  {copy.cancel}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-shrink-0 flex-wrap gap-2">
              <button
                type="button"
                className={`focus-ring ${ui.cookieAccept}`}
                onClick={() => persist({ analytics: true, maps: true })}
              >
                {copy.accept}
              </button>
              <button
                type="button"
                className={`focus-ring ${ui.cookieReject}`}
                onClick={() => persist({ analytics: false, maps: false })}
              >
                {copy.reject}
              </button>
              <button type="button" className={`focus-ring ${ui.cookieReject}`} onClick={() => setCustomize(true)}>
                {copy.customize}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function useCookieConsent(): CookiePreferences | null {
  const [prefs, setPrefs] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    setPrefs(readCookiePreferences());
    const handler = (e: Event) => {
      setPrefs((e as CustomEvent<CookiePreferences>).detail);
    };
    window.addEventListener("cookie-consent", handler as EventListener);
    return () => window.removeEventListener("cookie-consent", handler as EventListener);
  }, []);

  return prefs;
}
