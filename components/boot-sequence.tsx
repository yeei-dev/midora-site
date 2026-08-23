"use client";

import { useEffect, useState } from "react";

const LINES = ["> MIDORA SYSTEM v2.0", "> CHECKING CREDENTIALS", "> ACCESS GRANTED"];

const DURATION = 3400;
const STORAGE_KEY = "midora-booted";

export function BootSequence() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // ?boot=1 — принудительно проиграть заставку заново
    const forced = new URLSearchParams(window.location.search).has("boot");

    // За сессию экран показывается один раз
    if (!forced && sessionStorage.getItem(STORAGE_KEY)) {
      setDone(true);
      return;
    }

    const finish = () => {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setDone(true);
    };

    const timer = window.setTimeout(finish, DURATION);
    const skip = () => {
      window.clearTimeout(timer);
      finish();
    };

    window.addEventListener("keydown", skip, { once: true });
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", skip);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div className="boot font-mono" role="status" aria-label="Загрузка midora.uk">
      <div className="boot-sweep" />

      <div className="boot-screen px-6">
        <div className="mb-7 space-y-1.5">
          {LINES.map((line, index) => (
            <p key={line} className="boot-line" style={{ "--n": line.length, "--d": `${0.55 + index * 0.4}s` } as React.CSSProperties}>
              {line}
            </p>
          ))}
        </div>

        <div className="boot-reveal">
          <img
            src="/banner.jpg"
            alt=""
            width={1600}
            height={900}
            className="w-full rounded-lg border border-white/15 shadow-[0_0_60px_rgba(95,179,255,0.18)]"
          />
          <div className="mt-6 text-center">
            <div className="boot-granted text-xl font-semibold tracking-tight sm:text-2xl">Access Granted!</div>
            <div className="mt-2 text-sm text-[#5fb3ff]">Welcome to midora.uk</div>
          </div>
        </div>
      </div>

      <div className="boot-scan" />

      <button
        onClick={() => {
          sessionStorage.setItem(STORAGE_KEY, "1");
          setDone(true);
        }}
        className="absolute bottom-6 right-6 rounded-full border border-white/20 px-4 py-2 text-xs text-white/60 transition-colors hover:border-white/50 hover:text-white"
      >
        Пропустить
      </button>
    </div>
  );
}
