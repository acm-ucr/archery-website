"use client";
import Image from "next/image";
import { CarouselImages } from "@/data/carouselImages";
import { useRef, useState, useEffect } from "react";

const Carousel = () => {
  const marqueeReference = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState("20s");

  useEffect(() => {
    if (marqueeReference.current) {
      const carouselLength = marqueeReference.current.scrollWidth;
      const speed = 0.02;
      setDuration(`${carouselLength * speed}s`);
    }
  }, []);

  return (
    <div className="relative mt-10 mb-10 hidden w-full overflow-hidden py-[2vh] md:flex">
      <div
        className="animate-marquee flex gap-x-4 px-[1vw]"
        style={{ animationDuration: duration }}
        ref={marqueeReference}
      >
        {CarouselImages.map(({ image, alt }, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={alt}
              className="min-h-[40vh] min-w-[20vw]"
            />
          </div>
        ))}
      </div>
      <div
        className="animate-marquee-continuation absolute flex justify-between gap-x-4 px-[1vw]"
        style={{ animationDuration: duration }}
      >
        {CarouselImages.map(({ image, alt }, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={alt}
              className="min-h-[40vh] min-w-[20vw]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
