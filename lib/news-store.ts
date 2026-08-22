"use client";

import { useEffect, useState } from "react";
import { defaultNews, type NewsItem } from "@/data/site";

const NEWS_KEY = "midora-site-news";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function readNews() {
  return readJson<NewsItem[]>(NEWS_KEY, defaultNews);
}

export function saveNews(news: NewsItem[]) {
  writeJson(NEWS_KEY, news);
  window.dispatchEvent(new Event("midora-news-updated"));
}

export function resetNews() {
  saveNews(defaultNews);
}

export function useNews() {
  const [news, setNews] = useState<NewsItem[]>(defaultNews);

  useEffect(() => {
    const sync = () => setNews(readNews());

    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("midora-news-updated", sync);

    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("midora-news-updated", sync);
    };
  }, []);

  return news;
}
