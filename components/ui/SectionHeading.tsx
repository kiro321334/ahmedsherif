export default function SectionHeading({ id, no, label, title }: { id: string; no: string; label: string; title: string }) {
  return (
    <header>
      <p className="flex items-baseline gap-3">
        <span className="font-serif text-[22px] italic text-gold">{no}</span>
        <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">{label}</span>
      </p>
      <h2 id={id} className="pl-8 font-serif text-[26px] leading-tight text-cream">{title}</h2>
    </header>
  );
}
