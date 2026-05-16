"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

function Slider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pct, setPct] = useState(50);
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded border border-white/10 select-none">
      <Image src={before} alt={`Antes — ${alt}`} fill className="object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        <div className="relative h-full w-[100vw] max-w-none">
          <Image
            src={after}
            alt={`Depois — ${alt}`}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <span
        aria-hidden
        className="absolute top-0 bottom-0 w-px bg-gold-400/90 shadow-[0_0_20px_rgba(212,175,55,0.5)]"
        style={{ left: `${pct}%` }}
      />
      <span
        aria-hidden
        className="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-gold-metal text-graphite-900 font-bold shadow-gold"
        style={{ left: `${pct}%` }}
      >
        ⇆
      </span>
      <span className="absolute top-3 left-3 label-caps bg-graphite-900/80 text-gold-300 px-2 py-1 rounded">
        Depois
      </span>
      <span className="absolute top-3 right-3 label-caps bg-graphite-900/80 text-white/80 px-2 py-1 rounded">
        Antes
      </span>
      <input
        aria-label="Comparar antes e depois"
        type="range"
        min={0}
        max={100}
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}

const CASES = [
  {
    alt: "Sala remodelada com tetos falsos",
    before: "/portfolio/ba1-before.svg",
    after: "/portfolio/ba1-after.svg",
  },
  {
    alt: "Quarto renovado com pladur e pintura",
    before: "/portfolio/ba2-before.svg",
    after: "/portfolio/ba2-after.svg",
  },
];

export function BeforeAfter() {
  return (
    <section className="relative bg-graphite-900 py-24 lg:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Antes & Depois"
          title={
            <>
              A diferença que um{" "}
              <span className="gold-text">acabamento profissional</span> faz no
              seu espaço
            </>
          }
          subtitle="Mesmas paredes, outra história. Arraste a barra dourada para comparar o estado inicial com o resultado final."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {CASES.map((c, i) => (
            <div
              key={c.alt}
              data-reveal
              data-reveal-delay={`${i * 120}`}
            >
              <Slider {...c} />
              <p className="mt-3 text-sm text-white/60">{c.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
