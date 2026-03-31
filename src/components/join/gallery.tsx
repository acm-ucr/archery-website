"use client";
import Image from "next/image";
import Warning from "@/public/Box_Important.svg";
import SalaryMan from "@/public/Salary_male.svg";
import Target from "@/public/Target_Weld.svg";
import GalleryGrid from "./galleryGrid";
import { Feeinfo } from "@/data/feeinfo";
import { motion } from "motion/react";

const galleryAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

const Gallery = () => {
  return (
    <div className="mt-8 flex w-full flex-col items-center gap-6 px-8 md:mt-20 md:grid md:grid-cols-2 md:gap-0 md:px-24 lg:mt-30 lg:px-30 xl:mt-40">
      <motion.div
        variants={galleryAnimation}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mt-6 flex flex-col items-center justify-self-center text-center md:col-start-2 md:row-start-1 md:ml-8 lg:ml-12">
          <p className="text-archery-grey-400 px-6 text-2xl font-bold xl:mb-6 xl:text-5xl xl:leading-11">
            Everything you need to know about joining!
          </p>
          <div className="mt-4 flex items-center gap-2 md:flex-col">
            <div className="w-4 lg:w-6 xl:w-8">
              <Image src={Warning} alt="Warning" className="object-cover" />
            </div>
            <p className="text-xs text-red-700 lg:text-base xl:text-2xl">
              members must be UCR students
            </p>
          </div>
        </div>
      </motion.div>
      <div className="md:row-span-2 md:row-start-1">
        <GalleryGrid />
      </div>
      <motion.div
        variants={galleryAnimation}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex-col items-center justify-self-center text-center md:col-start-2 md:row-span-1 md:row-start-2 md:ml-8 lg:ml-12">
          <div className="mb-2 flex items-center justify-center gap-2 md:mt-3 md:mb-4 lg:mb-6 xl:mb-8 xl:gap-4">
            <Image
              src={SalaryMan}
              alt="Membership Fee"
              className="mb-2 w-8 justify-self-center object-cover md:w-10 lg:w-12 xl:w-16"
            />
            <p className="text-archery-grey-400 text-xl font-bold lg:text-2xl xl:text-5xl">
              Membership Fee
            </p>
          </div>
          <div className="mb-4 ml-4 flex w-7/8 flex-col gap-4 justify-self-center md:justify-self-end lg:ml-12 xl:gap-8">
            <div className="flex items-start">
              <Image
                src={Target}
                alt="Bullet Point 1"
                className="mr-4 ml-5 w-4 object-cover md:mr-5 md:ml-6 lg:mx-7 lg:mr-6 lg:w-6 xl:w-8"
              />
              <p className="text-archery-grey-400 text-start text-xs md:w-2/3 lg:text-base xl:text-2xl">
                {" "}
                <span className="font-bold">$75</span> yearly fee OR
                <span className="font-bold"> $45</span> quarterly fee (only
                offered winter and spring quarters)
              </p>
            </div>
            <div className="flex items-start">
              <Image
                src={Target}
                alt="Bullet Point 2"
                className="mr-4 ml-5 w-4 object-cover md:mr-5 md:ml-6 lg:mx-7 lg:mr-6 lg:w-6 xl:w-8"
              />
              <p className="text-archery-grey-400 text-xs font-bold lg:text-base xl:mt-1 xl:text-2xl">
                Covers
              </p>
            </div>
          </div>
          <div className="mt-4 ml-17 flex w-7/10 flex-col gap-4 justify-self-center text-start lg:ml-32 xl:gap-6">
            {Feeinfo.map(({ title, descriptions }, index) => (
              <p
                key={index}
                className="text-archery-grey-400 text-xs lg:text-base xl:text-2xl"
              >
                <span className="underline">{title}</span>
                {descriptions}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
