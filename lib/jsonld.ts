import { DESCRIPTION, EMAIL, NAME, SITE_URL } from "./site";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: `${NAME} Portfolio`,
      inLanguage: "en", publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person", "@id": `${SITE_URL}/#person`, name: NAME, url: SITE_URL, email: EMAIL,
      image: `${SITE_URL}/og.jpg`, jobTitle: "Graphic Designer & Art Director", description: DESCRIPTION,
      knowsAbout: ["Brand identity", "Logo design", "Editorial design", "Packaging design", "Ad campaigns", "Infographics", "Generative AI art"],
      alumniOf: { "@type": "CollegeOrUniversity", name: "Higher Institute for Languages" },
      homeLocation: { "@type": "Place", name: "Cairo, Egypt" },
    },
    {
      "@type": "ProfessionalService", "@id": `${SITE_URL}/#service`, name: `${NAME} – Graphic Design & Art Direction`,
      url: SITE_URL, image: `${SITE_URL}/og.jpg`, email: EMAIL, founder: { "@id": `${SITE_URL}/#person` },
      areaServed: ["Egypt", "Saudi Arabia", "Jordan"], address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
      serviceType: ["Brand identity design", "Logo design", "Print & packaging design", "Social media design", "Company profile design"],
    },
  ],
};
