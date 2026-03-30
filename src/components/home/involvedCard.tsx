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
      className={`flex h-[15vh] w-[80vw] items-center justify-center rounded-2xl border-1 border-solid md:h-[20vh] md:w-[43vw] lg:h-[25vh] xl:h-[35vh] xl:w-[45vw] ${bgColor} ${borderColor}`}
    >
      <div>
        <div className="mb-2 flex items-center gap-x-3 md:mb-3 md:gap-x-4 lg:mb-5 lg:gap-x-6 xl:mb-8 xl:gap-x-8">
          <div
            className={`flex h-[4vh] w-[4vh] items-center justify-center rounded-xl md:h-[5vh] md:w-[5vw] lg:h-[6vh] xl:h-[8vh] xl:w-[4vw] xl:rounded-2xl ${iconBG}`}
          >
            <Image
              src={icon}
              alt={title}
              className="h-3/4 w-3/4 object-contain"
            />
          </div>
          <p className="text-archery-grey-300 text-center text-sm font-bold md:text-lg lg:text-2xl xl:text-4xl">
            {title}
          </p>
        </div>
        <div className="h-[6vh] w-[65vw] md:h-[8vh] md:w-[35vw] xl:h-[10vh] xl:w-[40vw]">
          <p className="text-archery-grey-200 text-left text-xs md:text-sm lg:text-base xl:text-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvolvedCard;
