import { SITE } from "./site";

const ORG_ID = `${SITE.url}/#organization`;
const PERSON_ID = `${SITE.url}/#jessica-barreras`;

function sameAs() {
  return Object.values(SITE.social).filter(Boolean);
}

function postalAddress() {
  // Service-area business: locality + region only, no street address.
  return {
    "@type": "PostalAddress",
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    addressCountry: SITE.country,
  };
}

export function organizationSchema() {
  const node = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    slogan: SITE.tagline,
    address: postalAddress(),
    areaServed: [
      { "@type": "City", name: "Phoenix" },
      { "@type": "City", name: "Scottsdale" },
      { "@type": "City", name: "Tempe" },
      { "@type": "City", name: "Mesa" },
      { "@type": "City", name: "Chandler" },
      { "@type": "AdministrativeArea", name: "Greater Phoenix" },
      { "@type": "State", name: "Arizona" },
    ],
    founder: { "@id": PERSON_ID },
    knowsAbout: [
      "Agenda design",
      "Professional meeting planning",
      "Corporate event management",
      "Leadership gatherings",
      "Professional development events",
      "Curated professional tours",
      "Event series management",
      "Outcome-driven event planning",
    ],
  };
  if (SITE.phone) node.telephone = SITE.phone;
  if (SITE.email) node.email = SITE.email;
  const links = sameAs();
  if (links.length) node.sameAs = links;
  return node;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": ORG_ID },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE.founder.name,
    jobTitle: SITE.founder.title,
    worksFor: { "@id": ORG_ID },
    description:
      "Editor turned events professional with more than 15 years of experience; founder of The Agenda Company.",
  };
}

export function serviceSchema({ name, serviceType, description, slug }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Greater Phoenix" },
      { "@type": "Country", name: "United States" },
    ],
    description,
    url: `${SITE.url}/services/${slug}`,
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE.url}${t.path}`,
    })),
  };
}
