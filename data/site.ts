import { Bot, Disc3, Github, MessageCircle, Radio, Server, Youtube } from "lucide-react";

export const projects = [
  {
    name: "Majestic RP Toolkit",
    description: "Игровой набор инструментов для Majestic RP: уведомления, staff-flow, логирование и автоматизация рутины.",
    tech: ["TypeScript", "Discord.js", "PostgreSQL", "Redis"],
    status: "Active",
    link: "https://majestic-rp.ru/",
  },
  {
    name: "Midora Control Bot",
    description: "Discord-бот для модерации, тикетов, ролей, логов, команд и быстрых действий команды.",
    tech: ["Node.js", "Next.js", "Prisma", "Webhooks"],
    status: "Live",
    link: "https://discord.com/",
  },
  {
    name: "Ops Flame",
    description: "Статус-панель для API, сайтов, деплоев и важных сервисов с красивой визуализацией состояния.",
    tech: ["Next.js", "Tailwind", "Recharts", "Vercel"],
    status: "Beta",
    link: "/stats",
  },
];

export const bots = [
  { name: "Midora Core", servers: 86, users: "24.8k", latency: "42 ms", version: "v3.8.1", status: "Online" },
  { name: "Majestic Guard", servers: 32, users: "8.9k", latency: "55 ms", version: "v2.4.0", status: "Online" },
  { name: "Ticket Relay", servers: 24, users: "4.3k", latency: "61 ms", version: "v1.9.5", status: "Online" },
];

export const resources = [
  { label: "GitHub", icon: Github, href: "https://github.com/", note: "Код, пет-проекты, эксперименты" },
  { label: "Discord", icon: Disc3, href: "https://discord.com/", note: "Рабочий сервер и связь по ботам" },
  { label: "Telegram", icon: MessageCircle, href: "https://telegram.org/", note: "Быстрая связь напрямую" },
  { label: "Majestic RP", icon: Server, href: "https://majestic-rp.ru/", note: "Игровой проект и связанные инструменты" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com/", note: "Демо, devlog, будущий контент" },
  { label: "Status", icon: Radio, href: "/stats", note: "Состояние сервисов и ботов" },
];

export const growthData = [
  { month: "Jan", servers: 34, users: 8200, projects: 6 },
  { month: "Feb", servers: 47, users: 12600, projects: 8 },
  { month: "Mar", servers: 73, users: 18400, projects: 10 },
  { month: "Apr", servers: 96, users: 25100, projects: 13 },
  { month: "May", servers: 118, users: 32200, projects: 16 },
  { month: "Jun", servers: 142, users: 38000, projects: 18 },
];

export const statusNodes = [
  ["Website", "Online", "24 ms"],
  ["Database", "Online", "11 ms"],
  ["Discord API", "Online", "68 ms"],
  ["Bots", "Online", "99.9%"],
];
