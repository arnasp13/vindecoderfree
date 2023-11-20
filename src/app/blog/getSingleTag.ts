import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getSingleTag = async (tag_slug: string) => {
  const blogDir = "blog";
  const files = fs.readdirSync(path.join(process.cwd(), blogDir));

  for (const filename of files) {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), blogDir, filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(fileContent);
    // If we have a potential match based on file naming convention or other criteria
    // This step can be skipped if there's no such naming pattern or criteria
    if (frontMatter?.tag_slug === tag_slug) {
      return {
        tag: frontMatter.tag,
        tag_slug,
      };
    }
  }

  return {
    tag: null,
    tag_slug,
  };
};
