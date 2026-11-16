import type { Metadata } from "next";
import { Amiri, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Legacy loaded these families from Google Fonts in every HTML <head>. The
 * Next.js migration dropped that link, so every serif heading fell back to
 * Georgia and rendered synthetic bold. next/font self-hosts the files at build
 * time, keeping rendered weight identical on desktop and mobile.
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pondok Pesantren Daar el-Qolam",
  description:
    "Pondok Pesantren Daar el-Qolam, pesantren modern sejak 1968 di Tangerang, Banten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${jakarta.variable} ${amiri.variable}`}
    >
      <body className="dq-bg-animated">
        <SiteHeader />
        <ScrollReveal />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
