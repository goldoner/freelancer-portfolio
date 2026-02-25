import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aleksandr-grek.netlify.app",
      lastModified: new Date("2026-02-21"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
