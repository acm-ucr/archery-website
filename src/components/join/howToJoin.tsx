import Target from "@/public/Target_Weld.svg";
import Image from "next/image";
import ClubSports from "@/public/ClubSports.png";
import HowToJoinSide from "@/public/HowToJoinSide.png";
import HowToJoinHeader from "@/public/HowToJoinHeader.png";

const HowToJoin = () => {
  return (
    <div className="text-archery-grey-200 mt-20 grid w-11/12 grid-cols-1 gap-y-10 justify-self-center sm:w-5/6 lg:mt-40 lg:grid-cols-[3fr_2fr] lg:gap-x-6 lg:gap-y-0">
      <div className="flex justify-center lg:justify-center">
        <div className="flex w-full max-w-sm flex-col gap-6 sm:max-w-md lg:gap-8">
          <div className="relative h-16 w-full sm:h-20 lg:h-24">
            <Image
              src={HowToJoinHeader}
              alt="How to Join Header"
              fill
              priority
              className="object-contain object-left"
            />
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
                <a
                  href="https://ucr.dserec.com/online/clubsports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-archery-blue-300 font-semibold hover:underline"
                >
                  UCR DoSportsEasy
                </a>{" "}
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
              <a
                href="https://highlanderlink.ucr.edu/organization/acucr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-archery-blue-300 font-semibold hover:underline"
              >
                HighlanderLink
              </a>
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
          className="w-3/4 max-w-xs object-contain sm:w-2/3 sm:max-w-sm lg:w-full"
          priority
        />
      </div>
    </div>
  );
};

export default HowToJoin;
