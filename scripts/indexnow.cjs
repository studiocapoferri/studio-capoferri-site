/**
 * Notifica Bing (e motori IndexNow) delle URL in sitemap.
 * Uso: npm run indexnow
 * Prerequisito: chiave pubblica su /{key}.txt (deployata).
 */
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.studiocapoferri.eu";
const KEY = process.env.INDEXNOW_KEY ?? "f9644819e01045b885f734e134828f54";

async function main() {
  const base = SITE.replace(/\/$/, "");
  const host = new URL(base).host;
  const sitemapUrl = `${base}/sitemap.xml`;
  const keyLocation = `${base}/${KEY}.txt`;

  const sitemapRes = await fetch(sitemapUrl);
  if (!sitemapRes.ok) {
    throw new Error(`Sitemap ${sitemapUrl} → ${sitemapRes.status}`);
  }
  const xml = await sitemapRes.text();
  const urlList = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1]);
  if (urlList.length === 0) {
    throw new Error("Nessuna <loc> in sitemap");
  }

  const body = { host, key: KEY, keyLocation, urlList };
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  console.log(`[indexnow] ${urlList.length} URL → ${res.status}${text ? ` ${text}` : ""}`);
  if (res.status !== 200 && res.status !== 202) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("[indexnow]", err.message || err);
  process.exit(1);
});
