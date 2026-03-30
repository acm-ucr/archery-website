import Image from "next/image";
import Background from "@/public/headerBackground.webp";

interface HeaderProps {
  title: string;
  subTitle?: string;
}

const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <div className="relative">
      <Image
        src={Background}
        alt="Background"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-white/75" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-7 text-center text-5xl font-black md:pt-0 md:text-6xl lg:text-8xl">
        <p className="text-archery-grey-300">{title}</p>
        <p className="from-archery-yellow-300 to-archery-blue-300 bg-gradient-to-r bg-clip-text pb-7 text-3xl font-black text-transparent md:p-5 md:pt-0 md:text-6xl lg:text-8xl">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default Header;
