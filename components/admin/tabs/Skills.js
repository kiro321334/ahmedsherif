'use client';
import { Card, Input, Select, ListEditor } from '@/components/admin/ui';
const ICONS = ['pen', 'book', 'print', 'mega', 'image', 'chart', 'profiles', 'ai', 'palette', 'camera', 'layers', 'star', 'bolt'];
export default function Skills({ c, set }) {
  const s = c.skills;
  return (<Card title="Core capabilities"><div className="grid grid-cols-3 gap-3"><Input label="Number" value={s.num} onChange={(v) => set('skills.num', v)} /><div className="col-span-2"><Input label="Eyebrow" value={s.eyebrow} onChange={(v) => set('skills.eyebrow', v)} /></div></div><Input label="Title" value={s.title} onChange={(v) => set('skills.title', v)} />
    <ListEditor items={s.items} onChange={(v) => set('skills.items', v)} addLabel="Add capability" summary={(i) => i.title} make={() => ({ icon: 'pen', title: 'New skill', sub: '' })}
      render={(i, u) => (<><Input label="Title" value={i.title} onChange={(v) => u({ title: v })} /><Input label="Sub text" value={i.sub} onChange={(v) => u({ sub: v })} /><Select label="Icon" value={i.icon} onChange={(v) => u({ icon: v })} options={ICONS} /></>)} /></Card>);
}
