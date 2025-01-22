import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediFarma | Landing Page",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/reduced-logo.png" type="image/png"/>
      </head>
      <body className={`${montSerrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
