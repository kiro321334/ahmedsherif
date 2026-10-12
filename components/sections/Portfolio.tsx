"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { CATEGORIES, PROJECTS } from "@/lib/data";

export default function Portfolio() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const list = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="work" aria-labelledby="work-title" className="bg-ink px-page pb-16 pt-24">
      <SectionHeading id="work-title" no="03" label="Featured Portfolio" title="Selected Works" />
      <div role="tablist" aria-label="Filter projects" className="no-scrollbar -mr-8 mt-6 flex gap-2 overflow-x-auto pr-8">
        {CATEGORIES.map((c) => (
          <button key={c} role="tab" aria-selected={active === c} onClick={() => setActive(c)}
            className={`shrink-0 rounded-full px-6 py-3 text-[13px] font-semibold uppercase tracking-wide ${
              active === c ? "bg-gold text-ink" : "bg-surface text-cream"}`}>
            {c}
          </button>
        ))}
      </div>
      <ul className="mt-6 space-y-5">
        {list.map((p) => (
          <li key={p.slug}>
            <article className="overflow-hidden rounded-[20px] bg-surface">
              <div className="relative aspect-[350/208] w-full">
                <Image src={`/images/projects/${p.slug}.jpg`} alt={p.alt} fill loading="lazy"
                  sizes="(max-width: 480px) 90vw, 416px" className="object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-cream/90">
                  {p.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-[26px] leading-tight text-cream">{p.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.55] text-cream/75">{p.desc}</p>
                <a href="#contact" aria-label={`Explore ${p.title} case study`}
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-gold">
                  Explore Case Study <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
