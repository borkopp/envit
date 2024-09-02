import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  thumbnail: { asset: { url: string } };
  date: string;
  primaryLink: {
    type: "url" | "pdf";
    url?: string;
    file?: { asset: { url: string } };
  };
  secondaryLink?: {
    type: "url" | "pdf";
    url?: string;
    file?: { asset: { url: string } };
  };
}

async function getCaseStudies() {
  const query = `*[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    thumbnail {
      asset-> {
        url
      }
    },
    date,
    primaryLink,
    secondaryLink
  }`;
  return client.fetch(query);
}

export default async function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = await getCaseStudies();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl text-gray-800 text-center font-bold mb-4">
        Case Studies
      </h1>
      <p className="text-gray-600 text-center max-w-2xl my-6 mx-auto">
        Discover our success stories through these case studies. Each one
        highlights our innovative solutions and the real-world impact we&apos;ve
        made for our clients.
      </p>
      <div className="space-y-12">
        {caseStudies.map((study) => (
          <div
            key={study._id}
            className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="md:w-2/5">
              <Image
                src={study?.thumbnail?.asset.url}
                alt={study.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-3/5">
              <h2 className="text-3xl font-semibold mb-6">{study.title}</h2>
              <p className="text-gray-600 text-lg mb-6">{study.date}</p>
              <p className="text-gray-700 text-lg mb-12">{study.description}</p>
              <div className="space-x-4">
                {study.primaryLink && (
                  <Link
                    href={
                      study.primaryLink.type === "url"
                        ? study.primaryLink.url || "#"
                        : study.primaryLink.file?.asset.url || "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white items-center justify-center text-lg px-6 py-3 rounded-lg hover:bg-green-600 transition"
                  >
                    {study.primaryLink.type === "url"
                      ? "View Case Study"
                      : "View PDF"}
                    {study.primaryLink.type === "url" ? (
                      <FaExternalLinkAlt
                        size={16}
                        className="ml-2 inline-block"
                      />
                    ) : (
                      <FaFilePdf className="ml-2 inline-block" />
                    )}
                  </Link>
                )}

                {study.secondaryLink && (
                  <Link
                    href={
                      study.secondaryLink.type === "url"
                        ? study.secondaryLink.url || "#"
                        : study.secondaryLink.file?.asset.url || "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-green-500 border-2 text-gray-800 items-center justify-center text-lg px-6 py-3 rounded-lg hover:bg-green-200 transition"
                  >
                    {study.secondaryLink.type === "url"
                      ? "Additional Resource"
                      : "Additional PDF"}
                    {study.secondaryLink.type === "url" ? (
                      <FaExternalLinkAlt className="ml-2 inline-block" />
                    ) : (
                      <FaFilePdf className="ml-2 inline-block" />
                    )}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
