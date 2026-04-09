"use client";
import Image from "next/image";
import { CarouselImages } from "@/data/carouselImages";

const Carousel = () => {
  return (
    <div className="relative mt-20 mb-10 w-full overflow-hidden py-[2vh]">
      <div className="animate-marquee hidden w-max gap-x-4 pr-4 hover:[animation-play-state:paused] md:flex">
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
      <div className="flex gap-2 md:hidden">
        <div className="flex flex-col gap-2">
          <Image src={CarouselImages[0].image} alt="" className="" />
          <Image src={CarouselImages[3].image} alt="" className="h-1/2" />
        </div>
        <div className="flex flex-col gap-2">
          <Image src={CarouselImages[2].image} alt="" className="h-1/2" />
          <Image src={CarouselImages[1].image} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
