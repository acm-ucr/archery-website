import { OfferCardProps } from "@/components/about/offerCard";

export interface OfferCardData extends OfferCardProps {
  position: string;
}

const OfferCardsData: OfferCardData[] = [
  {
    title: "Workshops",
    tabColor: "bg-archery-yellow-100",
    borderColor: "border-archery-yellow-100",
    position: "left-[-3vw] xl:left-[11vw] lg:left-[0vw]",
    sections: [
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
    ],
  },
  {
    title: "Tournaments",
    tabColor: "bg-archery-pink-100",
    borderColor: "border-archery-pink-100",
    position: "left-[27vw] xl:left-[32vw] lg:left-[28vw]",
    lists: [
      {
        title: "We participate in collegiate and National tournaments!",
        listItems: [
          "SoCal Indoor Archery Collegiate Championships (SIACC)",
          "USA Archery Indoor Nationals",
          "Cal State Games",
          "West Regionals Outdoors",
        ],
      },
    ],
  },
  {
    title: "Leadership",
    tabColor: "bg-archery-blue-100",
    borderColor: "border-archery-blue-100",
    position: "left-[57vw] xl:left-[53vw] lg:left-[56vw]",
    sections: [
      {
        title: "Join Our Board!",
        description:
          "Run for an officer position and help run our club. Email archery.ucr@gmail.com for more details!",
      },
    ],
  },
];

export default OfferCardsData;
