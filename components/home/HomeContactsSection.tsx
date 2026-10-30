import Link from "next/link";
import { homeTitleCls } from "@/components/home/titleClasses";
import { homeCopy } from "@/lib/home-copy";
import { localizeHref, type Locale } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export function HomeContactsSection({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];
  const mapsLabel = locale === "en" ? "Open on Google Maps" : "Apri su Google Maps";
  const reviewsLabel = locale === "en" ? "Google reviews" : "Recensioni Google";

  return (
    <section id="contatti" className={`lazy-section section-shell ${scrollAnchorClass} ${layoutGutterXClass}`}>
      <div className={layoutContentMaxClass}>
        <div className="home-split-header reveal-block">
          <div className="home-split-header__left">
            <h2 className={homeTitleCls}>{t.contactsTitle}</h2>
          </div>
        </div>
        <article className="home-plate reveal-block max-w-xl">
          <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[0.95rem] text-[#444] sm:text-base">
            <li>
              <a
                href={`mailto:${site.email}`}
                title={linkTitles.email(site.email, locale)}
                className="underline-offset-2 transition hover:text-[#b01010] hover:underline"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phoneTel}`}
                title={linkTitles.telefono(site.phoneDisplay, locale)}
                className="underline-offset-2 transition hover:text-[#b01010] hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <address className="not-italic">{locale === "en" ? site.addressLineEn : site.addressLine}</address>
            </li>
            <li className="pt-1">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
                title={mapsLabel}
              >
                {mapsLabel}
              </a>
              <span className="mx-2 text-[#bbb]" aria-hidden>
                ·
              </span>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
                title={reviewsLabel}
              >
                {reviewsLabel}
              </a>
            </li>
          </ul>
        </article>
        <p className="mt-8 sm:mt-10">
          <Link
            href={localizeHref("/contatti#form-contatti", locale)}
            className={`${ui.btnPrimary} inline-flex w-full sm:w-auto`}
            title={linkTitles.formContatti(locale)}
          >
            {t.writeUs}
          </Link>
        </p>
      </div>
    </section>
  );
}
