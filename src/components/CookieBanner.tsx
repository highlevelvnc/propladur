"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { readConsent, writeConsent } from "@/lib/consent";

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    // Show banner only if no decision yet
    const c = readConsent();
    if (!c) {
      // Slight delay to avoid layout shift on first paint
      const t = window.setTimeout(() => setOpen(true), 800);
      return () => window.clearTimeout(t);
    }
  }, []);

  const acceptAll = () => {
    writeConsent({ analytics: true, marketing: true });
    setOpen(false);
  };
  const rejectAll = () => {
    writeConsent({ analytics: false, marketing: false });
    setOpen(false);
  };
  const saveCustom = () => {
    writeConsent({ analytics, marketing });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Preferências de cookies"
      className="fixed bottom-0 inset-x-0 z-[80] sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-md animate-fade-in"
    >
      <div className="m-3 sm:m-0 p-5 sm:p-6 rounded border border-gold-400/20 bg-graphite-850/95 backdrop-blur-xl shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span
            aria-hidden
            className="grid place-items-center h-8 w-8 rounded-full bg-gold-400/15 text-gold-300 text-base"
          >
            🍪
          </span>
          <div>
            <h2 className="font-display font-semibold text-lg text-white leading-tight">
              Cookies neste site
            </h2>
            <p className="mt-1 text-[13px] text-white/70 leading-relaxed">
              Usamos cookies essenciais para o site funcionar e, com a sua
              permissão, cookies de análise e marketing. Pode aceitar tudo,
              recusar ou escolher.{" "}
              <Link
                href="/privacidade"
                className="text-gold-300 underline underline-offset-2"
              >
                Saber mais
              </Link>
              .
            </p>
          </div>
        </div>

        {details && (
          <div className="my-4 space-y-3 border-t border-white/10 pt-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-white">
                  Essenciais
                </p>
                <p className="text-xs text-white/55">
                  Necessárias ao funcionamento. Sempre ativas.
                </p>
              </div>
              <span className="label-caps text-gold-300 pt-1">Sempre</span>
            </div>
            <label className="flex items-start justify-between gap-3 cursor-pointer">
              <div>
                <p className="text-sm font-medium text-white">Análise</p>
                <p className="text-xs text-white/55">
                  Google Analytics para entender o tráfego.
                </p>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 h-5 w-5 accent-gold-400 cursor-pointer"
              />
            </label>
            <label className="flex items-start justify-between gap-3 cursor-pointer">
              <div>
                <p className="text-sm font-medium text-white">Marketing</p>
                <p className="text-xs text-white/55">
                  Meta Pixel para anúncios mais relevantes.
                </p>
              </div>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-1 h-5 w-5 accent-gold-400 cursor-pointer"
              />
            </label>
          </div>
        )}

        <div className="mt-2 flex flex-wrap items-center gap-2">
          {!details ? (
            <>
              <button onClick={acceptAll} className="btn-gold flex-1 min-w-[140px] text-xs py-3">
                Aceitar tudo
              </button>
              <button onClick={rejectAll} className="btn-outline flex-1 min-w-[100px] text-xs py-3">
                Recusar
              </button>
              <button
                onClick={() => setDetails(true)}
                className="text-xs label-caps text-gold-300 hover:text-gold-200 px-3 py-2"
              >
                Definir
              </button>
            </>
          ) : (
            <>
              <button onClick={saveCustom} className="btn-gold flex-1 text-xs py-3">
                Guardar escolhas
              </button>
              <button
                onClick={() => setDetails(false)}
                className="text-xs label-caps text-muted hover:text-white px-3 py-2"
              >
                Voltar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
