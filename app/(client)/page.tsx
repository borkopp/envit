"use client";
import Head from "next/head";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoSection from "@/app/components/VideoSection";
import {CarouselDemo} from "@/components/demo-resoil";
import {ExpandableCardDemo} from "@/components/case-studies";
import {LampDemo} from "@/components/awards";
import LatestNews from "../components/LatestNews";
import {FullBackgroundImageWithText} from "../components/new-hero";
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
      {/* <Hero /> */}
      <FullBackgroundImageWithText />
      <VideoSection />
      <CarouselDemo />
      <ExpandableCardDemo />
      <div className="max-w-7xl mx-auto">
        <LampDemo />
      </div>
      {/* <Expertise /> */}
      <LatestNews />
      {/* <Team /> */}
    </div>
  );
}
