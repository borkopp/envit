"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const DemoSoilPlant = () => {
  const demoItems = [
    { asset: { url: "/demo1.png" } },
    { asset: { url: "/demo2.jpeg" } },
    { asset: { url: "/demo4.jpeg" } },
    { asset: { url: "/demo5.jpeg" } },
    { asset: { url: "/demo6.jpeg" } },
  ];

  return (
    <section className="py-16 bg-white" id="project">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold mb-4">
            Soil Plant Demonstration
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Explore our innovative soil plant solutions through this visual
            demonstration. <span>To read more </span>
            <Link href="/demo-resoil-plant">
              <span className="underline">click here</span>
            </Link>
          </p>
        </div>
        <div className="max-w-full sm:max-w-3xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {demoItems.map((item, index) => (
                <CarouselItem key={index} className="pl-0 sm:pl-4">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.asset.url}
                      alt={`Demo image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
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
