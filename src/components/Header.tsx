"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_URL, COMPANY } from "@/lib/constants";
import { SocialIcons } from "./SocialIcons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-3"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between gap-8">
        <Link
          href="#inicio"
          className="flex items-center gap-3 group"
          aria-label={COMPANY.name}
        >
          <Image
            src="/logo.png"
            alt={COMPANY.name}
            width={120}
            height={120}
            priority
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain logo-glow transition-transform duration-500 group-hover:rotate-3"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-semibold text-xl text-white tracking-tight">
              <span className="gold-text">PRO</span>{" "}
              <span className="italic-accent">PLADUR</span>
            </span>
            <span className="label-caps text-muted">Porto · Portugal</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="under-gold text-sm font-medium text-white/85 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <SocialIcons variant="header" />
          <span aria-hidden className="h-6 w-px bg-white/15" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm"
          >
            Pedir Orçamento
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-11 h-11 rounded border border-white/10 text-white"
        >
          <span className="sr-only">Menu</span>
          <div className="relative w-5 h-3">
            <span
              className={`absolute left-0 right-0 top-0 h-px bg-gold-400 transition-transform duration-500 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 right-0 bottom-0 h-px bg-gold-400 transition-transform duration-500 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[68px] bottom-0 transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-graphite-900/95 backdrop-blur-xl" />
        <div className="relative h-full overflow-y-auto px-6 py-10 flex flex-col">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/5 py-5 text-2xl font-display font-semibold tracking-tightish text-white"
              >
                <span>
                  <span className="gold-text mr-3 text-base">
                    0{i + 1}
                  </span>
                  {l.label}
                </span>
                <span
                  aria-hidden
                  className="text-gold-400 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-10"
          >
            Pedir Orçamento via WhatsApp
          </a>

          <div className="mt-8">
            <span className="label-caps text-gold-300 block mb-3">
              Siga-nos
            </span>
            <SocialIcons variant="menu" />
          </div>

          <div className="mt-auto pt-10 text-sm text-muted">
            <p>{COMPANY.region}</p>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="block mt-1 text-white"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
