import { ClientsStrip } from "@/components/home/ClientsStrip";
import { HomeAboutSection } from "@/components/home/HomeAboutSection";
import { HomeContactsSection } from "@/components/home/HomeContactsSection";
import { HomeProjectsSection } from "@/components/home/HomeProjectsSection";
import { HomeServicesSection } from "@/components/home/HomeServicesSection";
import { HomeZoneSection } from "@/components/home/HomeZoneSection";
import type { Locale } from "@/lib/i18n";

export function LocalizedHomeSections({ locale }: { locale: Locale }) {
  return (
    <>
      <HomeAboutSection locale={locale} />
      <ClientsStrip locale={locale} />
      <HomeServicesSection locale={locale} />
      <HomeProjectsSection locale={locale} />
      <HomeZoneSection locale={locale} />
      <HomeContactsSection locale={locale} />
    </>
  );
}
