"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Post } from "../../utils/interface";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SortAsc } from "lucide-react";

const NewsItem = ({ title, publishedAt, excerpt, slug, thumbnail }: Post) => (
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:scale-[0.98] transition-all duration-300 h-full flex flex-col">
      <Image
        className="w-full h-56 object-cover"
        src={thumbnail?.asset?.url || "/logo-resoil.png"}
        alt={title}
        width={400}
        height={200}
        quality={100}
      />
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-sm text-gray-500 mb-2 transition-transform duration-300 group-hover:-translate-y-1">
          {new Date(publishedAt).toLocaleDateString()}
        </p>
        <h4 className="text-xl font-semibold mb-2 text-gray-800 transition-transform duration-300 group-hover:-translate-y-1">
          {title}
        </h4>
        <p className="text-gray-600 mb-4 flex-grow transition-transform duration-300 group-hover:-translate-y-2">
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
