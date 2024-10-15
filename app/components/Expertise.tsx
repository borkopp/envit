import {Button} from "@/components/ui/button";
import {ArrowRight, Leaf, Shield} from "lucide-react";
import Image from "next/image";

export default function Expertise() {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div data-aos="fade-up" className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Leaf className="mr-2 text-green-400" />
                Our Mission
              </h3>
              <p className="text-gray-300">
                Remediation of soils contaminated with “heavy metals” with ReSoil® technology for a global green transition. ReSoil® is a
                multi-patented remediation solution that makes it possible to remove toxic metals such as Pb, Zc, Zn, Cu, Ni and metalloids such as As
                and Sb in an emission-free process without wastewater, while preserving the soil as a natural substrate.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2 text-blue-400" />
                Unmet Needs
              </h3>
              <p className="text-gray-300">
                <span>
                  Areas contaminated with toxic metals and metalloids where people come into direct contact with the soil, such as urban soils,
                  gardens, agricultural areas, playgrounds, parks, etc., pose a major health risk.
                  <br />
                  <br />
                </span>
                <span className="mt-2">
                  Worldwide, the areas affected are so large that remediation using methods that involve the loss of soil as an irreplaceable natural
                  resource (excavation and disposal, soil covering and sealing, separation and sand washing, washing with strong acids and alkalis) is
                  not feasible. Immobilization does not remove toxic metals and metalloids from the soil, and phytoextraction is not efficient.
                </span>
              </p>
            </div>

            {/* <Button className="w-full">
              Learn More About ReSoil® Technology
              <ArrowRight className="ml-2" />
            </Button> */}
          </div>

          <div className="relative ml-12">
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
