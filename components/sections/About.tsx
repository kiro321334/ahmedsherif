import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-ink px-8 pb-16 pt-24">
      <SectionHeading id="about-title" no="01" label="Who am I?" title="Auteur of Visual Harmony" />
      <div className="mt-6 rounded-[20px] bg-surface p-6">
        <p className="text-[16px] leading-[1.7] text-cream/90">
          I am a graphic designer driven by turning abstract intentions into visual artefacts that are effortlessly seen,
          intuitively understood, and permanently remembered.
        </p>
        <p className="mt-4 text-[14px] leading-[1.7] text-muted">
          Specializing in high-touch identity, editorial precision, and strategic brand direction across Egypt, Saudi Arabia, and Jordan.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <Image src="/images/ahmed-sherif-about.webp" alt="Portrait of Ahmed Sherif" width={80} height={80}
            sizes="80px" loading="lazy" className="h-20 w-20 rounded-2xl object-cover" />
          <div>
            <p><span className="font-serif text-[22px] italic text-gold">+6</span>{" "}
              <span className="text-[12px] font-semibold uppercase tracking-wide text-cream">Years of craft</span></p>
            <p className="mt-1 text-[14px] text-muted">Cairo &amp; Riyadh Collaborations</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-4 rounded-[20px] bg-surface p-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-band text-gold">
          <Icon name="cap" size={20} />
        </span>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-gold">2019 — 2023 • Higher Institute for Languages</p>
          <h3 className="mt-1 text-[18px] text-cream">Bachelor of Languages</h3>
          <p className="mt-1 text-[14px] leading-relaxed text-muted">English &amp; German Linguistics • Cross-Cultural Narrative</p>
        </div>
      </div>
    </section>
  );
}
