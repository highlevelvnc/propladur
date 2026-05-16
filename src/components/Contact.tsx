"use client";

import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Montagem de Pladur",
  "Tetos Falsos",
  "Divisórias em Pladur",
  "Pinturas",
  "Renovações",
  "Remodelações Gerais",
  "Acabamentos",
  "Outro",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICE_OPTIONS[0],
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá, sou ${form.name}.%0A` +
      `Telefone: ${form.phone}%0A` +
      `Email: ${form.email}%0A` +
      `Serviço pretendido: ${form.service}%0A%0A` +
      `${form.message}`;
    window.open(
      `https://wa.me/${COMPANY.phoneTel.replace("+", "")}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const inputCls =
    "w-full bg-graphite-950 border border-white/10 rounded px-4 py-3 text-white placeholder:text-muted/70 focus:outline-none focus:border-gold-400 transition";

  return (
    <section
      id="contactos"
      className="relative bg-graphite-900 py-24 lg:py-32"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Contactos"
          title={
            <>
              Conte-nos o projeto e receba uma{" "}
              <span className="italic-accent gold-text">
                proposta detalhada
              </span>
            </>
          }
          subtitle="Preencha os dados abaixo ou fale diretamente connosco no WhatsApp. Respondemos no mesmo dia e enviamos a proposta em 24 a 48 horas."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr,1.3fr]">
          {/* Info side */}
          <aside
            data-reveal="left"
            className="card rounded p-8 flex flex-col gap-6 self-start"
          >
            <div>
              <span className="label-caps text-gold-300">WhatsApp</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block font-display font-semibold text-xl text-white under-gold"
              >
                {COMPANY.phone}
              </a>
            </div>
            <div>
              <span className="label-caps text-gold-300">Telefone</span>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="mt-1 block font-display font-semibold text-xl text-white under-gold"
              >
                {COMPANY.phone}
              </a>
            </div>
            <div>
              <span className="label-caps text-gold-300">Localização</span>
              <p className="mt-1 text-white">{COMPANY.region}</p>
            </div>
            <div>
              <span className="label-caps text-gold-300">Área de atuação</span>
              <p className="mt-1 text-white">{COMPANY.serviceArea}</p>
            </div>
            <div className="mt-2 pt-6 border-t border-white/5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full"
              >
                Abrir conversa no WhatsApp
              </a>
            </div>
          </aside>

          {/* Form */}
          <form
            data-reveal="right"
            onSubmit={onSubmit}
            className="card rounded p-8 grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="label-caps text-muted block mb-2">
                  Nome
                </span>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="O seu nome"
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className="label-caps text-muted block mb-2">
                  Telefone
                </span>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="+351 ..."
                  className={inputCls}
                />
              </label>
            </div>
            <label className="block">
              <span className="label-caps text-muted block mb-2">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="email@exemplo.pt"
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="label-caps text-muted block mb-2">
                Tipo de Serviço
              </span>
              <select
                value={form.service}
                onChange={(e) =>
                  setForm({ ...form, service: e.target.value })
                }
                className={inputCls}
              >
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s} className="bg-graphite-900">
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="label-caps text-muted block mb-2">
                Mensagem
              </span>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Conte-nos o que precisa..."
                className={inputCls + " resize-none"}
              />
            </label>
            <button type="submit" className="btn-gold mt-2">
              Enviar Pedido de Orçamento
              <span aria-hidden>→</span>
            </button>
            <p className="text-xs text-muted">
              Ao enviar, abre uma conversa no WhatsApp com a sua mensagem
              pré-preenchida.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
