import type { Metadata } from "next";
import { LinkCard } from "@/components/link-card";
import { PageFrame } from "@/components/page-frame";
import { bots } from "@/data/site";

export const metadata: Metadata = {
  title: "Боты",
  description: "Discord-боты Midora: ASIXEZ BOT, SUZUKI BOT и midora AI.",
};

export default function BotsPage() {
  return (
    <PageFrame
      label="Discord"
      title="Боты Midora"
      intro="Готовые боты, которых можно добавить на свой сервер. Нужен свой — напиши, соберу под задачи."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bots.map((bot) => (
          <LinkCard key={bot.name} href={bot.href} title={bot.name} note={bot.description} meta={bot.tag} />
        ))}
      </div>
    </PageFrame>
  );
}
