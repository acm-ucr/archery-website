import React from "react";
import type { IconType } from "react-icons";
import { LuClock3 } from "react-icons/lu";

export interface InfoProps {
  icon?: IconType;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoProps> = ({
  icon: Icon = LuClock3,
  title,
  description,
}) => {
  return (
    <div className="inline-flex h-[100px] w-[400px] items-center rounded-[27px] border border-[#0A3386] bg-white pr-8 pl-4">
      {/* Icon */}
      <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full">
        <Icon className="text-3xl text-[#0A3386]" aria-hidden />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <span className="text-lg font-semibold text-[#4C4C4C]">{title}</span>
        <span className="text-sm text-[#4C4C4C]">{description}</span>
      </div>
    </div>
  );
};

export default InfoCard;
