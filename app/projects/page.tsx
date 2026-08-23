import type { Metadata } from "next";
import { LinkCard } from "@/components/link-card";
import { PageFrame } from "@/components/page-frame";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Проекты",
  description: "Направления Midora: разработка ботов, комьюнити ASIXEZ FAMQ, подборка хостингов.",
};

export default function ProjectsPage() {
  return (
    <PageFrame label="Работа" title="Проекты и направления" intro="Чем занимаюсь и что можно заказать.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <LinkCard key={project.name} href={project.href} title={project.name} note={project.description} meta={project.meta} />
        ))}
      </div>
    </PageFrame>
  );
}
