import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Midora | Cyber Grid Dashboard",
  description: "Personal command center for Midora: developer profile, Discord bots, projects, resources, and contacts.",
  keywords: ["Midora", "Discord bot developer", "backend engineer", "automation", "Majestic RP"],
  openGraph: {
    title: "Midora | Cyber Grid Dashboard",
    description: "A futuristic command center portfolio for Midora.",
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
