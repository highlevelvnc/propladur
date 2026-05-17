"use client";

import { useEffect, useState } from "react";

/**
 * Tela de carregamento temática (nicho construção/pladur).
 * Fundo grafite + grelha técnica que desenha + linha de prumo dourada
 * + brand mark com underline animado.
 * Sai assim que `window.load` dispara, com mínimo de 900ms para não piscar
 * e fallback hard de 3500ms (mesma filosofia do reveal helper).
 */
export function Loader() {
  const [hidden, setHidden] = useState(false);
  const [out, setOut] = useState(false);

  useEffect(() => {
    // Show loader at most once per browser session
    if (typeof window !== "undefined") {
      try {
        if (window.sessionStorage.getItem("ppLoaderSeen")) {
          setHidden(true);
          return;
        }
      } catch {}
    }

    const start = performance.now();
    const MIN = 900;
    const HARD = 3500;

    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN - elapsed);
      window.setTimeout(() => {
        setOut(true);
        window.setTimeout(() => {
          setHidden(true);
          try {
            window.sessionStorage.setItem("ppLoaderSeen", "1");
          } catch {}
        }, 700);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }
    const hard = window.setTimeout(finish, HARD);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(hard);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = hidden ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] grid place-items-center bg-graphite-950 transition-opacity duration-700 ${
        out ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* blueprint grid */}
      <span
        aria-hidden
        className="absolute inset-0 hero-grid opacity-40"
      />
      {/* diagonal gold corner lines, like architectural cropmarks */}
      <span className="absolute top-10 left-10 h-10 w-10 border-t border-l border-gold-400/60" />
      <span className="absolute top-10 right-10 h-10 w-10 border-t border-r border-gold-400/60" />
      <span className="absolute bottom-10 left-10 h-10 w-10 border-b border-l border-gold-400/60" />
      <span className="absolute bottom-10 right-10 h-10 w-10 border-b border-r border-gold-400/60" />

      <div className="relative flex flex-col items-center px-8 text-center">
        <span className="label-caps text-gold-300 mb-8">
          Porto · Portugal
        </span>

        {/* Brand seal */}
        <div className="relative">
          <span
            aria-hidden
            className="absolute inset-0 -m-10 rounded-full bg-gold-400/10 blur-3xl"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="PRO PLADUR"
            width={160}
            height={160}
            className="relative h-28 w-28 sm:h-32 sm:w-32 object-contain logo-glow"
          />
        </div>
        <span
          aria-hidden
          className="block mt-6 h-px w-40 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
        />
        <p className="mt-4 font-display italic-accent text-xl text-white/85">
          Acabamentos que constroem confiança.
        </p>

        {/* Trowel / level-meter progress bar */}
        <div className="mt-10 w-64 max-w-full">
          <div className="flex items-center justify-between label-caps text-muted mb-2">
            <span>Carregando</span>
            <span className="loader-pct">0%</span>
          </div>
          <div className="relative h-[3px] w-full rounded-full bg-white/8 overflow-hidden">
            <span className="loader-bar absolute inset-y-0 left-0 bg-gold-metal" />
          </div>
          {/* technical tick marks below */}
          <div className="mt-2 flex justify-between text-[10px] text-muted/70 font-mono">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
        </div>

        {/* spinning pladur/screw glyph */}
        <div className="mt-10 relative h-10 w-10">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full border border-white/10"
          />
          <span
            aria-hidden
            className="absolute inset-0 rounded-full border border-gold-400 border-t-transparent border-r-transparent loader-spin"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes load-fill {
          0% {
            width: 0%;
          }
          70% {
            width: 88%;
          }
          100% {
            width: 100%;
          }
        }
        @keyframes load-spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes load-count {
          0% {
            content: "0%";
          }
          25% {
            content: "28%";
          }
          50% {
            content: "54%";
          }
          75% {
            content: "82%";
          }
          100% {
            content: "100%";
          }
        }
        .loader-bar {
          animation: load-fill 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .loader-spin {
          animation: load-spin 0.9s linear infinite;
        }
        .loader-pct::after {
          content: "100%";
          animation: load-count 1.6s steps(4, end) forwards;
        }
      `}</style>
    </div>
  );
}
