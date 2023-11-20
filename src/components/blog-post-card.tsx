import { IPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const BlogPostCard: FC<{
  post: IPost;
}> = ({ post }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="no-underline"
    >
      <div className="group max-w-[400px] border hover:shadow-lg rounded-2xl hover:border-primary-1 transition-transform transition-border-color duration-300 ease-in-out hover:-translate-y-1">
        <div className="relative mb-4">
          {" "}
          {/* Added relative positioning here */}
          <Image
            src={post?.meta?.feature_image}
            width={350}
            height={120}
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
            alt={post?.meta?.feature_image_alt || "Blog post image"}
            className="rounded-t-2xl"
          />
          <div className="absolute top-0 right-0 bg-white px-2 py-1 rounded-bl-md">
            {post?.meta?.tag}
          </div>{" "}
          {/* This is the tag */}
        </div>
        <div className="p-6 pt-0">
          <h2 className="leading-relaxed text-2xl font-medium my-2 text-black hover:text-primary-1 group-hover:text-primary-1 text-left">
            {post.meta?.title}
          </h2>
          <p className="mt-4 text-neutral-600 leading-relaxed text-left">
            {post.meta?.excerpt}
          </p>
          <div className="mt-6 mb-4 flex justify-between items-center">
            <p className="text-neutral-700 text-md font-medium text-left">
              {new Date(post.meta?.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
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
    </Link>
  );
};
