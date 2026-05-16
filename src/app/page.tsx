import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Stats } from "@/components/Stats";
import { ParallaxCTA } from "@/components/ParallaxCTA";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { Gallery } from "@/components/Gallery";
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
        <Stats />
        <WhyUs />
        <ParallaxCTA />
        <Process />
        <Portfolio />
        <Gallery />
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
