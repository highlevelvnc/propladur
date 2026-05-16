import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const PROJECTS = [
  {
    tag: "Pladur",
    title: "Montagem de pladur sobre estrutura metálica",
    img: "/portfolio/p1-real.jpg",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    tag: "Tetos Falsos",
    title: "Teto falso com sanca e LED",
    img: "/portfolio/p2.svg",
    span: "",
  },
  {
    tag: "Em Obra",
    title: "Equipa em execução de divisórias",
    img: "/portfolio/p3-real.jpg",
    span: "",
  },
  {
    tag: "Pintura",
    title: "Pintura interior em moradia",
    img: "/portfolio/p4.svg",
    span: "lg:col-span-2",
  },
  {
    tag: "Remodelações",
    title: "Intervenção em escadaria interior",
    img: "/portfolio/p5-real.jpg",
    span: "",
  },
  {
    tag: "Acabamentos",
    title: "Remates e perfis decorativos",
    img: "/portfolio/p6.svg",
    span: "",
  },
];

export function Portfolio() {
  return (
    <section
      id="projetos"
      className="relative bg-graphite-950 py-24 lg:py-32"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Projetos recentes"
          title={
            <>
              O nosso trabalho falado por imagens,{" "}
              <span className="italic-accent gold-text">obra a obra</span>
            </>
          }
          subtitle="Uma seleção de intervenções no Porto e arredores: pladur, tetos falsos, divisórias, pinturas e remodelações chave-na-mão."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 auto-rows-[280px]">
          {PROJECTS.map((p, i) => (
            <figure
              key={p.title}
              data-reveal
              data-reveal-delay={`${i * 80}`}
              className={`relative overflow-hidden rounded border border-white/5 group cursor-pointer ${p.span}`}
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-1">
                <span className="label-caps text-gold-300">{p.tag}</span>
                <h3 className="font-display font-semibold text-lg text-white">
                  {p.title}
                </h3>
              </figcaption>
              <span
                aria-hidden
                className="absolute top-4 right-4 h-9 w-9 rounded-xs border border-white/20 backdrop-blur-md bg-graphite-900/40 grid place-items-center text-gold-300 transition-transform duration-500 group-hover:rotate-45 group-hover:border-gold-400"
              >
                ↗
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
