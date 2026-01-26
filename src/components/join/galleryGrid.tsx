import Image from "next/image";
import topLeft from "@/public/gallery_topleft.webp";
import midLeft from "@/public/gallery_midleft.webp";
import bottomLeft from "@/public/gallery_bottomleft.webp";
import topRight from "@/public/gallery_topright.webp";
import midRight from "@/public/gallery_midright.webp";
import bottomRight from "@/public/gallery_bottomright.webp";

const GalleryGrid = () => {
  return (
    <div className="relative flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <Image
          src={topLeft}
          alt="Picture of Archery Club Members"
          className="object-cover"
        />
        <Image
          src={topRight}
          alt="Picture of Archery Club Members"
          className="object-cover"
        />
      </div>
      <div className="flex gap-2">
        <Image
          src={midLeft}
          alt="Picture of Archery Club Members"
          className="object-cover"
        />
        <Image
          src={midRight}
          alt="Picture of Archery Club Members"
          className="object-cover"
        />
      </div>
      <div className="flex gap-2">
        <Image
          src={bottomLeft}
          alt="Picture of Archery Club Members"
          className="object-cover"
        />
        <Image
          src={bottomRight}
          alt="Picture of Archery Club Members"
          className="ml-2 object-cover"
        />
      </div>
    </div>
  );
};

export default GalleryGrid;
