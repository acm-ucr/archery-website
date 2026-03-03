import Target from "@/public/AboutPageTarget.webp";
import TargetCenter from "@/public/MiddleOfTarget.webp";
import Arrow from "@/public/arrow.svg";
import DownButton from "@/public/Down Button.webp";
import Image from "next/image";

const AboutLanding = () => {
  return (
    <div className="relative flex items-center justify-between">
      <div className="z-10 flex-col items-start pl-10 text-left md:mx-20 md:p-8">
        <div className="flex gap-2 pr-10 lg:gap-7 lg:pr-0">
          <p className="from-archery-blue-400 via-archery-yellow-300 to-archery-grey-300 bg-gradient-to-r from-10% via-80% to-200% bg-clip-text text-2xl font-black text-transparent lg:text-8xl">
            About
          </p>
          <p className="text-archery-grey-300 text-2xl font-black lg:text-8xl">
            Us
          </p>
        </div>
        <p className="mr-6 text-[9px] font-light lg:mr-0 lg:pt-6 lg:text-2xl">
          Join Archery club where recreation meets competition. From beginners
          to experienced archers, everyone is welcome to discover the art of
          archery!
        </p>
        <p className="hidden pt-32 text-center font-extralight sm:block">
          learn more about us
        </p>
        <Image
          src={DownButton}
          alt="Down Button"
          className="hidden w-4 sm:block md:mx-17 lg:ml-54"
        />
      </div>
      <div className="relative">
        <Image src={Target} alt="Target" className="z-10 h-auto w-full" />
        <Image
          src={TargetCenter}
          alt="Part of Center of Target"
          className="absolute top-[39.75%] left-[80.25%] z-10 w-1 object-cover md:top-[39.5%] md:left-[80%] md:w-2 lg:w-4"
        />
        <Image
          src={TargetCenter}
          alt="Part of Center of Target"
          className="absolute top-[39.75%] left-[80.25%] z-10 w-1 scale-x-[-1] -rotate-10 md:top-[39.5%] md:left-[80%] md:w-2 lg:w-4"
        />
        <Image
          src={Arrow}
          alt="Image of an arrow at center"
          className="absolute top-[35.5%] left-[36%] z-20 w-1/2 -rotate-12"
        />
        <Image
          src={Arrow}
          alt="Image of an arrow in inner yellow circle"
          className="absolute top-[38%] left-[39%] z-20 w-1/2 -rotate-15"
        />
        <Image
          src={Arrow}
          alt="Image of an arrow in outer yellow circle"
          className="absolute top-[34%] left-[25%] z-20 w-1/2"
        />
      </div>

      <div className="bg-archery-blue-300 md:bg-archery-blue-300/20 absolute top-10 z-0 h-20 w-20 rounded-full blur-3xl filter md:top-1/5 md:h-1/4 md:not-visited:w-1/5"></div>
      <div className="bg-archery-yellow-200 md:bg-archery-yellow-100/70 absolute right-1/2 bottom-5 z-0 h-20 w-20 rounded-full blur-3xl filter md:right-3/6 md:bottom-64 md:h-1/4 md:w-1/5"></div>
    </div>
  );
};

export default AboutLanding;
