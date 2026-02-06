import OfferCard from "@/components/about/offerCard";

const WhatWeOffer = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="relative flex h-[40vh] w-[90vw] items-center justify-center">
        <div className="absolute left-[11vw] z-0">
          <OfferCard
            title="Workshops"
            tabColor="bg-archery-yellow-100"
            borderColor="border-archery-yellow-100"
            sections={[
              {
                title: "Arrow Assembly",
                description: "Learn to build and customize your own arrows!",
              },
              {
                title: "Equipment Selection",
                description: "We provide guidance on purchasing your own gear!",
              },
              {
                title: "Form & Theory",
                description: "Improve your shooting technique!",
              },
            ]}
          />
        </div>

        <div className="absolute left-[32vw] z-10">
          <OfferCard
            title="Tournaments"
            tabColor="bg-archery-pink-100"
            borderColor="border-archery-pink-100"
            lists={[
              {
                title: "We participate in collegiate and National tournaments!",
                listItems: [
                  "SoCal Indoor Archery Collegiate Championships (SIACC)",
                  "USA Archery Indoor Nationals",
                  "Cal State Games",
                  "West Regionals Outdoors",
                ],
              },
            ]}
          />
        </div>
        <div className="absolute left-[53vw] z-20">
          <OfferCard
            title="Leadership"
            tabColor="bg-archery-blue-100"
            borderColor="border-archery-blue-100"
            sections={[
              {
                title: "Join Our Board!",
                description:
                  "Run for an officer position and help run our club. Email archery.ucr@gmail.com for more details!",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
export default WhatWeOffer;
