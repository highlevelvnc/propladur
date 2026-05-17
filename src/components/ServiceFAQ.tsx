"use client";

import { useState } from "react";
import type { ServiceFAQ as FAQ } from "@/lib/services";

export function ServiceFAQ({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-white/10 border-y border-white/10">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group w-full flex items-start justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-xs"
            >
              <span className="font-sans font-semibold text-white text-lg leading-snug pr-4">
                {f.q}
              </span>
              <span
                aria-hidden
                className={`relative shrink-0 grid place-items-center h-9 w-9 rounded-full border border-gold-400/40 text-gold-300 transition-transform duration-500 ${
                  isOpen ? "rotate-45 bg-gold-400/10" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-6"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-white/70 text-[15px] leading-relaxed pr-12">
                  {f.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
