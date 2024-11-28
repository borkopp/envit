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
    <section className="relative py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        // style={{backgroundImage: "url('/hero-bg.jpeg')"}}
      />
      <div className="absolute inset-0 bg-primary"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-4 items-center text-center mb-14">
          <h3 
                
            className="text-sm font-bold uppercase tracking-wide text-white/80"
          >
            Awards
          </h3>
          <h2 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl text-white font-semibold tracking-tighter sm:text-4xl"
          >
            Recognition & Awards
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-gray-100 text-[1rem] max-w-2xl mx-auto my-4 text-center relative"
          >
            Our commitment to innovation and environmental sustainability has been recognized by leading institutions worldwide.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {awards.map((award, index) => (
                <CarouselItem 
                  key={index} 
                  className="md:basis-1/2 lg:basis-1/3"
                  data-aos="fade-up"
                  data-aos-delay={400 + (index * 100)}
                >
                  <div className="p-1">
                    <Card className="bg-black/20 backdrop-blur-sm border-none">
                      <CardContent className="flex flex-col items-center p-6">
                        <div className="relative w-32 h-32 mb-4">
                          <Image
                            src={award.image}
                            alt={award.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-white font-semibold mb-2">{award.title}</p>
                          <p className="text-gray-200 text-sm mb-2">{award.description}</p>
                          <p className="text-gray-300 text-xs">{award.year}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
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
          </Carousel>
        </div>
      </div>
    </section>
  );
} 