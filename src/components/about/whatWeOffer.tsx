import OfferCard from "@/components/about/offerCard";
import OfferCardData from "@/data/offerCard";

const WhatWeOffer = () => {
  return (
    <div className="bg-archery-blue-600 flex h-full w-full flex-col items-center justify-center">
      <div>
        <p className="py-[5vh] text-2xl font-bold text-white md:text-5xl">
          What We Offer
        </p>
      </div>
      <div className="static mb-[5vh] flex h-full w-full flex-col items-center justify-center md:relative md:my-[15vh] md:h-[45vh] md:w-[90vw]">
        {OfferCardData.map(
          (
            { title, borderColor, tabColor, sections, lists, position },
            index,
          ) => (
            <div
              key={index}
              className={`static md:absolute ${position} z-auto md:z-${index}`}
            >
              <OfferCard
                title={title}
                borderColor={borderColor}
                tabColor={tabColor}
                sections={sections}
                lists={lists}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};
export default WhatWeOffer;
