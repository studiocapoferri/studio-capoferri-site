"use client";

import { useLocale } from "@/components/LocaleProvider";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export function LocalizedPrivacyPageContent() {
  const isEn = useLocale() === "en";
  const h2 = ui.longFormSectionHeading;
  const h3 = `font-display mb-3 text-lg font-medium tracking-tight text-[#1c1e21]`;

  return (
    <main id="main-content" className="section-shell">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className={`reveal-block home-plate home-plate--well ${ui.articleMax}`}>
            <h1 className={`font-display reveal-title ${ui.pageTitle} ${ui.pageTitleLead}`}>
              {isEn ? "Privacy and cookie policy" : "Privacy e cookie policy"}
            </h1>

            <p className={`mb-4 ${ui.body}`}>
              <strong>{isEn ? "Data controller" : "Titolare del trattamento"}:</strong> {site.legalName},{" "}
              {isEn ? site.addressLineEn : site.addressLine},{" "}
              {isEn ? "VAT" : "P.IVA"} {site.pivaDisplay}. Email:{" "}
              <a href={`mailto:${site.email}`} title={linkTitles.email(site.email, isEn ? "en" : "it")} className="link-accent">
                {site.email}
              </a>
            </p>

            <p className={ui.body}>
              {isEn
                ? "This notice describes how personal data are processed when you browse this website and when you contact us, pursuant to Articles 13–14 of Regulation (EU) 2016/679 (GDPR) and Italian Legislative Decree 196/2003 as amended."
                : "Questa informativa descrive come vengono trattati i dati personali quando navighi sul sito e quando ci contatti, ai sensi degli artt. 13–14 del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 e s.m.i."}
            </p>

            <h2 className={h2}>{isEn ? "Data we process" : "Dati trattati"}</h2>
            <ul className={`mt-2 list-none space-y-3 pl-0 ${ui.bodyMuted}`}>
              <li>
                {isEn
                  ? "Browsing data: IP address (anonymized in Analytics), date/time, pages visited, device/browser information, collected via Google Analytics only after analytics consent."
                  : "Dati di navigazione: indirizzo IP (anonimizzato in Analytics), data/ora, pagine visitate, informazioni su dispositivo/browser, raccolti tramite Google Analytics solo dopo il consenso alle statistiche."}
              </li>
              <li>
                {isEn
                  ? "Contact form data: name, email, optional subject/city, message content."
                  : "Dati del modulo di contatto: nome, email, oggetto/città (facoltativi), contenuto del messaggio."}
              </li>
              <li>
                {isEn
                  ? "Cookie preferences: your granular choices (analytics / maps) stored locally so we remember them on later visits."
                  : "Preferenze cookie: le scelte granulari (statistiche / mappe) salvate in locale per ricordarle nelle visite successive."}
              </li>
            </ul>

            <h2 className={h2}>{isEn ? "Purposes and legal bases" : "Finalità e basi giuridiche"}</h2>
            <ul className={`mt-2 list-none space-y-3 pl-0 ${ui.bodyMuted}`}>
              <li>
                {isEn
                  ? "Replying to contact requests: legal basis: your consent (Art. 6(1)(a) GDPR) and/or steps prior to a contract (Art. 6(1)(b))."
                  : "Rispondere alle richieste di contatto: base giuridica: consenso (art. 6, par. 1, lett. a GDPR) e/o misure precontrattuali (art. 6, par. 1, lett. b)."}
              </li>
              <li>
                {isEn
                  ? "Site statistics with Google Analytics: legal basis: consent (Art. 6(1)(a) GDPR / ePrivacy). Without analytics consent the gtag.js script is not loaded. We use Google Consent Mode v2 with analytics_storage denied by default."
                  : "Statistiche di sito con Google Analytics: base giuridica: consenso (art. 6, par. 1, lett. a GDPR / ePrivacy). Senza consenso alle statistiche lo script gtag.js non viene caricato. Usiamo Google Consent Mode v2 con analytics_storage negato di default."}
              </li>
              <li>
                {isEn
                  ? "Embedding Google Maps on the contacts page: legal basis: consent (maps preference). Without maps consent the map is not loaded."
                  : "Incorporamento di Google Maps nella pagina contatti: base giuridica: consenso (preferenza mappe). Senza consenso alle mappe la mappa non viene caricata."}
              </li>
              <li>
                {isEn
                  ? "Technical operation of the site (including remembering cookie choice): legal basis: legitimate interest / necessity for the service requested (Art. 6(1)(f))."
                  : "Funzionamento tecnico del sito (incluso il ricordo della scelta cookie): base giuridica: legittimo interesse / necessità per il servizio richiesto (art. 6, par. 1, lett. f)."}
              </li>
            </ul>

            <h2 className={h2}>{isEn ? "Recipients and processors" : "Destinatari e responsabili"}</h2>
            <p className={ui.body}>
              {isEn
                ? "Data may be processed by providers acting as processors or independent controllers, in particular:"
                : "I dati possono essere trattati da fornitori che agiscono come responsabili del trattamento o titolari autonomi, in particolare:"}
            </p>
            <ul className={`mt-3 list-none space-y-2 pl-0 ${ui.body}`}>
              <li>
                {isEn ? (
                  <>
                    Formspree (Wingify): receives contact-form submissions.{" "}
                    <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="link-accent">
                      Privacy policy
                    </a>
                    .
                  </>
                ) : (
                  <>
                    Formspree (Wingify): riceve i messaggi del form di contatto.{" "}
                    <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="link-accent">
                      Privacy policy
                    </a>
                    .
                  </>
                )}
              </li>
              <li>
                {isEn ? (
                  <>
                    Google Ireland Ltd / Google LLC — Google Analytics ({site.gaMeasurementId}) and, if maps are enabled, Google Maps embeds.{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="link-accent">
                      Google Privacy Policy
                    </a>
                    .
                  </>
                ) : (
                  <>
                    Google Ireland Ltd / Google LLC — Google Analytics ({site.gaMeasurementId}) e, se le mappe sono abilitate, embed Google Maps.{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="link-accent">
                      Privacy Policy Google
                    </a>
                    .
                  </>
                )}
              </li>
              <li>
                {isEn ? (
                  <>
                    Hosting: GitHub Pages (GitHub, Inc. / Microsoft).{" "}
                    <a
                      href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent"
                    >
                      GitHub Privacy Statement
                    </a>
                    .
                  </>
                ) : (
                  <>
                    Hosting: GitHub Pages (GitHub, Inc. / Microsoft).{" "}
                    <a
                      href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent"
                    >
                      GitHub Privacy Statement
                    </a>
                    .
                  </>
                )}
              </li>
            </ul>

            <h2 className={h2}>{isEn ? "Transfers outside the EU/EEA" : "Trasferimenti extra UE/SEE"}</h2>
            <p className={ui.bodyMuted}>
              {isEn
                ? "Google, Formspree and GitHub/Microsoft may process data in countries outside the European Economic Area (including the United States). Where applicable, transfers rely on the EU–US Data Privacy Framework adequacy decision and/or Standard Contractual Clauses (SCCs) and the additional safeguards published by those providers."
                : "Google, Formspree e GitHub/Microsoft possono trattare dati in Paesi fuori dallo Spazio economico europeo (inclusi gli Stati Uniti). Ove applicabile, i trasferimenti si basano sulla decisione di adeguatezza EU–US Data Privacy Framework e/o sulle Clausole contrattuali tipo (SCC) e sulle misure aggiuntive pubblicate da tali fornitori."}
            </p>

            <h2 className={h2}>{isEn ? "Retention" : "Conservazione"}</h2>
            <ul className={`mt-2 list-none space-y-3 pl-0 ${ui.bodyMuted}`}>
              <li>
                {isEn
                  ? "Contact messages: kept for the time needed to handle the request and related follow-up, then deleted or anonymised unless longer retention is required by law or ongoing dealings."
                  : "Messaggi di contatto: conservati per il tempo necessario a gestire la richiesta e il relativo follow-up, poi cancellati o anonimizzati salvo obblighi di legge o rapporti in corso."}
              </li>
              <li>
                {isEn
                  ? "Analytics data: retained for 14 months in the Google Analytics property (then automatically deleted/aggregated per GA settings). IP anonymization is enabled."
                  : "Dati analytics: conservati per 14 mesi nella proprietà Google Analytics (poi cancellati/aggregati secondo le impostazioni GA). È attiva l’anonimizzazione IP."}
              </li>
              <li>
                {isEn
                  ? "Cookie preference: stored for up to 12 months, then you will be asked again."
                  : "Preferenza cookie: memorizzata fino a 12 mesi, poi la richiesta viene riproposta."}
              </li>
            </ul>

            <h2 className={h2}>{isEn ? "Your rights" : "Diritti dell’interessato"}</h2>
            <p className={ui.bodyMuted}>
              {isEn
                ? "You may request access, rectification, erasure, restriction, portability, and object to processing where applicable (Arts. 15–22 GDPR). You may withdraw cookie consent at any time via “Cookie preferences” in the footer or below. Withdrawal does not affect processing already carried out. Rejecting or disabling analytics also deletes Google Analytics first-party cookies (_ga / _ga_*) from this site."
                : "Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità e opporti al trattamento nei casi previsti (artt. 15–22 GDPR). Puoi revocare il consenso ai cookie in qualsiasi momento tramite “Preferenze cookie” nel footer o qui sotto. La revoca non pregiudica i trattamenti già effettuati. Il rifiuto o la disattivazione delle statistiche cancella anche i cookie di prima parte di Google Analytics (_ga / _ga_*) da questo sito."}
            </p>
            <p className={`mt-3 ${ui.bodyMuted}`}>
              {isEn
                ? "To exercise your rights, write to "
                : "Per esercitare i diritti, scrivi a "}
              <a href={`mailto:${site.email}`} title={linkTitles.email(site.email, isEn ? "en" : "it")} className="link-accent">
                {site.email}
              </a>
              {isEn
                ? ". You also have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali, www.garanteprivacy.it)."
                : ". Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it)."}
            </p>

            <h2 id="cookie" className={`${h2} ${scrollAnchorClass}`}>
              {isEn ? "Cookies" : "Cookie"}
            </h2>
            <p className={`mb-6 ${ui.bodyMuted}`}>
              {isEn
                ? "We use essential technical cookies and, only with your prior consent, non-essential third-party cookies/scripts. You can accept all, reject all, or customize analytics and maps separately from the banner or footer. Refusal does not block browsing of the site."
                : "Utilizziamo cookie tecnici necessari e, solo con il tuo consenso preventivo, cookie/script di terze parti non necessari. Puoi accettare tutto, rifiutare tutto o personalizzare separatamente statistiche e mappe dal banner o dal footer. Il rifiuto non impedisce la navigazione del sito."}
            </p>

            <div className="mb-8 overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm text-[#333]">
                <thead>
                  <tr className="border-b border-[#1c1e21]/15">
                    <th className="py-2 pr-3 font-medium">{isEn ? "Name" : "Nome"}</th>
                    <th className="py-2 pr-3 font-medium">{isEn ? "Provider" : "Fornitore"}</th>
                    <th className="py-2 pr-3 font-medium">{isEn ? "Purpose" : "Finalità"}</th>
                    <th className="py-2 pr-3 font-medium">{isEn ? "Type" : "Tipo"}</th>
                    <th className="py-2 font-medium">{isEn ? "Duration" : "Durata"}</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-b border-[#1c1e21]/8">
                    <td className="py-2 pr-3 font-mono text-xs">cookie_consent_studio_capoferri</td>
                    <td className="py-2 pr-3">{site.legalName}</td>
                    <td className="py-2 pr-3">{isEn ? "Store analytics/maps preferences" : "Memorizzare preferenze analytics/mappe"}</td>
                    <td className="py-2 pr-3">{isEn ? "Technical" : "Tecnico"}</td>
                    <td className="py-2">12 {isEn ? "months" : "mesi"}</td>
                  </tr>
                  <tr className="border-b border-[#1c1e21]/8">
                    <td className="py-2 pr-3 font-mono text-xs">_ga</td>
                    <td className="py-2 pr-3">Google</td>
                    <td className="py-2 pr-3">{isEn ? "Distinguish users (GA4)" : "Distinguere gli utenti (GA4)"}</td>
                    <td className="py-2 pr-3">{isEn ? "Analytics (consent)" : "Statistiche (consenso)"}</td>
                    <td className="py-2">2 {isEn ? "years" : "anni"}</td>
                  </tr>
                  <tr className="border-b border-[#1c1e21]/8">
                    <td className="py-2 pr-3 font-mono text-xs">_ga_{site.gaMeasurementId.replace("G-", "")}</td>
                    <td className="py-2 pr-3">Google</td>
                    <td className="py-2 pr-3">{isEn ? "Persist GA4 session state" : "Persistenza stato sessione GA4"}</td>
                    <td className="py-2 pr-3">{isEn ? "Analytics (consent)" : "Statistiche (consenso)"}</td>
                    <td className="py-2">2 {isEn ? "years" : "anni"}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-mono text-xs">Google Maps (iframe)</td>
                    <td className="py-2 pr-3">Google</td>
                    <td className="py-2 pr-3">{isEn ? "Show office map on contact page" : "Mostrare la mappa della sede in contatti"}</td>
                    <td className="py-2 pr-3">{isEn ? "Embed (consent)" : "Embed (consenso)"}</td>
                    <td className="py-2">{isEn ? "Per Google / session" : "Secondo Google / sessione"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-5 sm:space-y-8">
              <div className="home-plate">
                <h3 className={h3}>{isEn ? "Technical cookies (no consent required)" : "Cookie tecnici (senza consenso)"}</h3>
                <p className={ui.bodyMuted}>
                  {isEn
                    ? "Preference storage that records your analytics/maps choices (localStorage / first-party cookie, about 12 months)."
                    : "Memorizzazione della preferenza che registra le scelte analytics/mappe (localStorage / cookie di prima parte, circa 12 mesi)."}
                </p>
              </div>

              <div className="home-plate">
                <h3 className={h3}>{isEn ? "Analytics: Google Analytics 4 (consent required)" : "Statistiche, Google Analytics 4 (consenso richiesto)"}</h3>
                <p className={ui.bodyMuted}>
                  {isEn
                    ? `Provider: Google. Measurement ID: ${site.gaMeasurementId}. Purpose: aggregated statistics. Loaded only if you enable analytics. IP anonymization is on; event retention is set to 14 months.`
                    : `Fornitore: Google. ID misurazione: ${site.gaMeasurementId}. Finalità: statistiche aggregate. Caricato solo se abiliti le statistiche. Anonimizzazione IP attiva; retention eventi impostata a 14 mesi.`}
                </p>
              </div>

              <div className="home-plate">
                <h3 className={h3}>{isEn ? "Embedded content: Google Maps (consent required)" : "Contenuti incorporati, Google Maps (consenso richiesto)"}</h3>
                <p className={ui.bodyMuted}>
                  {isEn
                    ? "On the contacts page, the map iframe loads only if maps are enabled in preferences. Without consent a placeholder and an external Google Maps link are shown."
                    : "Nella pagina contatti, l’iframe della mappa si carica solo se le mappe sono abilitate nelle preferenze. Senza consenso restano un segnaposto e il link esterno a Google Maps."}
                </p>
              </div>

              <div className="home-plate">
                <h3 className={h3}>{isEn ? "Contact form: Formspree (not a tracking cookie)" : "Modulo di contatto, Formspree (non è un cookie di tracciamento)"}</h3>
                <p className={ui.bodyMuted}>
                  {isEn
                    ? "When you submit the form after accepting this privacy notice, the message is sent to Formspree so we can receive it. This is processing of the request you make, not website audience tracking."
                    : "Quando invii il form dopo aver accettato questa informativa, il messaggio viene inviato a Formspree per consentirci di riceverlo. Si tratta del trattamento della richiesta che tu stesso effettui, non di tracciamento del pubblico del sito."}
                </p>
              </div>

              <div className={`rounded-sm p-4 sm:p-6 ${ui.brandGradientCompact} text-white`}>
                <h3 className={`font-display mb-3 text-lg font-medium tracking-tight`}>
                  {isEn ? "Manage cookie preferences" : "Gestione delle preferenze cookie"}
                </h3>
                <p className="mb-3 copy-rhythm text-[0.98rem] leading-relaxed text-white/95 sm:text-[1.05rem]">
                  {isEn
                    ? "You can change your choice at any time from the footer or this button. Opening preferences shows the banner again without forcing a full reset first."
                    : "Puoi modificare la scelta in qualsiasi momento dal footer o da questo pulsante. Aprendo le preferenze si ripropone il banner senza un reset forzato iniziale."}
                </p>
                <div className="mt-5">
                  <CookiePreferencesButton />
                </div>
              </div>
            </div>

            <h2 className={h2}>{isEn ? "Professional disclaimer" : "Disclaimer professionale"}</h2>
            <p className={ui.bodyMuted}>
              {isEn
                ? "Content on this website is for general information about Studio Capoferri’s professional services. It does not constitute engineering advice, a quotation, or a professional appointment. Any engagement is governed by a separate written agreement and applicable professional rules."
                : "I contenuti di questo sito hanno finalità informative generali sui servizi professionali di Studio Capoferri. Non costituiscono parere tecnico, preventivo vincolante né incarico professionale. Ogni incarico è regolato da accordo scritto separato e dalle norme deontologiche applicabili."}
            </p>

            <p className={`mt-12 text-sm text-[#666] ${ui.body}`}>
              {isEn ? "Last updated: November 2026." : "Ultimo aggiornamento: novembre 2026."}
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
