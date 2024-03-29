import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Slideshow() {
  return (
    <div className="w-full h-auto flex justify-center">
      <Carousel className="w-[90%] ">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <img src="./default-gallery-7.jpg" className="w-full object-cover md:h-full md:w-auto"></img>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious size={8} />
        <CarouselNext  />
      </Carousel>
    </div>
  );
}
