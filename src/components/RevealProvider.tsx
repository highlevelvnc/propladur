"use client";

import { useScrollReveal } from "@/lib/scrollReveal";

export function RevealProvider({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return <>{children}</>;
}
