"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  registrationUrl,
  siteNavGroups,
  sitePrimaryLinks,
  type SiteNavItem,
} from "@/components/site-navigation";

function HeaderLink({ item, className }: { item: SiteNavItem; className: string }) {
  return <Link href={item.href} className={className}>{item.label}</Link>;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const isHome = pathname === "/";
  const isAbout = pathname === "/tentang";
  const isExplore = pathname === "/jelajahi";

  useEffect(() => {
    if (pathname === "/blog") return;
    const storedTheme = window.localStorage.getItem("dq-theme");
    if (storedTheme === "dark") setDarkMode(true);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem("dq-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  if (pathname === "/blog") {
    return null;
  }

  const closeMenu = () => setMenuOpen(false);
  const navItems = isHome ? siteNavGroups : [];

  return (
    <header className="navbar-glass fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Daar el-Qolam beranda">
          <Image src="/images/logo-daar-el-qolam.svg" alt="Logo Daar el-Qolam" width={205} height={48} priority className="h-9 w-auto lg:h-11" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {isHome && navItems.map((group) => (
            <div key={group.label} className="group relative">
              <Link href={group.homeHref ?? group.href} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-dq-charcoal hover:text-dq-green">{group.label}<span aria-hidden="true">⌄</span></Link>
              <div className="invisible absolute left-0 top-full w-56 translate-y-2 rounded-xl border border-dq-green/10 bg-white py-2 opacity-0 shadow-card-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {group.items.map((item) => <HeaderLink key={item.label} item={{ ...item, href: item.homeHref ?? item.href }} className="block px-4 py-2 text-sm text-dq-charcoal hover:bg-dq-green-light hover:text-dq-green" />)}
              </div>
            </div>
          ))}
          {isHome ? sitePrimaryLinks.filter((item) => item.label === "Berita" || item.label === "Kontak").map((item) => <HeaderLink key={item.label} item={{ ...item, href: item.homeHref ?? item.href }} className="px-3 py-2 text-sm font-medium hover:text-dq-green" />) : sitePrimaryLinks.map((item) => {
            const isCurrent = (isAbout && item.label === "Tentang DQ") || (isExplore && item.label === "Jelajahi");
            return isCurrent ? <span key={item.label} className="px-3 py-2 text-sm font-semibold text-dq-green" aria-current="page">{item.label}</span> : <HeaderLink key={item.label} item={item} className="px-3 py-2 text-sm font-medium hover:text-dq-green" />;
          })}
        </nav>
        <div className="flex items-center gap-2">
          {isHome && <button type="button" className="theme-toggle" onClick={() => setDarkMode((value) => !value)} aria-label={darkMode ? "Aktifkan mode terang" : "Aktifkan mode gelap"} aria-pressed={darkMode}><span className="icon-moon" aria-hidden="true">☾</span><span className="icon-sun" aria-hidden="true">☀</span></button>}
          <span className="hidden items-center gap-1.5 rounded-full border border-dq-gold/30 bg-dq-gold-light px-3 py-1 text-xs font-semibold text-dq-gold md:inline-flex"><span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />Pendaftaran Dibuka</span>
          <a href={registrationUrl} target="_blank" rel="noreferrer" className={isExplore ? "rounded-lg bg-dq-green px-3 py-2 text-xs font-semibold text-white hover:bg-dq-green-dark lg:px-4 lg:text-sm" : "hidden rounded-lg bg-dq-green px-4 py-2 text-sm font-semibold text-white lg:inline-flex"}>{isExplore ? <><span className="lg:hidden">Ayo Mondok!</span><span className="hidden lg:inline">Daftar Sekarang</span></> : "Daftar Sekarang"}</a>
          {!isExplore && <a href={registrationUrl} target="_blank" rel="noreferrer" className="rounded-md bg-dq-green px-3 py-1.5 text-xs font-semibold text-white lg:hidden">Ayo Mondok!</a>}
          {isHome && <button type="button" onClick={() => setMenuOpen(true)} className="rounded-md p-2 text-xl lg:hidden" aria-label="Buka menu" aria-expanded={menuOpen}>☰</button>}
        </div>
      </div>
      {isHome && menuOpen && <div className="mobile-menu open fixed inset-0 z-[60] bg-dq-ivory/95 backdrop-blur-xl lg:hidden"><div className="flex h-full flex-col"><div className="flex items-center justify-between border-b border-dq-green/10 px-5 py-4"><Link href="#hero" onClick={closeMenu} aria-label="Kembali ke beranda"><Image src="/images/logo-daar-el-qolam.svg" alt="Logo Daar el-Qolam" width={180} height={42} className="h-9 w-auto" /></Link><button type="button" onClick={closeMenu} className="p-2 text-2xl" aria-label="Tutup menu">×</button></div><nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Menu mobile"><Link href="#hero" onClick={closeMenu} className="mm-link active">Beranda</Link>{siteNavGroups.map((group) => <div key={group.label}><p className="mm-section-title">{group.label}</p><Link href={group.homeHref ?? group.href} onClick={closeMenu} className="mm-link">{group.label}</Link>{group.items.map((item) => <Link key={item.label} href={item.homeHref ?? item.href} onClick={closeMenu} className="mm-sub">{item.label}</Link>)}</div>)}<p className="mm-section-title">Lainnya</p><Link href="#berita" onClick={closeMenu} className="mm-link">Berita &amp; Kegiatan</Link><Link href="#faq" onClick={closeMenu} className="mm-link">FAQ</Link><Link href="/kontak" onClick={closeMenu} className="mm-link">Kontak</Link></nav><div className="border-t border-dq-green/10 px-5 py-4"><a href={registrationUrl} target="_blank" rel="noreferrer" className="block rounded-lg bg-dq-green px-4 py-3 text-center text-sm font-semibold text-white">Ayo Mondok!</a></div></div></div>}
    </header>
  );
}
