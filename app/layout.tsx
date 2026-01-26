import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_METADATA } from "@/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: SITE_METADATA.keywords,
  authors: [{ name: SITE_METADATA.author }],
  icons: {
    icon: [
      { url: '/team-inspire-website/favicon.png', type: 'image/png' },
    ],
    apple: '/team-inspire-website/logo.png',
    shortcut: '/team-inspire-website/favicon.png',
  },
  openGraph: {
    title: SITE_METADATA.companyName,
    description: SITE_METADATA.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/team-inspire-website/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/team-inspire-website/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/team-inspire-website/logo.png" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
