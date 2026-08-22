import { ArrowUpRight, Bot } from "lucide-react";
import { PageFrame } from "@/components/page-frame";
import { bots } from "@/data/site";

export default function BotsPage() {
  return (
    <PageFrame eyebrow="discord bots" title="Боты Midora">
      <div className="grid gap-4 lg:grid-cols-3">
        {bots.map((bot, index) => (
          <article key={bot.name} className="glass-panel overflow-hidden rounded-md">
            <div className="photo-slot h-44 p-4">
              <div className="relative z-10 flex h-full items-start justify-between">
                <span className="rounded bg-black/40 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">{bot.tag}</span>
                <Bot className="text-white/80" size={26} />
              </div>
            </div>
            <div className="p-5">
              <div className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Midora bot 0{index + 1}</div>
              <h2 className="text-3xl font-black">{bot.name}</h2>
              <p className="mt-3 min-h-24 text-sm leading-6 text-[#aebbd3]">{bot.description}</p>
              <a href={bot.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded bg-white px-4 py-2 text-sm font-black text-[#070914]">
                Добавить
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
