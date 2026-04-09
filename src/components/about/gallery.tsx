import GalleryCard from "@/components/about/gallerycard";
import { galleryItems } from "@/data/gallerycards";
import galleryBackground from "@/public/galleryBackground.webp";
import Image from "next/image";
import Subheader from "@/components/subheader";

const Gallery = () => {
  return (
    <div>
      <div className="relative pt-30">
        <Subheader name="Gallery" />
      </div>
      <div className="flex justify-center p-5 text-center text-2xl font-bold">
        <p className="from-archery-yellow-300 to-archery-blue-300 bg-gradient-to-r bg-clip-text p-5 text-transparent">
          Check out our competitions and events!
        </p>
      </div>

      <div className="relative min-h-screen w-full">
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
    </div>
  );
};

export default Gallery;
