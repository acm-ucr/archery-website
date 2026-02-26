import BowAndArrow from "@/public/Archer Art.svg";
import BlueBlur from "@/public/BlueBlurCircle.svg";
import YellowBlur from "@/public/YellowBlurCircle.svg";
import Image from "next/image";

const HomeLanding = () => {
  return (
    <div className="relative flex items-center justify-between">
      <div className="z-20 mx-15 mb-56 flex-col items-start p-8 text-left">
        <p className="from-archery-blue-400 to-archery-yellow-300 absolute bg-gradient-to-r from-15% via-30% to-60% bg-clip-text text-8xl font-black text-transparent">
          UCR
        </p>
        <p className="text-archery-grey-300 absolute mx-60 text-8xl font-black">
          Archery
        </p>
        <div className="text-archery-blue-600 flex pt-33 text-4xl font-bold whitespace-nowrap">
          <div className="mx-4">30 +</div>
          <div className="mx-20">All</div>
          <div className="mx-4">Gear</div>
        </div>
        <div className="text-archery-grey-100 relative flex text-xl font-light whitespace-nowrap">
          <div className="mx-4">members</div>
          <div className="mx-12">skill levels</div>
          <div className="mx-7">provided</div>
        </div>
      </div>
      <div className="bg-archery-grey-100 absolute left-56 mb-22 h-16 w-0.5"></div>
      <div className="bg-archery-grey-100 absolute left-97 mb-22 h-16 w-0.5"></div>
      <div className="relative">
        <Image
          src={BowAndArrow}
          alt="Image of a bow and arrow"
          className="z-10 w-full"
        />

        <div className="absolute inset-0 mt-2 bg-gradient-to-r from-white from-0% via-white via-13% to-transparent to-30%" />
        <Image
          src={BlueBlur}
          alt="Image of a blurred blue circle"
          className="absolute -bottom-30 left-1/4 z-0 h-1/2 w-auto"
        />
        <Image
          src={YellowBlur}
          alt="Image of a yellow blurred circle"
          className="absolute -top-10 right-0 z-0 w-auto"
        />
      </div>
    </div>
  );
};

export default HomeLanding;
