"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Post } from "../utils/interface";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const NewsItem = ({
  title,
  publishedAt,
  excerpt,
  slug,
  thumbnail,
  isHovered,
  onHover,
  onLeave,
}: Post & {
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  return (
    <div
      className="relative flex-shrink-0 w-96 h-64 mx-4 rounded-xl overflow-hidden group cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Image
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        src={thumbnail?.asset?.url || "/logo-black.png"}
        alt={title}
        width={320}
        height={256}
        quality={100}
      />
      <div
        className={`absolute inset-0 transition-all duration-300 ease-out ${
          isHovered
            ? "bg-black/80"
            : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        }`}
      />

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div
          className={`transition-all duration-300 ease-out ${isHovered ? "translate-y-0" : "translate-y-24"}`}
        >
          <h3 className="font-bold text-lg mb-2 leading-tight line-clamp-2">
            {title}
          </h3>
        </div>

        <div
          className={`transition-all duration-300 ease-out ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <p className="text-sm text-gray-200 mb-4 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
          <Link href={`/news/${slug.current}`}>
            <Button variant="default">Read More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function LatestNews() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const row1X = useTransform(scrollYProgress, [0, 1], [200, -400]);
  const row2X = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  useEffect(() => {
    async function fetchPosts() {
      const query = `
      *[_type == "news"] | order(publishedAt desc)[0...8]  {
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

  const midPoint = Math.ceil(posts.length / 2);
  const firstRowPosts = posts.slice(0, midPoint);
  const secondRowPosts = posts.slice(midPoint);

  return (
    <div
      className="py-32 bg-background w-full overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-5xl font-medium tracking-tighter text-gray-900 mb-6">
            Latest News
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            The latest news and insights from our blog.
          </p>
        </div>
      </div>

      <div className="space-y-8 w-full">
        {/* First Row - Moving Left */}
        <motion.div className="flex w-max -ml-96" style={{ x: row1X }}>
          {firstRowPosts
            .concat(firstRowPosts)
            .concat(firstRowPosts)
            .map((post, index) => (
              <NewsItem
                key={`row1-${post._id}-${index}`}
                {...post}
                isHovered={hoveredIndex === index}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
        </motion.div>

        {/* Second Row - Moving Right */}
        <motion.div className="flex w-max -ml-96" style={{ x: row2X }}>
          {secondRowPosts
            .concat(secondRowPosts)
            .concat(secondRowPosts)
            .map((post, index) => (
              <NewsItem
                key={`row2-${post._id}-${index}`}
                {...post}
                isHovered={hoveredIndex === midPoint + index}
                onHover={() => setHoveredIndex(midPoint + index)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <Link href="/news">
          <motion.button
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All News
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
