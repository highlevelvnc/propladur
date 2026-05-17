import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { RevealProvider } from "@/components/RevealProvider";
import { LegalShell } from "@/components/LegalShell";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termos e Condições",
  description:
    "Termos e condições de utilização do site da PRO PLADUR, empresa de pladur, acabamentos e remodelações no Porto.",
  alternates: { canonical: "/termos" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <RevealProvider>
      <Header />
      <LegalShell
        eyebrow="Termos e Condições"
        title="Condições de utilização"
        updated="17 de maio de 2026"
      >
        <p>
          Os presentes Termos e Condições regulam a utilização do site{" "}
          <strong>{COMPANY.url}</strong>, propriedade da{" "}
          <strong>{COMPANY.name}</strong>, com sede em {COMPANY.region}. Ao
          aceder ou utilizar este site, declara que aceita estes termos.
        </p>

        <h2>1. Objeto</h2>
        <p>
          Este site tem como finalidade apresentar os serviços prestados pela
          {" "}{COMPANY.name} em montagem de pladur, tetos falsos, divisórias,
          pinturas, renovações e remodelações no Porto e arredores, bem como
          facilitar o contacto entre clientes interessados e a empresa.
        </p>

        <h2>2. Pedidos de orçamento</h2>
        <p>
          Os pedidos de orçamento submetidos através do formulário do site, por
          WhatsApp, telefone ou email <strong>não constituem contrato</strong>.
          Cada proposta apresentada pela {COMPANY.name} é meramente indicativa
          até existir uma confirmação formal por escrito por ambas as partes.
        </p>
        <p>
          Os prazos de resposta indicativos são 24 a 48 horas úteis após visita
          técnica ao local da obra.
        </p>

        <h2>3. Conteúdos do site</h2>
        <p>
          Todos os conteúdos do site — textos, imagens, vídeos, logótipos,
          tipografia, identidade visual — são propriedade da {COMPANY.name} ou
          dos seus clientes, no caso de fotografias de obra. É proibida a sua
          reprodução, cópia, distribuição ou utilização comercial sem
          autorização prévia por escrito.
        </p>

        <h2>4. Fotografias de obra</h2>
        <p>
          As fotografias publicadas correspondem a obras reais executadas pela
          equipa da {COMPANY.name}. Em todos os casos foi obtido o consentimento
          do cliente para a sua divulgação. Os locais não são identificados por
          questões de privacidade.
        </p>

        <h2>5. Links externos</h2>
        <p>
          Este site pode conter ligações para sites de terceiros (WhatsApp,
          Instagram, Facebook). A {COMPANY.name} não se responsabiliza pelo
          conteúdo, políticas ou práticas desses sites.
        </p>

        <h2>6. Limitação de responsabilidade</h2>
        <p>
          A {COMPANY.name} envida todos os esforços para garantir que a
          informação no site é exata e atualizada. No entanto, não se
          responsabiliza por eventuais incorreções, omissões ou
          indisponibilidades técnicas pontuais.
        </p>

        <h2>7. Proteção de dados</h2>
        <p>
          O tratamento de dados pessoais recolhidos através deste site é regido
          pela nossa{" "}
          <a href="/privacidade">Política de Privacidade</a>, que faz parte
          integrante destes Termos.
        </p>

        <h2>8. Cookies</h2>
        <p>
          A utilização de cookies neste site é gerida através de um banner de
          consentimento conforme as exigências do RGPD. Pode rever as suas
          preferências a qualquer momento.
        </p>

        <h2>9. Lei aplicável e foro</h2>
        <p>
          Os presentes Termos regem-se pela lei portuguesa. Para qualquer
          litígio é competente o foro da Comarca do Porto, com expressa
          renúncia a qualquer outro.
        </p>

        <h2>10. Resolução alternativa de litígios</h2>
        <p>
          Em caso de litígio relacionado com serviços contratados, o consumidor
          pode recorrer aos centros de arbitragem de consumo reconhecidos. Mais
          informação em{" "}
          <a
            href="https://www.consumidor.gov.pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            consumidor.gov.pt
          </a>
          .
        </p>

        <h2>11. Contactos</h2>
        <p>
          Para qualquer questão relacionada com estes Termos:
          <br />
          <strong>{COMPANY.name}</strong>
          <br />
          {COMPANY.region}
          <br />
          Telefone / WhatsApp:{" "}
          <a href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phone}</a>
        </p>
      </LegalShell>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </RevealProvider>
  );
}
