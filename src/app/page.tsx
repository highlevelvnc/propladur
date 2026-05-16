import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { ParallaxCTA } from "@/components/ParallaxCTA";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { BeforeAfter } from "@/components/BeforeAfter";
import { About } from "@/components/About";
import { FinalCTA } from "@/components/FinalCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { RevealProvider } from "@/components/RevealProvider";
import { Loader } from "@/components/Loader";

export default function Page() {
  return (
    <RevealProvider>
      <Loader />
      <Header />
      <main id="inicio">
        <Hero />
        <Services />
        <WhyUs />
        <ParallaxCTA />
        <Process />
        <Portfolio />
        <BeforeAfter />
        <About />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </RevealProvider>
  );
}
