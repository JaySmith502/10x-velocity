import { helmetJsonLdProp } from "react-schemaorg";
import { BUSINESS_DATA } from "@/schemas/organization";
import type { BlogPost } from "@/data/blogPosts";

/** Convert a display date like "May 15, 2024" to ISO "2024-05-15". */
export function toIsoDate(displayDate: string): string {
  const d = new Date(displayDate);
  if (isNaN(d.getTime())) return displayDate; // already ISO or unparseable — pass through
  return d.toISOString().split("T")[0];
}

/** Canonical URL for a post — slug preferred, numeric id as fallback. */
export function postPath(post: Pick<BlogPost, "id" | "slug">): string {
  return `/blog/${post.slug ?? post.id}`;
}

/** BlogPosting JSON-LD for a blog post, including publish/modified dates. */
export function blogPostingJsonLd(post: BlogPost) {
  const url = `https://10xvelocity.ai${postPath(post)}`;
  return helmetJsonLdProp<any>({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": "https://10xvelocity.ai/#organization" },
    datePublished: toIsoDate(post.date),
    dateModified: toIsoDate(post.dateModified ?? post.date),
    keywords: post.tags.join(", "),
    articleSection: post.category,
    url,
  });
}
