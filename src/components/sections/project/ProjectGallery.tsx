// src/components/sections/projects/ProjectGallery.tsx
"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  // Ensure we have at least one image to display
  const displayImages =
    images.length > 0 ? images : ["/projects/placeholder.jpg"];

  return (
    <div className="w-full mb-6">
      <Carousel className="w-full">
        <CarouselContent>
          {displayImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority={index === 0}
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4" />
        <CarouselNext className="right-2 md:right-4" />
      </Carousel>

      {/* Optional: Add image counter/indicator */}
      {displayImages.length > 1 && (
        <div className="flex justify-center mt-2 text-sm text-slate-500 dark:text-slate-400">
          <span>Swipe or use arrows to navigate screenshots</span>
        </div>
      )}
    </div>
  );
}
