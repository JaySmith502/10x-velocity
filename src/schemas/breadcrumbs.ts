import { helmetJsonLdProp } from "react-schemaorg";
import { BreadcrumbList } from "schema-dts";

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return helmetJsonLdProp<BreadcrumbList>({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      ...(index < items.length - 1
        ? { item: `https://10xvelocity.ai${item.path}` }
        : {}),
    })),
  });
}
