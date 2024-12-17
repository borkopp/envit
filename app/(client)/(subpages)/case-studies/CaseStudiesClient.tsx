"use client";

import Image from "next/image";
import Link from "next/link";
import {FaExternalLinkAlt, FaFilePdf} from "react-icons/fa";
import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";

interface CaseStudy {
  _id: string;
  title: string;
  slug: {current: string};
  description: string;
  thumbnail: {asset: {url: string}};
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

const CaseStudyItem = ({title, date, description, thumbnail, primaryLink, secondaryLink}: CaseStudy) => (
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:scale-[0.98] transition-all duration-300 h-full flex flex-col">
      <div className="relative w-full h-0 pb-[56.25%]">
        <Image
          src={thumbnail?.asset?.url || "/logo2.png"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 text-sm mb-2 transition-transform duration-300 group-hover:-translate-y-1">{date}</p>
        <h4 className="text-xl text-black font-semibold mb-3 transition-transform duration-300 group-hover:-translate-y-1">{title}</h4>
        <p className="text-gray-700 mb-4 flex-grow transition-transform duration-300 group-hover:-translate-y-2">{description}</p>
        <div className="relative h-8 mt-2">
          <div className="absolute bottom-0 left-0 right-0 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300">
            {primaryLink && (
              <Link
                href={primaryLink.type === "url" ? primaryLink.url || "#" : primaryLink.fileUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`${secondaryLink ? "w-1/2" : "w-full"} bg-primary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors duration-300 text-center flex items-center justify-center`}>
                {primaryLink.type === "url" ? "View Case Study" : "View PDF"}
                {primaryLink.type === "url" ? <FaExternalLinkAlt size={12} className="ml-2" /> : <FaFilePdf className="ml-2" />}
              </Link>
            )}
            {secondaryLink && (
              <Link
                href={secondaryLink.type === "url" ? secondaryLink.url || "#" : secondaryLink.fileUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`${primaryLink ? "w-1/2" : "w-full"} bg-white border-primary border text-gray-800 py-2 px-4 rounded-md text-sm font-medium hover:bg-green-100 transition-colors duration-300 text-center flex items-center justify-center`}>
                {secondaryLink.type === "url" ? "Additional Link" : "Additional PDF"}
                {secondaryLink.type === "url" ? <FaExternalLinkAlt size={12} className="ml-2" /> : <FaFilePdf className="ml-2" />}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function CaseStudiesClient({initialCaseStudies}: {initialCaseStudies: CaseStudy[]}) {
  const [caseStudies] = useState<CaseStudy[]>(initialCaseStudies);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCaseStudies = caseStudies.filter(
    (study) => study.title.toLowerCase().includes(searchTerm.toLowerCase()) || study.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  mb-8">
          <div className="relative max-w-xs w-full">
            <Input
              type="text"
              placeholder="Search case studies..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={18} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {filteredCaseStudies.length > 0 ? (
            filteredCaseStudies.map((study) => <CaseStudyItem key={study._id} {...study} />)
          ) : (
            <p className="text-center w-full text-gray-500">No case studies found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
