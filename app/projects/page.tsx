import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageFrame } from "@/components/page-frame";
import { projects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <PageFrame eyebrow="project archive" title="Projects">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="ember-panel overflow-hidden rounded-lg">
            <div className="h-36 bg-[radial-gradient(circle_at_30%_30%,rgba(255,180,95,.42),transparent_24%),linear-gradient(135deg,#241006,#080504_72%)]" />
            <div className="p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded bg-grid-primary/15 px-2 py-1 text-xs font-black text-grid-accent">{project.status}</span>
                <ExternalLink size={18} className="text-[#7f6650]" />
              </div>
              <h2 className="text-2xl font-black">{project.name}</h2>
              <p className="mt-3 min-h-24 text-sm leading-6 text-[#bda58d]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded border border-grid-accent/15 px-2 py-1 text-xs text-[#d9b98f]">
                    {tech}
                  </span>
                ))}
              </div>
              <Link href={project.link} className="mt-5 inline-flex rounded bg-grid-primary px-4 py-2 text-sm font-black text-black">
                Open
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
