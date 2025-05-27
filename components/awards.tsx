"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Leaf,
  Shield,
  Star,
  Trophy,
  Users,
  MoveRight,
  MoveLeft,
} from "lucide-react";
import { client } from "@/sanity/lib/client";

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

export function LampDemo() {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const itemsPerSlide = 2.5; // Show 2.5 items to make third item half-visible
  const totalSlides = Math.ceil(awards.length - itemsPerSlide + 1);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <LampContainer>
      <div className="w-full max-w-7xl mx-auto pl-24">
        <div className="flex flex-col lg:flex-row items-start gap-16 pt-24">
          {/* Left Side - Text and Navigation */}
          <div className="w-full lg:w-2/5">
            <motion.div
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="text-left"
            >
              <h1 className="bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-500 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl leading-tight mb-6">
                Recognition <br /> & Awards
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-md">
                Being appreciated by the industry and environmental
                organizations means the world to us.
              </p>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-green-50 transition-all duration-300 group"
                  disabled={currentSlide === 0}
                >
                  <MoveLeft className="w-8 h-8 text-slate-600 dark:text-slate-400 group-hover:text-green-600" />
                </button>

                <div className="flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden max-w-32">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${((currentSlide + 1) / totalSlides) * 100}%`,
                    }}
                  />
                </div>

                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-green-50  transition-all duration-300 group"
                  disabled={currentSlide === totalSlides - 1}
                >
                  <MoveRight className="w-8 h-8 text-slate-600 dark:text-slate-400 group-hover:text-green-600" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Awards Display */}
          <div className="w-full lg:w-3/5">
            <div className="overflow-hidden py-4 px-2">
              <motion.div
                animate={{
                  x: `${-currentSlide * 320}px`,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="flex"
              >
                {awards.map((award, index) => {
                  const isFirstInSlide = index === currentSlide;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: isFirstInSlide ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="group bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 rounded-2xl p-6 shadow-md  transition-all duration-300 border border-gray-100/50 dark:border-slate-700/50 hover:border-green-200 dark:hover:border-green-800 flex-shrink-0 mr-6"
                      style={{
                        width: "300px",
                        height: "300px",
                      }}
                    >
                      {/* Award Image */}
                      <div className="flex items-center justify-center w-28 h-28 rounded-xl mb-4 mx-auto group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                        <div className="relative w-28 h-28">
                          <Image
                            src={award.image.asset.url}
                            alt={award.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Award Info */}
                      <div className="text-center space-y-4 flex-1 flex flex-col">
                        <div className="text-sm font-bold text-green-600 dark:text-green-400">
                          {award.year}
                        </div>
                        <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm leading-tight">
                          {award.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 flex-1 line-clamp-4">
                          {award.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </LampContainer>
  );
}
