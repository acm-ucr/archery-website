import Target from "@/public/Target_Weld.svg";
import Image from "next/image";
import ClubSports from "@/public/ClubSports.webp";
import HowToJoinSide from "@/public/HowToJoinSide.webp";
import HowToJoinHeader from "@/public/HowToJoinHeader.webp";

const HowToJoin = () => {
  return (
    <div className="mt-40 grid w-5/6 grid-cols-[3fr_2fr] gap-x-6 justify-self-center text-archery-grey-200">
      <div className="flex justify-center">
        <div className="flex w-full max-w-md flex-col gap-8">
          <div className="relative h-24 w-full">
            <Image
              src={HowToJoinHeader}
              alt="How to Join Header"
              fill
              priority
              className="object-contain object-left"
            />
          </div>

          <div className="flex items-start gap-4">
            <div className="w-7 shrink-0">
              <Image
                src={Target}
                alt="Target"
                className="w-full object-contain"
              />
            </div>

            <div className="flex flex-1 flex-col gap-4 text-base">
              <div className="whitespace-pre-line">
                Complete Your
                <span className="text-archery-blue-300 font-semibold">
                  {" "}
                  UCR DoSportsEasy
                </span>{" "}
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

          <div className="flex items-start gap-4">
            <div className="w-7 shrink-0">
              <Image
                src={Target}
                alt="Target"
                className="w-full object-contain"
              />
            </div>

            <div className="flex-1 text-base">
              Pay your membership fee to one of the officers <br /> and get a
              receipt of payment.
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-7 shrink-0">
              <Image
                src={Target}
                alt="Target"
                className="w-full object-contain"
              />
            </div>

            <div className="flex-1 text-base">
              Request membership on{" "}
              <span className="text-archery-blue-300 font-semibold">
                HighlanderLink.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-7 shrink-0">
              <Image
                src={Target}
                alt="Target"
                className="w-full object-contain"
              />
            </div>

            <div className="flex-1 text-base">Come to practice!</div>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center">
        <Image
          src={HowToJoinSide}
          alt="How to Join Side"
          className="w-full max-w-sm object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default HowToJoin;