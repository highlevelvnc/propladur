import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const VALUES = [
  {
    title: "Missão",
    desc: "Elevar o padrão de execução em pladur e acabamentos no Porto, com obras tecnicamente irrepreensíveis e clientes 100% satisfeitos.",
    icon: "✦",
  },
  {
    title: "Valores",
    desc: "Honestidade nos orçamentos, respeito pelos prazos, organização em obra e responsabilidade pessoal por cada metro executado.",
    icon: "◆",
  },
  {
    title: "Compromisso",
    desc: "Tratamos cada projeto como se fosse a nossa própria casa. Só fechamos a obra quando o acabamento está, de facto, impecável.",
    icon: "✓",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative bg-graphite-950 py-24 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-gold-400/10 blur-3xl"
      />
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          <div data-reveal="left" className="relative">
            <div className="relative aspect-[4/5] rounded overflow-hidden border border-white/10">
              <Image
                src="/portfolio/team-about.jpg"
                alt="Equipa PRO PLADUR em obra"
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-10 card p-6 rounded max-w-[260px] hidden sm:block">
              <span className="label-caps text-gold-300">Porto · Portugal</span>
              <p className="mt-2 font-display font-semibold text-white text-lg">
                Especialistas em pladur, acabamentos e remodelações.
              </p>
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Sobre a empresa"
              title={
                <>
                  Uma equipa do Porto,{" "}
                  <span className="italic-accent gold-text">especializada</span>{" "}
                  e obcecada pelo detalhe
                </>
              }
            />
            <p
              data-reveal
              data-reveal-delay="160"
              className="mt-6 text-white/70 leading-relaxed"
            >
              A <strong className="text-white">PRO PLADUR</strong> nasceu no
              Porto com um propósito claro: elevar o padrão de execução em
              pladur, pinturas e remodelações. Trabalhamos para clientes
              particulares e empresas que valorizam rigor técnico, prazos
              cumpridos e acabamentos verdadeiramente duradouros.
            </p>
            <p
              data-reveal
              data-reveal-delay="220"
              className="mt-4 text-white/70 leading-relaxed"
            >
              Com mais de uma centena de obras concluídas, cada projeto
              continua a ser tratado como o primeiro — com o mesmo método,
              organização e exigência que aplicaríamos à nossa casa. Não
              vendemos volume. Vendemos qualidade que se vê e que dura.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  data-reveal
                  data-reveal-delay={`${200 + i * 80}`}
                  className="card p-5 rounded"
                >
                  <span className="grid place-items-center h-10 w-10 rounded border border-gold-400/40 text-gold-300 mb-4">
                    {v.icon}
                  </span>
                  <h3 className="font-display font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
