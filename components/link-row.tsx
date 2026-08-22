import { ArrowUpRight } from "lucide-react";

export function LinkRow({
  href,
  title,
  note,
  meta,
}: {
  href: string;
  title: string;
  note: string;
  meta?: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="row row-link group"
    >
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-medium tracking-tight">{title}</h3>
          {meta && <span className="label">{meta}</span>}
        </div>
        <p className="mt-1.5 text-sm leading-6 text-muted">{note}</p>
      </div>
      <ArrowUpRight className="row-arrow" size={16} aria-hidden />
    </a>
  );
}
