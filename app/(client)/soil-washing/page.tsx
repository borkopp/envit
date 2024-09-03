// Mark this file as a Client Component
"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function SoilWashing() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/washing/3.jpeg",,
    "/washing/2.jpeg",
    "/washing/3.jpeg",
    "/washing/2.jpeg",
    "/washing/3.jpeg",
    "/washing/2.jpeg",
    "/washing/3.jpeg",
    "/washing/2.jpeg"
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10">
      {/* Two Paragraphs with Gap */}
      <div className="mb-12">
        <p className="text-lg mb-6">
        The soil-washing plant with ReSoil® technology was constructed in city of Prevalje which sits in a contaminated area of Meža Valley, Slovenia. The mission of this facility is to prove the scalability of ReSoil® technology. With the capacity of 6 t/day it enables demonstrational remediation of local sites as well as demonstration of ReSoil® technology to stakeholders. The Technology Readiness Level of plant operation is TRL 7 (EU, NASA methodology).         </p>
        <p className="text-lg">
        The permit for construction of this soil washing plant was granted by Slovenian Environmental Protection Agency in 2017. The permit was based on proofs of ReSoil® closed process cycles operation and zero-emissions. Construction of the plant was co-financed from EU LIFE + Programme with 50% contribution of 1.1 M EUR. The operating permit for this soil-washing plant was obtained in July 2018. The ReSoil® technology uses common process equipment such are sieves, mixing vessels and filter presses. The remediation process can be controlled manually and the innovative part of ReSoil® technology, i.e. in press soil rinsing, EDTA and process water recycling, can also be controlled automatically by the SCADA (supervisory, control and data acquisition) system.        </p>
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative cursor-pointer" onClick={() => handleImageClick(src)}>
            <Image src={src} alt={`Image ${index + 1}`} layout="responsive" width={500} height={500} className="object-cover" />
          </div>
        ))}
      </div>

      {/* Modal for Maximized Image */}
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
