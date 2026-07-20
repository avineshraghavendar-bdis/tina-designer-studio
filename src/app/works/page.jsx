import WorksGallery from "@/components/works/WorksGallery";
import JsonLd from "@/components/seo/JsonLd";
import {
  getBreadcrumbSchema,
  getWorksCollectionSchema,
} from "@/constants/schema";
import { buildPageMetadata, pageSeo } from "@/constants/seo";
import { workItems } from "@/constants/works";

export const metadata = buildPageMetadata({
  ...pageSeo.works,
  image: "/images/works/work-01.png",
  keywords: pageSeo.works.keywords,
});

export default function WorksPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Works", path: "/works" },
          ]),
          getWorksCollectionSchema(workItems),
        ]}
      />
      <WorksGallery />
    </>
  );
}
