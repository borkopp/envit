"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialItem = ({
  content,
  question,
  image,
}: {
  content: string;
  question: string;
  image: string;
}) => (
  <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
    <div className="flex items-center mb-4">
      <Image
        src={image}
        alt="User"
        width={20}
        height={20}
        className="rounded-full mr-4"
      />
      <h3 className="font-bold text-gray-700 text-lg">{question}</h3>
    </div>
    <p className="text-gray-600 flex-grow">{content}</p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      question:
        "Is ReSoil® technology limited to removal of Pb from contaminated soils?",
      content:
        "EDTA which is used as a chelating agent in ReSoil® technology removes Cd, Zn, Cu and other toxic metals non-specifically from contaminated soils. Pb is the most ubiquitous of these metals and presents the most pervasive and persistent risk to human health.",
      image: "/user1.png",
    },
    {
      question:
        "How effective is ReSoil® in treating heavily contaminated soils?",
      content:
        "Our experience shows that ReSoil® is highly effective even for soils with severe contamination. We've successfully treated soils with lead concentrations exceeding 5000 mg/kg, reducing levels to below 300 mg/kg in a single treatment cycle.",
      image: "/user2.png",
    },
    {
      question: "What's the environmental impact of using ReSoil® technology?",
      content:
        "ReSoil® is designed with environmental sustainability in mind. The process recycles water and chelating agents, minimizing waste. Additionally, it preserves soil structure and microbial activity, allowing for immediate replanting after treatment.",
      image: "/user1.png",
    },
  ];

  return (
    <section
      className="py-24 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/testimonial-bg.jpg')" }}
      id="testimonials"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          className="testimonials-swiper"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto">
              <TestimonialItem {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          padding: 8px 16px;
          border-radius: 50%;
          display: none;
        }

        @media (min-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: flex;
          }

          .swiper-button-prev {
            left: -30px;
          }

          .swiper-button-next {
            right: -30px;
          }
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
