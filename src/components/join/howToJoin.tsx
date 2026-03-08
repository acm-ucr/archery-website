import Target from "@/public/Target_Weld.svg";
import Image from "next/image";
import ClubSports from "@/public/ClubSports.webp";

const HowToJoin = () => {
  return (
    <div className="text-archery-grey-200 flex flex-col gap-8">
      <div className="flex items-start gap-4">
        <div className="w-7 shrink-0">
          <Image src={Target} alt="Target" className="w-full object-contain" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="whitespace-pre-line">
            Complete Your
            <span className="text-archery-blue-300 font-semibold">
              {" "}
              UCR DoSportsEasy
            </span>{" "}
            waiver. <br /> (Archery → Registration → fill out information)
          </div>

          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden">
            <Image
              src={ClubSports}
              alt="Outer Club Sports Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-7 shrink-0">
          <Image src={Target} alt="Target" className="w-full object-contain" />
        </div>

        <div>
          Pay your membership fee to one of the officers <br /> and get a
          receipt of payment.
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-7 shrink-0">
          <Image src={Target} alt="Target" className="w-full object-contain" />
        </div>

        <div>
          Request membership on{" "}
          <span className="text-archery-blue-300 font-semibold">
            {" "}
            HighlanderLink.
          </span>{" "}
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-7 shrink-0">
          <Image src={Target} alt="Target" className="w-full object-contain" />
        </div>

        <div>Come to practice!</div>
      </div>
    </div>
  );
};

export default HowToJoin;
