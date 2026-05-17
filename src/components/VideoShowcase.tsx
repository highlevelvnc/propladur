"use client";

import { useEffect, useRef } from "react";
import { SectionHeader } from "./SectionHeader";

type VideoCard = {
  src: string;
  poster?: string;
  tag: string;
  title: string;
  desc: string;
};

const VIDEOS: VideoCard[] = [
  {
    src: "/videos/hero.mp4",
    poster: "/portfolio/hero-poster.jpg",
    tag: "Montagem em obra",
    title: "Estrutura e pladur a tomar forma",
    desc: "Acompanhe a execução real de uma divisão em pladur — do primeiro perfil ao remate final.",
  },
  {
    src: "/videos/parallax.mp4",
    poster: "/portfolio/parallax-poster.jpg",
    tag: "Acabamentos finais",
    title: "Detalhe no remate, qualidade que dura",
    desc: "O que distingue um acabamento profissional é o que se nota — e o que ninguém repara.",
  },
];

function VideoPlayer({ v }: { v: VideoCard }) {
  const ref = useRef<HTMLVideoElement | null>(null);

  // Auto play only when in viewport to save mobile data
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      data-reveal
      className="group relative overflow-hidden rounded border border-white/8 bg-graphite-850 card"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="metadata"
          poster={v.poster}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.04]"
        >
          <source src={v.src} type="video/mp4" />
        </video>
        {/* gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-graphite-900 via-graphite-900/60 to-transparent pointer-events-none" />
        {/* tag chip */}
        <span className="absolute top-4 left-4 label-caps bg-graphite-900/80 backdrop-blur-sm text-gold-300 px-3 py-1.5 rounded">
          {v.tag}
        </span>
        {/* play indicator */}
        <span
          aria-hidden
          className="absolute top-4 right-4 grid place-items-center h-8 px-3 rounded-full bg-graphite-900/80 backdrop-blur-sm border border-gold-400/40 text-[10px] tracking-widest text-gold-300 uppercase"
        >
          <span className="relative mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold-400">
            <span className="absolute inset-0 rounded-full bg-gold-400 animate-ping" />
          </span>
          Em direto
        </span>
      </div>

      <div className="p-6 lg:p-7">
        <h3 className="font-display font-semibold text-2xl text-white leading-tight">
          {v.title}
        </h3>
        <p className="mt-2 text-white/70 text-[15px] leading-relaxed">
          {v.desc}
        </p>
      </div>
    </div>
  );
}

export function VideoShowcase() {
  return (
    <section className="relative bg-graphite-900 py-24 lg:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 right-1/3 h-[420px] w-[420px] rounded-full bg-gold-400/10 blur-3xl"
      />
      <div className="container relative">
        <SectionHeader
          eyebrow="Em obra · vídeo real"
          title={
            <>
              Veja a nossa equipa em{" "}
              <span className="italic-accent gold-text">ação</span>
            </>
          }
          subtitle="Não são imagens de stock. Cada vídeo foi filmado numa obra real executada pela equipa da PRO PLADUR — o mesmo padrão que aplicamos ao seu projeto."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {VIDEOS.map((v) => (
            <VideoPlayer key={v.src} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
