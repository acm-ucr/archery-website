import InvolvedCard from "@/components/home/involvedCard";
import BlueArcher from "@/public/home-blue-archer.svg";
import YellowBow from "@/public/home-yellow-bow.svg";

const GetInvolved = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-20 p-8">
      <InvolvedCard
        borderColor="border-archery-blue-300"
        bgColor="bg-archery-blue-100"
        iconBG="bg-archery-blue-200"
        title="NO experience required!"
        description="complete beginners are welcome! We’ll teach you everything from basic stance to competitive skills."
        icon={BlueArcher}
      />

      <InvolvedCard
        borderColor="border-archery-yellow-300"
        bgColor="bg-archery-yellow-100"
        iconBG="bg-archery-yellow-200"
        title="NO equipment required!"
        description="we provide all the basic equipment -- bows, arrows, safety gear -- for you to get started!"
        icon={YellowBow}
      />
    </div>
  );
};

export default GetInvolved;
