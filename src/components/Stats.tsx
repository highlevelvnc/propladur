const STATS = [
  { value: "+100", label: "Obras concluídas no Porto" },
  { value: "7", label: "Serviços especializados" },
  { value: "24h", label: "Resposta ao primeiro contacto" },
  { value: "100%", label: "Obras revistas antes da entrega" },
];

export function Stats() {
  return (
    <section className="relative bg-graphite-950 border-y border-white/5 py-14 lg:py-16 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 hero-grid opacity-30"
      />
      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              data-reveal-delay={`${i * 80}`}
              className="text-center lg:text-left"
            >
              <div className="font-display font-semibold text-5xl sm:text-6xl gold-text leading-none">
                {s.value}
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
