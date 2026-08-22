import { SiteNav } from "./site-nav";

export function PageFrame({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen px-4 pb-12 pt-24 text-white sm:px-6">
      <SiteNav />
      <section className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</div>
          <h1 className="mt-2 text-4xl font-black leading-tight sm:text-6xl">{title}</h1>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
        </div>
        {children}
      </section>
    </main>
  );
}
