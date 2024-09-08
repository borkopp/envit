import Image from "next/image";
import Link from "next/link";

export default function ResoilInbrief() {
  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-24">
      {/* Full-width Image Section with Link */}
      <section className="mb-10">
        <Link href="https://www.youtube.com/watch?v=Hv2PSm1W1E8">
          <Image
            src="/GrafiKOn56.001.jpeg"
            alt="Descriptive Alt Text"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            quality={100}
          />
        </Link>
      </section>

      {/* Two Side-by-Side Paragraphs */}
      <section className="flex flex-col md:flex-row gap-10 mb-14">
        <div className="md:w-1/2">
          <h2 className="text-lg font-bold mb-4">
            What we can treat with ReSoil® technology
          </h2>
          <p>
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
        <div className="md:w-1/2">
          <h2 className="text-lg font-bold mb-4">
            What we cannot treat with ReSoil® technology
          </h2>
          <p>
            Ores, tailings, ashes, sludges…and other solid materials from
            mining, smelting, and other industries, where heavy metals are
            present and entrapped in mineral forms (i.e. silicates) and not
            accessible by EDTA and also not bio-accessible/-available. ReSoil®
            is not a metallurgical process.
          </p>
        </div>
      </section>

      {/* Three Sections with Read More Buttons */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 border rounded-lg shadow-md">
          <Link href="/technology-description">
            <h3 className="text-md font-bold mb-2 text-black hover:underline">
              Technology description
            </h3>
          </Link>
          <p className="mb-4">
            ReSoil®, our internationally patented soil remediation technology
            is the single commercially available option which efficiently
            removes toxic metals from contaminated soils and sediments.
          </p>
          <Link href="/technology-description">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
              Read More
            </button>
          </Link>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <Link href="/case-studies">
            <h3 className="text-md font-bold mb-2 text-black hover:underline">
              Case study
            </h3>
          </Link>
          <p className="mb-4">
            Construction of vegetable garden with raised beds with remediated
            soil from city Prevalje, Meza valley, Slovenia and remediated soil
            from city of Arnoldstein, Austria.
          </p>
          <Link href="/case-studies">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
              Read More
            </button>
          </Link>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <Link href="/faq">
            <h3 className="text-md font-bold mb-2 text-black hover:underline">
              FAQ
            </h3>
          </Link>
          <p className="mb-4">
            Is ReSoil® technology limited to removal of Pb from contaminated
            soils? <br />
            Are there other available similar soil remediation technologies?
          </p>
          <Link href="/faq">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
              Read More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
