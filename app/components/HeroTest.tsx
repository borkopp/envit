"use client";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      // style={{backgroundImage: "url('/bg-hero.webp')", backgroundSize: "cover", backgroundPosition: "center"}}
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center bg-no-repeat relative">
      {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
      <div className="container px-4 md:px-6 relative z-10 text-black">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              <h1 data-aos="fade-up" data-aos-delay={100} className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Revolutionizing Soil Health
              </h1>
              <p data-aos="fade-up" data-aos-delay={200} className="max-w-[600px] text-slate-700 md:text-xl">
                Our resoil technology is changing the way we think about agriculture and sustainability.
              </p>
            </div>
            <blockquote data-aos="fade-up" data-aos-delay={300} className="border-l-4 border-green-500 pl-4 italic text-xl text-slate-500">
              &quot;The nation that destroys its soil destroys itself.&quot;
              <footer className="text-sm text-zinc-700 mt-2">- Franklin D. Roosevelt</footer>
            </blockquote>
            <div className="flex flex-col gap-2 min-[400px]:flex-row ">
              <Link
                data-aos="fade-up"
                data-aos-delay={400}
                href="#learn-more"
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-300 disabled:pointer-events-none disabled:opacity-50">
                Learn More
              </Link>
              <Link
                data-aos="fade-up"
                data-aos-delay={500}
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div data-aos="fade-up" data-aos-delay={300} className="relative">
              <HeroVideoDialog
                className="dark:hidden block shadow-xl"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/watch?v=am8N_qhzBSg"
                thumbnailSrc="/thumbnail-yt.png"
                thumbnailAlt="Hero Video"
              />
              {/* <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/watch?v=am8N_qhzBSg"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                thumbnailAlt="Hero Video"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
