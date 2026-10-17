'use client';
import { Card, Input, Textarea, ListEditor } from '@/components/admin/ui';
import MediaField from '@/components/admin/MediaField';
export default function Hero({ c, set }) {
  const h = c.hero;
  return (<div className="grid gap-5"><Card title="Hero"><MediaField label="Hero image" value={h.image?.url === '/hero.jpg' ? null : h.image} onChange={(v) => set('hero.image', v || { url: '/hero.jpg', type: 'image' })} hint="الأفضل صورة بعرض 1200px أو أكتر. 'Remove' بيرجّع الصورة الافتراضية." />
    <Input label="Small label (gold)" value={h.label} onChange={(v) => set('hero.label', v)} /><Input label="Title – first part" value={h.titleA} onChange={(v) => set('hero.titleA', v)} />
    <div className="grid grid-cols-2 gap-3"><Input label="Title – gold italic word" value={h.titleB} onChange={(v) => set('hero.titleB', v)} /><Input label="Title – ending (e.g. .)" value={h.titleEnd} onChange={(v) => set('hero.titleEnd', v)} /></div>
    <Textarea label="Paragraph" value={h.text} onChange={(v) => set('hero.text', v)} /><div className="grid grid-cols-2 gap-3"><Input label="Button 1" value={h.cta1} onChange={(v) => set('hero.cta1', v)} /><Input label="Button 2" value={h.cta2} onChange={(v) => set('hero.cta2', v)} /></div></Card>
    <Card title="Stats"><ListEditor items={c.stats} onChange={(v) => set('stats', v)} addLabel="Add stat" summary={(s) => `${s.value} — ${s.label}`} make={() => ({ value: '0', label: 'LABEL' })}
      render={(s, u) => (<><Input label="Value" value={s.value} onChange={(v) => u({ value: v })} /><Input label="Label" value={s.label} onChange={(v) => u({ label: v })} /></>)} /></Card></div>);
}
