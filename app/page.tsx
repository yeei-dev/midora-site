"use client";

import { motion } from "framer-motion";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-grid-text">
      <SiteNav />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,122,24,.22),transparent_28%),linear-gradient(to_bottom,rgba(0,0,0,.15),#050403_92%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[45vh] bg-[linear-gradient(to_top,#050403,rgba(5,4,3,.75),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[12vh] mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-grid-primary/70 to-transparent" />

      <section className="relative mx-auto grid min-h-screen max-w-6xl place-items-center px-4 pt-24">
        <div className="grid w-full items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto w-full"
          >
            <div className="ember-ring relative mx-auto aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-lg border border-grid-accent/20 bg-black">
              <div className="absolute inset-0 bg-[url('/midora-cover.svg')] bg-cover bg-center opacity-100" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,transparent_0,rgba(0,0,0,.18)_36%,rgba(0,0,0,.72)_100%),linear-gradient(to_top,rgba(5,4,3,.78),transparent_46%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_70%,rgba(255,122,24,.42),transparent_14%),radial-gradient(circle_at_82%_68%,rgba(255,122,24,.32),transparent_17%)]" />
              <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,rgba(255,122,24,.12),transparent_45%,rgba(255,180,95,.08))]">
                <div className="h-56 w-56 rounded-full bg-[radial-gradient(circle,#1b1009_0,#060403_62%,transparent_64%)] opacity-70 blur-sm" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="fire-text text-center text-7xl font-black italic leading-none sm:text-8xl lg:text-9xl"
          >
            TEST DEPLOY
          </motion.h1>
        </div>
      </section>
    </main>
  );
}
