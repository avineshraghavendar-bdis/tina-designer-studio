import { brand, contactInfo, socialLinks, studioLocation } from "@/constants/content";
import { faqItems } from "@/constants/faq";
import { absoluteUrl, siteConfig } from "@/constants/seo";

export function getOrganizationSchema() {
  const contactPoints = [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: contactInfo.email,
      availableLanguage: ["English", "Tamil"],
      areaServed: "IN",
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      url: contactInfo.whatsapp,
      contactOption: "TollFree",
      availableLanguage: ["English", "Tamil"],
      areaServed: "IN",
    },
  ];

  if (contactInfo.phone) {
    contactPoints[0].telephone = contactInfo.phone;
  }

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ClothingStore", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: brand.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: contactInfo.email,
    ...(contactInfo.phone ? { telephone: contactInfo.phone } : {}),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logo),
      width: 512,
      height: 512,
    },
    image: [
      absoluteUrl(siteConfig.ogImage),
      absoluteUrl("/images/founder-tina-balaji.png"),
    ],
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
      jobTitle: "Founder & Fashion Designer",
      worksFor: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
      streetAddress: studioLocation.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: studioLocation.lat,
      longitude: studioLocation.lng,
    },
    hasMap: studioLocation.mapsUrl,
    areaServed: {
      "@type": "City",
      name: "Chennai",
    },
    priceRange: "$$",
    contactPoint: contactPoints,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: socialLinks.map((link) => link.href),
    knowsAbout: [
      "Custom designing",
      "Bridal styling",
      "Boutique stitching",
      "Made-to-measure garments",
      "Fashion consultation",
      "Embroidery",
      "Saree blouse design",
      "Pattu pavadai",
      "Anarkali gowns",
    ],
    slogan: brand.tagline,
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: brand.delivery,
        description: "Fast turnaround on eligible custom garments",
      },
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: siteConfig.language,
    copyrightHolder: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getServiceSchema(services) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} Services`,
    description:
      "Fashion services offered at Tina Designer Studio in Chennai",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${siteConfig.url}/services#${service.slug}`,
        name: service.title,
        description: service.description,
        serviceType: service.title,
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: {
          "@type": "City",
          name: "Chennai",
        },
        image: {
          "@type": "ImageObject",
          url: absoluteUrl(service.image),
          caption: service.imageAlt || service.title,
        },
        url: `${absoluteUrl("/services")}#${service.slug}`,
      },
    })),
  };
}

export function getFAQSchema(items = faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getWorksCollectionSchema(workItems) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tina Designer Studio Portfolio",
    description:
      "Portfolio of bespoke blouses, bridal wear, and designer garments",
    url: absoluteUrl("/works"),
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    mainEntity: {
      "@type": "ImageGallery",
      name: "Tina Designer Studio Works",
      numberOfItems: workItems.length,
      image: workItems.map((item) => ({
        "@type": "ImageObject",
        contentUrl: absoluteUrl(item.src),
        name: item.alt,
        description: item.alt,
        creator: {
          "@id": `${siteConfig.url}/#organization`,
        },
      })),
      itemListElement: workItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.alt,
        item: absoluteUrl(item.src),
      })),
    },
  };
}

export function getAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Tina Designer Studio",
    description:
      "Learn about Tina Balaji and Tina Designer Studio in Chennai",
    url: absoluteUrl("/aboutus"),
    mainEntity: {
      "@type": "Person",
      name: siteConfig.founder,
      jobTitle: "Founder & Fashion Designer",
      worksFor: {
        "@id": `${siteConfig.url}/#organization`,
      },
      image: absoluteUrl("/images/founder-tina-balaji.png"),
    },
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Tina Designer Studio",
    description:
      "Book a fashion consultation or enquiry at Tina Designer Studio Chennai",
    url: absoluteUrl("/contactus"),
    mainEntity: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function getHomeCollectionSchema(looks) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Signature Collection — Tina Designer Studio",
    description:
      "Featured bridal, ethnic, and designer looks from Tina Designer Studio",
    itemListElement: looks.map((look, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: look.title,
      description: look.alt,
      image: absoluteUrl(look.src),
    })),
  };
}
