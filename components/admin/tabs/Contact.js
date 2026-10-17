'use client';
import { Card, Input, Textarea, Toggle, Select, ListEditor } from '@/components/admin/ui';
const PLATFORMS = ['instagram', 'behance', 'linkedin', 'facebook', 'tiktok', 'youtube', 'x', 'telegram', 'pinterest', 'link'];
export default function Contact({ c, set }) {
  const k = c.contact, f = (key, label, extra = {}) => <Input label={label} value={k[key]} onChange={(v) => set(`contact.${key}`, v)} {...extra} />;
  const wa = c.site.whatsapp ? `https://wa.me/${c.site.whatsapp}?text=${encodeURIComponent(k.waMsg || '')}` : '';
  return (<div className="grid gap-5"><Card title="Contact section"><div className="grid grid-cols-3 gap-3">{f('num', 'Number')}<div className="col-span-2">{f('eyebrow', 'Eyebrow')}</div></div>
    {f('titleA', 'Title – line 1')}<div className="grid grid-cols-3 gap-3">{f('titleB', 'Line 2')}{f('titleC', 'Gold italic word')}{f('titleEnd', 'Ending')}</div>
    <Textarea label="Paragraph" value={k.text} onChange={(v) => set('contact.text', v)} /></Card>
    <Card title="WhatsApp & email"><p className="text-xs text-mute">رقم الواتساب والإيميل بيتعدّلوا من تبويب General & SEO.</p>{f('waLabel', 'WhatsApp button text')}<Textarea label="Pre-filled WhatsApp message" value={k.waMsg} onChange={(v) => set('contact.waMsg', v)} rows={2} />
      {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="w-fit rounded-lg border border-line px-3 py-2 text-xs font-bold text-gold">Test WhatsApp link ↗</a>}
      <Toggle label="Show email icon + direct email line" value={k.showEmail} onChange={(v) => set('contact.showEmail', v)} />{f('directLabel', 'Direct email label')}</Card>
    <Card title="Social links"><ListEditor items={k.socials || []} onChange={(v) => set('contact.socials', v)} addLabel="Add social link" summary={(x) => `${x.platform} — ${x.url || 'empty'}`} make={() => ({ platform: 'instagram', url: 'https://' })}
      render={(x, u) => (<><Select label="Platform" value={x.platform} onChange={(v) => u({ platform: v })} options={PLATFORMS} /><Input label="URL (https://…)" value={x.url} onChange={(v) => u({ url: v.trim() })} /></>)} /></Card>
    <Card title="Footer">{f('copyright', 'Copyright line')}{f('tagline', 'Tagline')}</Card></div>);
}
