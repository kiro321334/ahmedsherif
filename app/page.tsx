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
      <div className="mx-auto min-h-screen">
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
