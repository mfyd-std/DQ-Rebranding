export type SiteNavItem = {
  label: string;
  footerLabel?: string;
  href: string;
  homeHref?: string;
};

export type SiteNavGroup = SiteNavItem & {
  header?: boolean;
  footer?: boolean;
  items: Array<SiteNavItem>;
};

export const registrationUrl = "https://daftar.daarelqolam.ac.id/";
export const dq3RegistrationUrl = "https://psb.daarelqolam3.sch.id/";

const navigationGroups: SiteNavGroup[] = [
  {
    label: "Tentang DQ",
    href: "/tentang",
    homeHref: "#tentang",
    items: [
      { label: "Profil Pesantren", href: "/tentang#profil", homeHref: "#tentang" },
      { label: "Visi & Misi", href: "/tentang#visi", homeHref: "#tentang" },
      { label: "Pimpinan", href: "/tentang#pimpinan", homeHref: "#tentang" },
      { label: "Sejarah", href: "/tentang#sejarah", homeHref: "#tentang" },
    ],
  },
  {
    label: "Program",
    href: "/#program",
    footer: true,
    items: [
      { label: "Program Reguler (DQ Pusat)", footerLabel: "Program Reguler", href: "/#program-reguler" },
      { label: "Excellent Class (DQ 2)", footerLabel: "Excellent Class", href: "/#program-excellent" },
      { label: "International (DQ 3)", footerLabel: "Kelas Internasional", href: "/#dq3" },
      { label: "Dirasah Islamiyyah (DQ 4)", footerLabel: "Dirasah Islamiyyah", href: "/#program-dirasah" },
    ],
  },
  {
    label: "Jelajahi",
    href: "/jelajahi",
    homeHref: "#jelajahi",
    footer: true,
    items: [
      { label: "Fasilitas", href: "/jelajahi#fasilitas", homeHref: "#jelajahi-fasilitas" },
      { label: "Kehidupan Islami", href: "/jelajahi#kehidupan", homeHref: "#jelajahi-kehidupan" },
      { label: "Ekstrakurikuler", href: "/jelajahi#ekskul", homeHref: "#jelajahi-ekskul" },
      { label: "Kehidupan Asrama", href: "/jelajahi#asrama", homeHref: "#jelajahi-asrama" },
    ],
  },
  {
    label: "Pendaftaran",
    href: registrationUrl,
    header: false,
    footer: true,
    items: [
      { label: "PSB Daar el-Qolam", href: registrationUrl },
      { label: "PSB DQ3", href: dq3RegistrationUrl },
      { label: "Info e-brosur", href: "/assets/legacy/docs/brosur_sanbar_2025.pdf" },
    ],
  },
];

const navigationLinks: SiteNavItem[] = [
  { label: "Berita", href: "/blog", homeHref: "#berita" },
  { label: "Kontak", href: "/kontak" },
];

const toNavItem = ({ label, footerLabel, href, homeHref }: SiteNavItem): SiteNavItem => ({
  label,
  href,
  ...(footerLabel ? { footerLabel } : {}),
  ...(homeHref ? { homeHref } : {}),
});

export const siteNavGroups = navigationGroups.filter(({ header = true }) => header);

export const siteNavLinks = navigationLinks;

export const sitePrimaryLinks: SiteNavItem[] = [
  { label: "Beranda", href: "/" },
  ...siteNavGroups.map(toNavItem),
  ...siteNavLinks,
];

export const siteFooterGroups = navigationGroups
  .filter(({ footer }) => footer)
  .map(({ label, items }) => ({
    label,
    links: items.map((item) => ({
      ...item,
      label: item.footerLabel ?? item.label,
    })),
  }));

const footerGroupLabels = new Set(siteFooterGroups.map(({ label }) => label));

export const siteFooterNavigationLinks = sitePrimaryLinks.filter(
  ({ label }) => label !== "Beranda" && !footerGroupLabels.has(label),
);

export const siteSocialLinks: SiteNavItem[] = [
  { label: "YouTube @ElQolam", href: "https://www.youtube.com/@ElQolam/videos" },
  { label: "Instagram @daarelqolam", href: "https://www.instagram.com/daarelqolam/" },
  { label: "Instagram @dzaizza_official", href: "https://www.instagram.com/dzaizza_official/" },
  { label: "TikTok @ponpesdaarelqolam", href: "https://www.tiktok.com/@ponpesdaarelqolam" },
];