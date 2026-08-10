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
  title: "SnapFantasy — AI Fantasy GM That Outlasts Draft Wizard",
  description:
    "Private multi-league fantasy football AI: live draft, Snap Score, FAAB, trades, Yahoo/Sleeper import. Built for you + friends — not per-seat SaaS.",
  keywords: [
    "fantasy football AI",
    "draft assistant alternative",
    "FantasyPros alternative",
    "multi-league fantasy manager",
    "Sleeper AI companion",
    "Yahoo fantasy import",
    "Draft Wizard alternative",
    "fantasy football GM",
  ],
  authors: [{ name: "SnapFantasy" }],
  openGraph: {
    title: "SnapFantasy — AI Fantasy GM That Outlasts Draft Wizard",
    description:
      "Private multi-league fantasy football AI: live draft, Snap Score, FAAB, trades, Yahoo/Sleeper import. Built for you + friends — not per-seat SaaS.",
    type: "website",
    siteName: "SnapFantasy",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapFantasy — AI Fantasy GM That Outlasts Draft Wizard",
    description:
      "Private multi-league fantasy football AI. Draft night to championship. One brain for every league.",
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
