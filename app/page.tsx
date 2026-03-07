import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Hero (dark) -> About (light gray pattern) */}
        <SectionDivider variant="shadow" />
        <About />
        {/* About -> Services: soft wave transition */}
        <SectionDivider variant="shadow" />
        <Services />
        {/* Services -> Benefits: curve for visual interest */}
        <SectionDivider variant="shadow" />
        <Benefits />
        <SectionDivider variant="shadow" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
