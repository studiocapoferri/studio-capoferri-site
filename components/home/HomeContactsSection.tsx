import Image from "next/image";
import Link from "next/link";
import { homeTitleCls } from "@/components/home/titleClasses";
import { homeCopy } from "@/lib/home-copy";
import { localizeHref, type Locale } from "@/lib/i18n";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

const contactImage = {
  src: "/assets/superstudio-village-entrata-esterno.webp",
  altIt: "Ingresso di Superstudio Village a Milano, struttura in acciaio progettata da Studio Capoferri",
  altEn: "Entrance to Superstudio Village in Milan, steel structure designed by Studio Capoferri",
} as const;

export function HomeContactsSection({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];
  const mapsLabel = locale === "en" ? "Open on Google Maps" : "Apri su Google Maps";
  const reviewsLabel = locale === "en" ? "Google reviews" : "Recensioni Google";

  return (
    <section id="contatti" className={`lazy-section section-shell ${scrollAnchorClass} ${layoutGutterXClass}`}>
      <div className={layoutContentMaxClass}>
        <div className="reveal-block">
          <h2 className={homeTitleCls}>{t.contactsTitle}</h2>
          <div className="mt-8 grid grid-cols-1 items-start gap-8 md:mt-10 md:grid-cols-2 md:gap-x-[clamp(2rem,4vw,3.5rem)]">
            <figure className="m-0">
              <div className="photo-alive relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-[#1c1e21]/12 bg-[#e8e6e1]">
                <Image
                  src={contactImage.src}
                  alt={locale === "en" ? contactImage.altEn : contactImage.altIt}
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 50vw, 100vw"
                  unoptimized
                />
              </div>
              <figcaption className="mt-2.5 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-[#6a6a6a]">
                {locale === "en" ? "Superstudio Village, Milan" : "Superstudio Village, Milano"}
              </figcaption>
            </figure>

            <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
