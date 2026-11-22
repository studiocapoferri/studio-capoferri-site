"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useCookieConsent } from "@/components/CookieBanner";
import { applyGoogleConsentMode } from "@/lib/cookie-consent";
import { site } from "@/lib/site";

const GA_ID = site.gaMeasurementId;

export function GoogleAnalytics() {
  const consent = useCookieConsent();
  const pathname = usePathname();
  const enabled = consent?.analytics === true;

  useEffect(() => {
    if (!consent) return;
    applyGoogleConsentMode(consent);
  }, [consent]);

  useEffect(() => {
    if (!enabled || typeof window.gtag !== "function") return;
    window.gtag("config", GA_ID, { page_path: pathname, anonymize_ip: true });
  }, [enabled, pathname]);

  if (!enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'update', { analytics_storage: 'granted' });
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname, anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
