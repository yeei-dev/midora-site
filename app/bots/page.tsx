import { Bot } from "lucide-react";
import { PageFrame } from "@/components/page-frame";
import { bots } from "@/data/site";

export default function BotsPage() {
  return (
    <PageFrame eyebrow="discord cluster" title="Bots">
      <div className="grid gap-4 lg:grid-cols-3">
        {bots.map((bot) => (
          <article key={bot.name} className="ember-panel rounded-lg p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className="rounded bg-grid-primary/15 p-3 text-grid-accent">
                <Bot size={24} />
              </div>
              <span className="rounded bg-emerald-400/10 px-2 py-1 text-xs font-black text-emerald-300">{bot.status}</span>
            </div>
            <h2 className="text-2xl font-black">{bot.name}</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {[
                ["Servers", bot.servers],
                ["Users", bot.users],
                ["Latency", bot.latency],
                ["Version", bot.version],
              ].map(([label, value]) => (
                <div key={label} className="rounded border border-grid-accent/15 bg-black/20 p-3">
                  <div className="text-xs text-[#8f715b]">{label}</div>
                  <div className="mt-1 font-black">{value}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-[#bda58d]">Moderation, tickets, role sync, logs, slash commands, changelog feed.</p>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
