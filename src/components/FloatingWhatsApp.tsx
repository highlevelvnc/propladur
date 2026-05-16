"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tipOpen, setTipOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t1 = window.setTimeout(() => setTipOpen(true), 1200);
    const t2 = window.setTimeout(() => setTipOpen(false), 5200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [visible]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex items-end gap-3 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div
        className={`hidden sm:block max-w-[220px] origin-bottom-right rounded bg-graphite-850 border border-white/10 px-4 py-3 text-sm text-white/85 shadow-card transition-all duration-500 ${
          tipOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <strong className="block text-gold-300 label-caps mb-1">
          Olá!
        </strong>
        Precisa de orçamento? Fale connosco no WhatsApp.
        <span
          aria-hidden
          className="absolute -right-1 bottom-3 h-2 w-2 rotate-45 bg-graphite-850 border-r border-b border-white/10"
        />
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,0.55)] ring-4 ring-white/10 hover:scale-105 transition-transform"
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"
        />
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="relative h-7 w-7 fill-current"
        >
          <path d="M19.11 4.91A10.45 10.45 0 0 0 11.75 2C6 2 1.36 6.64 1.36 12.39c0 1.83.48 3.61 1.39 5.18L2 22l4.6-1.21a10.41 10.41 0 0 0 5.14 1.32h.01c5.74 0 10.39-4.64 10.39-10.39 0-2.78-1.08-5.39-3.03-7.31zm-7.36 16a8.59 8.59 0 0 1-4.37-1.2l-.31-.18-2.73.71.73-2.66-.2-.33a8.59 8.59 0 1 1 6.88 3.66zm4.71-6.46c-.26-.13-1.53-.75-1.77-.84-.24-.09-.41-.13-.59.13-.17.26-.67.84-.82 1.01-.15.17-.3.2-.56.07a7.06 7.06 0 0 1-2.08-1.29 7.81 7.81 0 0 1-1.44-1.79c-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.59-1.42-.81-1.95-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.45.07-.69.32-.24.26-.91.89-.91 2.16 0 1.27.93 2.51 1.06 2.68.13.17 1.82 2.78 4.41 3.9.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.11-.24-.17-.5-.3z" />
        </svg>
      </a>
    </div>
  );
}
