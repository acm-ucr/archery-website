"use client";
import Image, { StaticImageData } from "next/image";
import topLeft from "@/public/gallery_topleft.webp";
import midLeft from "@/public/gallery_midleft.webp";
import bottomLeft from "@/public/gallery_bottomleft.webp";
import topRight from "@/public/gallery_topright.webp";
import midRight from "@/public/gallery_midright.webp";
import bottomRight from "@/public/gallery_bottomright.webp";
import { motion } from "motion/react"

interface imageInfo {
  imageL: StaticImageData;
  imageR: StaticImageData;
}

const ImageProp: imageInfo[] = [
  {
    imageL: topLeft,
    imageR: topRight,
  },
  {
    imageL: midLeft,
    imageR: midRight,
  },
  {
    imageL: bottomLeft,
    imageR: bottomRight,
  },
];

const GalleryGrid = () => {
  return (
    <div className="relative flex flex-col items-center gap-2">
      {ImageProp.map(({ imageL, imageR }, index) => (
        <motion.div key={index} initial={{opacity:0, y:20}} transition={{duration:0.6, delay: index*0.15}} whileInView={{opacity:1, y:0}} viewport={{once : true}} className="flex gap-2">
            <div className="relative">
              <Image
                src={imageL}
                alt="Picture of Archery Club Members"
                className="object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src={imageR}
                alt="Picture of Archery Club Members"
                className="object-cover"
              />
            </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
