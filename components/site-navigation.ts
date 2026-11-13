export type SiteNavItem = {
  label: string;
  href: string;
  homeHref?: string;
};

export type SiteNavGroup = SiteNavItem & {
  items: Array<SiteNavItem>;
};

export const registrationUrl = "https://daftar.daarelqolam.ac.id/";
export const dq3RegistrationUrl = "https://psb.daarelqolam3.sch.id/";

export const siteNavGroups: SiteNavGroup[] = [
  {
    label: "Tentang DQ",
    href: "/tentang",
    homeHref: "#tentang",
    items: [
      { label: "Profil Pesantren", href: "/tentang#profil", homeHref: "#tentang" },
      { label: "Visi & Misi", href: "/tentang#visi", homeHref: "#tentang" },
      { label: "Sejarah", href: "/tentang#sejarah", homeHref: "#tentang" },
    ],
  },
  {
    label: "Program",
    href: "/#program",
    items: [
      { label: "Program Reguler (DQ Pusat)", href: "/#program-reguler" },
      { label: "Excellent Class (DQ 2)", href: "/#program-excellent" },
      { label: "International (DQ 3)", href: "/#dq3" },
      { label: "Dirasah Islamiyyah (DQ 4)", href: "/#program-dirasah" },
    ],
  },
  {
    label: "Jelajahi",
    href: "/jelajahi",
    homeHref: "#jelajahi",
    items: [
      { label: "Fasilitas", href: "/jelajahi#fasilitas", homeHref: "#jelajahi-fasilitas" },
      { label: "Kehidupan Islami", href: "/jelajahi#kehidupan", homeHref: "#jelajahi-kehidupan" },
      { label: "Ekstrakurikuler", href: "/jelajahi#ekskul", homeHref: "#jelajahi-ekskul" },
      { label: "Kehidupan Asrama", href: "/jelajahi#asrama", homeHref: "#jelajahi-asrama" },
    ],
  },
];

export const siteNavLinks: SiteNavItem[] = [
  { label: "Berita", href: "/blog", },
  { label: "Kontak", href: "/#kontak" },
];

export const siteFooterGroups = [
  {
    label: "Program",
    links: [
      { label: "Program Reguler", href: "/#program-reguler" },
      { label: "Excellent Class", href: "/#program-excellent" },
      { label: "Kelas Internasional", href: "/#dq3" },
      { label: "Dirasah Islamiyyah", href: "/#program-dirasah" },
    ],
  },
  {
    label: "Jelajahi",
    links: [
      { label: "Fasilitas", href: "/jelajahi#fasilitas" },
      { label: "Kehidupan Islami", href: "/jelajahi#kehidupan" },
      { label: "Ekstrakurikuler", href: "/jelajahi#ekskul" },
      { label: "Kehidupan Asrama", href: "/jelajahi#asrama" },
    ],
  },
];

export const siteSocialLinks: SiteNavItem[] = [
  { label: "YouTube @ElQolam", href: "https://www.youtube.com/@ElQolam/videos" },
  { label: "Instagram @daarelqolam", href: "https://www.instagram.com/daarelqolam/" },
  { label: "Instagram @dzaizza_official", href: "https://www.instagram.com/dzaizza_official/" },
  { label: "TikTok @ponpesdaarelqolam", href: "https://www.tiktok.com/@ponpesdaarelqolam" },
];
