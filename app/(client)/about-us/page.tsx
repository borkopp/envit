import Team from "@/app/components/Team";
import Image from "next/image";

export default function Aboutus() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* History and Background Section */}
        <section id="team">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-gray-800 font-bold mb-10">
                History and Background
              </h2>
              <p className="text-xl leading-relaxed mb-6">
                Envit Ltd. is a research & development SME company for
                environmental technology and engineering. Established in 2009 as
                a spin-out from the University of Ljubljana, Slovenia, we were
                founded by Prof. Domen Leštan and two PhD students. Our
                inception followed the development of an innovative soil washing
                technology (now ReSoil®) that demonstrated both feasibility and
                commercial potential. In 2015, Arhel Ltd. acquired the majority
                of Envit Ltd. shares. By 2017, we began constructing a
                demonstration soil-washing plant using ReSoil® technology in
                Prevalje, near the Pb, Zn, and Cd contaminated Meza Valley,
                Slovenia. This project was co-financed by the EU LIFE +
                Programme and Arhel Ltd.&apos;s corporate investment fund. Our
                ReSoil® technology has been awarded the Seal of Excellence from
                the EU Commission, opening doors for projects using ReSoil® to
                access EU structural and cohesion funds.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <Team backgroundColor="bg-gray-50" />

        {/* Location and Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Location Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-700">
              Our Location
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Pod lipami 35
              <br />
              1218 Komenda
              <br />
              Slovenia
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Email:{" "}
              <a
                href="mailto:info@envit.si"
                className="text-blue-500 hover:underline"
              >
                info@envit.si
              </a>
            </p>
            <p className="text-lg text-gray-600">Envit Ltd. offices</p>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-700">
              Contact Us
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
