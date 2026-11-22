/** Cookie preference storage + GA cleanup + Consent Mode helpers (client). */

export const COOKIE_CONSENT_KEY = "cookie_consent_studio_capoferri";

export type CookiePreferences = {
  analytics: boolean;
  maps: boolean;
};

/** @deprecated Prefer CookiePreferences; kept for older event listeners. */
export type CookieChoice = "accepted" | "rejected";

export function parseStoredConsent(raw: string | null): CookiePreferences | null {
  if (!raw) return null;
  if (raw === "accepted") return { analytics: true, maps: true };
  if (raw === "rejected") return { analytics: false, maps: false };
  try {
    const parsed = JSON.parse(raw) as Partial<CookiePreferences>;
    if (typeof parsed.analytics === "boolean" && typeof parsed.maps === "boolean") {
      return { analytics: parsed.analytics, maps: parsed.maps };
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function readCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    return parseStoredConsent(localStorage.getItem(COOKIE_CONSENT_KEY));
  } catch {
    return null;
  }
}

export function serializeCookiePreferences(prefs: CookiePreferences): string {
  return JSON.stringify({ v: 2, analytics: prefs.analytics, maps: prefs.maps });
}

export function clearAnalyticsCookies(): void {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const domains = Array.from(
    new Set([host, `.${host}`, "studiocapoferri.eu", ".studiocapoferri.eu", "www.studiocapoferri.eu"]),
  );
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0]?.trim())
    .filter((n): n is string => !!n && (n === "_ga" || n.startsWith("_ga_") || n.startsWith("_gid") || n.startsWith("_gat")));

  for (const name of names) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    for (const domain of domains) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${domain}`;
    }
  }
}

export function applyGoogleConsentMode(prefs: CookiePreferences): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  window.gtag = gtag;
  gtag("consent", "update", {
    analytics_storage: prefs.analytics ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: prefs.maps ? "granted" : "denied",
    personalization_storage: "denied",
    security_storage: "granted",
  });
}

export function persistCookiePreferences(prefs: CookiePreferences): void {
  const prev = readCookiePreferences();
  const value = serializeCookiePreferences(prefs);
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    const d = new Date();
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
    const secure = window.location.protocol === "https:" ? ";Secure" : "";
    document.cookie = `${COOKIE_CONSENT_KEY}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax${secure}`;
  } catch {
    /* ignore */
  }

  if (!prefs.analytics) clearAnalyticsCookies();
  applyGoogleConsentMode(prefs);
  window.dispatchEvent(new CustomEvent("cookie-consent", { detail: prefs }));

  // Drop in-memory gtag after revoking analytics.
  if (prev?.analytics && !prefs.analytics) {
    window.location.reload();
  }
}

export function resetCookieConsent(): void {
  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    const secure = window.location.protocol === "https:" ? ";Secure" : "";
    document.cookie = `${COOKIE_CONSENT_KEY}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax${secure}`;
    clearAnalyticsCookies();
    applyGoogleConsentMode({ analytics: false, maps: false });
    window.dispatchEvent(new CustomEvent("cookie-preferences-open"));
    window.dispatchEvent(new CustomEvent("cookie-consent-reset"));
  } catch {
    /* ignore */
  }
  window.location.reload();
}

export function openCookiePreferences(): void {
  window.dispatchEvent(new CustomEvent("cookie-preferences-open"));
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
