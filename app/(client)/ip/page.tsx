import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaFilePdf } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Ip() {
  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
      
      {/* Paragraph */}
      <p className="text-lg mb-8">
      It is prior knowledge that EDTA-based soil-washing efficiently removes Pb and other toxic metals from soil. However, more than 20-years of research by many groups worldwide has not resulted in a feasible solution for EDTA recycling, for the problem of vast amounts of generated waste waters and for toxic emission due to EDTA environmental persistence. ReSoil resolves all these problems. It is an internationally patented, cost-efficient, soil preserving and environmentally safe remediation technology.
</p>

      {/* Additional Paragraph and Patents */}
      <div className="mb-12">

        <h3 className="text-lg font-semibold mb-2">Patents and Patent Applications:</h3>
        <div className="mb-8">
          <ul className="list-disc list-inside mb-4">
            <li>
              <Link href="https://patents.google.com/patent/US9108233B2" className="text-blue-500 hover:underline">
                Washing of contaminated soils, US 9,108,233 B2
              </Link>
            </li>
            <li>
              <Link href="https://patents.google.com/patent/EP3153246B1" className="text-blue-500 hover:underline">
                Method for soil and sediment remediation, EP 3153246 B1
              </Link>
            </li>
            <li>
              <Link href="https://patents.google.com/patent/GB201720126D0" className="text-blue-500 hover:underline">
                Curbing toxic emissions from remediated substrate, GB 201720126 D0
              </Link>
            </li>
            <li>
              <Link href="https://patents.google.com/patent/WO2022184903A1" className="text-blue-500 hover:underline">
                Removal of arsenic, antimony and toxic metals from contaminated substrate, WO2022184903A1
              </Link>
            </li>
          </ul>
        </div>

        {/* PDF Files */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/EP3153246B1.pdf">
            <div className="block border border-gray-300 rounded-lg p-4 text-center cursor-pointer">
              <FaFilePdf className="text-3xl mb-2 text-red-600" />
              <span className="block text-sm font-semibold">Document 1</span>
            </div>
          </Link>
          <Link href="/EP3153246B1.pdf">
            <div className="block border border-gray-300 rounded-lg p-4 text-center cursor-pointer">
              <FaFilePdf className="text-3xl mb-2 text-red-600" />
              <span className="block text-sm font-semibold">Document 2</span>
            </div>
          </Link>
          <Link href="/EP3153246B1.pdf">
            <div className="block border border-gray-300 rounded-lg p-4 text-center cursor-pointer">
              <FaFilePdf className="text-3xl mb-2 text-red-600" />
              <span className="block text-sm font-semibold">Document 3</span>
            </div>
          </Link>
          <Link href="/EP3153246B1.pdf">
            <div className="block border border-gray-300 rounded-lg p-4 text-center cursor-pointer">
              <FaFilePdf className="text-3xl mb-2 text-red-600" />
              <span className="block text-sm font-semibold">Document 4</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
