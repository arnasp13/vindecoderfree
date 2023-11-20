import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getAllTags = () => {
  const tags: { tag: string; tag_slug: string }[] = [];
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

  posts.forEach((post) => {
    if (post.meta.tag && !tags.some((tagObj) => tagObj.tag === post.meta.tag)) {
      tags.push({ tag: post.meta.tag, tag_slug: post.meta.tag_slug });
    }
  });

  return tags;
};
