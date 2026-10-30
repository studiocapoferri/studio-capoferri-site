import type { MetadataRoute } from "next";
import { pageUrl, steelLandingSlugs } from "@/lib/seo";
import { projectAreas, projectCategories } from "@/lib/projects";

/** Obbligatorio con `output: export` (GitHub Pages / hosting statico). */
export const dynamic = "force-static";

/**
 * Sitemap semplice come Studio Pagnoni: solo loc / lastmod / changefreq / priority.
 * Niente xhtml:link hreflang (quel formato fa fallire spesso "Impossibile recuperare" in GSC).
 * Gli hreflang restano nei metadata di pagina.
 */
const lastModified = new Date();

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function entry(
  path: string,
  locale: "it" | "en",
  priority: number,
  changeFrequency: ChangeFreq = "monthly"
): MetadataRoute.Sitemap[number] {
  return {
    url: pageUrl(path, locale),
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    entry("/", "it", 1.0, "weekly"),
    entry("/", "en", 0.9, "weekly"),
    entry("/chi-siamo", "it", 0.8),
    entry("/chi-siamo", "en", 0.8),
    entry("/servizi", "it", 0.8),
    entry("/servizi", "en", 0.8),
    entry("/progetti", "it", 0.8),
    entry("/progetti", "en", 0.8),
    entry("/contatti", "it", 0.9),
    entry("/contatti", "en", 0.8),
    entry("/privacy-policy", "it", 0.3, "yearly"),
    entry("/privacy-policy", "en", 0.3, "yearly"),
    entry("/clienti-internazionali", "it", 0.85),
    entry("/clienti-internazionali", "en", 0.9),
    entry("/progettazione-strutturale-acciaio-italia", "it", 0.85),
    entry("/progettazione-strutturale-acciaio-italia", "en", 0.95),
    entry("/progettazione-strutturale-per-general-contractor", "it", 0.9),
    entry("/progettazione-strutturale-per-general-contractor", "en", 0.85),
    entry("/progettazione-strutturale-per-carpenterie", "it", 0.9),
    entry("/progettazione-strutturale-per-carpenterie", "en", 0.85),
    ...steelLandingSlugs.flatMap((slug) => [
      entry(`/progettazione-strutture-acciaio-${slug}`, "it", 0.8),
      entry(`/progettazione-strutture-acciaio-${slug}`, "en", 0.8),
    ]),
  ];

  for (const area of projectAreas) {
    entries.push(entry(`/progetti/${area}`, "it", 0.7));
    entries.push(entry(`/progetti/${area}`, "en", 0.7));
    for (const c of projectCategories[area].cases) {
      entries.push(entry(`/progetti/${area}/${c.slug}`, "it", 0.6));
      entries.push(entry(`/progetti/${area}/${c.slug}`, "en", 0.6));
    }
  }

  return entries;
}
