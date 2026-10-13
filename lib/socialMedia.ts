// lib/socialMedia.ts
// لو ضفت صور أو فولدر جديد، عدّل الأرقام هنا بس.
const folder = (name: string, count: number) => ({
  name,
  cover: `/socialMedia/${name}/cover.webp`,
  images: Array.from({ length: count }, (_, i) => `/socialMedia/${name}/${i + 1}.webp`),
});

export const SOCIAL_FOLDERS = [
  folder("almeroug_care", 22),
  folder("almoroug_care_2", 20),
  folder("almoroug_care_3", 20),
  folder("nilemisr", 15),
];

export type SocialFolder = (typeof SOCIAL_FOLDERS)[number];