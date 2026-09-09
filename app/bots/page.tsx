import type { Metadata } from "next";
import { BotFeature } from "@/components/bot-feature";
import { LinkCard } from "@/components/link-card";
import { PageFrame } from "@/components/page-frame";
import { bots, telegramBots } from "@/data/site";

export const metadata: Metadata = {
  title: "Боты",
  description: "Боты Midora для Discord и Telegram: ASIXEZ BOT, SUZUKI BOT, midora AI и MIDORAPLY.",
};

export default function BotsPage() {
  return (
    <PageFrame
      label="Discord и Telegram"
      title="Боты Midora"
      intro="Готовые боты, которых можно добавить себе. Нужен свой — напиши, соберу под задачи."
    >
      <h2 className="label">Telegram</h2>
      <div className="mt-4 grid gap-4">
        {telegramBots.map((bot) => (
          <BotFeature key={bot.name} bot={bot} />
        ))}
      </div>

      <h2 className="label mt-14">Discord</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bots.map((bot) => (
          <LinkCard key={bot.name} href={bot.href} title={bot.name} note={bot.description} meta={bot.tag} />
        ))}
      </div>
    </PageFrame>
  );
}
