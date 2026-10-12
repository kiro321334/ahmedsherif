import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <div className="mx-auto min-h-screen max-w-[480px] bg-ink shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
        <main>
          <Hero />
          <Stats />
          <About />
          <Experience />
          <Capabilities />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </>
  );
}
