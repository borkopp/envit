"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: { asset: { url: string } }[];
}
export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.asset.url}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={image.asset.url}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
              onClick={() => openModal(index)}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={closeModal}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0">
          <Button
            className="absolute right-4 top-4 z-10 rounded-full p-2 px-2 bg-black/50 hover:bg-black/75"
            onClick={closeModal}
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </Button>
          {selectedImageIndex !== null && (
            <>
              <div className="relative w-full h-full">
                <Image
                  src={images[selectedImageIndex].asset.url}
                  alt={`Gallery image ${selectedImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="95vw"
                />
              </div>
              <Button
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 bg-black/50 hover:bg-black/75"
                onClick={() => navigateImage("prev")}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 bg-black/50 hover:bg-black/75"
                onClick={() => navigateImage("next")}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
