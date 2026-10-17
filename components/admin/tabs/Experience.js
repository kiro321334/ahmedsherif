'use client';
import { Card, Input, Select, ListEditor } from '@/components/admin/ui';
export default function Experience({ c, set }) {
  const e = c.experience;
  return (<Card title="Work experience"><div className="grid grid-cols-3 gap-3"><Input label="Number" value={e.num} onChange={(v) => set('experience.num', v)} /><div className="col-span-2"><Input label="Eyebrow" value={e.eyebrow} onChange={(v) => set('experience.eyebrow', v)} /></div></div><Input label="Title" value={e.title} onChange={(v) => set('experience.title', v)} />
    <ListEditor items={e.items} onChange={(v) => set('experience.items', v)} addLabel="Add company" summary={(i) => `${i.name} (${i.type})`} make={() => ({ name: 'New company', place: '', type: 'FREELANCE' })}
      render={(i, u) => (<><Input label="Company" value={i.name} onChange={(v) => u({ name: v })} /><Input label="Country / role" value={i.place} onChange={(v) => u({ place: v })} /><Select label="Type" value={i.type} onChange={(v) => u({ type: v })} options={['FREELANCE', 'ON-SITE', 'REMOTE', 'FULL-TIME', 'PART-TIME']} /></>)} /></Card>);
}
