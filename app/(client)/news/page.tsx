"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Post } from "../../utils/interface";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SortAsc } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    async function fetchPosts() {
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
      setPosts(data);
    }
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    } else {
      return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    }
  });

  const NewsItem = ({ title, publishedAt, excerpt, slug, thumbnail }: Post) => (
    <motion.div 
      className="w-full md:w-1/2 lg:w-1/3 p-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/news/${slug.current}`}>
        <motion.div 
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            className="w-full h-48 object-cover"
            src={thumbnail?.asset?.url || "/logo-resoil.png"}
            alt={title}
            width={400}
            height={200}
            quality={100}
          />
          <motion.div 
            className="p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-600 text-sm mb-2">
              {new Date(publishedAt).toLocaleDateString()}
            </p>
            <h4 className="text-xl text-black font-semibold mb-2">{title}</h4>
            <p className="text-gray-700 mb-4">{excerpt}</p>
            <motion.span 
              className="inline-block bg-primary text-white py-2 px-4 rounded-full text-sm font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: "#22c55e" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Read More
            </motion.span>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 items-center text-center mb-14">
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary">News</h3>
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-4xl">Our News & Updates</h2>
          <p className="text-neutral-500 text-[1rem] mx-auto my-4 text-center relative max-w-2xl">
            Stay up to date with the latest news and announcements from our
            company. Learn more about our recent projects, company news and
            industry insights.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative mb-4 md:mb-0 md:mr-4 max-w-xs">
            <Input
              type="text"
              placeholder="Search news..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={18} />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] border">
              <SortAsc className={`mr-2 text-gray-600 transition-transform duration-300 ${sortBy === 'oldest' ? 'rotate-180' : ''}`} size={18} />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-wrap -mx-4">
          {sortedPosts.length > 0 ?
            sortedPosts.map((post) => <NewsItem key={post._id} {...post} />) :
            <p className="text-center w-full text-gray-500">No news items found.</p>
          }
        </div>
      </div>
    </section>
  );
}
