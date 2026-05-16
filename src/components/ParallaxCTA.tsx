"use client";

import { useEffect, useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export function ParallaxCTA() {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh - rect.top) / (vh + rect.height);
      const y = (progress - 0.5) * 80;
      el.style.transform = `translate3d(0, ${y}px, 0) scale(1.1)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative isolate overflow-hidden h-[70vh] min-h-[460px]">
      <div ref={bgRef} className="absolute inset-0 -z-10 will-change-transform">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-65"
          poster="/portfolio/parallax-poster.jpg"
        >
          <source src="/videos/parallax.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-graphite-900/85 via-graphite-900/65 to-graphite-900/95" />
      <div className="container h-full flex flex-col justify-center items-start max-w-3xl">
        <span data-reveal className="label-caps text-gold-300 mb-5">
          Do projeto à entrega
        </span>
        <h2
          data-reveal
          data-reveal-delay="80"
          className="font-display font-bold tracking-tightish text-3xl sm:text-5xl text-white"
        >
          Do planeamento ao{" "}
          <span className="gold-text">acabamento final</span>, cada detalhe é
          decidido por nós.
        </h2>
        <p
          data-reveal
          data-reveal-delay="160"
          className="mt-5 text-white/75 text-lg max-w-xl"
        >
          Um único interlocutor, comunicação constante e responsabilidade total
          pelo resultado — do primeiro perfil ao último remate.
        </p>
        <a
          data-reveal
          data-reveal-delay="240"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-8"
        >
          Fale connosco
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
