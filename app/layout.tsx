import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollReveal } from "@/components/ScrollReveal";

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
    <html lang="id">
      <body className="dq-bg-animated">
        <SiteHeader />
        <ScrollReveal />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
