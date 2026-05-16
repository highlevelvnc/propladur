"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY;
      parallaxRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-graphite-900">
      <div
        ref={parallaxRef}
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <Image
          src="/portfolio/gallery/g080.jpg"
          alt="Corredor de habitação com acabamento premium executado pela PRO PLADUR"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-110"
          style={{ objectPosition: "center 35%" }}
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite-900 via-graphite-900/85 to-graphite-900/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-graphite-900/40 via-transparent to-graphite-900" />
      <div className="absolute inset-0 -z-10 hero-grid opacity-30" />

      {/* gold corner accents */}
      <span className="pointer-events-none absolute left-6 top-24 h-24 w-px bg-gradient-to-b from-gold-400 to-transparent" />
      <span className="pointer-events-none absolute right-6 top-24 h-24 w-px bg-gradient-to-b from-gold-400 to-transparent" />

      <div className="container relative pt-40 pb-24 lg:pt-48 lg:pb-32 min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-3xl">
          <div
            data-reveal
            className="flex items-center gap-3 mb-6"
          >
            <span className="gold-divider" />
            <span className="label-caps text-gold-300">
              + de 100 obras concluídas no Porto · Desde a estrutura ao
              acabamento
            </span>
          </div>

          <h1
            data-reveal
            data-reveal-delay="80"
            className="font-display font-semibold tracking-tight text-5xl sm:text-6xl lg:text-[80px] lg:leading-[0.98] text-white"
          >
            Especialistas em{" "}
            <span className="italic-accent gold-text">Pladur</span>
            <br />e <span className="italic-accent">Acabamentos</span> de
            excelência.
          </h1>

          <p
            data-reveal
            data-reveal-delay="180"
            className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed"
          >
            Executamos projetos em pladur, pinturas e remodelações no Porto
            com rigor técnico, prazos cumpridos e acabamentos impecáveis.
            Trabalho limpo, equipa especializada e um único responsável pela
            sua obra.
          </p>

          <div
            data-reveal
            data-reveal-delay="260"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Pedir Orçamento
              <span aria-hidden>→</span>
            </a>
            <a href="#servicos" className="btn-outline">
              Ver Serviços
            </a>
          </div>
        </div>

        {/* feature chips */}
        <div
          data-reveal
          data-reveal-delay="380"
          className="mt-16 grid gap-4 sm:grid-cols-3 max-w-4xl"
        >
          {[
            {
              title: "Acabamentos impecáveis",
              desc: "Juntas invisíveis, paredes lisas e remates milimétricos.",
            },
            {
              title: "Equipa própria e formada",
              desc: "Sem subcontratações: quem orça é quem executa.",
            },
            {
              title: "100+ obras concluídas",
              desc: "Mais de uma centena de projetos entregues no Porto.",
            },
          ].map((f, i) => (
            <div
              key={f.title}
              data-reveal
              data-reveal-delay={`${440 + i * 90}`}
              className="card p-5 rounded"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="grid place-items-center h-8 w-8 rounded-xs bg-gold-metal text-graphite-900 text-xs font-bold">
                  0{i + 1}
                </span>
                <h3 className="font-display font-semibold text-white">
                  {f.title}
                </h3>
              </div>
              <p className="text-sm text-white/65 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* scroll cue */}
        <a
          href="#servicos"
          aria-label="Descer"
          className="absolute left-1/2 -translate-x-1/2 bottom-8 hidden md:flex flex-col items-center gap-2 text-muted hover:text-gold-300 transition"
        >
          <span className="label-caps">Scroll</span>
          <span className="relative h-10 w-px bg-white/15 overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-3 bg-gold-400 animate-[fadeIn_2s_ease-in-out_infinite]" />
          </span>
        </a>
      </div>
    </section>
  );
}
