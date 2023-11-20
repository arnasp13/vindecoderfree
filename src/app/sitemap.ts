import Data from "../../public/data.json";

const URL = process.env.SITE_URL;

import { MetadataRoute } from "next";
import { getAllPosts } from "./blog/getAllPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    {
      url: URL || "https://www.vindecoderfree.com/",
      priority: 1,
    },
    ...Data.map(({ slug }) => ({
      url: `${URL}/${slug}-vin-decoder`,
      priority: 1,
    })),
    // blog
    {
      url: `${URL}/blog`,
      priority: 0.9,
      changeFrequency: "daily",
    },
    // individual blog posts
    ...posts.map((post) => ({
      url: `${URL}/blog/${post?.slug}`,
      priority: 0.7,
      changeFrequency: "monthly",
    })),
  ];
}
