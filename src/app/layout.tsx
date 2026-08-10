import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnapFantasy — 300-Feature AI Fantasy GM That Beats Draft Wizard",
  description:
    "Private multi-league fantasy football OS: Draft 3.0, Sunday GM, portfolio heat, market intel, FAAB war room, Yahoo/Sleeper import. 300 enhancements. Better process than Draft Wizard + FantasyPros for the full season.",
  keywords: [
    "fantasy football AI",
    "draft assistant alternative",
    "FantasyPros alternative",
    "Draft Wizard alternative",
    "multi-league fantasy manager",
    "Sleeper AI companion",
    "Yahoo fantasy import",
    "fantasy football GM",
    "Sunday lineup optimizer",
    "FAAB AI",
    "fantasy portfolio risk",
  ],
  authors: [{ name: "SnapFantasy" }],
  openGraph: {
    title: "SnapFantasy — 300-Feature AI Fantasy GM That Beats Draft Wizard",
    description:
      "Private multi-league fantasy OS: live draft, Sunday GM, portfolio heat, market intel. Built for you + friends — not per-seat SaaS.",
    type: "website",
    siteName: "SnapFantasy",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapFantasy — 300-Feature AI Fantasy GM That Beats Draft Wizard",
    description:
      "Draft tools end at good luck. SnapFantasy owns Sunday, FAAB, trades, portfolio risk, and learning. 300 enhancements.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070b12" },
    { media: "(prefers-color-scheme: light)", color: "#f4f7fb" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
