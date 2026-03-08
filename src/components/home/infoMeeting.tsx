import InfoCard from "@/components/infocard";
import { LuMapPin } from "react-icons/lu";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";

const InfoMeeting = () => {
  return (
    <div className="flex h-full w-full justify-center bg-[radial-gradient(300px_circle_at_top_left,#0052f8_0%,#bce3fa_50%,transparent_80%),radial-gradient(300px_circle_at_bottom_right,#f0dd96_0%,#f0dd96_30%,transparent_80%)] md:bg-[radial-gradient(600px_circle_at_top_left,#0052f8_0%,#bce3fa_50%,transparent_80%),radial-gradient(600px_circle_at_bottom_right,#f0dd96_0%,#f0dd96_30%,transparent_80%)]">
      <div className="my-12 w-[85vw] items-center rounded-2xl bg-white/50 py-8 md:h-[45vh] md:w-[75vw] lg:h-[50vh] xl:h-[60vh]">
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
              <InfoCard title="Time" description="Week 0 (exact time TBD)" />
              <InfoCard icon={LuMapPin} title="Location" description="TBD" />
            </div>
            <div>
              <div className="bg-archery-blue-600 xl:w-m flex h-[15vh] w-[75vw] flex-col items-center justify-center rounded-2xl border md:h-[18vh] md:w-[30vw] lg:h-[20vh] lg:w-[35vw] xl:h-[26vh]">
                <div className="flex h-12 w-12 items-center justify-center">
                  <RiErrorWarningLine className="text-4xl text-white md:text-5xl" />
                </div>

                <div className="text-archery-grey-200 m-2 flex flex-col justify-center text-center">
                  <p className="text-sm font-semibold text-white md:text-lg">
                    Stay up-to-date
                    <br />
                    follow{" "}
                    <a
                      href="https://instagram.com/archeryatucr"
                      className="text-yellow-300"
                    >
                      @archeryatucr
                    </a>{" "}
                    on Instagram
                  </p>
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
