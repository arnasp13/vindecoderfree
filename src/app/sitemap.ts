import Data from "../../public/data.json";

const URL = process.env.SITE_URL;

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: URL || "https://www.vindecoderfree.com/",
      priority: 1,
    },
    ...Data.map(({ slug }) => ({
      url: `${URL}/${slug}-vin-decoder`,
      priority: 1,
    })),
  ];
}
