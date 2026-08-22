export type ResourceLink = {
  label: string;
  href: string;
  note: string;
};

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

export const profile = {
  name: "Midora",
  email: "support@midora.uk",
  tagline: "Discord-боты, комьюнити-системы и аккуратные цифровые пространства.",
  intro:
    "Делаю ботов для Discord под задачи сервера: роли, тикеты, модерация, автоматизация. Здесь собраны боты, проекты и способы связаться.",
};

export const resources: ResourceLink[] = [
  {
    label: "ASIXEZ FAMQ",
    href: "https://discord.gg/asixez",
    note: "Главное Discord-комьюнити.",
  },
  {
    label: "Telegram",
    href: "https://t.me/neshpana",
    note: "Быстрая связь и обновления.",
  },
  {
    label: "Почта",
    href: "mailto:support@midora.uk",
    note: "Заказы, вопросы, предложения.",
  },
  {
    label: "GitHub",
    href: "https://github.com/yeei-dev",
    note: "Код и dev-активность.",
  },
  {
    label: "Хостинги",
    href: "https://discord.gg/diamondshop",
    note: "Подборка хостингов для проектов и ботов.",
  },
];

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
    href: "mailto:support@midora.uk",
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
