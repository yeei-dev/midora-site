# midora.uk

Личный хаб Midora: Discord-боты, ресурсы, проекты, новости и контакты.

Стек: Next.js 15 (App Router) + React 19 + Tailwind + framer-motion.
Сборка статическая (`output: "export"` в `next.config.ts`).

## Команды

```
npm install
npm run dev     # локальная разработка, http://localhost:3000
npm run build   # статическая сборка в ./out
```

## Структура

- `app/` — страницы (главная, /bots, /projects, /resources, /stats, /contact, /admpan)
- `components/` — общие компоненты (навигация, рамка страницы)
- `data/site.ts` — контент: профиль, ссылки, список ботов, дефолтные новости
- `lib/news-store.ts` — хранилище новостей (сейчас localStorage браузера)

## Секреты

Никаких токенов и паролей в репозитории. Токены Discord-ботов хранятся
только в переменных окружения на хостинге бота.
