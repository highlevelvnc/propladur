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
        // Brand palette PRO PLADUR
        graphite: {
          950: "#0b0805", // deeper than premium black, for layering
          900: "#170F09", // Preto Premium (oficial)
          850: "#1e1611",
          800: "#241b14",
          700: "#2B2B2B", // Grafite Obra (oficial)
          600: "#3a3a3a",
          500: "#4a4641",
          400: "#5d5751",
        },
        gold: {
          50: "#fbf4dc",
          100: "#f1e2a4",
          200: "#e7cc77",
          300: "#dcb95a",
          400: "#D6AF4D", // Dourado PRO (oficial)
          500: "#b5912f",
          600: "#8d701f",
          700: "#624c11",
        },
        cement: "#C9C3B6", // Cimento Técnico (oficial)
        parchment: "#E7E5E0", // Cinza Claro (oficial)
        ink: "#E7E5E0",
        muted: "#a59c8a",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: { tightish: "-0.02em" },
      backgroundImage: {
        "gold-metal":
          "linear-gradient(135deg, #f1e2a4 0%, #e7cc77 30%, #D6AF4D 60%, #b5912f 100%)",
        "gold-shine":
          "linear-gradient(120deg, transparent 35%, rgba(255,255,255,0.35) 50%, transparent 65%)",
        "graphite-fade":
          "linear-gradient(180deg, rgba(23,15,9,0) 0%, rgba(23,15,9,0.85) 75%, #170F09 100%)",
        grid:
          "linear-gradient(rgba(214,175,77,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(214,175,77,0.07) 1px, transparent 1px)",
      },
      backgroundSize: { grid: "48px 48px" },
      boxShadow: {
        gold: "0 12px 40px -12px rgba(214,175,77,0.5)",
        card: "0 30px 60px -30px rgba(0,0,0,0.85)",
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
