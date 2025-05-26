"use client";
import Head from "next/head";
import LatestNews from "@/app/components/LatestNews";
import DemoSoilPlant from "@/app/components/DemoSoilPlant";
import Expertise from "@/app/components/Expertise";
import Team from "@/app/components/Team";
import Testimonials from "@/app/components/Testimonials";
import CaseStudies from "@/app/components/CaseStudies";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RecognitionAndAwards from "@/app/components/RecognitionAndAwards";
import { Hero } from "@/components/hero";
import VideoSection from "@/app/components/VideoSection";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <Head>
        <title>ENVIT</title>
        <meta name="description" content="ENVIT ReSoil Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <VideoSection />
      {/* <Expertise /> */}
      <DemoSoilPlant />
      <CaseStudies />
      <Testimonials />
      <RecognitionAndAwards />
      <LatestNews />
      <Team />
    </div>
  );
}
