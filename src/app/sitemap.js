import { getSiteUrl, pageSeo, siteConfig, absoluteUrl } from "@/constants/seo";
import { workItems } from "@/constants/works";
import { homeLooks } from "@/constants/homeLooks";
import { serviceItems } from "@/constants/content";

export default function sitemap() {
  const pages = Object.values(pageSeo);
  const lastModified = new Date();

  return pages.map((page) => {
    const pageImages =
      page.path === "/works"
        ? workItems.map((item) => absoluteUrl(item.src))
        : page.path === "/"
          ? homeLooks.map((item) => absoluteUrl(item.src))
          : page.path === "/services"
            ? serviceItems.map((item) => absoluteUrl(item.image))
            : page.path === "/aboutus"
              ? [absoluteUrl("/images/founder-tina-balaji.png")]
              : [absoluteUrl(siteConfig.ogImage)];

    return {
      url: `${getSiteUrl()}${page.path === "/" ? "" : page.path}`,
      lastModified,
      changeFrequency:
        page.path === "/" ? "weekly" : page.path === "/works" ? "weekly" : "monthly",
      priority:
        page.path === "/"
          ? 1
          : page.path === "/services" || page.path === "/works"
            ? 0.9
            : 0.8,
      images: [...new Set(pageImages)],
    };
  });
}
