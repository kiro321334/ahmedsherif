import { getContent } from "@/lib/content";
import { posterSrc } from "@/lib/cloud";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
export const revalidate = 300;
const URL_ = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";
export default async function Home() {
  const c = await getContent();
  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: c.site.name,
    alternateName: "أحمد شريف",
    jobTitle: "Graphic Designer & Art Director",
    url: URL_,
    image: posterSrc(c.hero.image) || URL_ + "/hero.jpg",
    email: c.site.email,
    description: c.site.description,
    sameAs: (c.contact.socials || []).map((s) => s.url).filter(Boolean),
    knowsAbout: c.skills.items.map((s) => s.title),
    workLocation: { "@type": "Place", name: c.site.location },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Minia Higher Institute for Languages",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <Header c={c} />
      <main id="top">
        <Hero c={c} />
        <Stats c={c} />
        <About c={c} />
        <Experience c={c} />
        <Skills c={c} />
        <Work c={c} />
        <Contact c={c} />
      </main>
    </>
  );
}
