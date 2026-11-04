import type { Metadata } from "next";
import { LocalizedInternationalPageContent } from "@/components/pages/LocalizedInternationalPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Clienti internazionali",
  description:
    "General contractor e partner UE: acciaio, disegni d'officina e cantiere in Nord Italia. Confronti tecnici in inglese.",
  path: "/clienti-internazionali",
  keywords: [
    "general contractor Italia",
    "impresa generale costruzione partner strutturale",
    "studio ingegneria clienti internazionali",
    "strutture acciaio partner esteri Italia",
    "disegni officina fabricator UE",
    "ingegnere strutturale consulenze in inglese",
  ],
});

export default function ClientiInternazionaliPage() {
  return <LocalizedInternationalPageContent />;
}
