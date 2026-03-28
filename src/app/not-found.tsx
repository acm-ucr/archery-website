import Link from "next/link";
import Image from "next/image";
import LeftArrow from "@/public/404-left-arrow.svg";
import RightArrow from "@/public/404-right-arrow.svg";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-yellow-100 via-blue-100 to-blue-300">
      <div className="text-archery-blue-500 mb-3 text-5xl font-bold sm:text-7xl">
        {"404"}
      </div>
      <div className="flex items-center">
        <Image
          src={LeftArrow}
          alt="Left end of arrow"
          className="w-8 sm:w-auto"
        />
        <Link
          href="/"
          className="border-archery-blue-500 text-archery-blue-500 -mx-1 rounded-full border-5 bg-white px-8 py-2 text-base font-semibold sm:px-12 sm:text-xl"
        >
          {"Return Back Home"}
        </Link>
        <Image
          src={RightArrow}
          alt="Right end of arrow"
          className="w-8 sm:w-auto"
        />
      </div>
    </div>
  );
};

export default NotFound;
