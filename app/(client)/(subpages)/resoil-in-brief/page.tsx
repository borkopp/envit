import SubpageTemplate from '@/app/components/SubpageTemplate';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Info } from 'lucide-react';

export default function ResoilInbrief() {
  return (
    <SubpageTemplate>
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Hero Section with Image */}
        <section className="my-16 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/GrafiKOn56.001.jpeg"
                alt="ReSoil Technology Overview"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                quality={100}
              />

            </div>
          {/* <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white py-3 px-6 rounded-full shadow-lg text-sm font-medium text-gray-600">
            Click to watch video overview
          </div> */}
        </section>

        {/* Treatment Capabilities Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-primary p-2 rounded-lg">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold">
                  What we can treat with ReSoil® technology
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Soil contaminated with toxic metals (i.e. Pb, Zn, Cd, Cu….) and
                toxic metalloids (As, Sb) from various gaseous and liquid industrial
                emissions (e.g. smelters, foundries, dumping or burning of lead
                batteries), traffic emissions (i.e. leaded gasoline), peels of
                external lead-based paint, heavy metals containing pesticides (i.e.
                lead arsenate, copper sulphate), fertilizers (i.e. Cd in
                phosphates), ammunition (i.e. shooting grounds), the fallout from
                the discharge of community waste incinerators, soil contaminated by
                old plumbing and lead and zinc roofing (i.e. burning of Notre Dame
                in Paris).
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-red-500 p-2 rounded-lg">
                  <Info className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold">
                  What we cannot treat with ReSoil® technology
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Ores, tailings, ashes, sludges…and other solid materials from
                mining, smelting, and other industries, where heavy metals are
                present and entrapped in mineral forms (i.e. silicates) and not
                accessible by EDTA and also not bio-accessible/-available. ReSoil®
                is not a metallurgical process.
              </p>
            </div>
          </div>
        </section>

        {/* Other ReSoil® Solutions Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Our ReSoil® Facilities</h2>
          
          <div className="mb-8 flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/resoil-in-brief-diagram.png"
                alt="ReSoil Solutions Diagram"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                quality={100}
              />
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
              As far as our facilities are concerned, we have a research laboratory, a small
              mobile unit on a trailer for on-site demonstration of ReSoil®
              technology to
              customers, and a larger soil remediation pilot plant for further technology
              development. Together with Matec Industries from Massa, we have designed
              a mobile commercial ReSoil remediation plant in shipping containers with a
              capacity of 50 m³ of soil per day.
            </p>
          </div>
          
          <div className="flex justify-center mt-6">
            <div className="inline-flex items-center space-x-1 text-primary font-medium">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span>Innovative solution for soil remediation</span>
            </div>
          </div>
        </section>

        {/* Learn More Cards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Learn More About ReSoil®</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Link href="/technology-description" className="block">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Technology Description
                </h3>
                <p className="mb-4 text-gray-700">
                  ReSoil®, our internationally patented soil remediation technology
                  is the single commercially available option which efficiently
                  removes toxic metals from contaminated soils and sediments.
                </p>
                <div className="flex items-center text-primary font-medium">
                  <span>Read More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </div>
            <div className="bg-white p-6 border rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Link href="/case-studies" className="block">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Case Studies
                </h3>
                <p className="mb-4 text-gray-700">
                  Construction of vegetable garden with raised beds with remediated
                  soil from city Prevalje, Meza valley, Slovenia and remediated soil
                  from city of Arnoldstein, Austria.
                </p>
                <div className="flex items-center text-primary font-medium">
                  <span>Read More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </div>
            <div className="bg-white p-6 border rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Link href="/faq" className="block">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  FAQ
                </h3>
                <p className="mb-4 text-gray-700">
                  Is ReSoil® technology limited to removal of Pb from contaminated
                  soils? <br />
                  Are there other available similar soil remediation technologies?
                </p>
                <div className="flex items-center text-primary font-medium">
                  <span>Read More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-10 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">For more information, contact us!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us to learn more about how ReSoil® Technology can help with your soil remediation needs.
            </p>
            <Link 
              href="/about-us" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              Contact Us 
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </section>
      </div>
    </SubpageTemplate>
  );
}
