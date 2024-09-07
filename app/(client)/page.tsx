import Head from "next/head";
import Hero from "@/app/components/Hero";
import LatestNews from "@/app/components/LatestNews";
import DemoSoilPlant from "@/app/components/DemoSoilPlant";
import Expertise from "@/app/components/Expertise";
import Team from "@/app/components/Team";
import Testimonials from "@/app/components/Testimonials";
import CaseStudies from "@/app/components/CaseStudies";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ENV</title>
        <meta name="description" content="ENV website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <LatestNews />
        <DemoSoilPlant />
        <Expertise />
        <Team />
        <Testimonials />
        <CaseStudies />
      </main>
    </div>
  );
}
