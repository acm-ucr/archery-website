import Image from "next/image";
import Icon from "@/public/boardMemberIcon.png";
interface CardProps {
  name: string;
  position: string;
}
const Card = ({ name, position }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 p-4">
      <div className="mb-5 w-1/2 max-w-xs">
        <Image src={Icon} alt="Board Member Icon" />
      </div>

      <div className="text-2xl font-bold">{position}</div>
      <div className="text-2xl">{name}</div>
    </div>
  );
};
export default Card;
