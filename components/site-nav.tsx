"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, FolderKanban, Home, Link2, Mail, Newspaper } from "lucide-react";

const links = [
  { href: "/", label: "Midora", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/bots", label: "Bots", icon: Bot },
  { href: "/resources", label: "Links", icon: Link2 },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/#news", label: "News", icon: Newspaper },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-md border border-white/10 bg-[#070914]/72 px-3 py-2 shadow-panel backdrop-blur-xl">
        <Link href="/" className="text-lg font-black tracking-wide text-white">
          Midora
        </Link>
        <div className="flex max-w-[74vw] gap-1 overflow-x-auto">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex shrink-0 items-center gap-2 rounded px-3 py-2 text-sm font-bold transition ${
                  active ? "bg-white text-[#080a14]" : "text-[#b9c3d8] hover:bg-white/[0.07] hover:text-white"
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
