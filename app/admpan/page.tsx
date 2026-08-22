"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Lock, Plus, RotateCcw, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { resetNews, saveNews, useNews } from "@/lib/news-store";
import { type NewsItem } from "@/data/site";

const ADMIN_LOGIN = "midora.ceo";

// SHA-256 хэш пароля. Сам пароль в репозитории не хранится.
// Сменить: printf '%s' 'новый-пароль' | shasum -a 256
const ADMIN_PASSWORD_HASH = "572dde0bf41846193fe5558c8133b1d07973372dfc9b175ba6f64e4342ca5238";

async function sha256(text: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

const emptyNews = {
  title: "",
  body: "",
  accent: "cyan",
};

export default function AdmpanPage() {
  const news = useNews();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [draft, setDraft] = useState(emptyNews);
  const [message, setMessage] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (login.trim() !== ADMIN_LOGIN || !password) {
      setUnlocked(false);
      return;
    }

    let cancelled = false;
    sha256(password).then((hash) => {
      if (!cancelled) setUnlocked(hash === ADMIN_PASSWORD_HASH);
    });

    return () => {
      cancelled = true;
    };
  }, [login, password]);

  const publish = () => {
    if (!draft.title.trim() || !draft.body.trim()) {
      setMessage("Заполни заголовок и текст новости.");
      return;
    }

    const item: NewsItem = {
      id: crypto.randomUUID(),
      title: draft.title.trim(),
      body: draft.body.trim(),
      date: new Date().toLocaleDateString("ru-RU"),
      accent: draft.accent,
    };

    saveNews([item, ...news]);
    setDraft(emptyNews);
    setMessage("Новость опубликована на главной.");
  };

  return (
    <main className="min-h-screen px-4 py-6 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-black text-cyan-200">
          <ArrowLeft size={16} />
          На главную Midora
        </a>

        <section className="glass-panel mt-5 rounded-md p-5 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                <Lock size={14} />
                hidden admin
              </div>
              <h1 className="text-4xl font-black sm:text-6xl">Midora admin</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#aebbd3]">Вход для публикации новостей на главной странице.</p>
            </div>

            <div className="grid w-full gap-3 sm:max-w-md">
              <label className="rounded border border-white/10 bg-black/20 px-3 py-3 text-sm">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-[#7d8ba6]">Логин</span>
                <input value={login} onChange={(event) => setLogin(event.target.value)} className="w-full bg-transparent text-white outline-none" />
              </label>
              <label className="rounded border border-white/10 bg-black/20 px-3 py-3 text-sm">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-[#7d8ba6]">Пароль</span>
                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="w-full bg-transparent text-white outline-none" />
              </label>
            </div>
          </div>
        </section>

        {!unlocked ? (
          <div className="glass-panel mt-4 rounded-md p-5 font-mono text-sm text-[#aebbd3]">&gt; доступ закрыт</div>
        ) : (
          <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-4 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
            <div className="glass-panel rounded-md p-5">
              <h2 className="text-2xl font-black">Новая новость</h2>
              <div className="mt-5 grid gap-3">
                <label className="rounded border border-white/10 bg-black/20 px-3 py-3 text-sm">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-[#7d8ba6]">Заголовок</span>
                  <input value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} className="w-full bg-transparent text-white outline-none" />
                </label>
                <label className="rounded border border-white/10 bg-black/20 px-3 py-3 text-sm">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-[#7d8ba6]">Текст</span>
                  <textarea value={draft.body} onChange={(event) => setDraft({ ...draft, body: event.target.value })} rows={6} className="w-full resize-none bg-transparent text-white outline-none" />
                </label>
                <label className="rounded border border-white/10 bg-black/20 px-3 py-3 text-sm">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-[#7d8ba6]">Акцент</span>
                  <select value={draft.accent} onChange={(event) => setDraft({ ...draft, accent: event.target.value })} className="w-full bg-[#101626] text-white outline-none">
                    <option value="cyan">Cyan</option>
                    <option value="rose">Rose</option>
                    <option value="green">Green</option>
                  </select>
                </label>
                <button onClick={publish} className="inline-flex items-center justify-center gap-2 rounded bg-white px-4 py-3 text-sm font-black text-[#070914]">
                  <Plus size={17} />
                  Опубликовать
                </button>
                {message && <div className="rounded border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm font-bold text-cyan-100">{message}</div>}
              </div>
            </div>

            <div className="glass-panel rounded-md p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-black">Новости</h2>
                <button
                  onClick={() => {
                    resetNews();
                    setMessage("Новости сброшены.");
                  }}
                  className="inline-flex items-center gap-2 rounded border border-white/10 px-3 py-2 text-xs font-black text-[#aebbd3]"
                >
                  <RotateCcw size={15} />
                  Сброс
                </button>
              </div>
              <div className="grid gap-3">
                {news.map((item) => (
                  <article key={item.id} className="rounded border border-white/10 bg-white/[0.04] p-4">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-bold text-[#7d8ba6]">{item.date}</div>
                        <h3 className="mt-1 text-xl font-black">{item.title}</h3>
                      </div>
                      <button onClick={() => saveNews(news.filter((newsItem) => newsItem.id !== item.id))} className="rounded border border-white/10 p-2 text-rose-200" aria-label="Удалить новость">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-sm leading-6 text-[#aebbd3]">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}
