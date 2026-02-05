import { StaticImageData } from "next/image";
import image1 from "@/public/CarouselImages/CarouselImage1.webp";
import image2 from "@/public/CarouselImages/CarouselImage2.webp";
import image3 from "@/public/CarouselImages/CarouselImage3.webp";
import image4 from "@/public/CarouselImages/CarouselImage4.webp";

export interface CarouselImageItem {
  image: StaticImageData;
  alt: string;
}

export const CarouselImages: CarouselImageItem[] = [
  { image: image1, alt: "Carousel Image 1" },
  { image: image2, alt: "Carousel Image 2" },
  { image: image3, alt: "Carousel Image 3" },
  { image: image4, alt: "Carousel Image 4" },
];
