"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  // На узких экранах роль ссылки на главную играет логотип слева
  { href: "/", label: "Главная", hideOnMobile: true },
  { href: "/bots", label: "Боты" },
  { href: "/projects", label: "Проекты" },
  { href: "/contact", label: "Контакты" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color:var(--bg)]/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-page items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-6">
        <Link href="/" className="shrink-0 text-[0.9375rem] font-semibold tracking-tight">
          Midora
        </Link>
        <div className="flex items-center gap-1 text-[0.8125rem] sm:text-sm">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`shrink-0 rounded-full px-2.5 py-1.5 transition-colors sm:px-3 ${
                  link.hideOnMobile ? "hidden sm:block" : ""
                } ${
                  active ? "bg-[color:var(--accent-soft)] font-medium text-[color:var(--accent)]" : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
