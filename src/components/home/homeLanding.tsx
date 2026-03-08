import BowAndArrow from "@/public/ArcherArt.svg";
import BlueBlur from "@/public/BlueBlurCircle.svg";
import YellowBlur from "@/public/YellowBlurCircle.svg";
import Image from "next/image";

const HomeLanding = () => {
  return (
    <div className="relative flex items-center justify-between">
      <div className="z-20 flex-col items-start p-8 text-left md:mx-7 lg:mx-15">
        <div className="flex flex-row gap-3 md:gap-5">
          <p className="from-archery-blue-400 to-archery-yellow-300 bg-gradient-to-r from-15% via-50% to-80% bg-clip-text text-2xl font-black text-transparent md:text-5xl lg:text-8xl">
            UCR
          </p>
          <p className="text-archery-grey-300 text-2xl font-black md:text-5xl lg:text-8xl">
            Archery
          </p>
        </div>
        <div className="flex flex-row items-end gap-1 md:gap-4 lg:gap-8">
          <div className="flex flex-col items-center">
            <div className="text-archery-blue-600 text-[14px] font-bold whitespace-nowrap md:pt-5 md:text-2xl lg:pt-10 lg:text-4xl">
              30 +
            </div>
            <div className="text-archery-grey-100 flex gap-3 text-[8px] font-light whitespace-nowrap md:text-[14px] lg:text-xl">
              members
            </div>
          </div>

          <div className="bg-archery-grey-100 h-8 w-[1px] md:h-12 md:w-0.5 lg:h-16" />

          <div className="flex flex-col items-center">
            <div className="text-archery-blue-600 text-[14px] font-bold whitespace-nowrap md:pt-5 md:text-2xl lg:pt-10 lg:text-4xl">
              All
            </div>
            <div className="text-archery-grey-100 flex gap-3 text-[8px] font-light whitespace-nowrap md:text-[14px] lg:text-xl">
              skill levels
            </div>
          </div>

          <div className="bg-archery-grey-100 h-8 w-[1px] md:h-12 md:w-0.5 lg:h-16" />

          <div className="flex flex-col items-center">
            <div className="text-archery-blue-600 text-[14px] font-bold whitespace-nowrap md:pt-5 md:text-2xl lg:pt-10 lg:text-4xl">
              Gear
            </div>
            <div className="text-archery-grey-100 flex gap-3 text-[8px] font-light whitespace-nowrap md:text-[14px] lg:text-xl">
              provided
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={BowAndArrow}
          alt="Image of a bow and arrow"
          className="z-10 w-[100vw] lg:w-full"
        />

        <div className="absolute inset-0 mt-2 bg-gradient-to-r from-white from-0% via-white via-13% to-transparent to-30%" />
        <Image
          src={BlueBlur}
          alt="Image of a blurred blue circle"
          className="absolute -bottom-15 left-1/4 z-0 h-1/2 w-auto lg:-bottom-30"
        />
        <Image
          src={YellowBlur}
          alt="Image of a yellow blurred circle"
          className="absolute -top-2 right-0 z-0 w-1/3 md:-top-10 lg:w-auto"
        />
      </div>
    </div>
  );
};

export default HomeLanding;
