import { ArrowUpRight, Github, Mail, MessageCircle, Send } from "lucide-react";
import { PageFrame } from "@/components/page-frame";
import { profile } from "@/data/site";

const contacts = [
  { label: "Telegram", value: "t.me/neshpana", href: "https://t.me/neshpana", icon: Send },
  { label: "Почта", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", value: "github.com/yeei-dev", href: "https://github.com/yeei-dev", icon: Github },
  { label: "ASIXEZ FAMQ", value: "discord.gg/asixez", href: "https://discord.gg/asixez", icon: MessageCircle },
];

export default function ContactPage() {
  return (
    <PageFrame eyebrow="contact midora" title="Связь с Midora">
      <div className="grid gap-4 md:grid-cols-2">
        {contacts.map((contact) => (
          <a key={contact.label} href={contact.href} target="_blank" rel="noreferrer" className="glass-panel lift-card flex items-center justify-between gap-4 rounded-md p-5">
            <div className="flex items-center gap-4">
              <div className="rounded bg-rose-300/12 p-4 text-rose-200">
                <contact.icon size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-black">{contact.label}</h2>
                <p className="mt-1 text-sm text-[#aebbd3]">{contact.value}</p>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-[#7d8ba6]" />
          </a>
        ))}
      </div>
    </PageFrame>
  );
}
