import Link from "next/link";
import Image from "next/image";
import LeftArrow from "@/public/404-left-arrow.svg";
import RightArrow from "@/public/404-right-arrow.svg";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-yellow-100 via-blue-100 to-blue-300">
      <div className="text-archery-blue-500 mb-3 text-7xl font-bold">
        {"404"}
      </div>
      <Link href="/" className="flex cursor-pointer items-center gap-0">
        <Image src={LeftArrow} alt="Left end of arrow" />
        <div className="border-archery-blue-500 text-archery-blue-500 -mx-1 rounded-full border-5 bg-white px-12 py-2 text-xl font-semibold">
          {"Return Back Home"}
        </div>
        <Image src={RightArrow} alt="Right end of arrow" />
      </Link>
    </div>
  );
};

export default NotFound;
