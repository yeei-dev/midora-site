export type ResourceLink = {
  label: string;
  href: string;
  note: string;
  icon: "discord" | "telegram" | "mail" | "github" | "bot" | "server" | "sparkles";
  featured?: boolean;
};

export type BotInfo = {
  name: string;
  href: string;
  description: string;
  tag: string;
};

export type NewsItem = {
  id: string;
  title: string;
  body: string;
  date: string;
  accent: string;
};

export const profile = {
  name: "Midora",
  handle: "midora.ceo",
  email: "support@midora.uk",
  tagline: "Discord bots, community systems and sharp digital spaces.",
};

export const resources: ResourceLink[] = [
  {
    label: "ASIXEZ FAMQ",
    href: "https://discord.gg/asixez",
    note: "Главное Discord-комьюнити Midora.",
    icon: "discord",
    featured: true,
  },
  {
    label: "Telegram",
    href: "https://t.me/neshpana",
    note: "Быстрая связь и личные обновления.",
    icon: "telegram",
    featured: true,
  },
  {
    label: "Заказы ботов",
    href: "mailto:support@midora.uk",
    note: "Почта для заказов, вопросов и предложений.",
    icon: "mail",
    featured: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/yeei-dev",
    note: "Код, проекты и dev-активность.",
    icon: "github",
  },
  {
    label: "Лучшие хостинги",
    href: "https://discord.gg/diamondshop",
    note: "Ресурс с хостингами для проектов и ботов.",
    icon: "server",
  },
];

export const bots: BotInfo[] = [
  {
    name: "ASIXEZ BOT",
    href: "https://discord.com/oauth2/authorize?client_id=1494997487851798548",
    description: "Бот для ASIXEZ FAMQ и рабочих Discord-сценариев.",
    tag: "Community",
  },
  {
    name: "SUZUKI BOT",
    href: "https://discord.com/oauth2/authorize?client_id=1533415816555659285",
    description: "Отдельный Discord-бот для автоматизации и серверных задач.",
    tag: "Utility",
  },
  {
    name: "midora AI",
    href: "https://discord.com/oauth2/authorize?client_id=1533768062564696136&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fmidora.uk&integration_type=0&scope=bot+applications.commands",
    description: "AI-бот Midora для Discord с командами и расширенными правами.",
    tag: "AI",
  },
];

export const defaultNews: NewsItem[] = [
  {
    id: "welcome",
    title: "Midora обновляет сайт",
    body: "Главная страница превращается в личный hub: ресурсы, боты, новости и быстрые переходы собраны в одном месте.",
    date: "03.08.2026",
    accent: "cyan",
  },
  {
    id: "bots",
    title: "Discord-направление в фокусе",
    body: "ASIXEZ BOT, SUZUKI BOT и midora AI вынесены в отдельный блок, чтобы их было проще добавлять на серверы.",
    date: "03.08.2026",
    accent: "rose",
  },
];

export const photoSlots = [
  "Midora portrait",
  "Discord community",
  "Bot command center",
  "Project workspace",
];
