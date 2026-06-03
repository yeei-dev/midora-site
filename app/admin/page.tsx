"use client";

import { useState } from "react";
import { Bot, ChartNoAxesCombined, Lock, Plus, Save, ShieldCheck, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  { title: "Create Project", icon: Plus, action: "Draft new project card" },
  { title: "Edit Project", icon: Save, action: "Update descriptions, links, screenshots" },
  { title: "Delete Project", icon: Trash2, action: "Archive inactive work" },
  { title: "Manage Bots", icon: Bot, action: "Set status, version, commands" },
  { title: "Manage Statistics", icon: ChartNoAxesCombined, action: "Update growth and analytics" },
  { title: "Manage References", icon: ShieldCheck, action: "Publish case studies" },
];

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const unlocked = password.toLowerCase().trim() === "midora";

  return (
    <main className="min-h-screen px-4 py-6 text-grid-text sm:px-6">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm font-bold text-grid-accent">
          Back to dashboard
        </a>
        <section className="ember-panel mt-5 rounded-lg p-5 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded border border-grid-accent/25 bg-grid-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-grid-accent">
                <Lock size={14} />
                Protected Route
              </div>
              <h1 className="text-3xl font-black sm:text-5xl">Admin Panel</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#bda58d]">
                Control layer for projects, bots, statistics, references, and resource links. This is a frontend-safe prototype gate.
              </p>
            </div>
            <label className="w-full max-w-sm rounded border border-grid-accent/15 bg-black/20 px-3 py-3 font-mono text-sm">
              <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#8f715b]">Access key</span>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter key"
                type="password"
                className="w-full bg-transparent text-white outline-none"
              />
            </label>
          </div>
        </section>

        {unlocked ? (
          <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <button key={module.title} className="ember-panel rounded-lg p-5 text-left transition hover:border-grid-accent/45">
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded bg-grid-primary/15 p-3 text-grid-accent">
                    <module.icon size={22} />
                  </div>
                  <span className="rounded bg-emerald-400/10 px-2 py-1 text-xs font-bold text-emerald-300">READY</span>
                </div>
                <h2 className="text-xl font-black">{module.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#bda58d]">{module.action}</p>
              </button>
            ))}
          </motion.section>
        ) : (
          <div className="ember-panel mt-4 rounded-lg p-5 font-mono text-sm text-[#bda58d]">
            &gt; access denied
            <br />
            &gt; demo key: midora
          </div>
        )}
      </div>
    </main>
  );
}
