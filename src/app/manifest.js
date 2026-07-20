import { siteConfig } from "@/constants/seo";

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.backgroundColor,
    theme_color: siteConfig.themeColor,
    lang: siteConfig.language,
    icons: [
      {
        src: siteConfig.logo,
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
