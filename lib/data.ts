export type Category =
  | "Branding"
  | "Packaging"
  | "Logos"
  | "Social Media"
  | "Print"
  | "Profiles"
  | "AI Art";

const ORDER: Category[] = [
  "Branding",
  "Packaging",
  "Logos",
  "Social Media",
  "Print",
  "Profiles",
  "AI Art",
];
export const NAV = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "skills", label: "Skills", icon: "gem" },
  { id: "work", label: "Work", icon: "grid" },
  { id: "exp", label: "Exp", icon: "scroll" },
  { id: "contact", label: "Contact", icon: "mail" },
] as const;

export const STATS = [
  { value: "6+", label: "Years Exp." },
  { value: "11+", label: "Key Clients" },
  { value: "3", label: "Countries" },
];

export const CAPABILITIES = [
  { title: "Logo Design", sub: "Custom Glyphs & Icons", icon: "pen" },
  { title: "Brand Identity", sub: "Systems & Guidelines", icon: "book" },
  {
    title: "Print & Prepress",
    sub: "Packaging & Foil Finishes",
    icon: "printer",
  },
  { title: "Ad Campaigns", sub: "OOH & Digital Ads", icon: "megaphone" },
  { title: "Social Media", sub: "Editorial Grid Storytelling", icon: "image" },
  { title: "Infographics", sub: "Visual Data Diagrams", icon: "chart" },
  {
    title: "Company Profiles",
    sub: "Editorial Publications",
    icon: "bookText",
  },
  { title: "AI-Driven Art", sub: "Prompt & Generative Visuals", icon: "brain" },
] as const;

export const PROJECTS: {
  slug: string;
  category: Category;
  title: string;
  desc: string;
  alt: string;
}[] = [
  {
    slug: "lorvian-fashion-identity",
    category: "Branding",
    title: "Lorvian Fashion Identity",
    desc: "Luxury burgundy and gold identity for a women's handbag brand, built around a dragonfly emblem and applied across bags, packaging, cards and accessories.",
    alt: "Lorvian women's fashion brand identity with dragonfly logo, burgundy handbag, shopping bag and gold stationery",
  },
  {
    slug: "rustic-smoke-meat",
    category: "Packaging",
    title: "Rustic Smoke Meat",
    desc: "Bold red and black restaurant identity with a bull emblem, plus full packaging: smoker boxes, shopping bags, cup carriers and takeaway boxes.",
    alt: "Rustic Smoke Meat restaurant branding with bull logo and red and black packaging design",
  },
  {
    slug: "logo-collection",
    category: "Logos",
    title: "Logo Collection",
    desc: "A curated set of 12 logos in Arabic and English for clinics, fashion, food, accessories and Egyptian Railways.",
    alt: "Logo collection of 12 brand logos including Lorvian, Rustic, Riva Care, Focus Point and Mora Beauty Care",
  },
  {
    slug: "almeroug-care-complex",
    category: "Branding",
    title: "Almeroug Care Complex",
    desc: "Heart-and-hand identity for a skin and beauty clinic in Saudi Arabia, with signage, uniforms, stationery and social media posts.",
    alt: "Almeroug Care Complex skin and beauty clinic identity with blue and red logo, signage and social media posts",
  },
];
const used = new Set<Category>([
  ...PROJECTS.map((p) => p.category),
  "Social Media",
]);
export const CATEGORIES: ("All" | Category)[] = [
  "All",
  ...ORDER.filter((c) => used.has(c)),
];
export const EXPERIENCE: {
  name: string;
  place: string;
  type: "Freelance" | "On-site";
}[] = [
  { name: "Advertising Company", place: "Jordan", type: "Freelance" },
  { name: "Ital Beauty Medical", place: "Saudi Arabia", type: "Freelance" },
  { name: "Travel Jet, We Travel, Reh", place: "Egypt", type: "Freelance" },
  { name: "Banknote Export Compan", place: "Egypt", type: "Freelance" },
  { name: "Al-Ghad Medical Clinics", place: "Saudi Arabia", type: "Freelance" },
  { name: "Efham IFRS with Samah Z", place: "Egypt", type: "Freelance" },
  { name: "Smile Range Medical", place: "Saudi Arabia", type: "Freelance" },
  { name: "Almerouj Care", place: "Saudi Arabia", type: "Freelance" },
  { name: "Nile Misr Tourism", place: "Egypt", type: "On-site" },
  {
    name: "AlBatel Consulting",
    place: "Media Buyer • Saudi Arabia",
    type: "On-site",
  },
  { name: "Noon International School", place: "Egypt", type: "On-site" },
];
