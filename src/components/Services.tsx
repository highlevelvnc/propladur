import { SectionHeader } from "./SectionHeader";
import { WHATSAPP_URL } from "@/lib/constants";

const SERVICES = [
  {
    icon: "▣",
    title: "Montagem de Pladur",
    desc: "Estruturas em perfil metálico e placas em pladur com isolamento térmico e acústico integrado.",
  },
  {
    icon: "▤",
    title: "Tetos Falsos",
    desc: "Tetos planos, rebaixados ou decorativos, com sancas, iluminação embutida e acabamento liso.",
  },
  {
    icon: "▥",
    title: "Divisórias em Pladur",
    desc: "Paredes interiores rápidas de executar, com excelente isolamento acústico e mínimo impacto na obra.",
  },
  {
    icon: "❘",
    title: "Pinturas Interiores e Exteriores",
    desc: "Preparação completa, primário e pintura final em acabamento liso, duradouro e uniforme.",
  },
  {
    icon: "◰",
    title: "Renovações de Espaços",
    desc: "Renovação parcial de habitações, escritórios e estabelecimentos, com prazos curtos e disrupção mínima.",
  },
  {
    icon: "◫",
    title: "Remodelações Gerais",
    desc: "Coordenação integral da obra: pladur, pinturas, tetos, eletricidade e acabamentos chave-na-mão.",
  },
  {
    icon: "✦",
    title: "Acabamentos e Remates",
    desc: "Juntas, perfis decorativos, rodapés e remates finais executados com rigor milimétrico.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative bg-graphite-900 py-24 lg:py-32"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <SectionHeader
            eyebrow="O que fazemos"
            title={
              <>
                Soluções completas em pladur,{" "}
                <span className="gold-text">pinturas</span> e remodelações
              </>
            }
            subtitle="Sete serviços, uma só equipa. Da estrutura ao último acabamento, executamos cada fase com método, materiais de qualidade e responsabilidade total pelo resultado."
          />
          <a
            data-reveal
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hidden lg:inline-flex"
          >
            Pedir Orçamento
          </a>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              data-reveal-delay={`${i * 70}`}
              className="card p-7 rounded group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="grid place-items-center h-12 w-12 rounded border border-gold-400/30 text-gold-300 text-xl bg-graphite-800/60 transition-all duration-500 group-hover:border-gold-400 group-hover:bg-gold-400/10">
                  {s.icon}
                </span>
                <span className="label-caps text-muted/60">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-white/65 leading-relaxed text-[15px]">
                {s.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-gold-300 text-sm">
                <span className="under-gold">Saber mais</span>
                <span
                  aria-hidden
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
