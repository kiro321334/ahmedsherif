export default function Stats({ c }) {
  return (<section className="bg-panel"><dl className="reveal mx-auto grid max-w-3xl grid-cols-3 divide-x divide-line px-4 py-8 text-center">{c.stats.map((s, i) => (
    <div key={i} className="px-2"><dt className="font-serif text-4xl italic text-gold md:text-5xl">{s.value}</dt><dd className="mt-2 text-[11px] font-medium uppercase tracking-[.14em] text-cream/85">{s.label}</dd></div>))}</dl></section>);
}
