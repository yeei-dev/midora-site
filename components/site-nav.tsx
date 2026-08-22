import Link from "next/link";

const links = [
  { href: "/#bots", label: "Боты" },
  { href: "/#projects", label: "Проекты" },
  { href: "/#links", label: "Связь" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-page items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="shrink-0 text-[0.9375rem] font-medium tracking-tight">
          Midora
        </Link>
        <div className="flex items-center gap-5 overflow-x-auto text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="shrink-0 text-muted transition-colors hover:text-text">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
