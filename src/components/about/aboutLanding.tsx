import Target from "@/public/AboutPageTarget.webp";
import TargetCenter from "@/public/MiddleOfTarget.webp";
import Arrow from "@/public/AboutPageArrow.webp";
import ArrowTip from "@/public/AboutPageArrowTip.webp";
import DownButton from "@/public/Down Button.webp";
import Image from "next/image";

const AboutLanding = () => {
  return (
    <div className="relative flex items-center justify-between">
      <div className="z-10 mx-20 flex-col items-start p-8 text-left">
        <p className="from-archery-blue-400 via-archery-yellow-300 to-archery-grey-300 bg-gradient-to-r from-10% via-60% to-65% bg-clip-text text-8xl font-black text-transparent">
          About Us
        </p>
        <p className="pt-6 text-3xl font-light">
          Join Archery club where recreation meets competition. From beginners
          to experienced archers, everyone is welcome to discover the art of
          archery!
        </p>
        <p className="pt-32 text-center font-extralight">learn more about us</p>
        <Image src={DownButton} alt="Down Button" className="ml-60 w-4" />
      </div>
      <Image src={Target} alt="Image of a target" className="z-10 w-1/2" />
      <Image
        src={TargetCenter}
        alt="Part of Center of Target"
        className="absolute inset-x-324 inset-y-97 z-10 w-4"
      />
      <Image
        src={TargetCenter}
        alt="Part of Center of Target"
        className="absolute inset-x-324 inset-y-97 z-10 w-4 scale-x-[-1] -rotate-10"
      />
      <Image
        src={Arrow}
        alt="Image of an arrow"
        className="absolute inset-x-245 inset-y-87 z-20 w-1/4 -rotate-12"
      />
      <Image
        src={ArrowTip}
        alt="Arrow Tip"
        className="absolute inset-x-325 inset-y-97.5 z-10 w-1.5"
      />
      <Image
        src={Arrow}
        alt="Image of an arrow"
        className="absolute inset-x-249 inset-y-93.5 z-20 w-1/4 -rotate-15"
      />
      <Image
        src={ArrowTip}
        alt="Arrow Tip"
        className="absolute inset-x-327 inset-y-102.5 z-10 w-1.5"
      />
      <Image
        src={Arrow}
        alt="Image of an arrow"
        className="absolute inset-x-225 inset-y-85 z-20 w-1/4"
      />
      <Image
        src={ArrowTip}
        alt="Arrow Tip"
        className="absolute inset-x-314 inset-y-104.5 z-10 w-1.5"
      />

      <div className="bg-archery-blue-100 absolute top-1/5 z-0 h-1/4 w-1/5 rounded-full blur-3xl filter"></div>
      <div className="bg-archery-yellow-100 absolute right-3/6 z-0 h-1/4 w-1/5 rounded-full blur-3xl filter"></div>
    </div>
  );
};

export default AboutLanding;
