import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService, whatsappForService } from "@/lib/services";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { RevealProvider } from "@/components/RevealProvider";
import { ServiceFAQ } from "@/components/ServiceFAQ";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/servicos/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      type: "website",
      locale: "pt_PT",
      url: `${COMPANY.url}/servicos/${s.slug}`,
      images: [
        {
          url: s.hero.image,
          width: 1600,
          height: 900,
          alt: s.hero.title,
        },
      ],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const waUrl = whatsappForService(s);
  const related = s.related
    .map((r) => SERVICES.find((x) => x.slug === r))
    .filter(Boolean) as typeof SERVICES;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.navTitle,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      telephone: COMPANY.phoneTel,
      areaServed: "Porto e arredores",
      address: { "@type": "PostalAddress", addressLocality: "Porto", addressCountry: "PT" },
    },
    areaServed: { "@type": "City", name: "Porto" },
    description: s.metaDescription,
    url: `${COMPANY.url}/servicos/${s.slug}`,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <RevealProvider>
      <Header />
      <main className="bg-graphite-900 text-ink">
        {/* HERO */}
        <section className="relative isolate min-h-[80svh] overflow-hidden">
          <Image
            src={s.hero.image}
            alt={s.hero.title}
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 -z-10 object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite-900 via-graphite-900/85 to-graphite-900/45" />
          <div className="absolute inset-0 -z-10 hero-grid opacity-25" />

          <div className="container relative pt-40 pb-20 lg:pt-48 lg:pb-28">
            <nav
              aria-label="Breadcrumb"
              className="label-caps text-muted flex items-center gap-2 mb-6"
            >
              <Link href="/" className="hover:text-gold-300">
                Início
              </Link>
              <span aria-hidden>›</span>
              <Link href="/servicos" className="hover:text-gold-300">
                Serviços
              </Link>
              <span aria-hidden>›</span>
              <span className="text-white/70">{s.shortTitle}</span>
            </nav>

            <div className="max-w-3xl">
              <span className="label-caps text-gold-300">{s.hero.eyebrow}</span>
              <h1 className="mt-5 font-display font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[64px] lg:leading-[1.02] text-white">
                {s.hero.title}
              </h1>
              <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-2xl">
                {s.hero.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Pedir Orçamento
                  <span aria-hidden>→</span>
                </a>
                <a href={`tel:${COMPANY.phoneTel}`} className="btn-outline">
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO + SECTIONS */}
        <section className="bg-graphite-900 py-20 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[1.4fr,1fr]">
            <article className="prose-styled max-w-none">
              <p
                data-reveal
                className="text-xl leading-relaxed text-white/85"
              >
                {s.intro}
              </p>

              {s.sections.map((sec) => (
                <div key={sec.heading} className="mt-12" data-reveal>
                  <h2 className="font-display font-semibold tracking-tight text-3xl lg:text-4xl text-white">
                    {sec.heading}
                  </h2>
                  <div className="mt-5 space-y-4 text-white/75 text-[17px] leading-relaxed">
                    {sec.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </article>

            <aside data-reveal="left" className="lg:sticky lg:top-28 self-start">
              <div className="card p-7 rounded">
                <span className="label-caps text-gold-300">
                  Porquê a PRO PLADUR
                </span>
                <h3 className="mt-3 font-display font-semibold text-2xl text-white">
                  O que está incluído
                </h3>
                <ul className="mt-6 space-y-3">
                  {s.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-white/80 text-[15px]"
                    >
                      <span
                        aria-hidden
                        className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full"
                  >
                    Pedir Orçamento
                  </a>
                  <a
                    href={`tel:${COMPANY.phoneTel}`}
                    className="btn-outline w-full"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* GALLERY */}
        {s.gallery.length > 0 && (
          <section className="bg-graphite-950 py-20 lg:py-28">
            <div className="container">
              <div className="flex items-end justify-between gap-6 mb-10">
                <div>
                  <span className="label-caps text-gold-300">Em obra</span>
                  <h2 className="mt-3 font-display font-semibold tracking-tight text-3xl lg:text-4xl text-white">
                    Projetos de{" "}
                    <span className="italic-accent gold-text">
                      {s.shortTitle.toLowerCase()}
                    </span>
                  </h2>
                </div>
                <Link
                  href="/#galeria"
                  className="hidden sm:inline-flex btn-outline"
                >
                  Galeria completa
                </Link>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {s.gallery.map((src, i) => (
                  <div
                    key={src}
                    data-reveal
                    data-reveal-delay={`${i * 60}`}
                    className="relative aspect-[4/3] overflow-hidden rounded border border-white/5 group"
                  >
                    <Image
                      src={src}
                      alt={`${s.shortTitle} — projeto PRO PLADUR ${i + 1}`}
                      fill
                      sizes="(min-width:1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-[1.4s] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/40 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="bg-graphite-900 py-20 lg:py-28">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <span className="label-caps text-gold-300">Perguntas frequentes</span>
              <h2
                data-reveal
                className="mt-3 font-display font-semibold tracking-tight text-3xl lg:text-5xl text-white"
              >
                As suas{" "}
                <span className="italic-accent gold-text">dúvidas</span>,
                respondidas
              </h2>
            </div>
            <ServiceFAQ faqs={s.faqs} />
          </div>
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="bg-graphite-950 py-20 lg:py-24">
            <div className="container">
              <div className="text-center mb-12">
                <span className="label-caps text-gold-300">Mais serviços</span>
                <h2 className="mt-3 font-display font-semibold tracking-tight text-3xl text-white">
                  Outros serviços relacionados
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/servicos/${r.slug}`}
                    className="card group relative overflow-hidden rounded"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={r.hero.image}
                        alt={r.navTitle}
                        fill
                        sizes="(min-width:1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[1.4s] group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/30 to-transparent" />
                    </div>
                    <div className="p-6">
                      <span className="label-caps text-gold-300">
                        {r.hero.eyebrow}
                      </span>
                      <h3 className="mt-2 font-display font-semibold text-xl text-white">
                        {r.navTitle}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-2 text-gold-300 text-sm">
                        <span className="under-gold">Saber mais</span>
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
        )}

        {/* FINAL CTA */}
        <section className="relative bg-graphite-900 py-20 lg:py-24 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 hero-grid opacity-30"
          />
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gold-400/20 blur-3xl"
          />
          <div className="container relative text-center max-w-2xl mx-auto">
            <h2 className="font-display font-semibold tracking-tight text-3xl sm:text-5xl text-white">
              Pronto para avançar com{" "}
              <span className="italic-accent gold-text">
                {s.shortTitle.toLowerCase()}
              </span>
              ?
            </h2>
            <p className="mt-5 text-white/70 text-lg">
              Resposta no mesmo dia, proposta detalhada em 24 a 48 horas.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Pedir Orçamento por WhatsApp
              </a>
              <a href={`tel:${COMPANY.phoneTel}`} className="btn-outline">
                Ligar Agora
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </RevealProvider>
  );
}
