"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: { asset: { url: string } }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = React.useCallback(() => {
    setSelectedImage(null);
  }, []);

  const navigateImage = React.useCallback(
    (direction: "prev" | "next") => {
      if (selectedImage === null) return;
      const newIndex =
        direction === "prev"
          ? (selectedImage - 1 + images.length) % images.length
          : (selectedImage + 1) % images.length;
      setSelectedImage(newIndex);
    },
    [selectedImage, images.length]
  );

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

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, navigateImage, closeModal]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.asset.url}
            alt={`Gallery image ${index + 1}`}
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-lg cursor-pointer"
            onClick={() => openModal(index)}
          />
        ))}
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
            className="absolute left-4 top-1/2 text-white text-4xl"
            onClick={() => navigateImage("prev")}
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
            className="absolute right-4 top-1/2 text-white text-4xl"
            onClick={() => navigateImage("next")}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};
export default ImageGallery;
