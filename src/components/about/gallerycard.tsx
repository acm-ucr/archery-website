import Image, { StaticImageData } from "next/image";

interface GalleryCardProps {
  title: string;
  image: string | StaticImageData;
}

const GalleryCard = ({ title, image }: GalleryCardProps) => {
  return (
    <div className="relative aspect-[532/415] w-full overflow-hidden rounded-3xl">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="bg-archery-grey-200/55 absolute inset-0 flex items-center justify-center shadow-lg">
        <p className="font-archery-kaushan text-center text-lg whitespace-pre-line text-white md:text-6xl">
          {title}
        </p>
      </div>
    </div>
  );
};
export default GalleryCard;
