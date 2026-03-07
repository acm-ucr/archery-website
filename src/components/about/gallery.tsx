import GalleryCard from "@/components/about/gallerycard";
import { galleryItems } from "@/data/gallerycards";
import galleryBackground from "@/public/galleryBackground.webp";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="relative min-h-screen w-full py-8 md:py-12 lg:py-20">
      <Image
        src={galleryBackground}
        alt="Gallery Background"
        fill
        className="object-cover contrast-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/10" />
      <div className="container mx-auto px-5 sm:px-10 md:px-13 lg:px-16">
        <div className="grid grid-cols-1 gap-4 p-4 sm:gap-3 sm:p-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          {galleryItems.map(({ title, image }, index) => (
            <GalleryCard key={index} title={title} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
