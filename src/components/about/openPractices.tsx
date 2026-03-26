import Image from "next/image";
import { OpenPracticePics } from "@/data/openPracticePics";
import InfoCard from "@/components/infocard";
import Subheader from "@/components/subheader";
import { LiaMapMarkerAltSolid } from "react-icons/lia";

const OpenPractices = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative p-15">
        <Subheader name="Open Practices" />
      </div>
      <div className="flex flex-col justify-center gap-6 px-6 py-6 sm:gap-3 md:flex-row md:gap-5">
        <InfoCard title="Time" description="Every Friday 2-5:45pm" />
        <InfoCard
          icon={LiaMapMarkerAltSolid}
          title="Location"
          description="Glen Mor Fields"
        />
      </div>

      <div className="flex items-center justify-center gap-4 md:w-5/6 lg:w-6/7 xl:w-full">
        <div className="hidden h-[386px] w-[290px] md:block">
          <Image src={OpenPracticePics.left} alt="Open Practice Left" />
        </div>
        <div className="w-3/4 md:h-[386px] md:w-[514px]">
          <Image src={OpenPracticePics.mid} alt="Our Coaches" />
        </div>
        <div className="hidden h-[386px] w-[290px] md:block">
          <Image src={OpenPracticePics.right} alt="Open Practice Right" />
        </div>
      </div>
    </div>
  );
};

export default OpenPractices;
