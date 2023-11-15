import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <Hero />
      <Features />
      <Section />
    </main>
  );
}
