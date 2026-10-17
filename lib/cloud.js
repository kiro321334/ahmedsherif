export const isCld = (u) =>
  typeof u === "string" &&
  u.includes("res.cloudinary.com") &&
  u.includes("/upload/");
export const posterSrc = (m) => m?.url || null;
// صورة مصغّرة خفيفة لعرضها في الداشبورد
export const thumb = (u) =>
  isCld(u) ? u.replace("/upload/", "/upload/w_320,c_limit,q_auto/") : u;
