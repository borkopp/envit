"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

interface CaseStudy {
  title: string;
  slug: string;
  description: string;
  thumbnail: {
    asset: {
      url: string;
    };
  };
  date: string;
  primaryLink: {
    type: string;
    url?: string;
    file?: {
      asset: {
        url: string;
      };
    };
  };
}

const CaseStudyItem = ({ study }: { study: CaseStudy }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
    <Image
      className="w-full h-48 object-cover mb-4"
      src={study.thumbnail.asset.url}
      alt={study.title}
      width={400}
      height={200}
    />
    {study.date && (
      <p className="text-white bg-gray-800 px-4 py-2 text-sm w-fit mb-2">
        {study.date}
      </p>
    )}
    <h4 className="text-xl text-black font-semibold mb-2">{study.title}</h4>
    <p className="text-gray-700 mb-4">{study.description}</p>
    <Link
      href="/case-studies"
      className="inline-block bg-green-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-green-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Details
    </Link>
  </div>
);

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      const query = `*[_type == "caseStudy"] | order(_createdAt desc) [0...4] {
        title,
        slug,
        description,
        thumbnail {
          asset-> {
            url
          }
        },
        date,
        primaryLink
      }`;
      const result = await client.fetch(query);
      setCaseStudies(result);
    };

    fetchCaseStudies();
  }, []);

  return (
    <section className="py-16 bg-white" id="case-studies">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">
            Case Studies
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our success stories through these case studies. Each one
            highlights our innovative solutions and the real-world impact
            we&apos;ve made for our clients. To read more{" "}
            <Link href="/case-studies">
              <span className="underline">click here</span>
            </Link>
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {caseStudies.map((study, index) => (
            <CaseStudyItem key={index} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
