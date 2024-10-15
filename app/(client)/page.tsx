"use client";
import Head from "next/head";
import Hero from "@/app/components/Hero";
import LatestNews from "@/app/components/LatestNews";
import DemoSoilPlant from "@/app/components/DemoSoilPlant";
import Expertise from "@/app/components/Expertise";
import Team from "@/app/components/Team";
import Testimonials from "@/app/components/Testimonials";
import CaseStudies from "@/app/components/CaseStudies";
import HeroTest from "../components/HeroTest";
import HeroTest2 from "../components/HeroTest2";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

      <main>
        {/* <Hero /> */}
        <HeroTest />
        {/* <HeroTest2 /> */}
        <Expertise />
        <LatestNews />
        <Testimonials />
        <DemoSoilPlant />
        <Team />
        <CaseStudies />
      </main>
    </div>
  );
}
