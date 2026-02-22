import Target from "@/public/Target_Weld.svg";
import Image from "next/image";
import ClubSports from "@/public/ClubSports.png";
import InnerClubSports from "@/public/InnerClubSports.png";

const HowToJoin = () => {
  return (
    <div className="text-archery-grey-200 flex flex-col items-center justify-center">
      <div className="mb-5 w-1/2 max-w-xs">
        <div className="flex items-start">
          <Image src={Target} alt="Target" className="mx-8 w-12 object-cover" />
          <div className="whitespace-pre-line">
            Complete Your UCR DoSportsEasy waiver. Archery → Registration → fill
            out information
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden">
  {/* Outer image */}
  <Image
    src={ClubSports}
    alt="Outer Club Sports Logo"
    fill
    priority
    className="object-contain"
  />

  {/* White bottom band */}
  <div className="absolute bottom-0 left-[2%] right-[2%] h-[65%] bg-white z-10" />

  {/* Inner logo centered in the white band */}
  <div className="absolute inset-x-0 bottom-0 h-[28%] z-20 flex items-center justify-center">
    <div className="relative h-[70%] w-[70%] max-w-[180px]">
      <Image
        src={InnerClubSports}
        alt="Inner Club Sports Logo"
        fill
        className="object-contain"
      />
    </div>
  </div>
</div>
      </div>
      <div className="flex items-center justify-center">
        <Image src={Target} alt="Target" className="mx-8 w-12 object-cover" />
        <div className="text-archery-grey-200">Test</div>
      </div>
    </div>
  );
};
export default HowToJoin;
