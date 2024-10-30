"use client";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {client} from "@/sanity/lib/client";
import {Button} from "@/components/ui/button";

interface CaseStudy {
  title: string;
  slug: {
    current: string;
  };
  description: string;
  thumbnail: {
    asset: {
      url: string;
    };
  };
  date: string;
}

const CaseStudyItem = ({study}: {study: CaseStudy}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:scale-[0.98] transition-all duration-300">
    <div className="relative h-full flex flex-col">
      <Image className="w-full h-48 object-cover" src={study.thumbnail.asset.url} alt={study.title} width={400} height={200} />
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-sm text-gray-500 mb-2 transition-transform duration-300 group-hover:-translate-y-1">{study.date}</p>
        <h4 className="text-xl font-semibold mb-2 text-gray-800 transition-transform duration-300 group-hover:-translate-y-1">{study.title}</h4>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow transition-transform duration-300 group-hover:-translate-y-2">{study.description}</p>
        <div className="relative h-8 mt-2">
          <Link
            href={`/case-studies`}
            className="absolute text-center bottom-0 left-0 right-0 bg-primary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-primary-dark transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
            Read More
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      const query = `*[_type == "caseStudy"] | order(date desc) [0...3] {
        title,
        "slug": slug.current,
        description,
        thumbnail {
          asset-> {
            url
          }
        },
        date
      }`;
      const result = await client.fetch(query);
      setCaseStudies(result);
    };

    fetchCaseStudies();
  }, []);

  return (
    <section className="py-16 bg-gray-50" id="case-studies">
      <div className="container mx-auto px-4">
        <div className="space-y-4 items-center text-center mb-14">
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Case Studies</h3>
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-4xl">Our Case Studies</h2>
          <p className="text-neutral-500 text-[1rem] max-w-2xl mx-auto my-4 text-center relative">
            Discover our success stories and the real-world impact we&apos;ve made for our clients. To see all the case studies{" "}
            <Link href="/case-studies">
              <span className="underline">click here</span>
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyItem key={study.slug.current} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
