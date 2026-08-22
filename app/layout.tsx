import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://midora.uk"),
  title: {
    default: "Midora",
    template: "%s — Midora",
  },
  description: profile.intro,
  keywords: ["Midora", "Discord боты", "разработка ботов", "ASIXEZ", "SUZUKI BOT", "midora AI"],
  openGraph: {
    title: "Midora",
    description: profile.intro,
    url: "https://midora.uk",
    siteName: "Midora",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Midora",
    description: profile.intro,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
