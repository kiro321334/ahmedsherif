'use client';
import { useState } from 'react';
import { thumb } from '@/lib/cloud';
import { uploadImage, deleteMedia } from '@/lib/upload';
// رفع عدة صور مرة واحدة لفولدر (ترتيب وحذف)
export default function GalleryField({ label, items = [], onChange }) {
  const [st, setSt] = useState(null); const [err, setErr] = useState('');
  async function pick(e) {
    const files = [...(e.target.files || [])]; e.target.value = ''; if (!files.length) return; setErr(''); let list = [...items];
    for (let i = 0; i < files.length; i++) {
      setSt(`Uploading ${i + 1}/${files.length}…`);
      try { const r = await uploadImage(files[i], (pc) => setSt(`Uploading ${i + 1}/${files.length} — ${pc}%`)); list = [...list, r.media]; onChange(list); } catch (er) { setErr(`${files[i].name}: ${er.message}`); }
    }
    setSt(null);
  }
  const mv = (i, d) => { const j = i + d; if (j < 0 || j >= items.length) return; const a = [...items]; [a[i], a[j]] = [a[j], a[i]]; onChange(a); };
  const del = async (i) => { if (!confirm('Delete this image?')) return; await deleteMedia(items[i]); onChange(items.filter((_, k) => k !== i)); };
  return (<div className="grid gap-3"><span className="text-[11px] font-bold uppercase tracking-wider text-mute">{label} ({items.length})</span>
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">{items.map((m, i) => (<div key={m.url + i} className="grid gap-1"><div className="aspect-square overflow-hidden rounded-lg bg-panel2"><img src={thumb(m.url)} alt="" className="h-full w-full object-cover" /></div>
      <div className="flex justify-between gap-1 text-xs"><button type="button" onClick={() => mv(i, -1)} className="rounded border border-line px-2 py-1" aria-label="Move earlier">←</button><button type="button" onClick={() => mv(i, 1)} className="rounded border border-line px-2 py-1" aria-label="Move later">→</button><button type="button" onClick={() => del(i)} className="rounded border border-line px-2 py-1 text-red-300" aria-label="Delete">🗑</button></div></div>))}</div>
    <label className="w-fit cursor-pointer rounded-lg bg-gold px-4 py-2.5 text-xs font-extrabold text-[#2a1d08]">{st || '+ Upload images (multiple)'}<input type="file" accept="image/*" multiple onChange={pick} disabled={!!st} className="hidden" /></label>
    {err && <span className="text-xs font-bold text-red-300">{err}</span>}</div>);
}
