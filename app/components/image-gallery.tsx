"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: { asset: { url: string } }[];
}

// Helper function to generate blur placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="20%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const getOptimizedImageUrl = (url: string, width: number, height: number) => {
  return url;
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [imageLoadingStates, setImageLoadingStates] = useState<{
    [key: number]: boolean;
  }>({});

  const openModal = (index: number) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);

  const navigateImage = useCallback(
    (direction: "next" | "prev") => {
      if (selectedImageIndex === null) return;
      const newIndex =
        direction === "next"
          ? (selectedImageIndex + 1) % images.length
          : (selectedImageIndex - 1 + images.length) % images.length;
      setSelectedImageIndex(newIndex);
    },
    [images.length, selectedImageIndex]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (event.key === "ArrowRight") navigateImage("next");
      if (event.key === "ArrowLeft") navigateImage("prev");
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, navigateImage]);

  const handleImageLoad = (index: number) => {
    setImageLoadingStates((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={`${image.asset.url}-${index}`}
            className="relative aspect-square overflow-hidden rounded-lg bg-gray-200"
          >
            <Image
              src={getOptimizedImageUrl(image.asset.url, 400, 400)}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{
                transform: "translate3d(0, 0, 0)",
                filter: imageLoadingStates[index]
                  ? "brightness(0.9)"
                  : "brightness(0.7)",
              }}
              onClick={() => openModal(index)}
              onLoad={() => handleImageLoad(index)}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
              loading={index < 8 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={index < 4}
            />
            {!imageLoadingStates[index] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
                <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={closeModal}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black">
          <Button
            className="absolute right-4 top-4 z-50 rounded-full p-2 px-2 bg-black/50 hover:bg-black/75 backdrop-blur-sm"
            onClick={closeModal}
            aria-label="Close dialog"
          >
            <X className="h-5 w-5 text-white" />
          </Button>
          {selectedImageIndex !== null && (
            <>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={getOptimizedImageUrl(
                    images[selectedImageIndex].asset.url,
                    1920,
                    1080
                  )}
                  alt={`Gallery image ${selectedImageIndex + 1}`}
                  fill
                  className="object-contain"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
                  sizes="95vw"
                  priority
                />
              </div>
              <Button
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 bg-black/50 hover:bg-black/75 backdrop-blur-sm z-40"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </Button>
              <Button
                className="absolute right-20 top-1/2 -translate-y-1/2 rounded-full p-3 bg-black/50 hover:bg-black/75 backdrop-blur-sm z-40"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
