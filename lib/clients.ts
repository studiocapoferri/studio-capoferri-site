export type ClientLogo = {
  id: string;
  name: string;
  src: string;
  href: string;
  altIt: string;
  altEn: string;
  /** Intrinsic display width hint at ~32px height */
  width: number;
  height: number;
};

/**
 * Optical order: compact marks break up wide wordmarks.
 * Row ends: Baroni / Prismac (flush with header EN).
 * Parked local: Magnetti, Pezt Co., Cre System, Roversi, ST Performance, Cibin.
 * Fonderie Ariotti: autorizzazione scritta 03/11/2026 (sito + LinkedIn, senza alterazioni).
 */
export const homeClients: ClientLogo[] = [
  {
    id: "tecnoprogetti",
    name: "Tecnoprogetti",
    src: "/assets/clienti/tecnoprogetti.webp",
    href: "https://www.tecnoprogetti.org/",
    altIt: "Logo Tecnoprogetti, cliente Studio Capoferri",
    altEn: "Tecnoprogetti logo, Studio Capoferri client",
    width: 552,
    height: 110,
  },
  {
    id: "fonderie-ariotti",
    name: "Fonderie Ariotti",
    src: "/assets/clienti/fonderie-ariotti.svg",
    href: "https://www.fonderieariotti.com/",
    altIt: "Logo Fonderie Ariotti, cliente Studio Capoferri",
    altEn: "Fonderie Ariotti logo, Studio Capoferri client",
    width: 400,
    height: 47,
  },
  {
    id: "pb-srl",
    name: "PB S.r.l. Carpenteria",
    src: "/assets/clienti/pb-srl.webp",
    href: "https://www.pbsrlcarpenteria.com/",
    altIt: "Logo PB S.r.l. Carpenteria, cliente Studio Capoferri",
    altEn: "PB S.r.l. Carpenteria logo, Studio Capoferri client",
    width: 400,
    height: 227,
  },
  {
    id: "gp-piazzon",
    name: "GP di Piazzon",
    src: "/assets/clienti/gp-piazzon.webp",
    href: "https://gpdipiazzon.it/",
    altIt: "Logo GP di Piazzon, cliente Studio Capoferri",
    altEn: "GP di Piazzon logo, Studio Capoferri client",
    width: 512,
    height: 512,
  },
  {
    id: "superstudio",
    name: "Superstudio",
    src: "/assets/clienti/superstudio.svg",
    href: "https://www.superstudio.it/",
    altIt: "Logo Superstudio, cliente Studio Capoferri",
    altEn: "Superstudio logo, Studio Capoferri client",
    width: 168,
    height: 32,
  },
  {
    id: "baroni",
    name: "Carpenteria Baroni",
    src: "/assets/clienti/baroni-mark.webp",
    href: "https://www.carpenteriabaroni.it/",
    altIt: "Logo Carpenteria Baroni, cliente Studio Capoferri",
    altEn: "Carpenteria Baroni logo, Studio Capoferri client",
    width: 188,
    height: 220,
  },
  {
    id: "steelera",
    name: "Steelera",
    src: "/assets/clienti/steelera.webp",
    href: "https://steelera.it/",
    altIt: "Logo Steelera, cliente Studio Capoferri",
    altEn: "Steelera logo, Studio Capoferri client",
    width: 800,
    height: 297,
  },
  {
    id: "spinelli",
    name: "Spinelli S.r.l.",
    src: "/assets/clienti/spinelli.webp",
    href: "https://spinellisrl.eu/",
    altIt: "Logo Spinelli S.r.l., cliente Studio Capoferri",
    altEn: "Spinelli S.r.l. logo, Studio Capoferri client",
    width: 160,
    height: 32,
  },
  {
    id: "muzzolon",
    name: "Muzzolon Industries",
    src: "/assets/clienti/muzzolon-full.webp",
    href: "https://muzzolonindustries.com/",
    altIt: "Logo Muzzolon Industries, cliente Studio Capoferri",
    altEn: "Muzzolon Industries logo, Studio Capoferri client",
    width: 1200,
    height: 1168,
  },
  {
    id: "tecnosida",
    name: "Tecnosida",
    src: "/assets/clienti/tecnosida.webp",
    href: "https://www.tecnosida.it/",
    altIt: "Logo Tecnosida, cliente Studio Capoferri",
    altEn: "Tecnosida logo, Studio Capoferri client",
    width: 800,
    height: 188,
  },
  {
    id: "arcameccanica",
    name: "AR.CA Meccanica",
    src: "/assets/clienti/arcameccanica.webp",
    href: "https://www.arcameccanica.com/",
    altIt: "Logo AR.CA Meccanica, cliente Studio Capoferri",
    altEn: "AR.CA Meccanica logo, Studio Capoferri client",
    width: 720,
    height: 215,
  },
  {
    id: "prismac",
    name: "Prismac",
    src: "/assets/clienti/prismac.webp",
    href: "https://www.prismacsrl.it/",
    altIt: "Logo Prismac, cliente Studio Capoferri",
    altEn: "Prismac logo, Studio Capoferri client",
    width: 350,
    height: 71,
  },
];
