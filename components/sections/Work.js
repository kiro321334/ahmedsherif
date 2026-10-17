"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import SectionHead from "@/components/ui/SectionHead";
import Icon from "@/components/ui/Icon";
const WorkModal = dynamic(() => import("@/components/ui/WorkModal"), {
  ssr: false,
});
const LIMIT = 6;
const coverOf = (p) =>
  (p.folder ? (p.cover?.url ? p.cover : p.images?.[0]) : p.image)?.url || null;
export default function Work({ c }) {
  const w = c.work;
  const [f, setF] = useState("ALL");
  const [all, setAll] = useState(false);
  const [open, setOpen] = useState(null);
  const list = c.projects.filter((p) => f === "ALL" || p.category === f);
  const shown = all ? list : list.slice(0, LIMIT);
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHead num={w.num} eyebrow={w.eyebrow} title={w.title} />
      <div
        role="tablist"
        aria-label="Filter works"
        className="noscroll -mx-6 mt-6 flex gap-2 overflow-x-auto px-6"
      >
        {["ALL", ...w.categories].map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={f === k}
            className="chip"
            onClick={() => {
              setF(k);
              setAll(false);
            }}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => {
          const src = coverOf(p);
          return (
            <article key={p.id} className="reveal">
              <button
                type="button"
                onClick={() => setOpen(p)}
                aria-label={`${p.folder ? "Open folder" : "View"}: ${p.title}`}
                className={`group block h-full w-full overflow-hidden rounded-2xl bg-panel2 text-left transition hover:-translate-y-1 ${p.folder ? "shadow-[0_7px_0_-3px_#2c2217,0_14px_0_-6px_#211a11]" : ""}`}
              >
                <span className="relative block aspect-[4/3] overflow-hidden bg-panel">
                  {src ? (
                    <Image
                      src={src}
                      alt={`${p.title} – ${p.category} by ${c.site.name}`}
                      fill
                      sizes="(min-width:1024px) 330px, (min-width:768px) 45vw, 100vw"
                      className="object-contain transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <span className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_40%,#3a2d1a,#1c150e)] font-serif text-5xl italic text-gold/40">
                      {p.title.slice(0, 2)}
                    </span>
                  )}
                  {p.folder && (
                    <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-bg/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-cream backdrop-blur">
                      <Icon n="folder" size={13} />
                      {p.images?.length || 0}
                    </span>
                  )}
                </span>
                <span className="block p-5">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[.2em] text-gold">
                    {p.category}
                  </span>
                  <span className="block font-serif text-3xl leading-tight">
                    {p.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-cream/75">
                    {p.desc}
                  </span>
                  <span className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.1em] text-gold">
                    {p.folder ? w.folderLabel : w.singleLabel}
                    <Icon n="arrowr" size={14} />
                  </span>
                </span>
              </button>
            </article>
          );
        })}
      </div>
      {list.length === 0 && (
        <p className="mt-8 text-center text-sm text-mute">
          No works in this category yet.
        </p>
      )}
      {list.length > LIMIT && (
        <div className="mt-8 text-center">
          <button
            type="button"
            aria-expanded={all}
            onClick={() => setAll(!all)}
            className="pill-d mx-auto"
          >
            {all ? "SHOW LESS" : `${w.moreLabel} (+${list.length - LIMIT})`}
          </button>
        </div>
      )}
      {open && <WorkModal p={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
