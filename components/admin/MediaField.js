'use client';
import { useState } from 'react';
import { thumb } from '@/lib/cloud';
import { uploadImage, deleteMedia, mb } from '@/lib/upload';
export default function MediaField({ label, value, onChange, hint }) {
  const [p, setP] = useState(null); const [err, setErr] = useState(''); const [info, setInfo] = useState('');
  async function pick(e) {
    const f = e.target.files?.[0]; e.target.value = ''; if (!f) return; setErr(''); setInfo(''); setP(0);
    try { const r = await uploadImage(f, setP); if (r.after < r.before) setInfo(`الصورة اتصغّرت: ${mb(r.before)}MB ← ${mb(r.after)}MB`); onChange(r.media); } catch (er) { setErr(er.message); }
    setP(null);
  }
  async function remove() { if (!confirm('Remove this image?')) return; await deleteMedia(value); onChange(null); }
  return (<div className="grid gap-2"><span className="text-[11px] font-bold uppercase tracking-wider text-mute">{label}</span>
    <div className="flex items-center gap-3 rounded-xl border border-dashed border-line bg-bg/60 p-3">
      <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-lg bg-panel2 text-xs text-mute">{value?.url ? <img src={thumb(value.url)} alt="" className="h-full w-full object-cover" /> : 'Empty'}</div>
      <div className="grid flex-1 gap-2"><div className="flex flex-wrap gap-2"><label className="cursor-pointer rounded-lg bg-gold px-3 py-2 text-xs font-extrabold text-[#2a1d08]">{p !== null ? `Uploading ${p}%` : value?.url ? 'Replace' : 'Upload'}<input type="file" accept="image/*" onChange={pick} disabled={p !== null} className="hidden" /></label>
        {value?.url && <button type="button" onClick={remove} className="rounded-lg border border-line px-3 py-2 text-xs font-bold text-red-300">Remove</button>}</div>
        {p !== null && <div className="h-1.5 overflow-hidden rounded-full bg-panel2"><div className="h-full bg-gold transition-all" style={{ width: `${p}%` }} /></div>}</div></div>
    <span className="text-[11px] text-cream/45">{hint || 'الصور بتتصغّر تلقائياً قبل الرفع (حد أقصى 2000px).'}</span>{info && <span className="text-xs font-bold text-emerald-300">{info}</span>}{err && <span className="text-xs font-bold text-red-300">{err}</span>}</div>);
}
