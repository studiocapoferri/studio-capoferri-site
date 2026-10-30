/**
 * Sitemap statica stile Studio Pagnoni (urlset 0.9, lastmod YYYY-MM-DD, niente xhtml).
 * Scrive sitemap.xml in root e public/ — usata al posto di app/sitemap.ts.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const BASE = "https://www.studiocapoferri.eu";
const today = new Date().toISOString().slice(0, 10);

/** [pathIT, pathEN, changefreq, priorityIT, priorityEN?] */
const pages = [
  ["/", "/en/", "weekly", "1.0", "0.9"],
  ["/chi-siamo/", "/en/about/", "monthly", "0.8", "0.8"],
  ["/servizi/", "/en/services/", "monthly", "0.8", "0.8"],
  ["/progetti/", "/en/projects/", "monthly", "0.8", "0.8"],
  ["/contatti/", "/en/contact/", "monthly", "0.9", "0.8"],
  ["/privacy-policy/", "/en/privacy-policy/", "yearly", "0.3", "0.3"],
  ["/clienti-internazionali/", "/en/international-clients/", "monthly", "0.85", "0.9"],
  ["/progettazione-strutturale-acciaio-italia/", "/en/structural-steel-design-italy/", "monthly", "0.85", "0.95"],
  [
    "/progettazione-strutturale-per-general-contractor/",
    "/en/structural-design-for-general-contractors/",
    "monthly",
    "0.9",
    "0.85",
  ],
  [
    "/progettazione-strutturale-per-carpenterie/",
    "/en/structural-design-for-steel-fabricators/",
    "monthly",
    "0.9",
    "0.85",
  ],
  ["/progettazione-strutture-acciaio-brescia/", "/en/structural-engineer-brescia/", "monthly", "0.8", "0.8"],
  ["/progettazione-strutture-acciaio-bergamo/", "/en/structural-engineer-bergamo/", "monthly", "0.8", "0.8"],
  ["/progettazione-strutture-acciaio-milano/", "/en/structural-engineer-milan/", "monthly", "0.8", "0.8"],
  ["/progetti/residenziali/", "/en/projects/residential/", "monthly", "0.7", "0.7"],
  ["/progetti/industriali/", "/en/projects/industrial/", "monthly", "0.7", "0.7"],
  ["/progetti/ricettivi/", "/en/projects/public-spaces/", "monthly", "0.7", "0.7"],
  [
    "/progetti/residenziali/villa-acciaio-pollenza/",
    "/en/projects/residential/steel-villa-pollenza/",
    "monthly",
    "0.6",
    "0.6",
  ],
  [
    "/progetti/residenziali/villa-acciaio-salsomaggiore/",
    "/en/projects/residential/steel-villa-salsomaggiore/",
    "monthly",
    "0.6",
    "0.6",
  ],
  [
    "/progetti/industriali/silos-metallici/",
    "/en/projects/industrial/metal-silos/",
    "monthly",
    "0.6",
    "0.6",
  ],
  [
    "/progetti/industriali/centro-raccolta-rifiuti-chiuduno/",
    "/en/projects/industrial/waste-collection-centre-chiuduno/",
    "monthly",
    "0.6",
    "0.6",
  ],
  [
    "/progetti/industriali/copertura-edificio-verniciatura-maranello/",
    "/en/projects/industrial/paint-shop-roof-structure-maranello/",
    "monthly",
    "0.6",
    "0.6",
  ],
  [
    "/progetti/industriali/capannone-erbusco/",
    "/en/projects/industrial/industrial-warehouse-erbusco/",
    "monthly",
    "0.6",
    "0.6",
  ],
  [
    "/progetti/industriali/ampliamento-complesso-zootecnico/",
    "/en/projects/industrial/livestock-complex-extension/",
    "monthly",
    "0.6",
    "0.6",
  ],
  [
    "/progetti/industriali/centro-direzionale-provaglio-diseo/",
    "/en/projects/industrial/office-complex-provaglio-diseo/",
    "monthly",
    "0.6",
    "0.6",
  ],
  [
    "/progetti/industriali/lamiere-da-getto-spinelli/",
    "/en/projects/industrial/steel-decking-spinelli/",
    "monthly",
    "0.6",
    "0.6",
  ],
  [
    "/progetti/ricettivi/superstudio-village/",
    "/en/projects/public-spaces/superstudio-village/",
    "monthly",
    "0.6",
    "0.6",
  ],
  ["/progetti/ricettivi/superstudio-maxi/", "/en/projects/public-spaces/superstudio-maxi/", "monthly", "0.6", "0.6"],
];

function urlEntry(locPath, lastmod, changefreq, priority) {
  const loc = locPath.startsWith("http") ? locPath : `${BASE}${locPath}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const chunks = [];
for (const [it, en, freq, pIt, pEn] of pages) {
  chunks.push(urlEntry(it, today, freq, pIt));
  chunks.push(urlEntry(en, today, freq, pEn));
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks.join("\n")}
</urlset>
`;

for (const dest of [path.join(root, "sitemap.xml"), path.join(root, "public", "sitemap.xml")]) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, xml, "utf8");
  console.log(`[generate-sitemap] ${path.relative(root, dest)} (${chunks.length} URL)`);
}
