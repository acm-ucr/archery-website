import Image from "next/image";
import { OpenPracticePics } from "@/data/openPracticePics";
import InfoCard from "@/components/infocard";
import Header from "@/components/header";
import { FaLocationDot } from "react-icons/fa6";

const OpenPractices = () => {
  return (
    <div>
      <div className="relative">
        <Header title="Open Practices" />
      </div>
      <div className="flex flex-row justify-center gap-6 px-6 py-6 sm:gap-3 md:gap-5">
        <InfoCard title="Time" description="Every Friday 2-5:45pm" />
        <InfoCard
          icon={FaLocationDot}
          title="Location"
          description="Glen Mor Fields"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative aspect-[15/10] w-full sm:flex-1">
          <Image
            src={OpenPracticePics.left}
            alt="Open Practice L"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative aspect-[15/10] w-full sm:flex-1">
          <Image
            src={OpenPracticePics.mid}
            alt="Our Coaches"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0">
            <Image
              src={OpenPracticePics.description}
              alt="Our Coachers <3"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative aspect-[15/10] w-full sm:flex-1">
          <Image
            src={OpenPracticePics.right}
            alt="Open Practices"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OpenPractices;
