import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Midora | Digital Hub",
  description: "Official Midora hub with Discord bots, resources, news, GitHub, Telegram and contact routes.",
  keywords: ["Midora", "midora.ceo", "Discord bots", "ASIXEZ", "SUZUKI BOT", "midora AI"],
  openGraph: {
    title: "Midora | Digital Hub",
    description: "Official routes, bots, news and contact links for Midora.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}
