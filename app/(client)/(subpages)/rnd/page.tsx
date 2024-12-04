"use client";

import { useState } from "react";
import Image from "next/image";
import SubpageTemplate from '@/app/components/SubpageTemplate';

export default function RnD() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <SubpageTemplate>
      <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          SCIENTIFIC COOPERATION WITH UNIVERSITY AND RESEARCH INSTITUTES
        </h1>

        {/* Paragraph */}
        <p className="text-lg mb-8">
          Our organization is dedicated to advancing scientific research and
          innovation through collaborative efforts with prestigious universities
          and research institutes. By combining our expertise and resources, we
          strive to tackle complex challenges and drive forward cutting-edge
          discoveries. This synergy not only enhances our research capabilities
          but also contributes to the broader scientific community&quot;s
          knowledge base and technological advancements. Our commitment to these
          partnerships reflects our belief in the power of collective knowledge
          and collaboration.
        </p>

        {/* Full-Width Image */}
        <div className="relative w-full h-80 md:h-[500px] mb-12">
          <Image
            src="/rnd.jpg"
            alt="Scientific Cooperation"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Scientific Papers Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            ReSoil® Scientific Papers
          </h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>
                MORALES ARTEAGA, Juan, Francisco, ZUPANC, Mojca, DULAR, Matevz,
                LESTAN, Domen, and KAURIN, Anela.
              </strong>{" "}
              <a
                href="https://doi.org/10.3390/ijerph20032544"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Removal of Toxic Metals from Sewage Sludge by Acid Hydrolysis
                Coupled with EDTA Washing in a Closed-Loop Process
              </a>
              . International journal of environmental research and public health, 2023, 20(3),
              p.2544.
            </li>
            <li>
              <strong>
                MACEK, Irena, PINTARIC, Sara, SIBANC, Natasa, RAJNIS, Tatjana,
                KASTELEC, Damijana, LESTAN, Domen and SUHADOLC, Metka.
              </strong>{" "}
              <a
                href="https://doi.org/10.3389/fenvs.2022.978850"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plants play a crucial role in the development of soil fungal
                communities in the remediated substrate after EDTA washing of
                metal-contaminated soils
              </a>
              . Frontiers in Environmental Science, 2022, 10, p.978850.
            </li>
            <li>
              <strong>
                NOLLER, Christoph, FRIESL-HANL, Wolfgang, HOOD-NOWOTNY, Rebecca
                and WATRZINGER, Andrea.
              </strong>{" "}
              <a
                href="https://doi.org/10.3390/toxics10110652"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Toxics, 2022, 10(11), p.652.
              </a>
            </li>
            <li>
              <strong>
                MORALES-ARTEAGA, Juan, Francisco, KAURIN, Anela and LESTAN, Domen.
              </strong>{" "}
              <a
                href="https://doi.org/10.1016/j.chemosphere.2022.135917"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Removal of toxic metals from sewage sludge by EDTA in a closed-loop washing process
              </a>
              . Chemosphere, 2022, p.135917.
            </li>
            <li>
              <strong>
                MORALES-ARTEAGA, Juan, Francisco, GLUHAR, Simon, KAURIN, Anela and LEŠTAN, Domen.
              </strong>{" "}
              <a
                href="https://doi.org/10.1016/j.envpol.2022.118656"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Simultaneous removal of arsenic and toxic metals from contaminated soil: Laboratory development and pilot scale demonstration
              </a>
              . Environmental Pollution, 2022, 294, p.118656.
            </li>
            <li>
              <strong>
                NOLLER, Christoph, FRIESL-HANL, Wolfgang, HOOD-NOWOTNY, Rebecca, PUSCHENREITER, Markus and WATRZINGER, Andrea.
              </strong>{" "}
              <a
                href="https://link.springer.com/article/10.1007/s11270-021-05356-0"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Effect of Chelant-Based Soil Washing and Post-Treatment on Pb, Cd, and Zn Bioavailability and Plant Uptake
              </a>
              . Water, Air, & Soil Pollution, 2021, 232(10), pp.1-14.
            </li>
            <li>
              <strong>
                GLUHAR, Simon, KAURIN, Anela, VODNIK, Dominik, KASTELEC, Damjana, ZUPANC, Vesna and LEŠTAN, Domen.
              </strong>{" "}
              <a
                href="https://doi.org/10.1016/j.scitotenv.2021.148521"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demonstration gardens with EDTA-washed soil. Part III: Plant growth, soil physical properties and production of safe vegetables
              </a>
              . Science of The Total Environment, 2021, p.148521.
            </li>
            <li>
              <strong>
                KAURIN, Anela, GLUHAR, Simon, MAČEK, Irena, KASTELEC, Damjana and LEŠTAN, Domen.
              </strong>{" "}
              <a
                href="https://doi.org/10.1016/j.scitotenv.2021.148522"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demonstrational gardens with EDTA-washed soil. Part II: Soil quality assessment using biological indicators
              </a>
              . Science of The Total Environment, 2021, p.148522.
            </li>
            <li>
              <strong>
                GLUHAR, Simon, KAURIN, Anela, FINŽGAR, Neža, GERL, Marko, KASTELEC, Damjana and LEŠTAN, Domen.
              </strong>{" "}
              <a
                href="https://doi.org/10.1016/j.scitotenv.2021.149060"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demonstrational gardens with EDTA-washed soil. Part I: Remediation efficiency, effect on soil properties and toxicity hazards
              </a>
              . Science of The Total Environment, 2021, p.149060.
            </li>
            <li>
              <strong>
                JEŽ, Erika, BRAVO, Carlo, LESTAN, Domen, GLUHAR, Simon, MARTIN-NETO, Ladislau, De NOBILI, Maria and CONTIN, Marco.
              </strong>{" "}
              <a
                href="https://link.springer.com/article/10.1007%2Fs11356-021-15406-z"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Changes in Organic Matter Composition Caused by EDTA Washing of two Soils Contaminated with Toxic Metals
              </a>
              . Environmental Science and Pollution Research, 2021.
            </li>
            <li>
              <strong>
                KAURIN, Anela, GLUHAR, Simon, TILIKJ, Natasha, LEŠTAN, Domen.
              </strong>{" "}
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S0045653520318683"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Soil washing with biodegradable chelating agents and EDTA: Effect on soil properties and plant growth
              </a>
              . Chemosphere, 2020, 260, 127673.
            </li>
            <li>
              <strong>
                GLUHAR, Simon, KAURIN, Anela, LEŠTAN, Domen.
              </strong>{" "}
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S0045653520314193"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Soil washing with biodegradable chelating agents and EDTA: Technological feasibility, remediation efficiency and environmental sustainability
              </a>
              . Chemosphere, 2020, vol. 257, 127226.
            </li>
            <li>
              <strong>
                GLUHAR, Simon, JEŽ, Erika, LEŠTAN, Domen.
              </strong>{" "}
              <a
                href="http://www.envit.si/uploads/JKlRWLtA/PagesfromChemosphere2019Useofzerovalentironforemissioncurbing.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                The use of zero-valent Fe for curbing toxic emissions after EDTA-based washing of Pb, Zn and CD contaminated calcareous and acidic soil
              </a>
              . Chemosphere, 2018, vol. 215, p-482-489.
            </li>
            <li>
              <strong>
                KAURIN, Anela and LEŠTAN, Domen.
              </strong>{" "}
              <a
                href="https://doi.org/10.1016/j.chemosphere.2017.11.082"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Multi-substrate induced microbial respiration, nitrification potential and enzyme activities in metal-polluted, EDTA-washed soils
              </a>
              . Environmental pollution, 2018, vol 243, p- 238-245.
            </li>
            <li>
              <strong>
                KAURIN, Anela, CERNILOGAR, Zarja, LEŠTAN Domen.
              </strong>{" "}
              <a
                href="http://www.envit.si/uploads/orrZSlYW/PagesfromChemosphere2018vol193726-736.Revitalisationbycompostsoilandbiocharaddition.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Revitalisation of metal-contaminated, EDTA-washed soil by addition of unpolluted soil, compost and biochar: Effects on soil enzyme activity, microbial community composition and abundance
              </a>
              . Chemosphere, 2017, vol 193, p- 726-736.
            </li>
            <li>
              <strong>
                LEŠTAN, Domen.
              </strong>{" "}
              <a
                href="http://www.envit.si/uploads/Fg8g7duP/PagesfromLanddegraddevelop2017.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Novel chelant-based washing method for soil contaminated with Pb and other metals: A pilot-scale study
              </a>
              . Land Degrad Develop., 2017, vol. 28,p. 2585-2595.
            </li>
          </ul>
        </section>

        {/* Conference Contributions Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Scientific Conference Contributions
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>
                GLUHAR, Simon, KAURIN, Anela, VOGLAR, Grega E., FINŽGAR, Neža,
                LEŠTAN, Domen.
              </strong>{" "}
              Case studies of ReSoil® – novel technology for efficient and
              sustainable removal of heavy metals from contaminated soils. V:
              ICOBTE & ICHMET 2023: book of abstracts: 1st Joint International
              Conference of Biochemistry of Trace Elements & 21st International
              Conference of Heavy Metals: 6-10 September 2023, Wuppertal: Clean
              environment. Human health. Our future. [S. l.: s. n., 2023]. p. 443.{" "}
              <a
                href="https://icobte-ichmet-2023.com/custom/media/ICOBTE23/Abstract_Book_Final_3.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </li>
            <li>
              <strong>
                LEŠTAN, Domen, GLUHAR, Simon, KAURIN, Anela, VOGLAR, Grega E.
              </strong>{" "}
              Efficient and sustainable removal of toxic metals and metalloids
              from soils with ReSoil® technology. V: Open science inspires: 2023
              ASA, CSSA, SSSA International annual meeting: October 29 - November
              1, 2023, St. Louis, Missouri, and limited virtual. Madison: American
              Society of Agronomy.{" "}
              <a
                href="https://scisoc.confex.com/scisoc/2023am/meetingapp.cgi/Paper/153960"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </li>
            {/* Add more conference contributions as needed */}
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Projects</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>
                Achieving Remediation And GOverning Restoration of contaminated
                soils Now - ARAGORN
              </strong>
              <br />
              Financer: ARAGORN has received funding from HORIZON-RIA - HORIZON
              Research and Innovation Actions (2021-2027) under grant agreement No
              101112723
              <br />
              Duration: 01.10.2023 – 30.09.2027
            </li>
            <li>
              <strong>
                Remediation with toxic metals and metalloids and organic
                pollutants of contaminated soil at a model military shooting range
                - demonstration and recommendations for further measures
              </strong>
              <br />
              Financer: Ministry of Defence of the Republic of Slovenia &
              Slovenian Research and Innovation Agency
              <br />
              Duration: 01.10.2022 – 01.10.2024
            </li>
            {/* Add more projects as needed */}
          </ul>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative bg-white p-4">
              <Image
                src={selectedImage}
                alt="Selected Image"
                layout="intrinsic"
                width={1000}
                height={1000}
                className="object-contain"
              />
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold"
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </SubpageTemplate>
  );
}
