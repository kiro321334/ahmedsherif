import Image from "next/image";
import { posterSrc } from "@/lib/cloud";
export default function Hero({ c }) {
  const h = c.hero;
  return (
    <section className="relative h-svh min-h-[620px] overflow-hidden bg-bg">
      <Image
        src={posterSrc(h.image) || "/hero.jpg"}
        alt={`${c.site.name} – ${h.label}`}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="hero-img object-cover object-[45%_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/10" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-6 pb-10 md:pb-16">
        <p className="fade-up flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.14em] text-gold">
          <i className="dot h-2 w-2 rounded-full bg-gold" />
          {h.label}
        </p>
        <h1 className="fade-up d1 mt-3 max-w-xl font-serif text-[2.1rem] leading-[1.15] md:text-6xl">
          {h.titleA} <em className="text-gold">{h.titleB}</em>
          {h.titleEnd}
        </h1>
        <p className="fade-up d2 mt-4 max-w-md text-base leading-relaxed text-cream/85">
          {h.text}
        </p>
        <div className="fade-up d3 mt-6 flex flex-wrap gap-3">
          <a href="#work" className="pill-g">
            {h.cta1}
          </a>
          <a href="#contact" className="pill-d">
            {h.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
