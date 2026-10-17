import SectionHead from "@/components/ui/SectionHead";
export default function Experience({ c }) {
  const e = c.experience;
  return (
    <section id="experience" className="bg-panel px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <SectionHead num={e.num} eyebrow={e.eyebrow} title={e.title} />
        <ul className="mt-6 grid grid-cols-1 gap-3">
          {e.items.map((it, i) => (
            <li
              key={i}
              className="reveal flex min-w-0 items-center justify-between gap-3 rounded-xl bg-bg/60 p-4"
            >
              <div className="min-w-0">
                <p className="truncate text-lg">{it.name}</p>
                <p className="text-sm text-mute">{it.place}</p>
              </div>
              <span
                className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.1em] text-gold ${/on-?site/i.test(it.type) ? "bg-[#4a3a14]" : "bg-panel2"}`}
              >
                {it.type}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
