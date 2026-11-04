/**
 * Builds Cloudflare Bulk Redirect CSV from legacy/static JSON + known path aliases.
 * Output: ops/cloudflare-bulk-redirects.csv (no header row; CF dashboard import).
 *
 * Run: node scripts/generate-cloudflare-redirects.cjs
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const HOST = "www.studiocapoferri.eu";
const ORIGIN = `https://${HOST}`;

const legacy = JSON.parse(
  fs.readFileSync(path.join(root, "lib", "legacy-redirects.json"), "utf8"),
);
const staticPaths = JSON.parse(
  fs.readFileSync(path.join(root, "lib", "static-path-redirects.json"), "utf8"),
);

function withTrailingSlash(pathname) {
  if (!pathname || pathname === "/") return "/";
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return p.endsWith("/") ? p : `${p}/`;
}

/** Absolute CF source (host + path, no scheme — Bulk Redirect CSV style). */
function sourceUrl(pathname) {
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${HOST}${p}`;
}

function targetUrl(pathname) {
  return `${ORIGIN}${withTrailingSlash(pathname)}`;
}

/** Path variants people / crawlers hit for a pretty URL. */
function prettyPathVariants(prettyPath) {
  const base = prettyPath.replace(/\/+$/, "");
  if (!base) return ["/"];
  return [base, `${base}/`];
}

const pairs = new Map(); // source path (with leading /) → dest path

function add(fromPath, toPath) {
  const from = fromPath.startsWith("/") ? fromPath : `/${fromPath}`;
  if (from === withTrailingSlash(toPath) || from === toPath) return;
  pairs.set(from, withTrailingSlash(toPath));
}

for (const [from, to] of Object.entries(legacy)) {
  add(`/${from}`, to);
}

for (const [from, to] of Object.entries(staticPaths)) {
  add(`/${from}`, to);
  // Drop trailing index.html → directory URL aliases
  if (from.endsWith("/index.html")) {
    const dir = `/${from.slice(0, -"/index.html".length)}`;
    for (const v of prettyPathVariants(dir)) add(v, to);
  }
}

// Aliases mirrored in next.config.ts (non-STATIC_EXPORT redirects)
add("/index.html", "/");
add("/progetti/residenziali/villa-acciaio-veneto", "/progetti/residenziali/villa-acciaio-pollenza");
add("/progetti/residenziali/villa-acciaio-veneto/", "/progetti/residenziali/villa-acciaio-pollenza");
add("/en/projects/residential/steel-villa-veneto", "/en/projects/residential/steel-villa-pollenza");
add("/en/projects/residential/steel-villa-veneto/", "/en/projects/residential/steel-villa-pollenza");
add("/en/contacts", "/en/contact");
add("/en/contacts/", "/en/contact");
add("/en/civil-and-environmental-engineering-studio", "/en/about");
add("/en/civil-and-environmental-engineering-studio/", "/en/about");

const lines = [...pairs.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([from, to]) => `${sourceUrl(from)},${targetUrl(to)},301,,,,`);

const outDir = path.join(root, "ops");
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "cloudflare-bulk-redirects.csv");
fs.writeFileSync(outFile, `${lines.join("\n")}\n`, "utf8");

console.log(`[generate-cloudflare-redirects] ${lines.length} → ${path.relative(root, outFile)}`);
