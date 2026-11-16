"use client";

import Image from "next/image";
import Link from "next/link";
import {
  siteFooterGroups,
  siteFooterNavigationLinks,
  siteSocialLinks,
} from "@/components/site-navigation";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "@/components/BrandIcons";

function FooterLink({ href, label }: { href: string; label: string }) {
  return href.startsWith("http") ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white">{label}</a>
  ) : (
    <Link href={href} className="hover:text-white">{label}</Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-dq-green-dark text-white">
      <div className="mx-auto dq-container px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-7 lg:gap-10">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex">
              <Image src="/images/logo-daar-el-qolam-white.svg" alt="Logo Daar el-Qolam" width={220} height={54} className="h-12 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">Mendidik generasi berilmu dan berakhlak sejak 1968 di Jayanti, Kabupaten Tangerang, Banten.</p>
            <p className="mt-6 text-sm font-bold">Media sosial</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
              {siteSocialLinks.map((link) => {
                const Icon = link.label.startsWith("YouTube") ? YouTubeIcon : link.label.startsWith("Instagram") ? InstagramIcon : TikTokIcon;
                return <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2"><Icon />{link.label}</a>;
              })}
            </div>
          </div>
          {siteFooterGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-bold">{group.label}</p>
              <ul className="mt-3 space-y-2.5 text-sm text-white/70">
                {group.links.map((link) => <li key={link.label}><FooterLink href={link.href} label={link.label} /></li>)}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-sm font-bold">Navigasi</p>
            <ul className="mt-3 space-y-2.5 text-sm text-white/70">
              {siteFooterNavigationLinks.map((link) => <li key={link.label}><Link href={link.href}>{link.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold">Kontak</p>
            <ul className="mt-3 space-y-2.5 text-sm text-white/70">
              <li>Jayanti, Kab. Tangerang</li>
              <li><a href="tel:+622159576882">+62 21 5957 6882</a></li>
              <li><a href="https://wa.me/6281319789000" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:info@daarelqolam.ac.id">info@daarelqolam.ac.id</a></li>
            </ul>

          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">© 2026 Pondok Pesantren Daar el-Qolam. Hak cipta dilindungi.</p>
          <div className="flex gap-4 text-xs text-white/40">
            <Link href="/tentang">Tentang DQ</Link>
            <Link href="/kontak">Kontak</Link>
            <Link href="/tentang#profil">Profil pesantren</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
