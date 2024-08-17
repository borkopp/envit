"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const DemoItem = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="relative w-full h-screen">
    <Image src={image} alt={title} layout="fill" className="absolute inset-0" />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
      <h6 className="text-2xl font-semibold uppercase mb-2">{title}</h6>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

const DemoSoilPlant = () => {
  const demoItems = [
    {
      image: "/demo1.png",
      title: "Vector Illustration",
      description:
        "LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology.",
    },
    {
      image: "/demo2.jpeg",
      title: "Vector Illustration",
      description:
        "LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology.",
    },
    {
      image: "/demo4.jpeg",
      title: "Vector Illustration",
      description:
        "LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology.",
    },
    {
      image: "/demo5.jpeg",
      title: "Vector Illustration",
      description:
        "LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology.",
    },
    {
      image: "/demo6.jpeg",
      title: "Vector Illustration",
      description:
        "LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology.",
    },
  ];

  return (
    <section className="py-16 bg-white" id="project">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">
            Demo Soil Plant
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="demo-swiper"
        >
          {demoItems.map((item, index) => (
            <SwiperSlide key={index}>
              <DemoItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DemoSoilPlant;
