import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero-h relative overflow-hidden"
    >
      <Image
        src="/images/ahmed-sherif-hero.webp"
        alt="Ahmed Sherif, graphic designer and art director, in a brown suit and sunglasses"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={75}
        className="object-cover object-[50%_10%] md:object-[50%_22%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/40 to-ink/95" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ink/85 via-ink/30 to-transparent md:block" />
      <div className="absolute inset-x-0 bottom-0 px-page pb-8 md:pb-14">
        <div className="md:max-w-xl">
          <p className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-gold">
            <span className="h-2.5 w-2.5 rounded-full bg-gold" />
            Graphic Designer • Art Director
          </p>
          <h1
            id="hero-title"
            className="mt-3 font-serif text-[clamp(1.6rem,4.8vh,2rem)] leading-[1.25] text-cream md:text-[clamp(2.25rem,7vh,3.75rem)] md:leading-[1.15]"
          >
            I Design Brands That Get <em className="text-gold">Remembered</em>.
          </h1>
          <p className="mt-3 text-[clamp(0.875rem,2.1vh,1rem)] leading-[1.6] text-cream/75 md:text-lg">
            Visual identities and editorial campaigns that bring together
            concept, aesthetics, and lasting cultural impact.
          </p>
          <div className="mt-5 flex gap-3 justify-between md:mt-8 md:justify-start">
            <a
              href="#work"
              className="rounded-full bg-gold px-3 py-2 text-[14px] font-semibold uppercase tracking-wide text-ink"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full bg-surface px-4 py-3 text-[14px] font-semibold uppercase tracking-wide text-cream"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
