import { Cormorant_Garamond, Great_Vibes, Lato } from "next/font/google";
import AosProvider from "@/components/AosProvider";
import SiteLayout from "@/components/layout/SiteLayout";
import WebsiteLoader from "@/components/layout/WebsiteLoader";
import GoogleTags, {
  GoogleTagManagerNoscript,
} from "@/components/seo/GoogleTags";
import JsonLd from "@/components/seo/JsonLd";
import ThemeRegistry from "@/components/ThemeRegistry";
import {
  getOrganizationSchema,
  getWebSiteSchema,
} from "@/constants/schema";
import { absoluteUrl, getSiteUrl, pageSeo, siteConfig } from "@/constants/seo";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const scriptFont = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: pageSeo.home.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.founder }, { name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Fashion",
  classification: "Bespoke Fashion Atelier",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: siteConfig.logo, type: "image/png" }],
    apple: [{ url: siteConfig.logo }],
    shortcut: siteConfig.logo,
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: getSiteUrl(),
    siteName: siteConfig.name,
    title: pageSeo.home.title,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.home.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  robots: {
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
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "13.0370584;80.1133052",
    ICBM: "13.0370584, 80.1133052",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang={siteConfig.language}
      className={`${displayFont.variable} ${bodyFont.variable} ${scriptFont.variable}`}
    >
      <body>
        <GoogleTagManagerNoscript />
        <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
        <GoogleTags />
        <ThemeRegistry>
          <WebsiteLoader />
          <AosProvider>
            <SiteLayout>{children}</SiteLayout>
          </AosProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
