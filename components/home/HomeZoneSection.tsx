import { homeTitleCls } from "@/components/home/titleClasses";
import { homeCopy } from "@/lib/home-copy";
import type { Locale } from "@/lib/i18n";
import { layoutContentMaxClass, layoutGutterXClass, scrollAnchorClass } from "@/lib/site";
import { ui } from "@/lib/ui";

const figures = [
  {
    value: "40+",
    labelIt: "Anni di esperienza",
    labelEn: "Years of experience",
  },
  {
    value: "1000+",
    labelIt: "Progetti completati",
    labelEn: "Completed projects",
  },
] as const;

export function HomeZoneSection({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];

  return (
    <section id="zone-servite" className={`lazy-section section-shell ${scrollAnchorClass} ${layoutGutterXClass}`}>
      <div className={layoutContentMaxClass}>
        <div className="home-split-header reveal-block">
          <div className="home-split-header__left">
            <h2 className={homeTitleCls}>{t.zoneTitle}</h2>
          </div>
          <div className="home-split-header__right">{t.zoneDescription}</div>
        </div>
        <div className="mt-8 grid items-end gap-10 sm:mt-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-x-12">
          <div className="home-plate reveal-block">
            <h3 className={`font-display text-lg font-medium tracking-tight text-[#1c1e21] sm:text-xl`}>
              {t.zoneHeading}
            </h3>
            <div className={`mt-2 ${ui.bodyMuted}`}>{t.zoneFooter}</div>
          </div>
          <dl className="reveal-block grid grid-cols-2 gap-6 sm:gap-8">
            {figures.map((f) => (
              <div key={f.value}>
                <dt className="sr-only">{locale === "en" ? f.labelEn : f.labelIt}</dt>
                <dd>
                  <p className="font-display text-4xl font-medium lining-nums tracking-tight text-[#1c1e21] sm:text-5xl">
                    {f.value}
                  </p>
                  <p className="mt-1.5 text-sm text-[#555] sm:mt-2 sm:text-[0.95rem]">
                    {locale === "en" ? f.labelEn : f.labelIt}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
