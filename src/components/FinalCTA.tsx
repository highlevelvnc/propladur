import { WHATSAPP_URL, COMPANY } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative bg-graphite-900 py-24 lg:py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 hero-grid opacity-30"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gold-400/20 blur-3xl"
      />
      <div className="container relative">
        <div
          data-reveal
          className="mx-auto max-w-3xl text-center"
        >
          <span className="label-caps text-gold-300">Pronto para avançar?</span>
          <h2 className="mt-5 font-display font-bold tracking-tightish text-3xl sm:text-5xl text-white">
            Vamos transformar o seu espaço com o{" "}
            <span className="gold-text">acabamento que merece.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Peça o seu orçamento sem compromisso. Resposta no mesmo dia,
            proposta detalhada em 24 a 48 horas.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <span aria-hidden>✆</span>
              Pedir Orçamento pelo WhatsApp
            </a>
            <a href={`tel:${COMPANY.phoneTel}`} className="btn-outline">
              Ligar Agora
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">
            {COMPANY.phone} · {COMPANY.region}
          </p>
        </div>
      </div>
    </section>
  );
}
