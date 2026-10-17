import { Manrope, Tinos } from 'next/font/google';
import './globals.css';
import { getContent } from '@/lib/content';
import { posterSrc } from '@/lib/cloud';
const mj = Manrope({ subsets: ['latin'], variable: '--font-mj', display: 'swap' });
const tinos = Tinos({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'], variable: '--font-tinos', display: 'swap' });
const URL_ = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';
export async function generateMetadata() {
  const { site, hero } = await getContent();
  const img = posterSrc(hero.image) || '/hero.jpg';
  return {
    metadataBase: new URL(URL_), title: site.title, description: site.description, keywords: site.keywords.split(',').map((k) => k.trim()).filter(Boolean),
    authors: [{ name: site.name }], alternates: { canonical: '/' },
    openGraph: { title: site.title, description: site.description, url: URL_, siteName: site.name, type: 'website', images: [{ url: img, alt: site.name }] },
    twitter: { card: 'summary_large_image', title: site.title, description: site.description, images: [img] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  };
}
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#120e09' };
export default function RootLayout({ children }) {
  return (<html lang="en" className={`${mj.variable} ${tinos.variable}`}><body>{children}</body></html>);
}
