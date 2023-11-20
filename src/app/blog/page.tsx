import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts } from "./getAllPosts";
import { getAllTags } from "./getAllTags";
import Image from "next/image";
import { BlogPostCard } from "@/components/blog-post-card";

export const metadata: Metadata = {
  title: 'VinDecoderFree.com | Blog',
  description: 'Explore insights for both hiring and job hunting in the automotive industry on our Articles & News page.',
  openGraph: {
    images: ['https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80']
  }
}


export default function Home() {
  const posts = getAllPosts();
  const tags = getAllTags();

  const featuredPost = posts?.filter(
    (item) => item?.meta?.featured === true
  )[0];
  const nonFeaturedPosts = posts?.filter((item) => !item?.meta?.featured);

  return (
 <div className="py-12 max-w-[1200px] flex flex-col justify-center items-center m-auto px-4 md:px-0">
      <h1 className="text-4xl font-semibold">Articles & News</h1>
      {/* <p className="text-neutral-500 mt-4">
        Explore insights for both hiring and job hunting in the automotive
        industry on our Articles & News page.
      </p> */}

      <div className="my-12">
        <div className="flex border rounded-2xl flex-col md:flex-row">
          <Image
            src={featuredPost?.meta?.feature_image}
            alt={featuredPost?.meta?.feature_image_alt || ""}
            width={600}
            height={600}
            className="rounded-bl-2xl rounded-tl-2xl"
          />
          <div className="px-8 py-10">
            <Link
              href={`/blog/${featuredPost?.slug}`}
            >
              <h3 className="font-medium text-neutral-800 leading-[1.75em]">
                {featuredPost?.meta?.title}
              </h3>
            </Link>

            <p className="text-neutral-600 mt-4 text-sm leading-[1.75em]">
              {featuredPost?.meta?.excerpt}
            </p>
            <div className="mt-12 flex justify-between items-center">
              <p className="text-neutral-700 text-md font-medium text-left">
                {new Date(featuredPost?.meta?.published_at).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>

              <Image
                src="/icons/white-arrow-right.svg"
                width={40}
                height={40}
                alt=""
                className="bg-primary-1 group-hover:bg-primary-2 rounded-[100px] p-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="flex justify-between w-full flex-col md:flex-row">
          <h2 className="font-medium">Latest posts</h2>
          <div className="flex md:gap-3 gap-1 mt-2">
            {tags?.map((tag) => (
              <Link
                href={`/blog-category/${tag?.tag_slug}`}
                key={tag?.tag_slug}
                className="no-underline text-neutral-600 font-medium hover:bg-secondary-2 py-3 px-4 hover:text-primary-1 rounded-[150px]"
              >
                {tag?.tag}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-4">
          {nonFeaturedPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
