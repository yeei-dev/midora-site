import { SiteNav } from "./site-nav";

export function PageFrame({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen px-4 pb-10 pt-24 text-grid-text sm:px-6">
      <SiteNav />
      <section className="mx-auto max-w-6xl">
        <div className="mb-7">
          <div className="text-xs font-black uppercase tracking-[0.24em] text-grid-accent">{eyebrow}</div>
          <h1 className="fire-text mt-2 text-4xl font-black sm:text-6xl">{title}</h1>
          <div className="ember-line mt-5 h-px w-full" />
        </div>
        {children}
      </section>
    </main>
  );
}
