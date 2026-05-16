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
    title: "Execução e Entrega",
    icon: "✓",
    desc: "Equipa própria no terreno, comunicação diária e obra entregue limpa e revista.",
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
              Um <span className="gold-text">processo simples</span>, claro e
              sem surpresas
            </>
          }
          subtitle="Quatro passos para transformar a sua ideia numa obra terminada, com prazos e custos previsíveis do início ao fim."
          align="center"
        />

        <div className="mt-20 relative">
          <div
            aria-hidden
            className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent hidden lg:block"
          />
          <div className="grid gap-8 lg:gap-6 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                data-reveal
                data-reveal-delay={`${i * 120}`}
                className="relative flex flex-col items-center text-center px-4"
              >
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-gold-400/15 blur-xl"
                  />
                  <span className="relative grid place-items-center h-24 w-24 rounded-full border border-gold-400/40 bg-graphite-850 text-3xl text-gold-300">
                    {s.icon}
                  </span>
                </div>
                <span className="mt-6 font-display text-5xl font-bold gold-text leading-none">
                  {s.num}
                </span>
                <h3 className="mt-4 font-display font-semibold text-xl text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-white/65 leading-relaxed text-sm max-w-[260px]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
