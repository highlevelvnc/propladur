import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", md: "2rem", lg: "4rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Graphite scale
        graphite: {
          950: "#0a0c0c",
          900: "#0d0d0d",
          850: "#121414",
          800: "#1a1c1c",
          700: "#1e2020",
          600: "#282a2b",
          500: "#333535",
          400: "#4d4635",
        },
        // Premium gold scale
        gold: {
          50: "#fff8de",
          100: "#ffe088",
          200: "#f2ca50",
          300: "#e9c349",
          400: "#d4af37",
          500: "#b58e1f",
          600: "#8a6a14",
          700: "#574500",
        },
        ink: "#e2e2e2",
        muted: "#99907c",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: { tightish: "-0.02em" },
      backgroundImage: {
        "gold-metal":
          "linear-gradient(135deg, #ffe088 0%, #f2ca50 28%, #d4af37 55%, #b58e1f 80%, #8a6a14 100%)",
        "gold-shine":
          "linear-gradient(120deg, transparent 35%, rgba(255,255,255,0.35) 50%, transparent 65%)",
        "graphite-fade":
          "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.85) 75%, #0d0d0d 100%)",
        grid:
          "linear-gradient(rgba(212,175,55,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.06) 1px, transparent 1px)",
      },
      backgroundSize: { grid: "48px 48px" },
      boxShadow: {
        gold: "0 12px 40px -12px rgba(212,175,55,0.45)",
        card: "0 30px 60px -30px rgba(0,0,0,0.8)",
      },
      borderRadius: { xs: "0.125rem", DEFAULT: "0.25rem" },
      animation: {
        "fade-in": "fadeIn 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        shine: "shine 2.8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
