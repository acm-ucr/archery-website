import InvolvedCard from "@/components/home/involvedCard";
import BlueArcher from "@/public/home-blue-archer.svg";
import YellowBow from "@/public/home-yellow-bow.svg";

const GetInvolved = () => {
  return (
    <div className="flex flex-col items-center justify-center md:gap-5 lg:gap-6 xl:gap-7 md:p-6 lg:p-7 xl:p-8">
      <span className="text-center md:text-5xl xl:text-6xl font-extrabold text-black">
        Get Involved
      </span>
      <span className="to-archery-yellow-300 from-archery-blue-400 text-center bg-gradient-to-r from-20% to-70% bg-clip-text text-xs w-3/4  md:text-xl xl:text-2xl font-bold text-transparent">
        Take a shot at something new -- Join Archery @ UCR!!
      </span>
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-4  md:gap-x-8 lg:gap-x-10 md:p-4 xl:gap-x-20 xl:p-8">
        <InvolvedCard
          borderColor="border-archery-blue-300"
          bgColor="bg-archery-blue-300/10"
          iconBG="bg-archery-blue-300/30"
          title="NO experience required!"
          description="complete beginners are welcome! We’ll teach you everything from basic stance to competitive skills."
          icon={BlueArcher}
        />

        <InvolvedCard
          borderColor="border-archery-yellow-200"
          bgColor="bg-archery-yellow-200/20"
          iconBG="bg-archery-yellow-200/40"
          title="NO equipment required!"
          description="we provide all the basic equipment -- bows, arrows, safety gear -- for you to get started!"
          icon={YellowBow}
        />
      </div>
    </div>
  );
};

export default GetInvolved;
