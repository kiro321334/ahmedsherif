import Icon from '@/components/ui/Icon';
export default function Contact({ c }) {
  const k = c.contact, s = c.site, socials = (k.socials || []).filter((x) => x.url);
  const wa = `https://wa.me/${s.whatsapp}?text=${encodeURIComponent(k.waMsg || '')}`;
  return (<section id="contact" className="relative overflow-hidden bg-[radial-gradient(ellipse_at_50%_35%,rgba(233,191,114,.12),transparent_65%)] px-6 pt-20 text-center">
    <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[.14em] text-gold"><i className="h-2 w-2 rounded-full bg-gold" />{k.num} • {k.eyebrow}</p>
    <h2 className="reveal mx-auto mt-5 max-w-xl font-serif text-4xl leading-[1.2] md:text-6xl">{k.titleA} {k.titleB} <em className="text-gold">{k.titleC}</em>{k.titleEnd}</h2>
    <p className="mx-auto mt-5 max-w-sm text-base leading-relaxed text-cream/85">{k.text}</p>
    <a href={wa} target="_blank" rel="noopener noreferrer" className="pill-g mx-auto mt-8 flex w-full max-w-md py-5"><Icon n="chat" size={16} />{k.waLabel}</a>
    {(socials.length > 0 || k.showEmail) && <ul className="mt-6 flex justify-center gap-3">{k.showEmail && <li><a href={`mailto:${s.email}`} aria-label="Email" className="grid h-12 w-12 place-items-center rounded-full bg-panel2 text-gold transition hover:bg-[#33281a]"><Icon n="mail" size={18} /></a></li>}
      {socials.map((x, i) => <li key={i}><a href={x.url} target="_blank" rel="noopener noreferrer me" aria-label={x.platform} className="grid h-12 w-12 place-items-center rounded-full bg-panel2 text-gold transition hover:bg-[#33281a]"><Icon n={x.platform} size={18} /></a></li>)}</ul>}
    {k.showEmail && <p className="mt-6 text-[11px] font-medium uppercase tracking-[.15em] text-mute">{k.directLabel} {s.email}</p>}
    <footer className="mt-24 pb-14 text-left"><a href="#top" aria-label="Back to top" className="grid h-12 w-12 place-items-center rounded-full bg-panel2 text-gold"><Icon n="arrowu" size={18} /></a>
      <p className="mt-10 text-center text-[11px] font-semibold uppercase tracking-[.2em]">{k.copyright}</p><p className="mt-2 text-center text-[11px] uppercase tracking-[.2em] text-mute">{k.tagline}</p>
      <p lang="ar" dir="rtl" className="mt-3 text-center text-xs text-mute">أحمد شريف — مصمم جرافيك ومدير فني</p></footer></section>);
}
