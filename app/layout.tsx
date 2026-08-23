import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { BootSequence } from "@/components/boot-sequence";
import { profile } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#f7fafd",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://midora.uk"),
  title: {
    default: "Midora",
    template: "%s — Midora",
  },
  description: profile.intro,
  keywords: ["Midora", "ASIXEZ", "Discord боты", "разработка ботов", "SUZUKI BOT", "midora AI"],
  openGraph: {
    title: "Midora",
    description: profile.intro,
    url: "https://midora.uk",
    siteName: "Midora",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/banner.jpg", width: 1600, height: 900, alt: "ASIXEZ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Midora",
    description: profile.intro,
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">
        <BootSequence />
        {children}
      </body>
    </html>
  );
}
