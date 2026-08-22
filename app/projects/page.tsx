import { ArrowUpRight, Code2, Crown, ServerCog } from "lucide-react";
import { PageFrame } from "@/components/page-frame";

const projects = [
  {
    name: "Midora Bot Orders",
    description: "Разработка Discord-ботов под серверы, команды, роли, тикеты, автоматизацию и кастомные сценарии.",
    href: "mailto:support@midora.uk",
    icon: Code2,
  },
  {
    name: "ASIXEZ FAMQ",
    description: "Комьюнити-направление Midora с отдельными ботами, ресурсами и быстрыми переходами.",
    href: "https://discord.gg/asixez",
    icon: Crown,
  },
  {
    name: "Hosting Picks",
    description: "Подборка хостингов для запуска проектов, серверов и Discord-инструментов.",
    href: "https://discord.gg/diamondshop",
    icon: ServerCog,
  },
];

export default function ProjectsPage() {
  return (
    <PageFrame eyebrow="midora work" title="Проекты и направления">
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <a key={project.name} href={project.href} target="_blank" rel="noreferrer" className="glass-panel lift-card rounded-md p-5">
            <div className="mb-8 flex items-center justify-between">
              <div className="rounded bg-emerald-300/12 p-4 text-emerald-200">
                <project.icon size={26} />
              </div>
              <ArrowUpRight size={18} className="text-[#7d8ba6]" />
            </div>
            <h2 className="text-2xl font-black">{project.name}</h2>
            <p className="mt-3 text-sm leading-6 text-[#aebbd3]">{project.description}</p>
          </a>
        ))}
      </div>
    </PageFrame>
  );
}
