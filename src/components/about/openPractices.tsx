import Image from "next/image";
import { OpenPracticePics } from "@/data/openPracticePics";
import InfoCard from "@/components/infocard";
import Subheader from "@/components/subheader";
import { LiaMapMarkerAltSolid } from "react-icons/lia";

const OpenPractices = () => {
  return (
    <div>
      <div className="relative p-15">
        <Subheader name="Open Practices" />
      </div>
      <div className="flex flex-row justify-center gap-6 px-6 py-6 sm:gap-3 md:gap-5">
        <InfoCard title="Time" description="Every Friday 2-5:45pm" />
        <InfoCard
          icon={LiaMapMarkerAltSolid}
          title="Location"
          description="Glen Mor Fields"
        />
      </div>

      <div className="flex flex-col items-center gap-2 px-10 sm:flex-row sm:items-end sm:justify-center lg:px-25">
        <div className="relative aspect-[3/4] h-[420px] w-full sm:flex-1">
          <Image
            src={OpenPracticePics.left}
            alt="Open Practice Left"
            width={400}
            height={533}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative aspect-[3/4] h-[420px] w-full sm:flex-[1.4]">
          <Image
            src={OpenPracticePics.mid}
            alt="Our Coaches"
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] h-[420px] w-full sm:flex-1">
          <Image
            src={OpenPracticePics.right}
            alt="Open Practices"
            width={400}
            height={533}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OpenPractices;
