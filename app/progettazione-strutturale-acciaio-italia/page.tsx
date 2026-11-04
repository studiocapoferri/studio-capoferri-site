import type { Metadata } from "next";
import { LocalizedExportPartnerPage } from "@/components/pages/LocalizedExportPartnerPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Progettazione strutturale in acciaio per partner europei",
  description:
    "Partner strutturale in Nord Italia per GC e imprese UE (DE, NL, BE, DK): acciaio, shop drawings, Eurocodici/NTC e supporto in cantiere.",
  path: "/progettazione-strutturale-acciaio-italia",
  keywords: [
    "general contractor Italia",
    "impresa generale costruzione strutture acciaio",
    "progettazione strutturale acciaio Italia partner UE",
    "disegni officina acciaio Germania Belgio Olanda Danimarca",
    "ingegnere strutturale consulenze in inglese",
    "steel design Italia Eurocodici",
  ],
});

export default function ProgettazioneStrutturaleAcciaioItaliaPage() {
  return <LocalizedExportPartnerPage />;
}
