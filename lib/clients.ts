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
 * Selected clients on the home strip (dark graphite). Cap ~10 for restraint.
 * Parked local only (not on strip): Ariotti, Magnetti, Muzzolon, Pezt Co., Cre System, Roversi, ST Performance, Prismac.
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
    id: "cibin",
    name: "Cibin Studio7",
    src: "/assets/clienti/cibin.webp",
    href: "https://www.studiocibin.com/",
    altIt: "Logo Cibin Studio7, cliente Studio Capoferri",
    altEn: "Cibin Studio7 logo, Studio Capoferri client",
    width: 119,
    height: 140,
  },
];
