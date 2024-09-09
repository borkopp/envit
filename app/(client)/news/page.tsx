import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Post } from "../../utils/interface";
import { Metadata } from "next";

async function getAllPosts() {
  const query = `
  *[_type == "news"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    thumbnail {
      asset-> {
        url
      }
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 10;
export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
    },
  };
}
export default async function NewsPage() {
  const posts: Post[] = await getAllPosts();

  const NewsItem = ({ title, publishedAt, excerpt, slug, thumbnail }: Post) => (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <Link href={`/news/${slug.current}`}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
          <Image
            className="w-full h-48 object-cover"
            src={thumbnail?.asset?.url || "/logo2.png"}
            alt={title}
            width={400}
            height={200}
            quality={100}
          />
          <div className="p-6">
            <p className="text-gray-600 text-sm mb-2">
              {new Date(publishedAt).toLocaleDateString()}
            </p>
            <h4 className="text-xl text-black font-semibold mb-2">{title}</h4>
            <p className="text-gray-700 mb-4">{excerpt}</p>
            <span className="inline-block bg-green-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-green-600 transition duration-300">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-center mb-6">News</h1>
        <p className="text-gray-600 text-center max-w-2xl mb-10 mx-auto">
          Stay up to date with the latest news and announcements from our
          company. Learn more about our recent projects, company news and
          industry insights.
        </p>
        <div className="flex flex-wrap -mx-4">
          {posts?.length > 0 &&
            posts?.map((post) => <NewsItem key={post._id} {...post} />)}
        </div>
      </div>
    </section>
  );
}
