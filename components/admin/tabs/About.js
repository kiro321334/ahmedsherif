'use client';
import { Card, Input, Textarea } from '@/components/admin/ui';
import MediaField from '@/components/admin/MediaField';
export default function About({ c, set }) {
  const a = c.about, f = (k, label, extra = {}) => <Input label={label} value={a[k]} onChange={(v) => set(`about.${k}`, v)} {...extra} />;
  return (<div className="grid gap-5"><Card title="About section"><div className="grid grid-cols-3 gap-3">{f('num', 'Number')}<div className="col-span-2">{f('eyebrow', 'Eyebrow')}</div></div>{f('title', 'Title')}
    <Textarea label="Lead paragraph (large)" value={a.lead} onChange={(v) => set('about.lead', v)} rows={4} /><Textarea label="Second paragraph" value={a.text} onChange={(v) => set('about.text', v)} />
    <MediaField label="Small portrait" value={a.photo?.url === '/about.jpg' ? null : a.photo} onChange={(v) => set('about.photo', v || { url: '/about.jpg', type: 'image' })} /><div className="grid grid-cols-3 gap-3">{f('craftValue', 'Value (+6)')}{f('craftLabel', 'Label')}{f('craftSub', 'Sub text')}</div></Card>
    <Card title="Education">{f('eduYears', 'Years • Institute')}{f('eduDegree', 'Degree')}{f('eduSub', 'Details')}</Card></div>);
}
