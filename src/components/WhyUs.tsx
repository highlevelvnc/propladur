import { SectionHeader } from "./SectionHeader";

const BENEFITS = [
  {
    title: "Especialização real em pladur",
    desc: "Não somos generalistas. Pladur e acabamentos são o nosso foco há vários anos.",
  },
  {
    title: "Acabamentos de excelência",
    desc: "Juntas invisíveis, paredes perfeitamente planas e remates sem reparos.",
  },
  {
    title: "Cumprimento rigoroso de prazos",
    desc: "Apresentamos um cronograma realista — e respeitamo-lo até ao último dia.",
  },
  {
    title: "Orçamentos transparentes",
    desc: "Cada material, hora e fase discriminados. Sem custos ocultos, sem extras inesperados.",
  },
  {
    title: "Equipa própria especializada",
    desc: "Quem orça é quem executa. Sem subcontratações, sem responsabilidades diluídas.",
  },
  {
    title: "Obra limpa e organizada",
    desc: "Proteção integral do espaço, contenção de pó e limpeza diária no fim do dia.",
  },
  {
    title: "Atenção obsessiva ao detalhe",
    desc: "O acabamento que ninguém repara é o que define a qualidade do trabalho.",
  },
  {
    title: "Compromisso com o resultado",
    desc: "Só fechamos a obra quando o cliente confirma que está irrepreensível.",
  },
];

export function WhyUs() {
  return (
    <section className="relative bg-graphite-950 py-24 lg:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 hero-grid opacity-25"
      />
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-gold-400/10 blur-3xl"
      />
      <div className="container relative">
        <SectionHeader
          eyebrow="Porquê a PRO PLADUR"
          title={
            <>
              Oito razões para confiar a sua obra a uma{" "}
              <span className="italic-accent gold-text">
                equipa especializada
              </span>
            </>
          }
          subtitle="Não vendemos promessas. Vendemos método, transparência e um padrão de acabamento que se vê — e que dura."
        />

        <div className="mt-16 grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4 rounded overflow-hidden">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              data-reveal
              data-reveal-delay={`${(i % 4) * 60}`}
              className="group relative bg-graphite-850 p-8 lg:p-10 transition-colors duration-500 hover:bg-graphite-800"
            >
              {/* Big background number */}
              <span
                aria-hidden
                className="absolute right-5 top-3 font-display font-bold text-[110px] leading-none text-gold-400/[0.08] select-none transition-all duration-500 group-hover:text-gold-400/15"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Foreground number badge */}
              <div className="flex items-center gap-3">
                <span className="font-display font-semibold text-2xl gold-text leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden
                  className="h-px w-8 bg-gold-400/60 transition-all duration-500 group-hover:w-12 group-hover:bg-gold-400"
                />
              </div>

              <h3 className="relative mt-6 font-sans font-semibold tracking-tight text-white text-xl lg:text-[22px] leading-tight">
                {b.title}
              </h3>
              <p className="relative mt-3 text-[15px] text-white/75 leading-relaxed">
                {b.desc}
              </p>

              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/0 to-transparent transition-all duration-500 group-hover:via-gold-400/70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
