import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import LatestNews from "@/app/components/LatestNews";
import DemoSoilPlant from "@/app/components/DemoSoilPlant";
import Expertise from "@/app/components/Expertise";
import Services from "@/app/components/Services";
import Team from "@/app/components/Team";
import Testimonials from "@/app/components/Testimonials";
import CaseStudies from "@/app/components/CaseStudies";
import Footer from "@/app/components/Footer";

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
