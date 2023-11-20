import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import Head from "next/head";

const authorData = [
  {
    author_short: "AP",
    author: "Arnold Puidokas",
    author_photo: "/images/authors/arnold.jpg",
    author_url: "https://www.linkedin.com/in/puidokas/",
  }
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const postData = getSinglePost(params?.slug);

  return {
    title: postData?.meta?.title,
    description: postData?.meta?.excerpt,
    openGraph: {
      images: [postData?.meta?.feature_image],
    },
  };
}

const extractHeadings = (htmlContent: any) => {
  const headingRegex = /<(h[1-6])[^>]*>(.*?)<\/\1>/g;
  const matches = [];
  let match;

  while ((match = headingRegex.exec(htmlContent))) {
    // @ts-ignore
    const idMatch = match[0]?.match(/id="([^"]*)"/) as any;

    matches.push({
      text: match[2],
      id: idMatch[1],
    });
  }

  return matches;
};

const stripHtmlTags = (htmlString: string): string => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "").trim();
};

const formatDate = (dateStr: string): string =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default async function Home({ params }: { params: { slug: string } }) {
  const post = getSinglePost(params?.slug);
  // const suggestedPosts = await fetchSuggestedPosts(params?.slug);
  const links = extractHeadings(post?.content);
  const author = authorData.filter(
    (item) => item.author_short === post?.meta?.author_short
  )[0];

  const addBlogLd = () => {
    // Make sure that all string values are properly quoted for JSON
    // Non-string values like objects and arrays should not be quoted
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "BlogPosting",
        headline: post?.meta?.title,
        description: post?.meta?.excerpt,
        image: post?.meta?.feature_image,
        author: {
          "@type": "Person",
          name: author?.author,
          url: author?.author_url,
        },
        publisher: {
          "@type": "Organization", // Changed to Organization
          name: "VIN Decoder Free", // The name of your organization
          logo: {
            "@type": "ImageObject",
            url: "https://www.vindecoderfree.com/logo.svg",
          },
        },
        datePublished: post?.meta?.published_at,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.vindecoderfree.com/blog/${post?.slug}`,
        },
      }),
    };
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addBlogLd()}
        />
      </Head>
      <div className="pb-16">
        <Image
          src={post?.meta?.feature_image}
          alt={post?.meta?.feature_image_alt || ""}
          width={1200}
          height={1200}
          className="z-1"
          style={{
            width: "100%",
            minHeight: "200px",
            maxHeight: "450px",
            objectFit: "cover",
          }}
        />
        <div className="shadow-md shadow-neutral-700px-4 px-3 md:px-16 max-w-[1000px] flex flex-col m-auto border rounded-xl bg-neutral-100 mt-[-50px] md:mt-[-151px] opacity-[100%] relative z-99">
          <div className="pt-6 flex gap-1 md:gap-2 text-primary-2 items-center text-sm">
            <Link href="/" className="no-underline text-primary-2">
              Home
            </Link>{" "}
            &gt;{" "}
            <Link
              className="no-underline text-primary-2"
              href={`/blog/${post?.meta?.tag_slug}`}
            >
              {post?.meta?.tag}
            </Link>{" "}
            &gt; <span className="text-neutral-400">{post?.meta?.title} </span>
          </div>

          <div className="py-8">
            <h1 className="font-semibold">{post?.meta?.title}</h1>
            <p className="pt-4 text-neutral-500">{post?.meta?.excerpt}</p>

            <div className="text-left flex justify-between py-12 w-full items-center">
              <div className="flex justify-between gap-2">
                <Image
                  src={author?.author_photo || ""}
                  width={80}
                  height={80}
                  alt={author?.author || ""}
                  className="rounded-[150px] w-[80px] h-[80px]"
                />

                <div className="flex flex-col">
                  <p className="text-xl font-medium">
                    {author?.author}
                    <span className="text-neutral-500 text-md">, Author</span>
                  </p>
                  <Link href={author?.author_url || "/"}>
                    Link to author profile
                  </Link>
                  <span className="font-medium">
                    {formatDate(post?.meta?.published_at)}
                  </span>
                </div>
              </div>
              <button className="bg-primary-1 px-4 rounded-[100px] text-white font-semibold h-[75px] md:h-[50px]">
                {post?.meta?.tag}
              </button>
            </div>

            {links?.length > 0 && (
              <div className="border border-gray-300 bg-neutral-200 w-full mx-auto rounded-lg px-4 mb-4 text-left">
                <h5 className="mt-4 font-semibold text-lg">
                  Table of contents
                </h5>

                {links.map((item, i) => (
                  <div key={i} className="mt-4 mb-4 ">
                    <Link
                      className="flex flex-row text-left text-black no-underline"
                      href={`/blog/${post?.meta?.tag_slug}/${post?.slug}#${item.id}`}
                    >
                      {i + 1}.&nbsp;
                      {stripHtmlTags(item?.text as any)}
                    </Link>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 text-left py-5% md:px-1/5">
              <section className="gh-content gh-canvas">
                <MDXRemote source={post?.content} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "blog"));

  const paths = files.map((filename) => {
    return {
      slug: filename.replace(".mdx", ""),
    };
  });

  return paths;
}

const getSinglePost = (slug: string) => {
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), "blog", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    meta: frontMatter,
    slug,
    content,
  };
};
