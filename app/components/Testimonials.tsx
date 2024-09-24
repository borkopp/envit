"use client";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialItem = ({content, question, image}: {content: string; question: string; image: string}) => (
  <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between">
    <div>
      <div className="flex items-center mb-4">
        {/* <Image src={image} alt="User" width={40} height={40} className="rounded-full mr-4" /> */}
        <h3 className="font-bold text-gray-700 text-lg">{question}</h3>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
    <div className=""></div> {/* Spacer for consistent bottom padding */}
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      question: "Who are we?",
      content:
        "Envit embodies a collective commitment to environmental responsibility. Our mission is to develop and implement advanced soil remediation techniques that not only resolve current contamination issues but also pave the way for a greener, more sustainable future.  We work to restore contaminated soils safely and efficiently, ensuring a healthier environment for future generations.",
      image: "/user1.png",
    },
    {
      question: "Introducing ReSoil® technology",
      content:
        "ReSoil® is internationally patented, groundbreaking remediation solution that enables closed-loop removal of heavy metals and metalloids from contaminated soils through a zero-emission process with no wastewater, while preserving soil as a natural substrate. ",
      image: "/user1.png",
    },
    {
      question: "What makes ReSoil® innovative compared to existing solutions?",
      content:
        "ReSoil® by Envit is innovative to its high efficiency in removing up to 95% of heavy metals, its versatility in treating various soil types and contamination levels, and its commitment to environmental sustainability. Unlike traditional methods that may generate emissions or wastewater, ReSoil® operates cleanly, preserving soil properties and reducing environmental impact. Its cost-effective solution, ranging from €70 - €150 sets it apart as a leading choice for effective and eco-friendly soil remediation.",
      image: "/user2.png",
    },
    {
      question: "Who cares about your innovation?",
      content:
        "ReSoil® technology brings added value and can support the goals and ambitions of: Policy makers/regulators - We offer new, cost-effective solutions for soil cleanup that fit national strategies and environmental rules, meeting the need for better environmental technologies. End-users - Local communities, NGOs, and urban gardeners benefit from our ability to clean soil in areas where other methods don't work, like cities or military sites. Remediation and construction companies - As our main customers, we provide innovative, efficient, and profitable solutions that improve project results and increase earnings.",
      image: "/user1.png",
    },
    {
      question: "Why partner with us?",
      content:
        "Expertise You Can Trust: Our team of dedicated professionals brings a wealth of experience and knowledge to every project. We are committed to delivering high-quality, precise solutions tailored to your specific needs. Dr. Domen Leštan, our co-founder and leading expert, has been honored with the ScholarGPS™ Lifetime recognition as one of the top 0.05% of global scholars. His work in soil contamination and the innovative ReSoil® technology, underscores our commitment to solutions and advanced research. Dr. Leštan’s extensive publication record, impactful research, and numerous patents in soil remediation highlight our team's exceptional expertise and dedication to environmental technology.",
      image: "/user1.png",
    },
    {
      question: "Why partner with us?",
      content:
        "Sustainability at Our Core: At Envit, sustainability drives everything we do. We are deeply committed to developing solutions that are not only effective but also environmentally responsible, ReSoil® technology is designed to minimize environmental impact, preserve soil health, and support long-term ecological balance",
      image: "/user1.png",
    },
  ];

  return (
    <section className="py-24 bg-cover bg-center relative" style={{backgroundImage: "url('/bg-hero.webp')"}} id="testimonials">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Swiper
          data-aos="fade-up"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          className="testimonials-swiper"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={false}
          autoplay={{
            delay: 10000,
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
          }}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto flex">
              <TestimonialItem {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      <style jsx>{`
        .testimonials-swiper {
          padding-bottom: 50px; /* Add space for pagination dots */
        }
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

        .swiper-pagination-bullet {
          background-color: white;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
