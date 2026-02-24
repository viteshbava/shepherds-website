import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  if (process.env.IS_PRODUCTION !== "true") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
