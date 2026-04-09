import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

interface Events {
  day: string;
  date: string;
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
}
const EventCard = ({
  day,
  date,
  title,
  startTime,
  endTime,
  location,
  description,
}: Events) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-5 md:flex-row">
      <div className="hidden w-32 md:flex md:justify-center">
        <div className="text-archery-blue-500 flex flex-row items-center justify-center gap-2 px-8 text-3xl font-bold md:flex-col md:text-5xl">
          <p>{day}</p>
          <p>{date}</p>
        </div>
      </div>

      <div className="border-archery-blue-500 mx-8 flex w-full flex-col gap-6 border-b-2 py-6 md:border-y-2">
        <div className="flex w-full items-center md:hidden">
          <div className="border-archery-blue-500 flex-grow border-t-2"></div>
          <div className="text-archery-blue-500 flex gap-2 px-4 text-3xl font-bold">
            <p>{day}</p>
            <p>{date}</p>
          </div>
          <div className="border-archery-blue-500 flex-grow border-t-2"></div>
        </div>

        <div className="ml-8 flex w-5/6 flex-col gap-2">
          <p className="text-archery-blue-500 text-2xl font-bold md:text-4xl">
            {title}
          </p>
          <div className="my-2 flex items-center gap-1">
            <IoTimeOutline className="text-archery-blue-500 text-xl md:text-2xl" />
            <p className="text-archery-blue-500 mr-4 ml-1 text-xs font-bold md:text-lg">
              {startTime} - {endTime}
            </p>
            {location && (
              <>
                <MdOutlineLocationOn className="text-archery-blue-500 text-xl md:text-2xl" />
                <p className="text-archery-blue-500 text-xs font-bold md:text-lg">
                  {location}
                </p>
              </>
            )}
          </div>
          <p className="text-archery-blue-500 text-lg md:text-lg/6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
