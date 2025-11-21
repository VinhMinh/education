import { Metadata } from "next";

export function yoastToMetadata(yoast: any): Metadata {
  if (!yoast) return {};

  return {
    title: yoast.title,
    robots: {
      index: yoast.robots?.index === "index",
      follow: yoast.robots?.follow === "follow",
    },
    openGraph: {
      title: yoast.og_title,
      type: yoast.og_type,
      locale: yoast.og_locale,
      url: yoast.og_url,
      siteName: yoast.og_site_name,
      images: yoast.og_image?.length
        ? yoast.og_image.map((img:any) => ({
            url: img.url,
            width: img.width,
            height: img.height,
            type: img.type,
          }))
        : yoast.thumbnail_url
        ? [{ url: yoast.thumbnail_url }]
        : [],
      modifiedTime: yoast.article_modified_time,
    },
    twitter: {
      card: yoast.twitter_card as "summary" | "summary_large_image" | "app" | "player",
      title: yoast.og_title,
      images: yoast.thumbnail_url ? [yoast.thumbnail_url] : [],
    },
    metadataBase: yoast.og_url ? new URL(yoast.og_url) : undefined,
    alternates: {
      canonical: yoast.og_url|| '',
    }, 
  };
}
