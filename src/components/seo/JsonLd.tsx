import {
  PERSON_ALTERNATE_NAMES,
  PERSON_EMAIL,
  PERSON_NAME,
  PERSON_PHONE,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_PROFILES,
  absoluteUrl,
} from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: PERSON_NAME,
      alternateName: PERSON_ALTERNATE_NAMES,
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON_NAME,
      alternateName: PERSON_ALTERNATE_NAMES,
      url: SITE_URL,
      image: absoluteUrl("/og-image.jpg"),
      jobTitle: "Full-Stack Developer",
      description: SITE_DESCRIPTION,
      email: `mailto:${PERSON_EMAIL}`,
      telephone: PERSON_PHONE,
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
      sameAs: SOCIAL_PROFILES,
      knowsAbout: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "Full-Stack Development",
        "AI Integration",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: SITE_TITLE,
      url: SITE_URL,
      image: absoluteUrl("/og-image.jpg"),
      email: PERSON_EMAIL,
      telephone: PERSON_PHONE,
      areaServed: "Worldwide",
      founder: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
