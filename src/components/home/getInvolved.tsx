import InvolvedCard from "@/components/home/involvedCard";
import BlueArcher from "@/public/home-blue-archer.svg";
import YellowBow from "@/public/home-yellow-bow.svg";

const GetInvolved = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-20 p-8">
      <InvolvedCard
        borderColor="#0052F8"
        bgColor="#0052F81A"
        iconBG="#0052F84D"
        title="NO experience required!"
        description="complete beginners are welcome! We’ll teach you everything from basic stance to competitive skills."
        icon={BlueArcher}
      />

      <InvolvedCard
        borderColor="#FDBE34"
        bgColor="#FDBE341A"
        iconBG="#FDBE344D"
        title="NO equipment required!"
        description="we provide all the basic equipment -- bows, arrows, safety gear -- for you to get started!"
        icon={YellowBow}
      />
    </div>
  );
};

export default GetInvolved;
