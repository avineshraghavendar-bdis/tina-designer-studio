import ServicesContent from "@/components/services/ServicesContent";
import JsonLd from "@/components/seo/JsonLd";
import { serviceItems } from "@/constants/content";
import {
  getBreadcrumbSchema,
  getServiceSchema,
} from "@/constants/schema";
import { buildPageMetadata, pageSeo } from "@/constants/seo";

export const metadata = buildPageMetadata({
  ...pageSeo.services,
  keywords: pageSeo.services.keywords,
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          getServiceSchema(serviceItems),
        ]}
      />
      <ServicesContent />
    </>
  );
}
