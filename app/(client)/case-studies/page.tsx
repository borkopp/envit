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
    fileUrl?: string;
  };
  secondaryLink?: {
    type: "url" | "pdf";
    url?: string;
    fileUrl?: string;
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
    primaryLink {
      type,
      url,
      "fileUrl": file.asset->url
    },
    secondaryLink {
      type,
      url,
      "fileUrl": file.asset->url
    }
  }`;
  return client.fetch(query);
}

export default async function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = await getCaseStudies();

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Case Studies
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mb-10 mx-auto">
          Discover our success stories through these case studies. Each one
          highlights our innovative solutions and the real-world impact
          we&apos;ve made for our clients.
        </p>
        <div className="max-w-5xl mx-auto space-y-12">
          {caseStudies.map((study) => (
            <div
              key={study._id}
              className="flex flex-col lg:flex-row gap-8 bg-white p-4 sm:p-8 rounded-lg shadow-lg"
            >
              <div className="lg:w-1/2">
                <Image
                  src={study?.thumbnail?.asset.url}
                  alt={study.title}
                  layout="responsive"
                  width={1000}
                  height={600}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-semibold mb-6">{study.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{study.date}</p>
                <p className="text-gray-700 text-lg mb-12">
                  {study.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {study.primaryLink && (
                    <Link
                      href={
                        study.primaryLink.type === "url"
                          ? study.primaryLink.url || "#"
                          : study.primaryLink.fileUrl || "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white flex items-center justify-center text-lg px-6 py-3 rounded-lg hover:bg-green-600 transition w-full sm:w-auto"
                    >
                      {study.primaryLink.type === "url"
                        ? "View Case Study"
                        : "View PDF"}
                      {study.primaryLink.type === "url" ? (
                        <FaExternalLinkAlt size={16} className="ml-2" />
                      ) : (
                        <FaFilePdf className="ml-2" />
                      )}
                    </Link>
                  )}

                  {study.secondaryLink && (
                    <Link
                      href={
                        study.secondaryLink.type === "url"
                          ? study.secondaryLink.url || "#"
                          : study.secondaryLink.fileUrl || "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border-green-500 border-2 text-gray-800 flex items-center justify-center text-lg px-6 py-3 rounded-lg hover:bg-green-200 transition w-full sm:w-auto"
                    >
                      {study.secondaryLink.type === "url"
                        ? "Additional Link"
                        : "Additional PDF"}
                      {study.secondaryLink.type === "url" ? (
                        <FaExternalLinkAlt className="ml-2" />
                      ) : (
                        <FaFilePdf className="ml-2" />
                      )}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
