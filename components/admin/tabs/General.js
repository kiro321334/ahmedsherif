'use client';
import { Card, Input, Textarea } from '@/components/admin/ui';
export default function General({ c, set }) {
  const s = c.site;
  return (<div className="grid gap-5"><Card title="SEO"><Input label="Page title" hint="مهم لجوجل — يفضل 50-65 حرف" value={s.title} onChange={(v) => set('site.title', v)} />
    <Textarea label="Meta description" hint="مهم لجوجل — يفضل 140-160 حرف" value={s.description} onChange={(v) => set('site.description', v)} /><Textarea label="Keywords (comma separated)" hint="عربي وإنجليزي، افصل بينهم بفاصلة" value={s.keywords} onChange={(v) => set('site.keywords', v)} rows={4} /></Card>
    <Card title="Identity & contact"><Input label="Name" value={s.name} onChange={(v) => set('site.name', v)} /><Input label="Location" value={s.location} onChange={(v) => set('site.location', v)} />
      <Input label="WhatsApp number (digits only, with country code)" hint="مثال: 201151056550" value={s.whatsapp} onChange={(v) => set('site.whatsapp', v.replace(/\D/g, ''))} /><Input label="Email" type="email" value={s.email} onChange={(v) => set('site.email', v)} /></Card></div>);
}
