import { ArrowUpRight } from "lucide-react";
import { LinkRow } from "@/components/link-row";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { bots, profile, projects, resources } from "@/data/site";

function Section({ id, title, count, children }: { id: string; title: string; count: number; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-20 scroll-mt-24">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="label">{title}</h2>
        <span className="label tabular-nums">{count}</span>
      </div>
      <div className="mt-3 border-b border-line">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />

      <main className="mx-auto max-w-page px-6">
        <section className="rise pb-4 pt-24 sm:pt-32">
          <h1 className="text-5xl font-medium tracking-[-0.03em] sm:text-6xl">{profile.name}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{profile.tagline}</p>
          <p className="mt-4 max-w-xl text-[0.9375rem] leading-7 text-muted">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              Написать
            </a>
            <a
              href="https://discord.gg/asixez"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-5 py-2.5 text-sm text-muted transition-colors hover:text-text"
            >
              Discord
              <ArrowUpRight size={15} aria-hidden />
            </a>
          </div>
        </section>

        <Section id="bots" title="Боты" count={bots.length}>
          {bots.map((bot) => (
            <LinkRow key={bot.name} href={bot.href} title={bot.name} note={bot.description} meta={bot.tag} />
          ))}
        </Section>

        <Section id="projects" title="Проекты" count={projects.length}>
          {projects.map((project) => (
            <LinkRow key={project.name} href={project.href} title={project.name} note={project.description} meta={project.meta} />
          ))}
        </Section>

        <Section id="links" title="Связь" count={resources.length}>
          {resources.map((item) => (
            <LinkRow key={item.label} href={item.href} title={item.label} note={item.note} />
          ))}
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
