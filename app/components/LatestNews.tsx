import Image from "next/image";
import Link from "next/link";
import {client} from "@/sanity/lib/client";
import {Post} from "../utils/interface";

async function getPosts() {
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
  return data;
}
export const revalidate = 10;
export const headers = {
  "Cache-Control": "no-store",
};

export default async function LatestNews() {
  const posts: Post[] = await getPosts();

  const NewsItem = ({title, publishedAt, excerpt, slug, thumbnail, aosdelay}: Post & {aosdelay: number}) => {
    const formattedDate = new Date(publishedAt).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return (
      <div data-aos="fade-up" data-aos-delay={aosdelay} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <Image
          className="w-full h-48 object-cover mb-4"
          src={thumbnail?.asset?.url || "/logo-resoil.png"}
          alt={title}
          width={400}
          height={200}
          quality={100}
        />
        <p className="text-white bg-gray-800 px-4 py-2 text-sm w-fit mb-2">{formattedDate}</p>
        <h4 className="text-xl text-black font-semibold mb-2">{title}</h4>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <Link href={`/news/${slug.current}`}>
          <span className="inline-block bg-primary text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-primary-hover transition duration-300">
            Read More
          </span>
        </Link>
      </div>
    );
  };
  return (
    <section className="py-16 bg-gray-100" id="blog">
      <div className="container mx-auto px-4">
      <div className="space-y-4 items-center text-center mb-14">
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary">News</h3>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl">Latest News</h2>
          <p className="text-neutral-500 text-[1rem]  mx-auto my-4 text-center relative">
            The latest news and insights from our blog. To see all the news{" "}
            <Link href="/news">
              <span className="underline">click here</span>
            </Link>
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {posts?.length > 0 && posts?.map((post, index) => <NewsItem key={post._id} {...post} aosdelay={index * 100} />)}
        </div>
      </div>
    </section>
  );
}
