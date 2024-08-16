import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import DemoSoilPlant from "@/components/DemoSoilPlant";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ENV</title>
        <meta name="description" content="ENV website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <LatestNews />
        <DemoSoilPlant />
        <Expertise />
        {/* <Services /> */}
        <Team />
        <Testimonials />
        <CaseStudies />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
