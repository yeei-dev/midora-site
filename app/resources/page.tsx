import { ExternalLink } from "lucide-react";
import { PageFrame } from "@/components/page-frame";
import { resources } from "@/data/site";

export default function ResourcesPage() {
  return (
    <PageFrame eyebrow="external routes" title="Resources">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((item) => (
          <a key={item.label} href={item.href} className="ember-panel flex min-h-36 items-center gap-4 rounded-lg p-5 transition hover:border-grid-accent/45">
            <div className="rounded bg-grid-primary/15 p-4 text-grid-accent">
              <item.icon size={24} />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-black">{item.label}</h2>
              <p className="mt-2 text-sm leading-6 text-[#bda58d]">{item.note}</p>
            </div>
            <ExternalLink size={18} className="text-[#7f6650]" />
          </a>
        ))}
      </div>
    </PageFrame>
  );
}
