'use client';
import { Card, Input, Textarea, Select, Toggle, StringList, ListEditor } from '@/components/admin/ui';
import MediaField from '@/components/admin/MediaField';
import GalleryField from '@/components/admin/GalleryField';
const rid = () => Math.random().toString(36).slice(2, 9);
export default function Work({ c, set }) {
  const w = c.work;
  return (<div className="grid gap-5"><Card title="Section texts"><div className="grid grid-cols-3 gap-3"><Input label="Number" value={w.num} onChange={(v) => set('work.num', v)} /><div className="col-span-2"><Input label="Eyebrow" value={w.eyebrow} onChange={(v) => set('work.eyebrow', v)} /></div></div><Input label="Title" value={w.title} onChange={(v) => set('work.title', v)} />
    <div className="grid grid-cols-3 gap-3"><Input label="Single-work link text" value={w.singleLabel} onChange={(v) => set('work.singleLabel', v)} /><Input label="Folder link text" value={w.folderLabel} onChange={(v) => set('work.folderLabel', v)} /><Input label="'More' button" value={w.moreLabel} onChange={(v) => set('work.moreLabel', v)} /></div>
    <StringList label="Categories (filter buttons)" items={w.categories} onChange={(v) => set('work.categories', v)} placeholder="e.g. BRANDING" />
    <p className="text-xs text-mute">لو غيّرت اسم تصنيف، افتح الأعمال اللي كانت فيه واختار التصنيف الجديد.</p></Card>
    <Card title="Works"><p className="text-xs text-mute">كل عمل إما <b>صورة واحدة</b> (بتتفتح كبيرة) أو <b>فولدر</b> فيه عدة صور (بيتفتح في مودل). فعّل Folder للفولدرات.</p>
      <ListEditor items={c.projects} onChange={(v) => set('projects', v)} addLabel="Add work" summary={(p) => `${p.folder ? '📁 ' : ''}${p.title} — ${p.category}`}
        make={() => ({ id: rid(), category: w.categories[0] || '', title: 'New work', desc: '', folder: false, image: null, cover: null, images: [] })}
        render={(p, u) => (<><Input label="Title" value={p.title} onChange={(v) => u({ title: v })} /><Textarea label="Description" hint="بيظهر تحت العنوان (وللفولدر مبيظهرش جوه المودل)" value={p.desc} onChange={(v) => u({ desc: v })} />
          <Select label="Category" value={p.category} onChange={(v) => u({ category: v })} options={w.categories.includes(p.category) ? w.categories : [p.category, ...w.categories]} />
          <Toggle label="Folder (opens a gallery of images)" value={p.folder} onChange={(v) => u({ folder: v })} />
          {p.folder ? (<><GalleryField label="Images in this folder" items={p.images} onChange={(v) => u({ images: v })} /><MediaField label="Folder cover (optional — default: first image)" value={p.cover} onChange={(v) => u({ cover: v })} /></>)
            : <MediaField label="Image" value={p.image} onChange={(v) => u({ image: v })} />}</>)} /></Card></div>);
}
