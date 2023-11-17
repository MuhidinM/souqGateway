import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="overflow-hidden pb-44">
        <Hero />
        <Features />
        <Section />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
