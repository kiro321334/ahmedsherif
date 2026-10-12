import type { Metadata, Viewport } from "next";
import { Manrope, Tinos } from "next/font/google";
import "./globals.css";
import { DESCRIPTION, KEYWORDS, NAME, SITE_URL, TITLE } from "@/lib/site";
import { jsonLd } from "@/lib/jsonld";

const sans = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const serif = Tinos({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"], display: "swap", variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${NAME}` },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: `${NAME} Portfolio`,
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website", url: SITE_URL, siteName: `${NAME} Portfolio`, title: TITLE, description: DESCRIPTION, locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Ahmed Sherif – Graphic Designer and Art Director" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og.jpg"] },
  category: "design",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#15120e" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
