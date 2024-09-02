import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaFilePdf } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Aboutus() {
  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
      
      {/* History and Background Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">History and Background</h2>
        <p className="text-lg mb-8">
          Envit Ltd. is a research & development SME company for environmental technology and engineering. It was established in 2009 as a spin-out company of the University of Ljubljana, Slovenia. The founding of Envit Ltd. was initiated by Prof. Domen Leštan and his fellow two PhD students, following the development of innovative soil washing technology (now ReSoil®) at UL to the level which attested the feasibility and commercial potential of the technology. In 2015, the majority of shares of Envit Ltd. were acquired by Arhel Ltd. In 2017, the construction of a demonstration soil-washing plant with ReSoil® technology commenced in the city of Prevalje, nearby Pb, Zn, and Cd contaminated Meza Valley, Slovenia, co-financed by the EU LIFE + Programme and a corporate investment fund from Arhel Ltd. ReSoil® was awarded the Seal of Excellence from the EU Commission, which allows projects with ReSoil® technology to access EU structural and cohesion funds.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Team Member 1 */}
          <div className="text-center">
            <Image
              src="/about1.jpeg"
              alt="Team Member 1"
              width={150}
              height={150}
              className="mx-auto rounded-full"
            />
            <p className="mt-2 font-semibold">Team Member 1</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <Image
              src="/about2.jpeg"
              alt="Team Member 2"
              width={150}
              height={150}
              className="mx-auto rounded-full"
            />
            <p className="mt-2 font-semibold">Team Member 2</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <Image
              src="/about3.png"
              alt="Team Member 3"
              width={150}
              height={150}
              className="mx-auto rounded-full"
            />
            <p className="mt-2 font-semibold">Team Member 3</p>
          </div>
          {/* Team Member 4 */}
          <div className="text-center">
            <Image
              src="/about4.png"
              alt="Team Member 4"
              width={150}
              height={150}
              className="mx-auto rounded-full"
            />
            <p className="mt-2 font-semibold">Team Member 4</p>
          </div>
        </div>
      </div>

      {/* Location and Contact Form Section */}
      <div className="md:flex md:justify-between md:space-x-12">
        {/* Location Section */}
        <div className="mb-12 md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Location</h2>
          <p className="text-lg">
            Pod lipami 35<br />
            1218 Komenda<br />
            Slovenia
          </p>
          <p className="text-lg mt-4">
            M: <a href="mailto:info@envit.si" className="text-blue-500 hover:underline">info@envit.si</a>
          </p>
          <p className="text-lg mt-4">Envit Ltd. offices</p>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2" htmlFor="question">Question</label>
              <textarea
                id="question"
                className="w-full border border-gray-300 rounded-lg p-2"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
