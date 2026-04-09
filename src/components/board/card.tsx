import Image, { StaticImageData } from "next/image";

interface CardProps {
  src: StaticImageData;
  name: string;
  position: string;
}
const Card = ({ src, name, position }: CardProps) => {
  return (
    <div className="text-archery-grey-300 flex flex-col items-center justify-center gap-1 p-4">
      <div className="mb-5 w-3/4 max-w-sm">
        <Image
          src={src}
          alt="Board Member Icon"
          className="w-full rounded-full"
        />
      </div>

      <div className="text-2xl font-bold">{position}</div>
      <div className="text-2xl">{name}</div>
    </div>
  );
};
export default Card;
