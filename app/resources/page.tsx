import { Bot, ExternalLink, Github, Mail, MessageCircle, Send, Server, Sparkles } from "lucide-react";
import { PageFrame } from "@/components/page-frame";
import { resources } from "@/data/site";

const icons = {
  discord: MessageCircle,
  telegram: Send,
  mail: Mail,
  github: Github,
  bot: Bot,
  server: Server,
  sparkles: Sparkles,
};

export default function ResourcesPage() {
  return (
    <PageFrame eyebrow="midora routes" title="Все ссылки Midora">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((item) => {
          const Icon = icons[item.icon];
          return (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="glass-panel lift-card flex min-h-44 items-center gap-4 rounded-md p-5">
              <div className="rounded bg-cyan-300/12 p-4 text-cyan-200">
                <Icon size={25} />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-black">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-[#aebbd3]">{item.note}</p>
              </div>
              <ExternalLink size={18} className="text-[#7d8ba6]" />
            </a>
          );
        })}
      </div>
    </PageFrame>
  );
}
