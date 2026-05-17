"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: string; label: string; numeric?: number; prefix?: string; suffix?: string };

const STATS: Stat[] = [
  { value: "+100", label: "Obras concluídas no Porto", numeric: 100, prefix: "+" },
  { value: "7", label: "Serviços especializados", numeric: 7 },
  { value: "24h", label: "Resposta ao primeiro contacto", numeric: 24, suffix: "h" },
  { value: "100%", label: "Obras revistas antes da entrega", numeric: 100, suffix: "%" },
];

function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1600,
  start,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, start]);

  return (
    <span>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    const fallback = window.setTimeout(() => setInView(true), 3500);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-graphite-950 border-y border-white/5 py-14 lg:py-16 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 hero-grid opacity-30"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-gold-400/10 blur-3xl"
      />
      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              data-reveal-delay={`${i * 90}`}
              className="text-center lg:text-left"
            >
              <div className="font-display font-semibold text-5xl sm:text-6xl lg:text-[64px] gold-text leading-none tabular-nums">
                {s.numeric ? (
                  <CountUp
                    to={s.numeric}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    start={inView}
                  />
                ) : (
                  s.value
                )}
              </div>
              <p className="mt-3 text-sm text-white/65 max-w-[220px] mx-auto lg:mx-0 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
