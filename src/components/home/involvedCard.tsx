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
      className={`flex h-[35vh] w-[45vw] items-center justify-center rounded-2xl border-1 border-solid ${bgColor} ${borderColor}`}
    >
      <div>
        <div className="mb-8 flex items-center gap-x-8">
          <div
            className={`flex h-[8vh] w-[4vw] items-center justify-center rounded-2xl ${iconBG}`}
          >
            <Image
              src={icon}
              alt={title}
              className="h-3/4 w-3/4 object-contain"
            />
          </div>
          <p className="text-archery-grey-300 text-center text-4xl font-bold">
            {title}
          </p>
        </div>
        <div className="h-[10vh] w-[40vw]">
          <p className="text-archery-grey-200 text-left text-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvolvedCard;
