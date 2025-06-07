"use client";
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Link from "next/link";

const DemoSoilPlant = () => {
  const demoItems = [
    {asset: {url: "/demo1.png"}},
    {asset: {url: "/demo2.jpeg"}},
    {asset: {url: "/demo4.jpeg"}},
    {asset: {url: "/demo5.jpeg"}},
    {asset: {url: "/demo6.jpeg"}},
  ];

  return (
    <section className="py-16 bg-white" id="project">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 items-center text-center mb-14">
          <h3 data-aos="fade-up" className="text-sm font-bold uppercase tracking-wide text-primary">
            Soil Plant
          </h3>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-semibold tracking-tighter sm:text-4xl">
            Soil Plant Demonstration
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-neutral-500 text-[1rem] max-w-2xl mx-auto my-4 text-center relative">
            Explore our innovative soil plant solutions through this visual demonstration. <span>To read more </span>
            <Link href="/demo-resoil-plant">
              <span className="underline">click here</span>
            </Link>
          </p>
        </div>
        <div className="max-w-full sm:max-w-3xl mx-auto">
          <Carousel data-aos="fade-up" className="w-full">
            <CarouselContent>
              {demoItems.map((item, index) => (
                <CarouselItem key={index} className="pl-0 sm:pl-4">
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={item.asset.url} alt={`Demo image ${index + 1}`} fill className="object-cover rounded-lg" />
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
};

export default DemoSoilPlant;
