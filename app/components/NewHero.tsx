import {ArrowRight} from "lucide-react";
import Link from "next/link";

const NewHero = () => {
  return (
    <section className="relative h-[90vh] bg-cover bg-center font-montserrat" style={{backgroundImage: "url('/hero-bg.jpeg')"}}>
      <div className="absolute inset-0 bg-primary opacity-60"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <div className="mb-12 border-2 border-white/30 rounded-full px-4 py-2">
          <Link href="/technology" className="text-white/60 text-sm hover:text-green-300 transition duration-300">
            Explore our groundbreaking technology. <span className=" text-white">Learn More</span>
          </Link>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold mb-10">
          Revitalize the Earth <br /> with Envit&apos;s ReSoil
        </h1>
        <p className="text-lg md:text-lg mb-14 max-w-2xl font-lato text-gray-300">
          Discover the future of soil remediation with our sustainable and innovative solutions, designed to restore and rejuvenate contaminated
          environments for a healthier planet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#technology"
            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">
            Our Solutions
          </Link>
          <Link
            href="#team"
            className="bg-transparent border-2 flex items-center border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-green-800 transition duration-300">
            Meet the Team <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
