import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        grid: {
          bg: "#050403",
          card: "#11100F",
          panel: "#18120D",
          primary: "#FF7A18",
          accent: "#FFB45F",
          text: "#FFF3E4",
        },
      },
      boxShadow: {
        neon: "0 0 32px rgba(255, 122, 24, 0.2), 0 0 64px rgba(255, 180, 95, 0.12)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
