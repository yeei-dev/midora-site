"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { type Contact } from "@/data/site";

export function ContactCard({ item }: { item: Contact }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(item.value);
    } catch {
      // clipboard API недоступен без HTTPS — запасной путь
      const field = document.createElement("textarea");
      field.value = item.value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }

    setCopied(true);
  };

  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="label">{item.label}</span>
        {item.href ? (
          <ArrowUpRight className="card-arrow" size={17} aria-hidden />
        ) : copied ? (
          <Check className="card-arrow text-[color:var(--accent)]" size={17} aria-hidden />
        ) : (
          <Copy className="card-arrow" size={16} aria-hidden />
        )}
      </div>
      <div>
        <div className="text-base font-semibold tracking-tight">{copied ? "Скопировано" : item.value}</div>
        <p className="mt-1.5 text-sm leading-6 text-muted">{item.note}</p>
      </div>
    </>
  );

  const className = "card flex flex-col gap-3 p-5 text-left";

  if (!item.href) {
    return (
      <button
        type="button"
        onClick={copy}
        aria-label={`Скопировать ${item.value}`}
        className={className}
      >
        {body}
      </button>
    );
  }

  const external = item.href.startsWith("http");

  return (
    <a href={item.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={className}>
      {body}
    </a>
  );
}
