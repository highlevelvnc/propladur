import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main className="relative min-h-[100svh] grid place-items-center overflow-hidden bg-graphite-900 px-6">
      <div
        aria-hidden
        className="absolute inset-0 hero-grid opacity-30"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gold-400/15 blur-3xl"
      />
      <div className="relative text-center max-w-xl">
        <span className="label-caps text-gold-300">Erro 404</span>
        <h1 className="mt-5 font-display font-semibold tracking-tight text-6xl sm:text-8xl text-white">
          <span className="italic-accent gold-text">Página</span> não encontrada
        </h1>
        <p className="mt-6 text-white/70 leading-relaxed">
          Esta página não existe — pode ter sido movida ou o endereço está
          incorreto. Volte ao início ou fale connosco diretamente.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-gold">
            Voltar ao início
            <span aria-hidden>→</span>
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
