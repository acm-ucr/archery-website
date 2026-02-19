import OfferCard from "@/components/about/offerCard";
import OfferCardData from "@/data/offerCard";

const WhatWeOffer = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="relative flex h-[40vh] w-[90vw] items-center justify-center">
        {OfferCardData.map(
          (
            { title, borderColor, tabColor, sections, lists, position },
            index,
          ) => (
            <div key={index} className={`absolute ${position} z-${index}`}>
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
