import GalleryCard from "@/components/about/gallerycard";
import galleryWestRegionals from "@/public/galleryWestRegionals.webp";
import gallerySIACC from "@/public/gallerySIACC.webp";
import galleryIndoorNationals from "@/public/galleryIndoorNationals.webp";
import galleryBanquet from "@/public/galleryBanquet.webp";
import galleryBackground from "@/public/galleryBackground.webp";
import Image from "next/image";

const Gallery = () => {
  const galleryItems = [
    { title: "West\nRegionals", image: galleryWestRegionals },
    { title: "SIACC", image: gallerySIACC },
    { title: "Indoor\nNationals", image: galleryIndoorNationals },
    { title: "Banquet", image: galleryBanquet },
  ];
  return (
    <div className="relative min-h-screen w-full py-12 md:py-20">
      <Image
        src={galleryBackground}
        alt="Gallery Background"
        fill
        className="object-cover contrast-50"
        priority
      />

      <div className="relative z-10 container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2 md:gap-12">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
