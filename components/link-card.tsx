import { ArrowUpRight } from "lucide-react";

export function LinkCard({
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
      className="card flex flex-col gap-3 p-5"
    >
      <div className="flex items-start justify-between gap-3">
        {meta ? <span className="chip">{meta}</span> : <span />}
        <ArrowUpRight className="card-arrow" size={17} aria-hidden />
      </div>
      <div>
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-muted">{note}</p>
      </div>
    </a>
  );
}
