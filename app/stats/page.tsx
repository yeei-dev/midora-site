"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PageFrame } from "@/components/page-frame";
import { growthData, statusNodes } from "@/data/site";

export default function StatsPage() {
  return (
    <PageFrame eyebrow="system analytics" title="Statistics">
      <div className="grid gap-4 xl:grid-cols-[1.25fr_.75fr]">
        <section className="ember-panel rounded-lg p-5">
          <h2 className="mb-5 text-2xl font-black">Growth</h2>
          <div className="h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="flameUsers" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#FF7A18" stopOpacity={0.55} />
                    <stop offset="95%" stopColor="#FF7A18" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,180,95,.12)" />
                <XAxis dataKey="month" stroke="#a99684" />
                <YAxis stroke="#a99684" />
                <Tooltip contentStyle={{ background: "#11100F", border: "1px solid rgba(255,180,95,.2)", borderRadius: 8 }} />
                <Area type="monotone" dataKey="users" stroke="#FFB45F" fill="url(#flameUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
        <section className="ember-panel rounded-lg p-5">
          <h2 className="mb-5 text-2xl font-black">System Status</h2>
          <div className="space-y-3">
            {statusNodes.map(([name, state, metric]) => (
              <div key={name} className="flex items-center justify-between rounded border border-grid-accent/15 bg-black/20 p-4">
                <div>
                  <div className="font-black">{name}</div>
                  <div className="text-xs text-[#8f715b]">{metric}</div>
                </div>
                <span className="rounded bg-emerald-400/10 px-2 py-1 text-xs font-black text-emerald-300">{state}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
