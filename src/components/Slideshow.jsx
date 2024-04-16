import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const imageArray = ["./about-image-2.jpg", "./about-image-3.jpg", "./about-image-5.jpg", "./about-image-5.jpg", "./about-image-5.jpg"];


export default function Slideshow() {
  return (
    <div className="w-full h-auto flex justify-center">
      <Carousel className="w-[90%] md:w-[50%]">
        <CarouselContent>
          {imageArray.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <img src={src} className="w-full object-cover md:h-full md:w-auto" alt={`Slide ${index + 1}`} />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious size={8} />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
