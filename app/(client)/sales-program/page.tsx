import Image from "next/image";
import React from "react";
import { FaFilePdf } from "react-icons/fa6";

const SalesProgramPage = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-gray-800 text-center font-bold mb-10">
            E-max™
          </h1>
          <p className="text-xl text-gray-700">
            A portable and robust analyzer to quantify <strong>cadmium</strong>{" "}
            and other potentially toxic elements in soil and food
          </p>
          <p className="mt-4 text-gray-600">
            We provide you with the XRF analyzer that offers unprecedented low
            cadmium (Cd) detection limit, high accuracy, and excellent
            repeatability for other potentially toxic elements such as lead
            (Pb), arsenic (As), antimony (Sb), as well for low levels of mercury
            (Hg).
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          <a
            href="/sales-program/emax-manual.pdf"
            className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-sm hover:bg-green-600 transition"
          >
            E-MAX User Manual
            <FaFilePdf className="inline-block ml-2" size={18} />
          </a>
          <a
            href="/sales-program/emax-application-note.pdf"
            className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-sm hover:bg-green-600 transition"
          >
            E-MAX Application Note Soil & Rice
            <FaFilePdf className="inline-block ml-2" size={18} />
          </a>
          <a
            href="/sales-program/emax-application-note-soil.pdf"
            className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-sm hover:bg-green-600 transition"
          >
            E-MAX Application Note Soil
            <FaFilePdf className="inline-block ml-2" size={18} />
          </a>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mx-auto">
          <div className="flex flex-col items-center">
            {/* Analyzer Image */}
            <Image
              src="/sales-program/zspec.png"
              alt="E-max Analyzer"
              width={500}
              height={200}
              className="mb-6 max-w-full h-auto"
            />

            {/* Specifications Table */}
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 text-left text-sm font-medium text-gray-500 uppercase">
                    Feature
                  </th>
                  <th className="py-2 text-left text-sm font-medium text-gray-500 uppercase">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="py-2">Method Compliance</td>
                  <td className="py-2">EPA 6200</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2">Measurement Time</td>
                  <td className="py-2">30-1800 seconds</td>
                </tr>
                <tr>
                  <td className="py-2">Element Range</td>
                  <td className="py-2">Up to 40 Elements from K - U</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2">Data Storage & Output</td>
                  <td className="py-2">
                    Printout, Ethernet, USB, Internal Storage, USB Flash Drive
                  </td>
                </tr>
                <tr>
                  <td className="py-2">I/O Ports</td>
                  <td className="py-2">Ethernet 10/100, USB</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2">Power Supply</td>
                  <td className="py-2">
                    110-240 VAC ± 10%; 50-60 Hz (Hertz) <br />
                    Built-in Battery: 12-24V 98mAh
                  </td>
                </tr>
                <tr>
                  <td className="py-2">Operating Temperature</td>
                  <td className="py-2">5°C to 40°C</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2">Operating Humidity</td>
                  <td className="py-2">30 – 85 %</td>
                </tr>
                <tr>
                  <td className="py-2">Weight</td>
                  <td className="py-2">8kg</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2">Dimensions</td>
                  <td className="py-2">23 cm W x 30 cm L x 26 cm H</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesProgramPage;
