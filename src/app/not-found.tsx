import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-yellow-100 via-blue-100 to-blue-300">
      <div className="mb-3 text-7xl font-bold text-[#0A3386]">{"404"}</div>
      <Link href="/" className="flex cursor-pointer items-center gap-0">
        <Image src="404-left-arrow.svg" alt="" width={81} height={28} />
        <div className="-mx-1 rounded-full border-[5px] border-[#0A3386] bg-white px-12 py-2 text-xl font-semibold text-[#0A3386]">
          {"Return Back Home"}
        </div>
        <Image src="404-right-arrow.svg" alt="" width={82} height={21} />
      </Link>
    </div>
  );
};

export default NotFound;
