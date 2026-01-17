import Image from "next/image";
import Background from "@/public/headerBackground.webp";

interface HeaderProps {
  title: string;
}

function Split(title: string) {
  const name = title.split(" ");
  return {
    first: name[0],
    second: name.slice(1).join(" "),
  };
}

const Header = ({ title }: HeaderProps) => {
  const { first, second } = Split(title);
  return (
    <div className="relative">
      <Image
        src={Background}
        alt="Background"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-white/85" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-8xl font-black">
        <p className="text-archery-grey-300">{first}</p>
        {second ? (
          <p className="from-archery-yellow-300 to-archery-blue-300 bg-gradient-to-r bg-clip-text p-5 text-transparent">
            {second}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
