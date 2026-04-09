"use client";

import InfoCard from "@/components/infocard";
import { LuMapPin } from "react-icons/lu";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { GoogleCalendarEvent } from "@/components/events/calendar/calendar";
import { format } from "date-fns";

const instaAnimation = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 },
};

const InfoMeeting = () => {
  const { data, error } = useQuery({
    queryKey: ["infoMeeting"],
    queryFn: async () => {
      const timeMin = new Date(
        new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const timeMax = new Date(
        new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const response =
        await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
           &singleEvents=true&orderBy=startTime&timeMin=${timeMin}&timeMax=${timeMax}`).then(
          (res) => res.json(),
        );
      const events: GoogleCalendarEvent[] = response.items || [];
      return events.find((event) => {
        const eventStart = new Date(event.start.dateTime || event.start.date!);
        return eventStart > new Date();
      });
    },
  });
  console.log(data);

  if (error) {
    return <div>Error loading info meeting details.</div>;
  }
  return (
    <div className="relative flex h-full w-full justify-center overflow-hidden">
      <div className="bg-archery-yellow-100 absolute right-0 bottom-0 -z-0 h-1/3 w-1/2 rounded-full blur-2xl filter md:h-1/2 md:w-1/3 md:blur-3xl" />
      <div className="absolute top-0 left-0 -z-0 h-1/3 w-1/2 rounded-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 blur-3xl filter md:h-1/2 md:w-1/3" />
      <div className="z-10 my-12 w-[85vw] items-center rounded-2xl bg-white/50 py-8 md:h-[45vh] md:w-[75vw] lg:h-[50vh] xl:h-[60vh]">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2vh]">
          <div className="mx-5 flex flex-col items-center gap-[2vh] text-center">
            <IoMdCalendar className="text-5xl text-blue-600 md:text-7xl" />
            <p className="text-xl font-extrabold text-black md:text-4xl">
              Informational Meeting
            </p>
            <p className="text-sm md:text-lg">
              Join us during{" "}
              <span className="font-semibold text-blue-600">Week 0</span> to
              learn about the club, meet the team, and sign up!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[2vh] md:flex-row md:gap-[2vw]">
            <div className="flex flex-col gap-[2vh]">
              <InfoCard
                Icon={LuClock3}
                title={`${format(data?.start.dateTime || new Date(), "MMM d, yyyy h:mm a")} - ${format(data?.end.dateTime || new Date(), "h:mm a")}`}
                description={data?.summary || "No description available"}
              />
              <InfoCard
                Icon={LuMapPin}
                title={data?.location || "Location TBD"}
                description={data?.description || "No description available"}
              />
            </div>
            <div>
              <div className="bg-archery-blue-600 xl:w-m flex h-[15vh] w-[75vw] flex-col items-center justify-center rounded-2xl border md:h-[18vh] md:w-[30vw] lg:h-[20vh] lg:w-[35vw] xl:h-[26vh]">
                <div className="flex h-12 w-12 items-center justify-center">
                  <RiErrorWarningLine className="text-4xl text-white md:text-5xl" />
                </div>

                <div className="text-archery-grey-200 m-2 flex flex-col justify-center text-center">
                  <div className="text-sm font-semibold text-white md:text-lg">
                    Stay up-to-date
                    <br />
                    follow{" "}
                    <Link
                      href="https://instagram.com/archeryatucr"
                      target="_blank"
                      className="text-yellow-300"
                    >
                      <motion.div {...instaAnimation} className="inline-block">
                        @archeryatucr
                      </motion.div>
                    </Link>{" "}
                    on Instagram
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMeeting;
