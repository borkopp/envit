import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

const NewHero = () => {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(236, 253, 245)" // Light mint green
      gradientBackgroundEnd="rgb(209, 250, 229)" // Slightly darker mint
      firstColor="34, 197, 94"    // Green-500
      secondColor="16, 185, 129"  // Emerald-500
      thirdColor="52, 211, 153"   // Green-400
      fourthColor="110, 231, 183" // Emerald-300
      fifthColor="167, 243, 208"  // Green-200
      pointerColor="20, 184, 166" // Teal-500
      blendingValue="screen"      // Changed for better light color blending
    >
      <div className="absolute z-10 inset-0 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
          <div data-aos="fade-up" data-aos-delay="100" className="mb-6 border-2 border-emerald-600/30 rounded-full px-4 py-2 bg-white/50 backdrop-blur-sm">
            <Link href="/technology-description" className="text-emerald-800/80 text-xs md:text-sm hover:text-emerald-600 transition duration-300">
              Explore our groundbreaking technology. <span className="text-emerald-700">Learn More</span>
            </Link>
          </div>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-6xl font-semibold text-emerald-900 text-center">
            Revitalize the Earth <br /> with Envit&apos;s ReSoil
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-lg max-w-2xl mx-auto font-lato text-emerald-800/80 text-center">
            Discover the future of soil remediation with our sustainable and innovative solutions, designed to restore and rejuvenate contaminated
            environments for a healthier planet.
          </p>
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#technology"
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition duration-300">
              Our Solutions
            </Link>
            <Link
              href="#team"
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-white/50 backdrop-blur-sm border-2 flex items-center border-emerald-600 text-emerald-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-600 hover:text-white hover:border-transparent transition duration-300">
              Meet the Team <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default NewHero;
