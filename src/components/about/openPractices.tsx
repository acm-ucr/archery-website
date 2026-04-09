"use client";

import Image from "next/image";
import { OpenPracticePics } from "@/data/openPracticePics";
import InfoCard from "@/components/infocard";
import Subheader from "@/components/subheader";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { LuClock3 } from "react-icons/lu";

const infoCardAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const imageAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2 },
  viewport: { once: true },
};

const OpenPractices = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative p-15">
        <Subheader name="Open Practices" />
      </div>
      <motion.div
        {...infoCardAnimation}
        className="flex flex-col justify-center gap-6 px-6 py-6 sm:gap-3 md:flex-row md:gap-5"
      >
        <InfoCard
          Icon={LuClock3}
          title="Time"
          description="Every Friday 2-5:45pm"
        />
        <InfoCard
          Icon={LiaMapMarkerAltSolid}
          title="Location"
          description="Glen Mor Fields"
        />
      </motion.div>

      <motion.div
        {...imageAnimation}
        className="flex items-center justify-center gap-4 md:w-5/6 lg:w-6/7 xl:w-full"
      >
        <div className="hidden h-[386px] w-[290px] md:block">
          <Image src={OpenPracticePics.left} alt="Open Practice Left" />
        </div>
        <div className="w-3/4 md:h-[386px] md:w-[514px]">
          <Image src={OpenPracticePics.mid} alt="Our Coaches" />
        </div>
        <div className="hidden h-[386px] w-[290px] md:block">
          <Image src={OpenPracticePics.right} alt="Open Practice Right" />
        </div>
      </motion.div>
    </div>
  );
};

export default OpenPractices;
