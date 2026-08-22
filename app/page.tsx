"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Github, Mail, MessageCircle, Newspaper, Sparkles } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { bots, photoSlots, profile, resources } from "@/data/site";
import { useNews } from "@/lib/news-store";

const quickLinks = [
  { href: "/resources", label: "Все ресурсы", icon: Sparkles },
  { href: "/bots", label: "Боты Midora", icon: Bot },
  { href: "/projects", label: "Проекты", icon: Github },
  { href: "/contact", label: "Связаться", icon: Mail },
];

export default function Home() {
  const news = useNews();
  const featuredResources = resources.filter((item) => item.featured);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <SiteNav />

      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
            <Sparkles size={15} />
            official hub
          </div>
          <h1 className="max-w-4xl text-6xl font-black leading-none sm:text-7xl lg:text-8xl">
            {profile.name}
            <span className="block text-cyan-200">{profile.handle}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#bac6dd]">{profile.tagline}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="glass-panel lift-card flex items-center justify-between rounded-md p-4">
                <span className="inline-flex items-center gap-3 font-black">
                  <item.icon size={20} className="text-cyan-200" />
                  {item.label}
                </span>
                <ArrowUpRight size={18} className="text-[#7d8ba6]" />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.08 }} className="grid gap-3 sm:grid-cols-2">
          {photoSlots.map((slot, index) => (
            <div key={slot} className={`photo-slot min-h-52 rounded-md p-4 ${index === 0 ? "sm:row-span-2 sm:min-h-[27rem]" : ""}`}>
              <div className="relative z-10 flex h-full flex-col justify-end">
                <span className="w-fit rounded bg-black/35 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/82">{slot}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredResources.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="glass-panel lift-card rounded-md p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">Midora route</span>
                <ArrowUpRight size={18} className="text-[#7d8ba6]" />
              </div>
              <h2 className="text-2xl font-black">{item.label}</h2>
              <p className="mt-3 text-sm leading-6 text-[#aebbd3]">{item.note}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr]" id="news">
        <div className="glass-panel rounded-md p-6">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-rose-200">
            <Newspaper size={16} />
            Midora news
          </div>
          <h2 className="text-4xl font-black leading-tight">Новости появляются прямо на главной.</h2>
          <p className="mt-4 text-sm leading-6 text-[#aebbd3]">
            Публикация идет через скрытую админ-страницу. Новые записи показываются здесь карточками с движением и яркими акцентами.
          </p>
        </div>

        <div className="grid gap-3">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05 }}
              className="glass-panel lift-card rounded-md p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className={`h-2.5 w-2.5 rounded-full ${item.accent === "rose" ? "bg-rose-300" : item.accent === "green" ? "bg-emerald-300" : "bg-cyan-300"}`} />
                <time className="text-xs font-bold text-[#7d8ba6]">{item.date}</time>
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#aebbd3]">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="glass-panel rounded-md p-6">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Discord bots</div>
              <h2 className="mt-2 text-4xl font-black">Midora bot line</h2>
            </div>
            <Link href="/bots" className="inline-flex w-fit items-center gap-2 rounded bg-white px-4 py-2 text-sm font-black text-[#070914]">
              Открыть
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {bots.map((bot) => (
              <a key={bot.name} href={bot.href} target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/40">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">{bot.tag}</span>
                <h3 className="mt-3 text-xl font-black">{bot.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#aebbd3]">{bot.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-[#8f9bb2] sm:px-6">
        Midora / {profile.email}
      </footer>
    </main>
  );
}
