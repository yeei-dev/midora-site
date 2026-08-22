import { profile } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-2 px-6 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Midora</span>
        <a href={`mailto:${profile.email}`} className="transition-colors hover:text-text">
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
