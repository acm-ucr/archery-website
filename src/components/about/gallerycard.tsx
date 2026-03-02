import Image, { StaticImageData } from "next/image";

interface GalleryCardProps {
  title: string;
  image: string | StaticImageData;
}

const GalleryCard = ({ title, image }: GalleryCardProps) => {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl md:aspect-[10/9] lg:aspect-[21/17]">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="bg-archery-grey-200/55 absolute inset-0 flex items-center justify-center shadow-lg">
        <p className="font-archery-kaushan text-center text-3xl whitespace-pre-line text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </p>
      </div>
    </div>
  );
};
export default GalleryCard;
