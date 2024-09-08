"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface GallerySliderProps {
  images: { asset: { url: string } }[];
  interval?: number;
}

const GallerySlider: React.FC<GallerySliderProps> = ({
  images,
  interval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(images.length / slidesPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prevPage) => {
        const nextPage = (prevPage % totalSlides) + 1;
        setCurrentSlide(nextPage - 1);
        return nextPage;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [interval, totalSlides]);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const changePage = (page: number) => {
    setCurrentPage(page);
    setCurrentSlide(page - 1);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex =
      direction === "prev"
        ? (selectedImage - 1 + images.length) % images.length
        : (selectedImage + 1) % images.length;
    setSelectedImage(newIndex);
  };

  const navigateSlide = (direction: "prev" | "next") => {
    setCurrentPage((prevPage) => {
      const newPage =
        direction === "prev"
          ? (prevPage - 1 + totalSlides) % totalSlides || totalSlides
          : (prevPage % totalSlides) + 1;
      setCurrentSlide(newPage - 1);
      return newPage;
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (event.key) {
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
        case "Escape":
          closeModal();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex-shrink-0 w-full flex">
                {images
                  .slice(
                    slideIndex * slidesPerView,
                    slideIndex * slidesPerView + slidesPerView
                  )
                  .map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className={`w-1/${slidesPerView} p-2`}
                    >
                      <Image
                        src={image.asset.url}
                        alt={`Gallery image ${slideIndex * slidesPerView + imageIndex + 1}`}
                        width={300}
                        height={300}
                        className="w-full h-[300px] object-cover rounded cursor-pointer"
                        onClick={() =>
                          openModal(slideIndex * slidesPerView + imageIndex)
                        }
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2  text-green-500 text-3xl p-2 z-10"
          style={{ left: "-25px" }}
          onClick={() => navigateSlide("prev")}
        >
          ‹
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2  text-green-500 text-3xl p-2 z-10"
          style={{ right: "-25px" }}
          onClick={() => navigateSlide("next")}
        >
          ›
        </button>
      </div>
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-4xl"
            onClick={closeModal}
          >
            ×
          </button>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10 -ml-12"
            onClick={() => navigateSlide("prev")}
          >
            ‹
          </button>
          <Image
            src={images[selectedImage].asset.url}
            alt={`Full-screen image ${selectedImage + 1}`}
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10 -mr-12"
            onClick={() => navigateSlide("next")}
          >
            ›
          </button>
        </div>
      )}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => changePage(index + 1)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default GallerySlider;
