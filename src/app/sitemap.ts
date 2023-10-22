// app/sitemap.xml/route.js

import Data from "../../data.json";

const URL = process.env.SITE_URL;

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: URL || "https://www.vindecoderfree.com/",
      priority: 1,
    },
    ...Data.map(({ slug }) => ({ url: `${URL}/${slug}`, priority: 1 })),
  ];
}
