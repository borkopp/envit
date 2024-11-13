import { Metadata } from "next";
import  CaseStudiesClient  from "./CaseStudiesClient";
import { client } from "@/sanity/lib/client";
import SubpageTemplate from '@/app/components/SubpageTemplate';

export const revalidate = 10;

export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
    },
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
  const caseStudies = await getCaseStudies();
  return (
    <SubpageTemplate>
      <CaseStudiesClient initialCaseStudies={caseStudies} />
    </SubpageTemplate>
  );
}