import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
