"use client";
import Image from "next/image";
import { CarouselImages } from "@/data/carouselImages";

const Carousel = () => {
  return (
    <div className="relative mt-20 mb-10 hidden w-full overflow-hidden py-[2vh] md:block">
      <div className="animate-marquee flex w-max gap-x-4 pr-4 hover:[animation-play-state:paused]">
        {CarouselImages.map(({ image, alt }, index) => (
          <div key={`set1-${index}`} className="shrink-0">
            <Image
              src={image}
              alt={alt}
              className="h-[40vh] w-fit object-cover"
            />
          </div>
        ))}
        {CarouselImages.map(({ image, alt }, index) => (
          <div key={`set2-${index}`} className="shrink-0">
            <Image
              src={image}
              alt={alt}
              className="h-[40vh] w-fit object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
