# Ahmed Sherif — Portfolio + لوحة التحكم

## التشغيل
```bash
npm i
copy .env.example .env.local      # (Windows)   أو: cp .env.example .env.local
npm run dev
```
الموقع: http://localhost:3000 — لوحة التحكم: http://localhost:3000/admin
(الموقع بيشتغل بمحتوى افتراضي حتى قبل ربط Firebase و Cloudinary.)

## 1) Firebase (تسجيل الدخول + حفظ المحتوى) — مجاني
> يفضّل **مشروع Firebase منفصل** للعميل ده (مش نفس مشروع عميل تاني).
1. https://console.firebase.google.com ← Add project.
2. **Authentication** ← Sign-in method ← فعّل **Email/Password** ← Users ← **Add user** (إيميل وباسورد العميل) ← انسخ **User UID** → ده `ADMIN_UID`.
3. **Firestore Database** ← Create database (Production mode، اللوكيشن اختار فرانكفورت أو أي منطقة أوروبية).
4. Firestore ← **Rules** ← الصق ده (بدّل `PASTE_ADMIN_UID`) ← Publish:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /site/{doc} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == 'PASTE_ADMIN_UID';
    }
  }
}
```
5. Project settings ← Your apps ← Web (</>) ← انسخ apiKey / authDomain / projectId / appId في `.env.local`.

## 2) Cloudinary (رفع الصور) — مجاني
1. https://cloudinary.com ← Sign up (Free).
2. Dashboard ← انسخ **Cloud name** و **API Key** و **API Secret** في `.env.local`.
> الصور بتتصغّر في المتصفح قبل الرفع (حد أقصى 2000px) وبتتقدّم من CDN بصيغة محسّنة (WebP/AVIF) وبمقاس يناسب الشاشة.
> الرفع بيتم مباشرة من الداشبورد لـ Cloudinary بتوقيع من السيرفر، والـ API Secret عمره ما بيوصل للمتصفح.

## 3) النشر على Vercel
أضف كل المتغيرات من `.env.example` في Vercel ← Settings ← Environment Variables، و `NEXT_PUBLIC_SITE_URL` = رابط الموقع النهائي، وبعدين Deploy.
ويفضّل دومين خاص بدل `vercel.app`.

## الاستخدام
- `/admin` ← تسجيل دخول ← عدّل أي قسم ← **Save & publish** والموقع بيتحدّث فوراً.
- **Works:** كل عمل إما صورة واحدة، أو **فولدر** (فعّل Folder) بترفع فيه عدة صور وبيتفتح في مودل.
- التصنيفات (BRANDING, PACKAGING, LOGOS, SOCIAL MEDIA) بتتعدّل من تبويب Works.
- كل النصوص والأقسام والروابط والـ SEO بتتعدّل من الداشبورد.
