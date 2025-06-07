"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Soil Contamination",
      button: "Learn More",
      src: "/demo2.jpeg",
    },
    {
      title: "Decontamination",
      button: "Learn More",
      src: "/demo4.jpeg",
    },
    {
      title: "Soil Remediation",
      button: "Learn More",
      src: "/demo5.jpeg",
    },
    {
      title: "Soil Plant",
      button: "Learn More",
      src: "/demo6.jpeg",
    },
  ];
  return (
    <div data-aos="fade-up" data-aos-delay="100" className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
