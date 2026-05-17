import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { RevealProvider } from "@/components/RevealProvider";
import { LegalShell } from "@/components/LegalShell";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade da PRO PLADUR — como recolhemos, utilizamos e protegemos os seus dados pessoais ao abrigo do RGPD.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <RevealProvider>
      <Header />
      <LegalShell
        eyebrow="Política de Privacidade"
        title="Como tratamos os seus dados"
        updated="17 de maio de 2026"
      >
        <p>
          A <strong>{COMPANY.name}</strong> respeita a sua privacidade e está
          comprometida com a proteção dos seus dados pessoais ao abrigo do
          Regulamento Geral de Proteção de Dados (RGPD — Regulamento UE
          2016/679) e da Lei n.º 58/2019.
        </p>

        <h2>1. Responsável pelo tratamento</h2>
        <p>
          O responsável pelo tratamento dos seus dados é a{" "}
          <strong>{COMPANY.name}</strong>, com sede em {COMPANY.region}. Para
          qualquer questão relacionada com os seus dados pessoais, pode
          contactar-nos através do telefone{" "}
          <a href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phone}</a> ou por{" "}
          <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          .
        </p>

        <h2>2. Que dados recolhemos</h2>
        <p>Recolhemos apenas os dados estritamente necessários para responder a pedidos de orçamento e prestar os nossos serviços:</p>
        <ul>
          <li><strong>Dados de contacto:</strong> nome, número de telefone e endereço de email.</li>
          <li><strong>Dados sobre o pedido:</strong> tipo de serviço pretendido e descrição da obra.</li>
          <li><strong>Dados técnicos de navegação:</strong> endereço IP, tipo de dispositivo, browser e páginas visitadas (apenas se aceitar as cookies de análise).</li>
        </ul>

        <h2>3. Como recolhemos os seus dados</h2>
        <p>Os dados são recolhidos quando:</p>
        <ul>
          <li>Preenche o formulário de orçamento neste site.</li>
          <li>Nos contacta por WhatsApp, telefone ou email.</li>
          <li>Navega no site (cookies, conforme secção 7).</li>
        </ul>

        <h2>4. Finalidade do tratamento</h2>
        <p>Utilizamos os seus dados exclusivamente para:</p>
        <ul>
          <li>Responder ao seu pedido de orçamento ou contacto.</li>
          <li>Executar o serviço contratado e dar-lhe apoio durante e após a obra.</li>
          <li>Cumprir obrigações legais (fiscais, contabilísticas).</li>
          <li>Melhorar a experiência do site (apenas com o seu consentimento).</li>
        </ul>
        <p>
          <strong>
            Não utilizamos os seus dados para marketing direto não solicitado,
            nem os partilhamos com terceiros para fins comerciais.
          </strong>
        </p>

        <h2>5. Fundamento legal</h2>
        <p>O tratamento dos seus dados baseia-se em:</p>
        <ul>
          <li><strong>Execução de contrato ou diligências pré-contratuais</strong> (artigo 6.º, n.º 1, alínea b) do RGPD).</li>
          <li><strong>Cumprimento de obrigações legais</strong> (alínea c).</li>
          <li><strong>Consentimento</strong> (alínea a), quando aplicável — por exemplo cookies não essenciais.</li>
        </ul>

        <h2>6. Conservação dos dados</h2>
        <p>
          Conservamos os seus dados durante o período estritamente necessário às
          finalidades acima e, em qualquer caso, dentro dos prazos exigidos por
          lei (em geral, 10 anos para efeitos contabilísticos e fiscais).
        </p>

        <h2>7. Cookies</h2>
        <p>
          Este site utiliza cookies essenciais ao seu funcionamento e, mediante o
          seu consentimento, cookies de análise (Google Analytics) e
          publicidade (Meta Pixel). Pode aceitar, recusar ou definir as suas
          preferências através do banner de cookies que aparece na sua primeira
          visita.
        </p>

        <h2>8. Os seus direitos</h2>
        <p>Tem o direito de, a qualquer momento:</p>
        <ul>
          <li>Aceder aos seus dados pessoais.</li>
          <li>Solicitar a sua retificação ou atualização.</li>
          <li>Solicitar o apagamento (direito ao esquecimento).</li>
          <li>Solicitar a limitação ou opor-se ao tratamento.</li>
          <li>Solicitar a portabilidade dos seus dados.</li>
          <li>Retirar o consentimento previamente prestado.</li>
        </ul>
        <p>
          Para exercer qualquer destes direitos, contacte-nos pelo telefone{" "}
          <a href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phone}</a>.
        </p>

        <h2>9. Reclamações</h2>
        <p>
          Caso considere que o tratamento dos seus dados viola as regras
          aplicáveis, tem o direito de apresentar reclamação à autoridade de
          controlo competente em Portugal — a{" "}
          <a
            href="https://www.cnpd.pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comissão Nacional de Proteção de Dados (CNPD)
          </a>
          .
        </p>

        <h2>10. Alterações a esta política</h2>
        <p>
          Esta política pode ser atualizada periodicamente. A data da última
          revisão é apresentada no topo da página. Recomendamos a sua consulta
          regular.
        </p>
      </LegalShell>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </RevealProvider>
  );
}
