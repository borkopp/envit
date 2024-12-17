"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Post } from "../utils/interface";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsItem = ({
  title,
  publishedAt,
  excerpt,
  slug,
  thumbnail,
  aosDelay,
}: Post & { aosDelay: number }) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8" data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:scale-[0.98] transition-all duration-300 h-full flex flex-col">
        <Image
          className="w-full h-48 object-cover"
          src={thumbnail?.asset?.url || "/logo2.png"}
          alt={title}
          width={400}
          height={200}
          quality={100}
        />
        <div className="p-6 flex-grow flex flex-col">
          <p className="text-sm text-gray-500 mb-2 transition-transform duration-300 group-hover:-translate-y-1">
            {formattedDate}
          </p>
          <h4 className="text-xl font-semibold mb-2 text-gray-800 transition-transform duration-300 group-hover:-translate-y-1">
            {title}
          </h4>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow transition-transform duration-300 group-hover:-translate-y-2">
            {excerpt}
          </p>
          <div className="relative h-8 mt-2">
            <Link href={`/news/${slug.current}`}>
              <span className="absolute bottom-0 left-0 right-0 bg-primary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-primary-dark transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 text-center">
                Read More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LatestNews() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const query = `
      *[_type == "news"] | order(publishedAt desc)[0...4]  {
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
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <section className="py-16 bg-gray-100" id="blog">
      <div className="container mx-auto px-4">
        <div className="space-y-4 items-center text-center mb-14">
          <h3 data-aos="fade-up" className="text-sm font-bold uppercase tracking-wide text-primary">
            News
          </h3>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-semibold tracking-tighter sm:text-4xl">
            Latest News
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-neutral-500 text-[1rem] mx-auto my-4 text-center relative">
            The latest news and insights from our blog. To see all the news{" "}
            <Link href="/news">
              <span className="underline">click here</span>
            </Link>
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {posts?.length > 0 &&
            posts?.map((post, index) => (
              <NewsItem key={post._id} {...post} aosDelay={index * 100} />
            ))}
        </div>
      </div>
    </section>
  );
}
