import SectionHead from '@/components/ui/SectionHead';
import Icon from '@/components/ui/Icon';
export default function Skills({ c }) {
  const s = c.skills;
  return (<section id="skills" className="bg-panel px-6 py-16"><div className="mx-auto max-w-3xl"><SectionHead num={s.num} eyebrow={s.eyebrow} title={s.title} />
    <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">{s.items.map((it, i) => (
      <article key={i} className="reveal rounded-xl bg-panel2 p-4"><Icon n={it.icon} size={22} className="text-gold" /><h3 className="mt-3 text-lg leading-snug">{it.title}</h3><p className="mt-2 text-[11px] font-medium uppercase leading-relaxed tracking-[.1em] text-mute">{it.sub}</p></article>))}</div></div></section>);
}
