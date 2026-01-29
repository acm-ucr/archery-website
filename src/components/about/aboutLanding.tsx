import Target from "@/public/Group 16.svg";
import Arrow from "@/public/Group 18.svg";
import DownButton from "@/public/Down Button.svg";
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
        <Image src={DownButton} alt="Down Button" className="w-auto pl-60" />
      </div>
      <Image src={Target} alt="Image of a target" className="z-10 w-1/2" />
      <Image
        src={Arrow}
        alt="Image of an arrow"
        className="absolute inset-x-267 inset-y-87 z-20 w-1/6"
      />
      <Image
        src={Arrow}
        alt="Image of an arrow"
        className="absolute inset-x-268 inset-y-90 z-20 w-1/6"
      />
      <Image
        src={Arrow}
        alt="Image of an arrow"
        className="absolute inset-x-255 inset-y-92 z-20 w-1/6"
      />

      <div className="bg-archery-blue-100 absolute top-1/5 z-0 h-1/4 w-1/5 rounded-full blur-3xl filter"></div>
      <div className="bg-archery-yellow-100 absolute right-3/6 z-0 h-1/4 w-1/5 rounded-full blur-3xl filter"></div>
    </div>
  );
};

export default AboutLanding;
