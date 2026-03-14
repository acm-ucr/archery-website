import Image, { StaticImageData } from "next/image";

interface InvolvedProps {
  borderColor: string;
  bgColor: string;
  iconBG: string;
  title: string;
  description: string;
  icon: StaticImageData;
}

const InvolvedCard = ({
  borderColor,
  bgColor,
  iconBG,
  title,
  description,
  icon,
}: InvolvedProps) => {
  return (
    <div
      className={`flex h-[15vh] w-[80vw] md:h-[20vh] md:w-[43vw] xl:w-[45vw] lg:h-[25vh] xl:h-[35vh]  items-center justify-center rounded-2xl border-1 border-solid ${bgColor} ${borderColor}`}
    >
      <div>
        <div className="md:mb-3 lg:mb-5 xl:mb-8 flex items-center md:gap-x-4  lg:gap-x-6 xl:gap-x-8">
          <div
            className={`flex h-[4vh] w-[4vh] md:h-[5vh] md:w-[5vw] lg:h-[6vh]  xl:h-[8vh] xl:w-[4vw] items-center justify-center rounded-xl xl:rounded-2xl ${iconBG}`}
          >
            <Image
              src={icon}
              alt={title}
              className="h-3/4 w-3/4 object-contain"
            />
          </div>
          <p className="text-archery-grey-300 text-center xl:text-4xl md:text-lg lg:text-2xl font-bold">
            {title}
          </p>
        </div>
        <div className=" h-[6vh] w-[60vw] md:h-[8vh] xl:h-[10vh] md:w-[35vw] xl:w-[40vw]">
          <p className="text-archery-grey-200 text-left xl:text-xl md:text-sm lg:text-base text-xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvolvedCard;
