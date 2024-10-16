"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

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

const CaseStudyItem = ({ title, date, description, thumbnail, primaryLink, secondaryLink }: CaseStudy) => (
  <motion.div 
    className="w-full md:w-1/2 lg:w-1/3 p-4"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="relative w-full h-0 pb-[56.25%]">
        <Image
          src={thumbnail?.asset?.url || "/logo-resoil.png"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 text-sm mb-2">{date}</p>
        <h4 className="text-xl text-black font-semibold mb-3">{title}</h4>
        <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          {primaryLink && (
            <Link
              href={primaryLink.type === "url" ? primaryLink.url || "#" : primaryLink.fileUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white flex items-center justify-center text-sm px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              {primaryLink.type === "url" ? "View Case Study" : "View PDF"}
              {primaryLink.type === "url" ? (
                <FaExternalLinkAlt size={12} className="ml-2" />
              ) : (
                <FaFilePdf className="ml-2" />
              )}
            </Link>
          )}
          {secondaryLink && (
            <Link
              href={secondaryLink.type === "url" ? secondaryLink.url || "#" : secondaryLink.fileUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-primary border text-gray-800 flex items-center justify-center text-sm px-4 py-2 rounded-full hover:bg-green-100 transition"
            >
              {secondaryLink.type === "url" ? "Additional Link" : "Additional PDF"}
              {secondaryLink.type === "url" ? (
                <FaExternalLinkAlt size={12} className="ml-2" />
              ) : (
                <FaFilePdf className="ml-2" />
              )}
            </Link>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function CaseStudiesClient({ initialCaseStudies }: { initialCaseStudies: CaseStudy[] }) {
  const [caseStudies] = useState<CaseStudy[]>(initialCaseStudies);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCaseStudies = caseStudies.filter((study) =>
    study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    study.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 items-center text-center mb-14">
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Case Studies</h3>
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-4xl">Our Success Stories</h2>
          <p className="text-neutral-500 text-[1rem] mx-auto my-4 text-center relative max-w-2xl">
            Discover our success stories through these case studies. Each one highlights our innovative solutions and the real-world impact we&apos;ve made for our clients.
          </p>
        </div>
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
          {filteredCaseStudies.length > 0 ?
            filteredCaseStudies.map((study) => <CaseStudyItem key={study._id} {...study} />) :
            <p className="text-center w-full text-gray-500">No case studies found.</p>
          }
        </div>
      </div>
    </section>
  );
}