import InvolvedCard from "@/components/home/involvedCard";
import BlueArcher from "@/public/home-blue-archer.svg";
import YellowBow from "@/public/home-yellow-bow.svg";

const GetInvolved = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-7 p-8">
      <span className="text-center text-6xl font-extrabold text-black">
        Get Involved
      </span>
      <span className="to-archery-yellow-300 from-archery-blue-400 bg-gradient-to-r from-20% to-70% bg-clip-text text-2xl font-bold text-transparent">
        Take a shot at something new -- Join Archery @ UCR!!
      </span>
      <div className="flex flex-row items-center justify-center gap-x-20 p-8">
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
