import localFont from "next/font/local";

/**
 * IBM Plex Sans — corpo e UI.
 * 400 corpo, 500 titoli UI / Medium, 600 Semibold.
 */
export const fontSans = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  adjustFontFallback: "Arial",
});

/**
 * Newsreader — titoli display (H1/H2, nomi, cifre).
 * Serif editoriale già in repo; non requesta Google Fonts a runtime.
 */
export const fontDisplay = localFont({
  src: [
    { path: "../fonts/newsreader-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/newsreader-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
