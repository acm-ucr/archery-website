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
    <div className="flex h-full w-full flex-col py-5">
      <div
        className={`mx-auto flex h-[5vh] w-[40vw] items-center justify-center rounded-4xl p-2 md:w-[36vw] lg:w-[34vw] xl:w-[25vw] ${tabColor} mb-8`}
      >
        <p className="text-archery-blue-600 text-lg font-semibold md:text-2xl">
          {title}
        </p>
      </div>
      <div
        className={`flex w-[75vw] justify-center rounded-4xl border-3 bg-white text-start sm:h-[30vh] md:h-[40vh] md:w-[36vw] lg:h-[46vh] lg:w-[34vw] xl:h-[50vh] xl:w-[25vw] ${borderColor}`}
      >
        <div className="flex w-2/3 flex-col justify-center">
          {sections?.map(({ title, description }, index) => (
            <div key={index} className="py-2">
              <p className="text-archery-grey-200 text-s font-semibold sm:py-0 md:py-2 md:text-base lg:py-0 lg:text-xl xl:py-2">
                {title}
              </p>
              <p className="text-archery-grey-200 text-xs font-light md:text-base">
                {description}
              </p>
            </div>
          ))}

          {lists?.map(({ title, listItems }, index) => (
            <div key={index} className="py-2">
              <p className="text-archery-grey-200 text-s font-semibold sm:py-0 md:py-2 md:text-base lg:py-0 lg:text-xl xl:py-2">
                {title}
              </p>
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="text-archery-grey-200 ml-12 -translate-x-7 pb-2 text-left text-xs font-light md:text-base"
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
