"use client";

import * as React from "react";
import {useState, useEffect} from "react";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel-modern";
import {client} from "@/sanity/lib/client";

interface Award {
  title: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  year: string;
}

export default function RecognitionAndAwards() {
  const [awards, setAwards] = useState<Award[]>([]);

  useEffect(() => {
    async function fetchAwards() {
      const query = `
      *[_type == "award"] | order(year desc) {
        title,
        description,
        year,
        image {
          asset-> {
            url
          }
        }
      }
      `;
      const data = await client.fetch(query);
      setAwards(data);
    }
    fetchAwards();
  }, []);

  return (
    <section className="relative py-12 sm:py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(220,242,232)] via-[rgb(200,238,220)] to-[rgb(180,235,208)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-4 items-center text-center mb-8 sm:mb-14">
          <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-800/80">Awards</h3>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl text-emerald-900 font-semibold tracking-tighter">
            Recognition & Awards
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-emerald-800/90 text-[0.95rem] sm:text-[1rem] max-w-2xl mx-auto my-4 text-center relative">
            Our commitment to innovation and environmental sustainability has been recognized by leading institutions worldwide.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {awards.map((award, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3" data-aos="fade-up" data-aos-delay={400 + index * 100}>
                  <div className="p-1">
                    <Card className="bg-white/40 backdrop-blur-sm border border-emerald-600/20">
                      <CardContent className="flex flex-col items-center p-4 sm:p-6">
                        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
                          <Image src={award.image.asset.url} alt={award.title} fill className="object-contain" />
                        </div>
                        <div className="text-center">
                          <p className="text-emerald-900 font-semibold text-sm sm:text-base mb-2">{award.title}</p>
                          <p className="text-emerald-800/90 text-xs sm:text-sm mb-2">{award.description}</p>
                          <p className="text-emerald-700 text-xs">{award.year}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
