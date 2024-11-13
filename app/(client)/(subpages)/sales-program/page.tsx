import SubpageTemplate from '@/app/components/SubpageTemplate';
import Image from "next/image";
import React from "react";
import { FaFilePdf } from "react-icons/fa6";

export default function SalesProgramPage() {
  return (
    <SubpageTemplate>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="space-y-4 items-center text-center mb-14">
            <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Sales Program</h3>
            <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">E-max™</h2>
            <p className="text-neutral-500 text-[1rem]  mx-auto my-4 text-center relative max-w-3xl">
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
              className="bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-sm hover:bg-primary-hover transition"
            >
              E-MAX User Manual
              <FaFilePdf className="inline-block ml-2" size={18} />
            </a>
            <a
              href="/sales-program/emax-application-note.pdf"
              className="bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-sm hover:bg-primary-hover transition"
            >
              E-MAX Application Note Soil & Rice
              <FaFilePdf className="inline-block ml-2" size={18} />
            </a>
            <a
              href="/sales-program/emax-application-note-soil.pdf"
              className="bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-sm hover:bg-primary-hover transition"
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
                    <th className="py-2 text-left text-sm font-semibold text-primary uppercase">
                      Feature
                    </th>
                    <th className="py-2 text-left text-sm font-semibold text-primary uppercase">
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="py-2 font-semibold">Method Compliance</td>
                    <td className="py-2">EPA 6200</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 font-semibold">Measurement Time</td>
                    <td className="py-2">30-1800 seconds</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Element Range</td>
                    <td className="py-2">Up to 40 Elements from K - U</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 font-semibold">Data Storage & Output</td>
                    <td className="py-2">
                      Printout, Ethernet, USB, Internal Storage, USB Flash Drive
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">I/O Ports</td>
                    <td className="py-2">Ethernet 10/100, USB</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 font-semibold">Power Supply</td>
                    <td className="py-2">
                      110-240 VAC ± 10%; 50-60 Hz (Hertz) <br />
                      Built-in Battery: 12-24V 98mAh
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Operating Temperature</td>
                    <td className="py-2">5°C to 40°C</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 font-semibold">Operating Humidity</td>
                    <td className="py-2">30 – 85 %</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Weight</td>
                    <td className="py-2">8kg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 font-semibold">Dimensions</td>
                    <td className="py-2">23 cm W x 30 cm L x 26 cm H</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </SubpageTemplate>
  );
}
