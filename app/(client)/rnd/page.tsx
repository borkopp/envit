"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function TechnologyDescription() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/path-to-image1.jpg",
    "/path-to-image2.jpg",
    "/path-to-image3.jpg",
    "/path-to-image4.jpg",
    "/path-to-image5.jpg",
    "/path-to-image6.jpg",
    "/path-to-image7.jpg",
    "/path-to-image8.jpg"
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        SCIENTIFIC COOPERATION WITH UNIVERSITY AND RESEARCH INSTITUTES
      </h1>

      {/* Paragraph */}
      <p className="text-lg mb-8">
        Our organization is dedicated to advancing scientific research and innovation through collaborative efforts with prestigious universities and research institutes. By combining our expertise and resources, we strive to tackle complex challenges and drive forward cutting-edge discoveries. This synergy not only enhances our research capabilities but also contributes to the broader scientific community's knowledge base and technological advancements. Our commitment to these partnerships reflects our belief in the power of collective knowledge and collaboration.
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
        <h2 className="text-xl md:text-2xl font-bold mb-4">Scientific Papers</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>MORALES ARTEAGA, Juan, Francisco, ZUPANC, Mojca, DULAR, Matevz, LESTAN, Domen, and KAURIN, Anela.</strong> Removal of Toxic Metals from Sewage Sludge by Acid Hydrolysis Coupled with EDTA Washing in a Closed-Loop Process. International journal of environmental research and public health, 2023, 20(3), p.2544.
          </li>
          <li>
            <strong>MACEK, Irena, PINTARIC, Sara, SIBANC, Natasa, RAJNIS, Tatjana, KASTELEC, Damijana, LESTAN, Domen and SUHADOLC, Metka.</strong> Plants play a crucial role in the development of soil fungal communities in the remediated substrate after EDTA washing of metal-contaminated soils. Frontiers in Environmental Science, 2022, 10, p.978850.
          </li>
          <li>
            <strong>NOLLER, Christoph, FRIESL-HANL, Wolfgang, HOOD-NOWOTNY, Rebecca and WATRZINGER, Andrea.</strong> Remediating Garden Soils: EDTA-Soil Washing and Safe Vegetable Production in Raised Bed Gardens. Toxics, 2022, 10(11), p.652.
          </li>
          {/* Add more papers as needed */}
        </ul>
      </section>

      {/* Conference Contributions Section */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Scientific Conference Contributions</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>GLUHAR, Simon, KAURIN, Anela, VOGLAR, Grega E., FINŽGAR, Neža, LEŠTAN, Domen.</strong> Case studies of ReSoil® – novel technology for efficient and sustainable removal of heavy metals from contaminated soils. V: ICOBTE & ICHMET 2023: book of abstracts: 1st Joint International Conference of Biochemistry of Trace Elements & 21st International Conference of Heavy Metals: 6-10 September 2023, Wuppertal: Clean environment. Human health. Our future. [S. l.: s. n., 2023]. p. 443. <a href="https://icobte-ichmet-2023.com/custom/media/ICOBTE23/Abstract_Book_Final_3.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>
          </li>
          <li>
            <strong>LEŠTAN, Domen, GLUHAR, Simon, KAURIN, Anela, VOGLAR, Grega E.</strong> Efficient and sustainable removal of toxic metals and metalloids from soils with ReSoil® technology. V: Open science inspires: 2023 ASA, CSSA, SSSA International annual meeting: October 29 - November 1, 2023, St. Louis, Missouri, and limited virtual. Madison: American Society of Agronomy. <a href="https://scisoc.confex.com/scisoc/2023am/meetingapp.cgi/Paper/153960" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Link</a>
          </li>
          {/* Add more conference contributions as needed */}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Projects</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Achieving Remediation And GOverning Restoration of contaminated soils Now - ARAGORN</strong><br />
            Financer: ARAGORN has received funding from HORIZON-RIA - HORIZON Research and Innovation Actions (2021-2027) under grant agreement No 101112723<br />
            Duration: 01.10.2023 – 30.09.2027
          </li>
          <li>
            <strong>Remediation with toxic metals and metalloids and organic pollutants of contaminated soil at a model military shooting range - demonstration and recommendations for further measures</strong><br />
            Financer: Ministry of Defence of the Republic of Slovenia & Slovenian Research and Innovation Agency<br />
            Duration: 01.10.2022 – 01.10.2024
          </li>
          {/* Add more projects as needed */}
        </ul>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative bg-white p-4">
            <Image src={selectedImage} alt="Selected Image" layout="intrinsic" width={1000} height={1000} className="object-contain" />
            <button className="absolute top-2 right-2 text-white text-2xl font-bold" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}
