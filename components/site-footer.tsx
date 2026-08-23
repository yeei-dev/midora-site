import Link from "next/link";
import { profile } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-[color:var(--surface)]">
      <div className="mx-auto flex max-w-page flex-col gap-3 px-6 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Midora</span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/contact" className="transition-colors hover:text-[color:var(--accent)]">
            Контакты
          </Link>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-[color:var(--accent)]">
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
