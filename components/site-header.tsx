"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Bars3Icon, ChevronDownIcon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  registrationUrl,
  siteNavGroups,
  sitePrimaryLinks,
  type SiteNavItem,
} from "@/components/site-navigation";

function HeaderLink({ item, className }: { item: SiteNavItem; className: string }) {
  return <Link href={item.href} className={className}>{item.label}</Link>;
}

function groupSlug(href: string) {
  return href.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "home";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const isExplore = pathname === "/jelajahi";

  // Legacy js/main.js toggled .scrolled past 20px. Without it the glass header
  // kept its 55% resting background and read as plain transparency.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
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

  // A route change must not leave the next page's menu half expanded.
  useEffect(() => {
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      hamburgerRef.current?.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  return (
    <>
    <header className={`navbar-glass fixed inset-x-0 top-0 z-50${scrolled ? " scrolled" : ""}`}>
      <div className="mx-auto flex h-16 dq-container items-center justify-between px-5 lg:h-20 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Daar el-Qolam beranda">
          <Image src="/images/logo-daar-el-qolam.svg" alt="Logo Daar el-Qolam" width={205} height={48} priority className="logo-light h-9 w-auto lg:h-11" />
          <Image src="/images/logo-daar-el-qolam-wordmark-white.svg" alt="Logo Daar el-Qolam" width={205} height={48} priority className="logo-dark h-9 w-auto lg:h-11" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {siteNavGroups.map((group) => (
            <div key={group.label} className="group relative">
              <Link href={group.href} className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-dq-charcoal hover:text-dq-green">{group.label}<ChevronDownIcon className="h-3 w-3 shrink-0" aria-hidden="true" focusable="false" /></Link>
              <div className="invisible absolute left-0 top-full w-56 translate-y-2 rounded-xl border border-dq-green/10 bg-white py-2 opacity-0 shadow-card-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {group.items.map((item) => <HeaderLink key={item.label} item={item} className="block px-4 py-2 text-sm text-dq-charcoal hover:bg-dq-green-light hover:text-dq-green" />)}
              </div>
            </div>
          ))}
          {sitePrimaryLinks.filter((item) => item.label === "Berita" || item.label === "Kontak").map((item) => <HeaderLink key={item.label} item={item} className="px-3 py-2 text-sm font-medium hover:text-dq-green" />)}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full border border-dq-gold/30 bg-dq-gold-light px-3 py-1 text-xs font-semibold text-dq-gold md:inline-flex"><span className="pulse-dot h-1.5 w-1.5 rounded-full bg-dq-gold" />Pendaftaran Dibuka</span>
          <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className={isExplore ? "inline-flex min-h-11 items-center justify-center rounded-lg bg-dq-green px-3 text-xs font-semibold text-white hover:bg-dq-green-dark lg:px-4 lg:text-sm" : "hidden min-h-11 items-center justify-center rounded-lg bg-dq-green px-4 text-sm font-semibold text-white lg:inline-flex"}>{isExplore ? <><span className="lg:hidden">Ayo Mondok!</span><span className="hidden lg:inline">Daftar Sekarang</span></> : "Daftar Sekarang"}</a>
          {!isExplore && <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-md bg-dq-green px-3.5 text-xs font-semibold text-white lg:hidden">Ayo Mondok!</a>}
          <button type="button" className="theme-toggle" onClick={() => setDarkMode((value) => !value)} aria-label={darkMode ? "Aktifkan mode terang" : "Aktifkan mode gelap"} aria-pressed={darkMode}><MoonIcon className="icon-moon h-5 w-5 shrink-0" aria-hidden="true" focusable="false" /><SunIcon className="icon-sun h-5 w-5 shrink-0" aria-hidden="true" focusable="false" /></button>
          <button ref={hamburgerRef} type="button" onClick={() => setMenuOpen(true)} className="grid min-h-11 min-w-11 place-items-center rounded-md lg:hidden" aria-label="Buka menu" aria-expanded={menuOpen}><Bars3Icon className="h-6 w-6 shrink-0" aria-hidden="true" focusable="false" /></button>
        </div>
      </div>
    </header>
    {/*
      Keep this overlay OUTSIDE <header>. The header carries backdrop-filter,
      and a non-none backdrop-filter makes the element a containing block for
      position: fixed descendants. Rendered inside the header, this overlay
      collapses to the header's own 64px box and becomes unusable.
    */}
    {menuOpen && (
        <div className="mobile-menu open fixed inset-0 z-[60] bg-dq-ivory/95 backdrop-blur-xl lg:hidden">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-dq-green/10 px-5 py-4">
              <Link href="/" onClick={closeMenu} aria-label="Kembali ke beranda">
                <Image src="/images/logo-daar-el-qolam.svg" alt="Logo Daar el-Qolam" width={180} height={42} className="logo-light h-9 w-auto" />
                <Image src="/images/logo-daar-el-qolam-wordmark-white.svg" alt="Logo Daar el-Qolam" width={180} height={42} className="logo-dark h-9 w-auto" />
              </Link>
              <button type="button" onClick={closeMenu} className="p-2" aria-label="Tutup menu"><XMarkIcon className="h-6 w-6 shrink-0" aria-hidden="true" focusable="false" /></button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Menu mobile">
              <Link href="/" onClick={closeMenu} className="mm-link active">Beranda</Link>
              {siteNavGroups.map((group) => {
                const expanded = openGroup === group.label;
                const panelId = `mm-panel-${groupSlug(group.href)}`;
                return (
                  <div key={group.label} className="mm-group">
                    <div className="mm-row flex min-h-11 items-center justify-between gap-2">
                      <Link href={group.href} onClick={closeMenu} className="mm-link flex-1">{group.label}</Link>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        aria-label={`Tampilkan bagian ${group.label}`}
                        onClick={() => setOpenGroup(expanded ? null : group.label)}
                        className="mm-chevron -mr-2 flex size-11 shrink-0 items-center justify-center"
                      >
                        <ChevronDownIcon className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" focusable="false" />
                      </button>
                    </div>
                    <div id={panelId} hidden={!expanded} className="mm-panel">
                      {group.items.map((item) => <Link key={item.label} href={item.href} onClick={closeMenu} className="mm-sub">{item.label}</Link>)}
                    </div>
                  </div>
                );
              })}
              <p className="mm-section-title">Lainnya</p>
              <Link href="/blog" onClick={closeMenu} className="mm-link">Berita &amp; Kegiatan</Link>
              <Link href="/#faq" onClick={closeMenu} className="mm-link">FAQ</Link>
              <Link href="/kontak" onClick={closeMenu} className="mm-link">Kontak</Link>
            </nav>
            <div className="border-t border-dq-green/10 px-5 py-4">
              <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="block rounded-lg bg-dq-green px-4 py-3 text-center text-sm font-semibold text-white">Ayo Mondok!</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
