export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const vercelProduction =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/\/$/, "");
  if (vercelProduction) {
    return vercelProduction.startsWith("http")
      ? vercelProduction
      : `https://${vercelProduction}`;
  }

  const vercelUrl = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (vercelUrl) {
    return vercelUrl.startsWith("http") ? vercelUrl : `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Tina Designer Studio",
  shortName: "Tina Studio",
  tagline: "Where elegance meets individuality",
  description:
    "Tina Designer Studio in Chennai offers bespoke custom designing, bridal styling, boutique stitching, made-to-measure garments, and personalised fashion consultation. Crafted with passion, graced with elegance.",
  locale: "en_IN",
  language: "en",
  founder: "Tina Balaji",
  delivery: "Delivery in 2 Days",
  email: "hello@tinadesignerstudio.com",
  phone: "",
  get url() {
    return getSiteUrl();
  },
  ogImage: "/images/works/work-09.png",
  logo: "/images/tina-logo.png",
  themeColor: "#FFD21F",
  backgroundColor: "#FFFFFF",
  keywords: [
    "Tina Designer Studio",
    "Tina Balaji designer",
    "custom designing Chennai",
    "bridal styling Chennai",
    "boutique stitching Chennai",
    "designer blouse Chennai",
    "saree blouse embroidery Chennai",
    "made to measure garments Chennai",
    "fashion consultation Chennai",
    "bridal wear Chennai",
    "designer studio Chennai",
    "custom ethnic wear Chennai",
    "zardosi embroidery Chennai",
    "pattu pavadai Chennai",
    "anarkali gown Chennai",
    "designer studio near me",
    "2 day delivery boutique Chennai",
  ],
};

export const pageSeo = {
  home: {
    title: "Tina Designer Studio | Bespoke Fashion Atelier in Chennai",
    description:
      "Bespoke fashion atelier in Chennai specialising in custom designing, bridal styling, boutique stitching, and personalised garments — delivery in 2 days.",
    path: "/",
    keywords: [
      "bespoke fashion atelier Chennai",
      "designer studio Chennai",
      "custom clothing Chennai",
      "bridal wear Chennai",
      "delivery in 2 days boutique",
    ],
  },
  services: {
    title: "Fashion Services | Custom Design, Bridal & Boutique Stitching",
    description:
      "Explore Tina Designer Studio services: custom designing, bridal styling, precision measurement, boutique stitching, and fashion consultation in Chennai.",
    path: "/services",
    keywords: [
      "custom designing Chennai",
      "bridal styling services",
      "boutique stitching Chennai",
      "fashion consultation Chennai",
      "measurement tailoring Chennai",
    ],
  },
  works: {
    title: "Our Works | Bridal Blouses, Embroidery & Designer Wear",
    description:
      "Browse Tina Designer Studio’s portfolio of bespoke blouses, bridal ensembles, pattu pavadai, anarkali gowns, and intricate hand embroidery crafted in Chennai.",
    path: "/works",
    keywords: [
      "designer blouse portfolio Chennai",
      "bridal blouse designs",
      "embroidery work gallery",
      "ethnic wear portfolio",
      "Tina Designer Studio works",
    ],
  },
  about: {
    title: "About Us | Tina Balaji & Tina Designer Studio",
    description:
      "Meet Tina Balaji and learn about Tina Designer Studio — a Chennai fashion destination built on craftsmanship, personalised styling, and timeless elegance.",
    path: "/aboutus",
    keywords: [
      "Tina Balaji designer",
      "about Tina Designer Studio",
      "Chennai fashion designer",
      "boutique founder Chennai",
    ],
  },
  contact: {
    title: "Contact Us | Book a Fashion Consultation in Chennai",
    description:
      "Contact Tina Designer Studio in Chennai for bridal styling, custom design consultations, measurements, and boutique stitching enquiries.",
    path: "/contactus",
    keywords: [
      "book fashion consultation Chennai",
      "Tina Designer Studio contact",
      "bridal consultation Chennai",
      "designer studio appointment",
    ],
  },
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized === "/" ? "" : normalized}`;
}

export function canonicalPath(path = "/") {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  keywords,
  noindex = false,
}) {
  const canonical = canonicalPath(path);
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image || siteConfig.ogImage);
  const pageKeywords = keywords
    ? [...keywords, ...siteConfig.keywords.slice(0, 8)]
    : siteConfig.keywords;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: pageKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${title}`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
