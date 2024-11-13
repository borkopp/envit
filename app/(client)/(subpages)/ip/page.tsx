import { FaFilePdf } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import SubpageTemplate from '@/app/components/SubpageTemplate';

const documents = [
  {
    id: 1,
    url: "https://patents.google.com/patent/US20140126965A1/en?assignee=Envit&oq=Envit",
    image: "/ip/ip1.jpg",
    title: "Washing of contaminated soils",
  },
  {
    id: 2,
    url: "https://patents.google.com/patent/EP3153246B1/en?assignee=Envit&oq=Envit",
    image: "/ip/ip2.jpg",
    title: "Method for soil and sediment remediation",
  },
  {
    id: 3,
    url: "https://patents.google.com/patent/GB201720126D0/en?assignee=Envit&oq=Envit",
    image: "/ip/ip3.jpg",
    title: "Curbing toxic emissions from remediated substrate",
  },
  {
    id: 4,
    url: "https://patents.google.com/patent/WO2022184903A1/en?oq=WO2022184903A1",
    image: "/ip/ip4.jpg",
    title:
      "Removal of arsenic, antimony and toxic metals from contaminated substrate",
  },
];

export default function Ip() {
  return (
    <SubpageTemplate>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <p className="text-lg mb-8 leading-relaxed">
            It is prior knowledge that EDTA-based soil-washing efficiently removes
            <strong> Pb and other toxic metals</strong> from soil. However, more
            than 20-years of research by many groups worldwide has not resulted in
            a feasible solution for EDTA recycling, for the problem of vast
            amounts of generated <strong>waste waters</strong> and for toxic
            emission due to EDTA environmental persistence.{" "}
            <strong>ReSoil</strong> resolves all these problems. It is an
            internationally patented, cost-efficient, soil preserving and
            environmentally safe remediation technology.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-center font-bold mb-6">
            Patent Documents:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc) => (
              <Link key={doc.id} href={doc.url} className="block">
                <div className="border border-gray-300 rounded-lg p-4 text-center hover:shadow-lg transition-shadow h-full flex flex-col">
                  <span className="block text-lg font-semibold mb-4 flex-grow">
                    {doc.title}
                  </span>
                  <Image
                    src={doc.image}
                    alt={`${doc.title} Thumbnail`}
                    width={300}
                    height={192}
                    className="w-full h-full object-cover mb-4 rounded"
                  />
                  <FaFilePdf className="text-3xl text-red-600 mx-auto" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SubpageTemplate>
  );
}
