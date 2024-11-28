"use client";

import * as React from "react";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {Trophy} from "lucide-react";

const awards = [
  {
    title: "ScholarGPS™ Lifetime Recognition",
    description: "Top 0.05% of global scholars",
    image: "/awards/test.png",
    year: "2023"
  },
  {
    title: "Environmental Technology Innovation",
    description: "For groundbreaking technology",
    image: "/awards/test.png",
    year: "2022"
  },
  {
    title: "Sustainable Solution Award",
    description: "Excellence in eco-friendly remediation",
    image: "/awards/test.png",
    year: "2022"
  },
  {
    title: "Sustainable Solution Award",
    description: "Excellence in eco-friendly remediation",
    image: "/awards/test.png",
    year: "2022"
  },
  {
    title: "Sustainable Solution Award",
    description: "Excellence in eco-friendly remediation",
    image: "/awards/test.png",
    year: "2022"
  },
];

export default function RecognitionAndAwards() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-[#1B4B2A] bg-gradient-to-br from-[hsl(141.13,59.66%,23.33%)] via-[hsl(141.13,59.66%,28%)] to-[hsl(141.13,59.66%,33%)]" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-4 items-center text-center mb-8 sm:mb-14">
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/80">
            Awards
          </h3>
          <h2 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-3xl sm:text-4xl text-white font-semibold tracking-tighter"
          >
            Recognition & Awards
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-gray-100 text-[0.95rem] sm:text-[1rem] max-w-2xl mx-auto my-4 text-center relative"
          >
            Our commitment to innovation and environmental sustainability has been recognized by leading institutions worldwide.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <Carousel
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {awards.map((award, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  data-aos="fade-up"
                  data-aos-delay={400 + (index * 100)}
                >
                  <div className="p-1">
                    <Card className="bg-black/20 backdrop-blur-sm border-none">
                      <CardContent className="flex flex-col items-center p-4 sm:p-6">
                        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
                          <Image
                            src={award.image}
                            alt={award.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-white font-semibold text-sm sm:text-base mb-2">{award.title}</p>
                          <p className="text-gray-200 text-xs sm:text-sm mb-2">{award.description}</p>
                          <p className="text-gray-300 text-xs">{award.year}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious 
                data-aos="fade-right"
                data-aos-delay="500"
                className="text-white border-white hover:bg-white/20 bg-transparent" 
              />
              <CarouselNext 
                data-aos="fade-left"
                data-aos-delay="500"
                className="text-white border-white hover:bg-white/20 bg-transparent" 
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
} 