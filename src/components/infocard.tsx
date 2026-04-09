import React from "react";
import type { IconType } from "react-icons";

export interface InfoProps {
  Icon?: IconType;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoProps> = ({ Icon, title, description }) => {
  return (
    <div className="border-archery-blue-500 xl:w-m flex h-[8vh] w-[75vw] items-center rounded-2xl border bg-white/60 py-5 pr-8 pl-1 md:h-[8vh] md:w-[30vw] lg:h-[9vh] lg:w-[35vw] xl:h-[12vh]">
      {Icon && (
        <div className="mr-3 flex h-12 w-12 items-center justify-center">
          <Icon className="text-archery-blue-500 h-6 w-6" />
        </div>
      )}

      <div className="text-archery-grey-200 flex min-w-0 flex-col justify-center">
        <div className="truncate text-lg font-semibold">{title}</div>
        <div className="truncate text-sm">{description}</div>
      </div>
    </div>
  );
};

export default InfoCard;
