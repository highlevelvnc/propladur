import Image from "next/image";
import { COMPANY, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

const SERVICES = [
  "Montagem de Pladur",
  "Tetos Falsos",
  "Divisórias",
  "Pinturas",
  "Renovações",
  "Remodelações",
];

export function Footer() {
  return (
    <footer className="relative bg-graphite-950 border-t border-white/5">
      <div className="container py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={COMPANY.name}
              width={44}
              height={44}
              className="h-10 w-auto object-contain"
            />
            <span className="font-display font-bold text-white text-lg">
              PRO <span className="gold-text">PLADUR</span>
            </span>
          </div>
          <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-xs">
            Empresa do Porto especializada em pladur, acabamentos, pinturas e
            remodelações chave-na-mão. Rigor técnico, prazos cumpridos e
            qualidade que dura.
          </p>
          <p className="mt-4 label-caps text-gold-300">
            {COMPANY.tagline}
          </p>
        </div>

        <div>
          <h4 className="label-caps text-gold-300 mb-5">Links rápidos</h4>
          <ul className="space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/70 hover:text-white under-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label-caps text-gold-300 mb-5">Serviços</h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s} className="text-white/70">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label-caps text-gold-300 mb-5">Contactos</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold-200 under-gold"
              >
                WhatsApp · {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="text-white/70 hover:text-white under-gold"
              >
                {COMPANY.phone}
              </a>
            </li>
            <li className="text-white/70">{COMPANY.region}</li>
            <li className="text-white/70">{COMPANY.serviceArea}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos
            reservados.
          </p>
          <p>{COMPANY.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
