import Target from "@/public/Target_Weld.svg";
import Image from "next/image";
import Link from "next/link";
import ClubSports from "@/public/ClubSports.webp";
import HowToJoinSide from "@/public/HowToJoinSide.webp";

const HowToJoin = () => {
  return (
    <div className="text-archery-grey-200 mx-auto mt-20 grid w-11/12 grid-cols-1 items-center gap-y-10 justify-self-center sm:w-5/6 lg:mt-40 lg:grid-cols-[3fr_2fr] lg:gap-x-6 lg:gap-y-0">
      <div className="flex justify-center lg:justify-center">
        <div className="flex w-full max-w-sm flex-col gap-6 sm:max-w-md lg:gap-8">
          <div className="flex justify-start">
            <div className="from-archery-yellow-200 via-archery-pink-200 to-archery-blue-200 w-full max-w-2xl rounded-full bg-gradient-to-r px-10 py-3 text-center text-2xl font-extrabold text-white shadow-[0_6px_12px_rgba(0,0,0,0.18)] sm:px-12 sm:py-4 sm:text-3xl lg:text-4xl">
              How To Join
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-5 shrink-0 sm:w-6 lg:w-7">
              <Image
                src={Target}
                alt="Target"
                className="w-full object-contain"
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 text-sm sm:gap-4 sm:text-base">
              <div className="whitespace-pre-line">
                Complete Your{" "}
                <Link
                  href="https://ucr.dserec.com/online/clubsports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-archery-blue-300 font-semibold hover:underline"
                >
                  UCR DoSportsEasy
                </Link>{" "}
                waiver. <br /> (Archery → Registration → fill out information)
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={ClubSports}
                  alt="Outer Club Sports Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-5 shrink-0 sm:w-6 lg:w-7">
              <Image
                src={Target}
                alt="Target"
                className="w-full object-contain"
              />
            </div>

            <div className="flex-1 text-sm sm:text-base">
              Pay your membership fee to one of the officers <br /> and get a
              receipt of payment.
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-5 shrink-0 sm:w-6 lg:w-7">
              <Image
                src={Target}
                alt="Target"
                className="w-full object-contain"
              />
            </div>

            <div className="flex-1 text-sm sm:text-base">
              Request membership on{" "}
              <Link
                href="https://highlanderlink.ucr.edu/organization/acucr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-archery-blue-300 font-semibold hover:underline"
              >
                HighlanderLink
              </Link>
              .
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-5 shrink-0 sm:w-6 lg:w-7">
              <Image
                src={Target}
                alt="Target"
                className="w-full object-contain"
              />
            </div>

            <div className="flex-1 text-sm sm:text-base">Come to practice!</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:items-start">
        <Image
          src={HowToJoinSide}
          alt="How to Join Side"
          className="w-5/6 max-w-sm object-contain sm:w-4/5 sm:max-w-md lg:w-[110%] lg:max-w-lg xl:w-[120%]"
          priority
        />
      </div>
    </div>
  );
};

export default HowToJoin;
