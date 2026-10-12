import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section aria-label="Career highlights" className="bg-band py-6">
      <dl className="grid grid-cols-3 divide-x divide-white/10 text-center">
        {STATS.map((s) => (
          <div key={s.label} className="px-2 py-1">
            <dd className="font-serif text-[32px] italic leading-none text-gold">{s.value}</dd>
            <dt className="mt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-cream/80">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
