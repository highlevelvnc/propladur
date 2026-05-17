import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { RevealProvider } from "@/components/RevealProvider";
import { Contact } from "@/components/Contact";
import { SocialIcons } from "@/components/SocialIcons";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contactos — PRO PLADUR no Porto",
  description:
    "Fale connosco para pedir orçamento de pladur, tetos falsos, divisórias, pinturas ou remodelações no Porto. Resposta no mesmo dia por WhatsApp ou telefone.",
  alternates: { canonical: "/contactos" },
};

export default function ContactosPage() {
  return (
    <RevealProvider>
      <Header />
      <main className="bg-graphite-900 text-ink">
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
          <div aria-hidden className="absolute inset-0 hero-grid opacity-25" />
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
              <span className="text-white/70">Contactos</span>
            </nav>
            <span className="label-caps text-gold-300">Fale connosco</span>
            <h1 className="mt-4 font-display font-semibold tracking-tight text-5xl lg:text-7xl text-white">
              Vamos{" "}
              <span className="italic-accent gold-text">conversar</span> sobre
              a sua obra
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Respondemos no mesmo dia por WhatsApp ou telefone, e enviamos
              proposta detalhada em 24 a 48 horas após visita técnica.
            </p>
          </div>
        </section>

        {/* Quick cards */}
        <section className="bg-graphite-900 pb-8">
          <div className="container grid gap-4 sm:grid-cols-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card group p-7 rounded"
            >
              <span className="label-caps text-gold-300">WhatsApp</span>
              <p className="mt-3 font-display font-semibold text-2xl text-white">
                {COMPANY.phone}
              </p>
              <p className="mt-2 text-sm text-white/65">
                Resposta no mesmo dia. Pode enviar fotos do espaço.
              </p>
              <span
                aria-hidden
                className="mt-4 inline-flex items-center gap-2 text-gold-300 text-sm"
              >
                <span className="under-gold">Abrir conversa</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>

            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="card group p-7 rounded"
            >
              <span className="label-caps text-gold-300">Telefone</span>
              <p className="mt-3 font-display font-semibold text-2xl text-white">
                {COMPANY.phone}
              </p>
              <p className="mt-2 text-sm text-white/65">
                Dias úteis, atendimento direto.
              </p>
              <span
                aria-hidden
                className="mt-4 inline-flex items-center gap-2 text-gold-300 text-sm"
              >
                <span className="under-gold">Ligar agora</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>

            <div className="card p-7 rounded">
              <span className="label-caps text-gold-300">Localização</span>
              <p className="mt-3 font-display font-semibold text-2xl text-white">
                {COMPANY.region}
              </p>
              <p className="mt-2 text-sm text-white/65">
                Área de atuação: {COMPANY.serviceArea}.
              </p>
              <div className="mt-4">
                <SocialIcons variant="footer" />
              </div>
            </div>
          </div>
        </section>

        {/* Form (reaproveita o componente Contact) */}
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </RevealProvider>
  );
}
