import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { COMPANY, SOCIAL } from "@/lib/constants";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#170F09",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: `${COMPANY.name} — Pladur, Acabamentos e Remodelações no Porto`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Empresa do Porto especializada em montagem de pladur, tetos falsos, divisórias, pinturas, renovações e remodelações chave-na-mão. Equipa própria, prazos cumpridos e acabamentos impecáveis. Peça orçamento sem compromisso.",
  keywords: [
    "pladur no Porto",
    "montagem de pladur",
    "empresa de pladur Porto",
    "tetos falsos Porto",
    "divisórias em pladur",
    "acabamentos em pladur",
    "pinturas no Porto",
    "renovações Porto",
    "remodelações Porto",
    "acabamentos interiores Porto",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: COMPANY.url,
    title: `${COMPANY.name} — Pladur e Acabamentos no Porto`,
    description:
      "Pladur, tetos falsos, divisórias, pinturas e remodelações chave-na-mão no Porto. Equipa especializada, prazos cumpridos e acabamentos impecáveis.",
    siteName: COMPANY.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Pladur e Acabamentos no Porto`,
    description:
      "Especialistas em pladur e acabamentos no Porto. Peça orçamento sem compromisso.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  image: `${COMPANY.url}/logo.png`,
  url: COMPANY.url,
  telephone: COMPANY.phoneTel,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto",
    addressCountry: "PT",
  },
  areaServed: "Porto e arredores",
  description:
    "Especialistas em montagem de pladur, acabamentos, pinturas, renovações e remodelações no Porto.",
  sameAs: SOCIAL.map((s) => s.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${body.variable}`}>
      <body className="bg-graphite-900 text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
