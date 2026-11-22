"use client";

import { openCookiePreferences } from "@/lib/cookie-consent";
import { useLocale } from "@/components/LocaleProvider";
import { chromeCopy } from "@/lib/i18n";
import { ui } from "@/lib/ui";

type Props = {
  variant?: "dark" | "footer";
};

export function CookiePreferencesButton({ variant = "dark" }: Props) {
  const locale = useLocale();
  const label = chromeCopy[locale].cookie.preferences;
  const className = variant === "footer" ? `${ui.footerLink} underline underline-offset-2` : ui.btnGhostOnDark;

  return (
    <button type="button" onClick={() => openCookiePreferences()} className={className}>
      {label}
    </button>
  );
}
