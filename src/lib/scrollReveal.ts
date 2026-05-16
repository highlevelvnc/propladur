"use client";

import { useEffect } from "react";

/**
 * Visible-by-default + IntersectionObserver + setTimeout fallback.
 * Marks every [data-reveal] as data-revealed="false" on mount, then flips
 * to "true" on intersection. A 3500ms safety net forces all to "true" so
 * the page never stays blank (headless browsers, background tabs, IO bugs).
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (els.length === 0) return;

    els.forEach((el) => {
      if (!el.hasAttribute("data-revealed")) {
        el.setAttribute("data-revealed", "false");
      }
    });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.setAttribute("data-revealed", "true"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.revealDelay ?? 0);
            window.setTimeout(
              () => el.setAttribute("data-revealed", "true"),
              delay,
            );
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));

    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.setAttribute("data-revealed", "true"));
    }, 3500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);
}
