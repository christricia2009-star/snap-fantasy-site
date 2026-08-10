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
  title: "SnapFantasy — Better Than Draft Wizard & FantasyPros",
  description:
    "Private multi-league fantasy football AI that outplays Draft Wizard and FantasyPros after draft week: Sunday GM, portfolio heat, FAAB war room, trades, Yahoo/Sleeper import. Built for you + friends.",
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
    title: "SnapFantasy — Better Than Draft Wizard & FantasyPros",
    description:
      "Private multi-league fantasy OS. Draft Wizard owns draft week. We own the season.",
    type: "website",
    siteName: "SnapFantasy",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapFantasy — Better Than Draft Wizard & FantasyPros",
    description:
      "Who is Draft Wizard in week 12? SnapFantasy still runs lineups, FAAB, portfolio risk, and learning.",
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
