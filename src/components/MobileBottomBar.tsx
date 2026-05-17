"use client";

import { useEffect, useState } from "react";
import { COMPANY, WHATSAPP_URL } from "@/lib/constants";

export function MobileBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* graphite fade behind so it reads on any section */}
      <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-b from-transparent to-graphite-900/95" />
      <div className="relative bg-graphite-900/95 backdrop-blur-lg border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-2 gap-2 p-3">
          <a
            href={`tel:${COMPANY.phoneTel}`}
            aria-label="Ligar agora"
            className="btn-outline !py-3 !text-xs"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-4 w-4 fill-current"
            >
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.07 15.07 0 0 1-6.59-6.59l2.2-2.2a1 1 0 0 0 .24-1.02C8.7 6.45 8.5 5.25 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z" />
            </svg>
            Ligar
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir orçamento por WhatsApp"
            className="btn-gold !py-3 !text-xs"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-4 w-4 fill-current"
            >
              <path d="M19.11 4.91A10.45 10.45 0 0 0 11.75 2C6 2 1.36 6.64 1.36 12.39c0 1.83.48 3.61 1.39 5.18L2 22l4.6-1.21a10.41 10.41 0 0 0 5.14 1.32h.01c5.74 0 10.39-4.64 10.39-10.39 0-2.78-1.08-5.39-3.03-7.31z" />
            </svg>
            Orçamento
          </a>
        </div>
      </div>
    </div>
  );
}
