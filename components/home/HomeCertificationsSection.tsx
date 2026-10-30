import { homeTitleCls } from "@/components/home/titleClasses";
import { homeCopy } from "@/lib/home-copy";
import type { Locale } from "@/lib/i18n";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";

export function HomeCertificationsSection({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const t = homeCopy[locale];

  return (
    <section
      id="certificazioni"
      className={`lazy-section ${compact ? "py-12 sm:py-16" : "section-shell"} ${scrollAnchorClass} ${layoutGutterXClass}`}
    >
      <div className={layoutContentMaxClass}>
        <div className="home-split-header reveal-block">
          <div className="home-split-header__left">
            <h2 className={homeTitleCls}>{t.certificationsTitle}</h2>
          </div>
          <p className="home-split-header__right">{t.certificationsIntro}</p>
        </div>
        {compact ? (
          <ul className="m-0 mt-8 grid list-none grid-cols-1 gap-x-10 gap-y-5 p-0 sm:mt-10 sm:grid-cols-2">
            {t.certifications.map(([title, text]) => (
              <li key={title} className="reveal-block border-l-2 border-[#b01010]/55 pl-4">
                <p className="font-display m-0 text-base font-medium tracking-tight text-[#1c1e21] sm:text-lg">
                  {title}
                </p>
                <p className="mt-1 text-[0.88rem] leading-snug text-[#555] sm:text-[0.95rem]">{text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-4">
            {t.certifications.map(([title, text]) => (
              <article key={title} className="home-plate reveal-block">
                <h3
                  className={`font-display mb-2 text-base font-medium tracking-tight text-[#1c1e21] sm:mb-3 sm:text-lg md:text-xl`}
                >
                  {title}
                </h3>
                <p className="copy-rhythm text-[0.88rem] text-[#444] sm:text-[0.95rem] md:text-base">{text}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
