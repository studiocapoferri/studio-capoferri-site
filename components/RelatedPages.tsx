import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";

export type RelatedPageLink = {
  href: string;
  label: string;
  hint?: string;
  title?: string;
};

export function RelatedPages({
  label,
  links,
  locale,
}: {
  label: string;
  links: readonly RelatedPageLink[];
  locale: Locale;
}) {
  const cols = links.length > 2 ? "sm:grid-cols-3" : "sm:grid-cols-2";

  return (
    <aside className="mt-7 border-t border-[#1c1e21]/10 pt-5" aria-label={label}>
      <p className="m-0 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-[#6a6a6a]">{label}</p>
      <ul className={`mt-3 m-0 grid list-none gap-0 p-0 ${cols} sm:gap-x-8`}>
        {links.map((link) => (
          <li key={link.href} className="border-b border-[#1c1e21]/10">
            <Link
              href={localizeHref(link.href, locale)}
              title={link.title}
              className="group flex items-baseline justify-between gap-4 py-3.5 text-[#1c1e21] transition-colors hover:text-[#b01010] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(176,16,16,0.55)]"
            >
              <span className="min-w-0">
                <span className="font-display block text-[1.08rem] font-medium tracking-tight sm:text-[1.15rem]">
                  {link.label}
                </span>
                {link.hint ? (
                  <span className="mt-1 block text-[0.88rem] leading-snug text-[#6a6a6a] transition-colors group-hover:text-[#555]">
                    {link.hint}
                  </span>
                ) : null}
              </span>
              <span
                aria-hidden
                className="shrink-0 translate-x-0 text-[1.05rem] text-[#1c1e21]/35 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#b01010]"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
