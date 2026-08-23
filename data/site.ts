export type BotInfo = {
  name: string;
  href: string;
  description: string;
  tag: string;
};

export type Project = {
  name: string;
  description: string;
  href: string;
  meta: string;
};

export type Contact = {
  label: string;
  value: string;
  note: string;
  /** Без href значение копируется по клику — так работает Discord-тег. */
  href?: string;
};

export const profile = {
  name: "Midora",
  email: "contact@midora.uk",
  tagline: "Discord-боты, комьюнити-системы и аккуратные цифровые пространства.",
  intro:
    "Делаю ботов для Discord под задачи сервера: роли, тикеты, модерация, автоматизация. Здесь боты, проекты и все способы связаться.",
};

/** Личная связь — почта, Telegram, Discord. */
export const contacts: Contact[] = [
  {
    label: "Telegram",
    value: "@cntmidoraa",
    href: "https://t.me/cntmidoraa",
    note: "Рабочая связь, заказы и вопросы.",
  },
  {
    label: "Почта",
    value: "contact@midora.uk",
    href: "mailto:contact@midora.uk",
    note: "Для заказов и деловых предложений.",
  },
  {
    label: "Discord",
    value: "@midoraaaa",
    note: "Личный тег — нажми, чтобы скопировать.",
  },
];

/** Комьюнити и площадки ASIXEZ. */
export const community: Contact[] = [
  {
    label: "Заявки в семью",
    value: "discord.gg/asixez",
    href: "https://discord.gg/asixez",
    note: "Вступление в ASIXEZ FAMQ.",
  },
  {
    label: "Telegram-канал",
    value: "t.me/asixez",
    href: "https://t.me/asixez",
    note: "Новости и анонсы семьи.",
  },
  {
    label: "GitHub",
    value: "yeei-dev",
    href: "https://github.com/yeei-dev",
    note: "Код и dev-активность.",
  },
];

export const youtube = {
  handle: "@asixezzz",
  href: "https://www.youtube.com/@asixezzz",
  note: "Ролики, записи с игр и всё, что снимается для ASIXEZ.",
};

export const bots: BotInfo[] = [
  {
    name: "ASIXEZ BOT",
    href: "https://discord.com/oauth2/authorize?client_id=1494997487851798548",
    description: "Бот для ASIXEZ FAMQ и рабочих сценариев сервера.",
    tag: "Community",
  },
  {
    name: "SUZUKI BOT",
    href: "https://discord.com/oauth2/authorize?client_id=1533415816555659285",
    description: "Автоматизация и серверные задачи.",
    tag: "Utility",
  },
  {
    name: "midora AI",
    href: "https://discord.com/oauth2/authorize?client_id=1533768062564696136&scope=bot+applications.commands",
    description: "AI-бот с командами для общения и помощи на сервере.",
    tag: "AI",
  },
];

export const projects: Project[] = [
  {
    name: "Разработка ботов",
    description: "Боты под задачи сервера: команды, роли, тикеты, модерация, интеграции.",
    href: "mailto:contact@midora.uk",
    meta: "На заказ",
  },
  {
    name: "ASIXEZ FAMQ",
    description: "Комьюнити с собственными ботами и внутренними инструментами.",
    href: "https://discord.gg/asixez",
    meta: "Комьюнити",
  },
  {
    name: "Хостинги",
    description: "Подборка площадок для запуска проектов и Discord-ботов.",
    href: "https://discord.gg/diamondshop",
    meta: "Ресурс",
  },
];
