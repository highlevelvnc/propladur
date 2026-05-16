export const PHONE_DISPLAY = "+351 912 735 043";
export const PHONE_TEL = "+351912735043";

export const WHATSAPP_URL =
  "https://wa.me/351912735043?text=" +
  encodeURIComponent(
    "Olá, gostaria de pedir um orçamento para um serviço da PRO PLADUR.",
  );

export const COMPANY = {
  name: "PRO PLADUR",
  tagline: "Acabamentos que constroem confiança.",
  fullName: "PRO PLADUR — Especialistas em Pladur e Acabamentos",
  region: "Porto, Portugal",
  serviceArea: "Porto e arredores",
  email: "geral@propladur.pt",
  phone: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  whatsapp: WHATSAPP_URL,
  url: "https://propladur.pt",
} as const;

export const SOCIAL = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/propladur.pt",
    handle: "@propladur.pt",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18v78w3Fvc/",
    handle: "PRO PLADUR",
  },
] as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Contactos", href: "#contactos" },
] as const;
