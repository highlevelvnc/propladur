"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { GALLERY } from "@/lib/gallery";

const INITIAL = 24;
const STEP = 24;

export function Gallery() {
  const [shown, setShown] = useState(INITIAL);
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + shown) % shown)),
    [shown],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % shown)),
    [shown],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  const items = GALLERY.slice(0, shown);
  const hasMore = shown < GALLERY.length;

  return (
    <section
      id="galeria"
      className="relative bg-graphite-900 py-24 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 hero-grid opacity-20"
      />
      <div className="container relative">
        <SectionHeader
          eyebrow="Galeria de obra"
          title={
            <>
              Mais de uma{" "}
              <span className="italic-accent gold-text">centena de obras</span>{" "}
              executadas no Porto e arredores
            </>
          }
          subtitle="Pladur, tetos falsos, divisórias, acabamentos e remodelações. Clique em qualquer imagem para ampliar."
        />

        {/* Masonry via CSS columns */}
        <div className="mt-14 [column-fill:_balance] columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4">
          {items.map((it, i) => (
            <button
              type="button"
              key={it.src}
              onClick={() => setActive(i)}
              data-reveal
              data-reveal-delay={`${(i % 8) * 50}`}
              className="group relative mb-3 sm:mb-4 block w-full break-inside-avoid overflow-hidden rounded border border-white/5 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              aria-label={`Abrir imagem ${i + 1}`}
            >
              <Image
                src={it.src}
                alt={`Obra PRO PLADUR ${i + 1}`}
                width={it.w}
                height={it.h}
                sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                className="w-full h-auto object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                loading="lazy"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-graphite-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span
                aria-hidden
                className="absolute top-3 right-3 h-8 w-8 rounded-xs border border-white/20 backdrop-blur-md bg-graphite-900/40 grid place-items-center text-gold-300 text-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45"
              >
                ⤢
              </span>
            </button>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShown((s) => Math.min(s + STEP, GALLERY.length))}
              className="btn-outline"
            >
              Ver mais obras
              <span aria-hidden>↓</span>
            </button>
          </div>
        )}

        <p className="mt-6 text-center text-sm text-muted">
          A mostrar {items.length} de {GALLERY.length} fotografias reais.
        </p>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagem"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-graphite-950/95 backdrop-blur-md animate-fade-in"
          onClick={close}
        >
          <button
            aria-label="Fechar"
            onClick={close}
            className="absolute top-5 right-5 h-11 w-11 grid place-items-center rounded border border-white/15 text-white hover:bg-white/10 transition"
          >
            ✕
          </button>
          <button
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 sm:left-6 h-12 w-12 grid place-items-center rounded-full border border-white/15 text-white hover:bg-white/10 transition"
          >
            ←
          </button>
          <button
            aria-label="Seguinte"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 sm:right-6 h-12 w-12 grid place-items-center rounded-full border border-white/15 text-white hover:bg-white/10 transition"
          >
            →
          </button>
          <div
            className="relative max-w-[92vw] max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[active].src}
              alt={`Obra PRO PLADUR ${active + 1}`}
              width={items[active].w}
              height={items[active].h}
              sizes="92vw"
              className="object-contain max-h-[88vh] w-auto h-auto rounded"
              priority
            />
            <div className="absolute -bottom-9 left-0 right-0 text-center label-caps text-gold-300">
              {active + 1} / {items.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
