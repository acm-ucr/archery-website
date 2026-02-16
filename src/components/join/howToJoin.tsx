import { LuTarget } from "react-icons/lu";
import Image from "next/image";
import ClubSports from "@/public/ClubSports.png";

const HowToJoin = () => {
  return (
    <div className="text-archery-grey-300 flex flex-col items-center justify-center">
      <div className="mb-5 w-1/2 max-w-xs">
        <Image src={ClubSports} alt="Club Sports Logo" className="w-full" />
      </div>
      <div className="flex items-center justify-center">
        <LuTarget className="text-4xl" aria-label="Target" />
        <div className=""></div>
      </div>
    </div>
  );
};
export default HowToJoin;
