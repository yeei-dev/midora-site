import { ArrowUpRight } from "lucide-react";
import { type TelegramBot } from "@/data/site";

export function BotFeature({ bot }: { bot: TelegramBot }) {
  return (
    <a href={bot.href} target="_blank" rel="noreferrer" className="card block overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <img
          src={bot.cover}
          alt={bot.name}
          width={1600}
          height={914}
          className="h-44 w-full shrink-0 object-cover sm:h-auto sm:w-[42%]"
        />
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 p-5 sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <span className="chip">Telegram</span>
            <ArrowUpRight className="card-arrow" size={17} aria-hidden />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{bot.name}</h3>
            <p className="mt-1 text-sm text-faint">{bot.handle}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{bot.description}</p>
          </div>
          <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent)]">
            Открыть в Telegram
            <ArrowUpRight size={15} aria-hidden />
          </span>
        </div>
      </div>
    </a>
  );
}
