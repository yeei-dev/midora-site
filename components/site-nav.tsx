"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, FolderKanban, Home, LineChart, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/bots", label: "Bots", icon: Bot },
  { href: "/stats", label: "Stats", icon: LineChart },
  { href: "/resources", label: "Links", icon: Sparkles },
  { href: "/contact", label: "Contact", icon: MessageCircle },
  { href: "/admin", label: "Admin", icon: ShieldCheck },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-lg border border-grid-accent/15 bg-black/40 px-3 py-2 shadow-panel backdrop-blur-xl">
        <Link href="/" className="fire-text text-lg font-black tracking-wide">
          TEST DEPLOY
        </Link>
        <div className="flex max-w-[72vw] gap-1 overflow-x-auto">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex shrink-0 items-center gap-2 rounded px-3 py-2 text-sm font-bold transition ${
                  active ? "bg-grid-primary/20 text-grid-accent" : "text-[#c9ad91] hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                <link.icon size={16} />
                <span className="hidden sm:inline">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
