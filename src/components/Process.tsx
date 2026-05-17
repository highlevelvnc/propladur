import { SectionHeader } from "./SectionHeader";

const STEPS = [
  {
    num: "01",
    title: "Contacto Inicial",
    icon: "✆",
    desc: "Fala-nos do projeto por WhatsApp, telefone ou formulário. Respondemos no mesmo dia.",
  },
  {
    num: "02",
    title: "Visita e Avaliação",
    icon: "⌖",
    desc: "Avaliamos o espaço presencialmente para entender escopo, condicionantes e expectativas.",
  },
  {
    num: "03",
    title: "Proposta Detalhada",
    icon: "≡",
    desc: "Em 24 a 48 horas recebe um orçamento claro, com fases, materiais, prazos e valores.",
  },
  {
    num: "04",
    title: "Execução em Obra",
    icon: "▣",
    desc: "Equipa própria no terreno, comunicação diária e obra limpa do primeiro ao último dia.",
  },
  {
    num: "05",
    title: "Entrega e Revisão",
    icon: "✓",
    desc: "Revisão final ao detalhe consigo. Só fechamos a obra quando confirmar que está irrepreensível.",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="relative bg-graphite-900 py-24 lg:py-32"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Como trabalhamos"
          title={
            <>
              Um{" "}
              <span className="italic-accent gold-text">
                processo simples
              </span>
              , claro e sem surpresas
            </>
          }
          subtitle="Quatro passos para transformar a sua ideia numa obra terminada, com prazos e custos previsíveis do início ao fim."
          align="center"
        />

        <div className="mt-20 relative" data-reveal>
          {/* Horizontal line desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold-400/0 via-gold-400/60 to-gold-400/0 draw-line"
          />
          {/* Vertical line mobile */}
          <div
            aria-hidden
            className="lg:hidden absolute top-12 bottom-12 left-12 w-px bg-gradient-to-b from-gold-400/0 via-gold-400/50 to-gold-400/0 draw-line-v"
          />

          <div className="grid gap-12 lg:gap-4 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                data-reveal
                data-reveal-delay={`${i * 140}`}
                className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 text-left lg:text-center lg:px-4"
              >
                <div className="relative shrink-0">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-gold-400/15 blur-xl"
                  />
                  <span className="relative grid place-items-center h-24 w-24 rounded-full border border-gold-400/40 bg-graphite-850 text-3xl text-gold-300 transition-transform duration-500 hover:scale-105">
                    {s.icon}
                  </span>
                </div>
                <div className="flex-1 lg:contents">
                  <span className="block lg:mt-6 font-display text-4xl lg:text-5xl font-bold gold-text leading-none">
                    {s.num}
                  </span>
                  <h3 className="mt-2 lg:mt-4 font-sans font-semibold text-xl text-white tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 lg:mt-3 text-white/70 leading-relaxed text-[15px] max-w-[260px]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
