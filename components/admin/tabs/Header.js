'use client';
import { Card, Input, Toggle, ListEditor } from '@/components/admin/ui';
import MediaField from '@/components/admin/MediaField';
const SECTIONS = ['#top', '#about', '#skills', '#work', '#experience', '#contact'];
export default function HeaderTab({ c, set }) {
  const h = c.header;
  return (<div className="grid gap-5"><datalist id="sections">{SECTIONS.map((s) => <option key={s} value={s} />)}</datalist>
    <Card title="Brand"><Input label="Brand text (top-left)" value={h.brand} onChange={(v) => set('header.brand', v)} /><MediaField label="Logo image (optional — replaces the text)" value={h.logo} onChange={(v) => set('header.logo', v)} hint="لو رفعت لوجو بيظهر بدل النص. الأفضل PNG شفاف." /></Card>
    <Card title="Header button"><Toggle label="Show button" value={!!h.cta?.show} onChange={(v) => set('header.cta.show', v)} /><Input label="Text" value={h.cta?.label} onChange={(v) => set('header.cta.label', v)} /><Input label="Link" list="sections" value={h.cta?.href} onChange={(v) => set('header.cta.href', v.trim())} /></Card>
    <Card title="Menu links"><p className="text-xs text-mute">اللينك: قسم (#work) أو رابط خارجي (https://…) أو mailto: أو tel:</p>
      <ListEditor items={h.links || []} onChange={(v) => set('header.links', v)} addLabel="Add link" summary={(l) => `${l.label} → ${l.href}`} make={() => ({ label: 'New link', href: '#contact' })}
        render={(l, u) => (<><Input label="Label" value={l.label} onChange={(v) => u({ label: v })} /><Input label="Link" list="sections" value={l.href} onChange={(v) => u({ href: v.trim() })} /></>)} /></Card></div>);
}
