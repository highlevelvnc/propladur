import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { COMPANY } from "@/lib/constants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { RevealProvider } from "@/components/RevealProvider";

export const metadata: Metadata = {
  title: "Serviços — Pladur, Tetos, Pinturas e Remodelações no Porto",
  description:
    "Soluções completas em pladur, tetos falsos, divisórias, pinturas e remodelações no Porto. Equipa especializada e acabamentos premium.",
  alternates: { canonical: "/servicos" },
};

export default function ServicesHub() {
  return (
    <RevealProvider>
      <Header />
      <main className="bg-graphite-900 text-ink">
        <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 hero-grid opacity-25"
          />
          <div
            aria-hidden
            className="absolute -top-32 right-1/3 h-[420px] w-[420px] rounded-full bg-gold-400/10 blur-3xl"
          />
          <div className="container relative max-w-3xl">
            <nav
              aria-label="Breadcrumb"
              className="label-caps text-muted flex items-center gap-2 mb-6"
            >
              <Link href="/" className="hover:text-gold-300">
                Início
              </Link>
              <span aria-hidden>›</span>
              <span className="text-white/70">Serviços</span>
            </nav>
            <span className="label-caps text-gold-300">
              Tudo o que fazemos no Porto
            </span>
            <h1 className="mt-4 font-display font-semibold tracking-tight text-5xl lg:text-7xl text-white">
              Serviços{" "}
              <span className="italic-accent gold-text">PRO PLADUR</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Cinco áreas de especialização — todas executadas pela mesma equipa,
              com o mesmo padrão de exigência. Escolha o serviço para ver
              detalhes, projetos e dúvidas frequentes.
            </p>
          </div>
        </section>

        <section className="bg-graphite-900 pb-24 lg:pb-32">
          <div className="container">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/servicos/${s.slug}`}
                  data-reveal
                  data-reveal-delay={`${i * 80}`}
                  className="card group relative overflow-hidden rounded"
                >
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={s.hero.image}
                      alt={s.navTitle}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.4s] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/40 to-transparent" />
                    <span className="absolute top-4 left-4 label-caps bg-graphite-900/80 backdrop-blur-sm text-gold-300 px-3 py-1.5 rounded">
                      {s.hero.eyebrow}
                    </span>
                  </div>
                  <div className="p-7">
                    <h2 className="font-display font-semibold text-2xl text-white leading-tight">
                      {s.navTitle}
                    </h2>
                    <p className="mt-3 text-white/65 text-[15px] leading-relaxed line-clamp-3">
                      {s.intro}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-gold-300 text-sm">
                      <span className="under-gold">Ver detalhes</span>
                      <span
                        aria-hidden
                        className="transition-transform duration-500 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: SERVICES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.navTitle,
              url: `${COMPANY.url}/servicos/${s.slug}`,
            })),
          }),
        }}
      />
    </RevealProvider>
  );
}
