import Link from "next/link";
import { HeroVideoSection } from "./hero-video-section";

export function HeroSection() {
  return (
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--primary)_100%)] rounded-b-xl"></div>
        </div>
        <div className="relative z-10 pt-24 md:pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          {/* <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            {hero.badgeIcon}
            {hero.badge}
          </p> */}
          <div className="flex flex-col items-center justify-center pt-14 gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-primary">
              Innovative Techniques for a Greener Tomorrow
            </h1>
            <p className="text-base font-inter md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              Groundbreaking Solutions for a Sustainable Future
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <Link
              href={"/contact"}
              className="bg-green-500 text-white h-9 flex items-center justify-center text-sm font-normal tracking-wide rounded-full w-32 px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-primary/80 transition-all ease-out active:scale-95"
            >
              Learn More
            </Link>
            <Link
              href={"/contact"}
              className="h-10 flex items-center justify-center w-32 px-5 text-sm font-normal tracking-wide text-primary rounded-full transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <HeroVideoSection />
    </section>
  );
}
