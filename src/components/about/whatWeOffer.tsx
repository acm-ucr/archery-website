"use client";

import { motion } from "framer-motion";
import OfferCard from "@/components/about/offerCard";
import OfferCardData from "@/data/offerCard";

const titleAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const cardAnimation = (index: number) => ({
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay: 0.2 * index },
  viewport: { once: true },
});

const WhatWeOffer = () => {
  return (
    <div
      className="bg-archery-blue-600 flex h-full w-full flex-col items-center justify-center"
      id="what-we-offer"
    >
      <motion.p
        className="py-[3vh] text-3xl font-bold text-white md:text-5xl"
        {...titleAnimation}
      >
        What We Offer
      </motion.p>
      <div className="static mb-[5vh] flex h-full w-full flex-col items-center justify-center md:relative md:my-[15vh] md:h-[40vh] md:w-[90vw] lg:h-[35vh] xl:h-[50vh]">
        {OfferCardData.map(
          (
            { title, borderColor, tabColor, sections, lists, position },
            index,
          ) => (
            <motion.div
              key={index}
              className={`static md:absolute ${position} z-auto md:z-${index}`}
              {...cardAnimation(index)}
            >
              <OfferCard
                title={title}
                borderColor={borderColor}
                tabColor={tabColor}
                sections={sections}
                lists={lists}
              />
            </motion.div>
          ),
        )}
      </div>
    </div>
  );
};
export default WhatWeOffer;
