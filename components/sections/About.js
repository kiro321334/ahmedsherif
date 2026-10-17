import Image from 'next/image';
import SectionHead from '@/components/ui/SectionHead';
import Icon from '@/components/ui/Icon';
import { posterSrc } from '@/lib/cloud';
export default function About({ c }) {
  const a = c.about;
  return (<section id="about" className="mx-auto max-w-3xl px-6 py-16"><SectionHead num={a.num} eyebrow={a.eyebrow} title={a.title} />
    <div className="card reveal mt-6 p-6 md:p-8"><p className="text-lg leading-relaxed text-cream">{a.lead}</p><p className="mt-4 text-sm leading-relaxed text-mute">{a.text}</p>
      <div className="mt-6 flex items-center gap-4"><span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl"><Image src={posterSrc(a.photo) || '/about.jpg'} alt={`${c.site.name} portrait`} fill sizes="64px" className="object-cover" /></span>
        <div><p><span className="font-serif text-2xl italic text-gold">{a.craftValue}</span> <span className="text-[11px] font-semibold uppercase tracking-[.1em]">{a.craftLabel}</span></p><p className="text-sm text-cream/85">{a.craftSub}</p></div></div></div>
    <div className="card reveal mt-4 flex gap-4 p-5"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-panel text-gold"><Icon n="cap" size={22} /></span>
      <div><p className="text-[11px] font-semibold uppercase tracking-[.1em] text-gold">{a.eduYears}</p><p className="mt-1 text-lg">{a.eduDegree}</p><p className="mt-1 text-sm text-mute">{a.eduSub}</p></div></div></section>);
}
