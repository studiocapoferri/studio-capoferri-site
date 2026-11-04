# Sito Web di Studio Capoferri – Progettazione Strutture in Acciaio

Benvenuti nel repository del sito web dello **Studio Capoferri**, specializzato nella progettazione strutturale in acciaio per edilizia civile e industriale.

Il sito fornisce informazioni sui servizi offerti, i progetti realizzati, i contatti e l'approccio tecnico-professionale dello studio.

Dominio ufficiale: [www.studiocapoferri.eu](https://www.studiocapoferri.eu)

## Struttura del progetto (Next.js)

- **`app/`** — App Router: pagine, layout, metadata e route.
- **`components/`** — Componenti React riutilizzabili (header, footer, form, ecc.).
- **`lib/`** — Dati e utilità condivisi.
- **`assets/`** — Immagini e media sorgente (unica cartella da versionare).
- **`public/`** — File serviti staticamente; `public/assets/` è generata da `sync-static.cjs` e non va committata.
- **`scripts/sync-static.cjs`** — Copia `assets/` in `public/assets/` e file di root in `public/` prima di dev/build (vedi `package.json`).

Stili globali e Tailwind sono configurati nel progetto Next (vedi `app/globals.css` e `postcss.config.mjs`).

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Build produzione

```bash
npm run build
npm start
```

Per export statico (hosting senza Node): `npm run build:static` (variabile `STATIC_EXPORT=1`).

## Cloudflare (security headers)

Il deploy live è su **GitHub Pages**: gli `headers` di `next.config.ts` **non** vengono applicati in export statico. Il file `public/_headers` (copia allineata a quella config) viene incluso in `out/` ed è letto automaticamente solo se un giorno il sito passa a **Cloudflare Pages**.

Con dominio dietro **Cloudflare Free** + proxy arancione (origin = GitHub Pages), impostate gli stessi header così:

1. Cloudflare Dashboard → dominio → **Rules** → **Transform Rules** → **Modify Response Header** → Create rule  
2. If: hostname equals `www.studiocapoferri.eu` (e, se serve, `studiocapoferri.eu`)  
3. Then: **Set static** per ogni header (valori già in `public/_headers`):
   - `X-Content-Type-Options` → `nosniff`
   - `X-Frame-Options` → `SAMEORIGIN`
   - `Referrer-Policy` → `strict-origin-when-cross-origin`
   - `Permissions-Policy` → come in `_headers`
   - `Cross-Origin-Opener-Policy` → `same-origin-allow-popups`
   - `Cross-Origin-Resource-Policy` → `same-site`
   - `Strict-Transport-Security` → `max-age=63072000; includeSubDomains; preload`
   - `Content-Security-Policy` → riga CSP in `_headers` (una sola riga)
4. SSL/TLS → modalità **Full** (o Full strict se il cert GitHub è ok)

Verifica dopo il deploy della regola:

```bash
curl -sI https://www.studiocapoferri.eu/ | findstr /i "content-security x-frame x-content referrer permissions strict-transport"
```

### Cloudflare (redirect 301 legacy)

I soft-redirect HTML su GitHub Pages restano un fallback (`200` + meta refresh + `noindex`). I **301 veri** vanno impostati su Cloudflare (proxy arancione).

1. Rigenera il CSV dal repo (dopo modifiche a `lib/legacy-redirects.json` / `lib/static-path-redirects.json`):

```bash
npm run generate:cloudflare-redirects
```

2. File generato: `ops/cloudflare-bulk-redirects.csv` (nessuna riga di header; formato Bulk Redirects Cloudflare).
3. Dashboard → **Bulk redirects** → Create Bulk Redirect List → importa il CSV → collega la list a una Bulk Redirect Rule sul dominio.
4. Fonte dati: JSON in `lib/` + alias di `next.config.ts` (es. `/en/contacts/` → `/en/contact/`).

Verifica esempio:

```bash
curl -sI https://www.studiocapoferri.eu/en/contacts/ | findstr /i "HTTP location"
```

Atteso: `301` e `Location: …/en/contact/`.
