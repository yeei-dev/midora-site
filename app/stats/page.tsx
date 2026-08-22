import { Activity, CheckCircle2, RadioTower } from "lucide-react";
import { PageFrame } from "@/components/page-frame";

const statuses = [
  ["midora.uk", "Online", "24 ms"],
  ["ASIXEZ BOT", "Ready", "Discord route"],
  ["SUZUKI BOT", "Ready", "Discord route"],
  ["midora AI", "Ready", "Admin permissions"],
];

export default function StatsPage() {
  return (
    <PageFrame eyebrow="midora status" title="Статус">
      <div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
        <section className="glass-panel rounded-md p-6">
          <RadioTower className="mb-5 text-cyan-200" size={34} />
          <h2 className="text-3xl font-black">Midora online</h2>
          <p className="mt-3 text-sm leading-6 text-[#aebbd3]">Быстрый статус основных направлений сайта и Discord-ботов.</p>
        </section>
        <section className="grid gap-3">
          {statuses.map(([name, state, metric]) => (
            <div key={name} className="glass-panel flex items-center justify-between rounded-md p-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-200" size={22} />
                <div>
                  <div className="font-black">{name}</div>
                  <div className="text-xs text-[#7d8ba6]">{metric}</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-200">
                <Activity size={14} />
                {state}
              </span>
            </div>
          ))}
        </section>
      </div>
    </PageFrame>
  );
}
