// رفع الصور (في المتصفح): تصغير تلقائي ثم رفع مباشر لـ Cloudinary بتوقيع من السيرفر
import { auth } from '@/lib/firebase';
export const MAX_EDGE = 2000, QUALITY = 0.85, MAX_MB = 10;
export const mb = (n) => (n / 1048576).toFixed(1);
async function headers() { return { 'Content-Type': 'application/json', Authorization: `Bearer ${await auth.currentUser.getIdToken()}` }; }
export async function compressImage(file) {
  if (!file.type.startsWith('image/') || /gif|svg/.test(file.type)) return file;
  try {
    const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' });
    const k = Math.min(1, MAX_EDGE / Math.max(bmp.width, bmp.height));
    const c = document.createElement('canvas'); c.width = Math.round(bmp.width * k); c.height = Math.round(bmp.height * k);
    c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height); bmp.close?.();
    let type = 'image/webp', blob = await new Promise((r) => c.toBlob(r, type, QUALITY));
    if (!blob || blob.type !== type) { type = 'image/jpeg'; blob = await new Promise((r) => c.toBlob(r, type, QUALITY)); }
    if (!blob || blob.size >= file.size) return file;
    return new File([blob], file.name.replace(/\.[^.]+$/, '') + (type === 'image/webp' ? '.webp' : '.jpg'), { type });
  } catch { return file; }
}
export async function uploadImage(file, onProgress) {
  if (!file.type.startsWith('image/')) throw new Error('الملف لازم يكون صورة.');
  const f = await compressImage(file);
  if (f.size > MAX_MB * 1048576) throw new Error(`الصورة ${mb(f.size)}MB — أكبر من ${MAX_MB}MB. صغّرها الأول.`);
  const s = await fetch('/api/sign', { method: 'POST', headers: await headers(), body: JSON.stringify({}) }).then((r) => r.json());
  if (s.error) throw new Error(s.error);
  const fd = new FormData(); fd.append('file', f); fd.append('api_key', s.apiKey); fd.append('timestamp', s.timestamp); fd.append('signature', s.signature); fd.append('folder', s.folder);
  const res = await new Promise((ok, no) => { const x = new XMLHttpRequest(); x.open('POST', `https://api.cloudinary.com/v1_1/${s.cloudName}/image/upload`);
    x.upload.onprogress = (e) => e.lengthComputable && onProgress?.(Math.round((e.loaded / e.total) * 100));
    x.onload = () => { try { const j = JSON.parse(x.responseText); x.status < 300 ? ok(j) : no(new Error(j.error?.message || 'Upload failed')); } catch (er) { no(er); } };
    x.onerror = () => no(new Error('Network error')); x.send(fd); });
  return { media: { url: res.secure_url, publicId: res.public_id, type: 'image', width: res.width, height: res.height }, before: file.size, after: f.size };
}
export async function deleteMedia(m) {
  if (!m?.publicId) return;
  try { await fetch('/api/delete', { method: 'POST', headers: await headers(), body: JSON.stringify({ publicId: m.publicId }) }); } catch {}
}
