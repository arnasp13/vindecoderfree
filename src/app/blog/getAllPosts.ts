import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IPost } from "@/types";

export const getAllPosts = () => {
  const blogDir = "blog";
  const files = fs.readdirSync(path.join(process.cwd(), blogDir));

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), blogDir, filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return posts as IPost[];
};
