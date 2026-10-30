import type { Metadata } from "next";
import { LocalizedAboutPageContent } from "@/components/pages/LocalizedAboutPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Chi siamo",
  description:
    "Studio di progettazione strutturale ad Adro (BS) per imprese generali, general contractor e studi tecnici: strutture in acciaio, disegni d'officina, direzione lavori.",
  path: "/chi-siamo",
});

export default function ChiSiamoPage() {
  return <LocalizedAboutPageContent />;
}
