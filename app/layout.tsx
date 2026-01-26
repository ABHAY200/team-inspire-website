import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Team Inspire Tax & Accounting | Professional Tax Services",
  description: "Trusted tax and accounting services. Expert tax preparation, business consulting, and bookkeeping services. Maximize your returns with Team Inspire.",
  keywords: "tax services, accounting, tax preparation, bookkeeping, business tax, personal tax, tax consultant",
  authors: [{ name: "Team Inspire Tax & Accounting" }],
  openGraph: {
    title: "Team Inspire Tax & Accounting",
    description: "Professional tax and accounting services you can trust",
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
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
