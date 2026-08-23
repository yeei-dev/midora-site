import Link from "next/link";
import { ArrowUpRight, Bot } from "lucide-react";
import { ContactCard } from "@/components/contact-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { community, contacts, profile, youtube } from "@/data/site";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="label">{title}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />

      <main className="mx-auto max-w-page px-6">
        <section className="rise pt-14">
          <h1 className="text-5xl font-semibold tracking-[-0.03em] sm:text-6xl">{profile.name}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{profile.tagline}</p>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-7 text-faint">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Написать
            </a>
            <a href="https://discord.gg/asixez" target="_blank" rel="noreferrer" className="btn-ghost">
              Заявки в семью
              <ArrowUpRight size={15} aria-hidden />
            </a>
          </div>
        </section>

        <figure className="rise mt-12 overflow-hidden rounded-2xl border border-line shadow-[0_1px_2px_rgba(11,16,32,0.04),0_24px_60px_rgba(10,95,224,0.12)]">
          <img src="/banner.jpg" alt="ASIXEZ" width={1600} height={900} className="block w-full" />
        </figure>

        <Section title="Связь">
          {contacts.map((item) => (
            <ContactCard key={item.label} item={item} />
          ))}
        </Section>

        <Section title="Комьюнити">
          {community.map((item) => (
            <ContactCard key={item.label} item={item} />
          ))}
        </Section>

        <section className="mt-16">
          <h2 className="label">YouTube</h2>
          <a
            href={youtube.href}
            target="_blank"
            rel="noreferrer"
            className="card mt-4 flex flex-col gap-5 overflow-hidden p-5 sm:flex-row sm:items-center"
          >
            <img
              src="/youtube.jpg"
              alt="asixez"
              width={800}
              height={800}
              className="h-36 w-36 shrink-0 rounded-xl object-cover sm:h-32 sm:w-32"
            />
            <div className="min-w-0 flex-1">
              <div className="text-lg font-semibold tracking-tight">{youtube.handle}</div>
              <p className="mt-1.5 text-sm leading-6 text-muted">{youtube.note}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent)]">
                Смотреть канал
                <ArrowUpRight size={15} aria-hidden />
              </span>
            </div>
          </a>
        </section>

        <section className="mt-16">
          <Link href="/bots" className="card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
              <Bot size={20} aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-base font-semibold tracking-tight">Боты Midora</span>
              <span className="mt-1 block text-sm text-muted">Три бота для Discord — добавить на свой сервер.</span>
            </span>
            <ArrowUpRight className="card-arrow" size={17} aria-hidden />
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
