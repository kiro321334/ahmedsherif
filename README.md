# Ahmed Sherif – Portfolio (Next.js 14 + Tailwind)

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL and NEXT_PUBLIC_WHATSAPP
npm run dev
npm run build && npm start
```

- Each section lives in `components/sections/*`; content in `lib/data.ts`; SEO constants in `lib/site.ts`, schema in `lib/jsonld.ts`.
- `app/sitemap.ts` → /sitemap.xml, `app/robots.ts` → /robots.txt, `app/manifest.ts` → web manifest.
- Favicon: `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` (from the client photo).
- Replace `public/images/projects/*.webp` with the original high-res covers (same filenames).
