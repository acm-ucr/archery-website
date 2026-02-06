export interface OfferCardProps {
  title: string;
  tabColor: string;
  borderColor: string;
  sections?: {
    title: string;
    description: string;
  }[];
  lists?: {
    title: string;
    listItems: string[];
  }[];
}

export const OfferCard = ({
  title,
  tabColor,
  borderColor,
  sections,
  lists,
}: OfferCardProps) => {
  return (
    <div className="flex flex-col py-5">
      <div
        className={`flex h-[5vh] w-[25vw] items-center justify-center rounded-4xl p-2 ${tabColor} mb-8`}
      >
        <p className="text-archery-blue-600 text-xl font-semibold">{title}</p>
      </div>
      <div
        className={`flex h-[50vh] w-[25vw] justify-center rounded-4xl border-3 bg-white text-center ${borderColor}`}
      >
        <div className="flex h-auto w-[16vw] flex-col justify-center">
          {sections?.map(({ title, description }, index) => (
            <div key={index} className="py-2">
              <p className="text-archery-grey-200 text-l py-2 font-semibold">
                {title}
              </p>
              <p className="text-archery-grey-200 text-base font-light">
                {description}
              </p>
            </div>
          ))}

          {lists?.map(({ title, listItems }, index) => (
            <div key={index} className="py-2">
              <p className="text-archery-grey-200 text-l py-2 font-semibold">
                {title}
              </p>
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="text-archery-grey-200 ml-12 text-left text-base font-light"
                >
                  {item}
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
