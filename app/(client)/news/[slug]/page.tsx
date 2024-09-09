import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import React from "react";
import Image from "next/image";
import ImageGallery from "@/app/components/image-gallery";
import defaultImage from "/public/logo2.png";

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `
      *[_type == "news" && slug.current == "${slug}"][0] {
        title,
        slug,
        publishedAt,
        excerpt,
        body,
        _id,
        thumbnail {
          asset-> {
            url
          }
        },
        author {
          name,
          image {
            asset-> {
              url
            }
          }
        },
        images[] {
          asset-> {
            url
          }
        }
      }
    `;
  const post = await client.fetch(query);
  return post;
}

export const revalidate = 10;

const ArticlePage = async ({ params }: Params) => {
  const post: Post = await getPost(params.slug);

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 bg-white text-black">
      {post?.thumbnail?.asset.url ? (
        <Image
          src={post.thumbnail.asset.url}
          alt={post?.title || "Article thumbnail"}
          width={800}
          height={400}
          className="w-full h-64 object-cover mb-8 rounded-lg"
        />
      ) : (
        <Image
          src={defaultImage}
          alt="Default thumbnail"
          width={800}
          height={400}
          className="w-full h-64 object-cover mb-8 rounded-lg"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center mb-6">
        {post?.author?.image && (
          <Image
            src={post?.author?.image?.asset.url}
            alt={post?.author?.name}
            width={40}
            height={40}
            className="rounded-full mr-3"
          />
        )}
        <div>
          <p className="font-semibold">{post?.author?.name}</p>
          <p className="text-gray-500 text-sm">
            {new Date(post?.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="prose max-w-none">
        <PortableText value={post?.body} />
      </div>

      {post.images && post.images.length > 0 && (
        <div className="my-12">
          <ImageGallery images={post.images} />
        </div>
      )}
    </article>
  );
};

export default ArticlePage;
