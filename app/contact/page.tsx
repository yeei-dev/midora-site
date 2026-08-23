import type { Metadata } from "next";
import { ContactCard } from "@/components/contact-card";
import { PageFrame } from "@/components/page-frame";
import { community, contacts } from "@/data/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связаться с Midora: Telegram, почта, Discord, заявки в ASIXEZ FAMQ.",
};

export default function ContactPage() {
  return (
    <PageFrame label="Связь" title="Контакты" intro="Пиши в Telegram или на почту — отвечаю по обоим.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((item) => (
          <ContactCard key={item.label} item={item} />
        ))}
      </div>

      <h2 className="label mt-14">Комьюнити</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {community.map((item) => (
          <ContactCard key={item.label} item={item} />
        ))}
      </div>
    </PageFrame>
  );
}
