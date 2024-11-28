import {Button} from "@/components/ui/button";
import {ArrowRight, Leaf, Shield} from "lucide-react";
import Image from "next/image";

export default function Expertise() {
  return (
    <section 
      id="ourmission" 
      className="relative py-24"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        // style={{backgroundImage: "url('/hero-bg.jpeg')"}}
      />
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-primary "></div>

      {/* Content Layer */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div data-aos="fade-up" className="bg-black/20 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl text-white font-semibold mb-4 flex items-center">
                <Leaf className="mr-2 text-green-400" />
                Our Mission
              </h3>
              <p className="text-gray-100">
                ReSoil® technology remediates soils contaminated with heavy metals. Our multi-patented solution removes toxic metals and metalloids through an emission-free process, preserving soil as a natural substrate.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="bg-black/20 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl text-white font-semibold mb-4 flex items-center">
                <Shield className="mr-2 text-blue-400" />
                Unmet Needs
              </h3>
              <p className="text-gray-100">
                Contaminated urban soils, gardens, and public spaces pose significant health risks. Traditional remediation methods are often impractical or inefficient for large-scale application, highlighting the need for innovative solutions like ReSoil®.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-500 to-blue-600 rounded-full opacity-20 absolute inset-0 blur-3xl"></div>
            <Image
              data-aos="fade-up"
              data-aos-delay="200"
              src="/envit-graphic.png"
              alt="Soil Remediation Process"
              className="relative z-10 mx-auto"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
