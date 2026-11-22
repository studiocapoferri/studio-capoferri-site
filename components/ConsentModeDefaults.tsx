import Script from "next/script";

/** Google Consent Mode v2 defaults before any tags (denied until update). */
export function ConsentModeDefaults() {
  return (
    <Script id="gcm-default" strategy="beforeInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        functionality_storage: 'denied',
        personalization_storage: 'denied',
        security_storage: 'granted',
        wait_for_update: 500
      });
    `}</Script>
  );
}
