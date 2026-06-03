"use client";

import { useMemo, useState } from "react";
import { PageFrame } from "@/components/page-frame";

export default function ContactPage() {
  const [command, setCommand] = useState("contact");
  const answer = useMemo(() => {
    const value = command.toLowerCase().trim();
    if (value.includes("github")) return "github route: add your real GitHub profile";
    if (value.includes("telegram")) return "telegram route: add your @username";
    if (value.includes("discord")) return "discord route: add your server invite or username";
    if (value.includes("projects")) return "project route: /projects";
    return "available commands: github, telegram, discord, projects";
  }, [command]);

  return (
    <PageFrame eyebrow="terminal contact" title="Contact">
      <section className="ember-panel rounded-lg p-5 font-mono">
        <div className="mb-5 flex items-center gap-2 text-xs text-[#8f715b]">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-2">midora-terminal</span>
        </div>
        <div className="space-y-4 text-sm">
          <div className="text-grid-accent">&gt; contact</div>
          <div className="text-[#bda58d]">Discord, Telegram, GitHub and project links will be connected here.</div>
          <label className="flex items-center gap-2 rounded border border-grid-accent/15 bg-black/30 px-3 py-3">
            <span className="text-grid-accent">&gt;</span>
            <input
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              className="min-w-0 flex-1 bg-transparent text-grid-text outline-none"
              aria-label="Terminal command"
            />
          </label>
          <div className="rounded border border-grid-accent/15 bg-grid-primary/10 p-4 text-[#f0c79a]">{answer}</div>
        </div>
      </section>
    </PageFrame>
  );
}
