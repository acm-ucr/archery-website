import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/footerLinks";

const Footer = () => {
  return (
    <footer className="border-t-3 border-blue-900 bg-white">
      <div className="relative space-y-3 py-5">
        <p className="mt-5 pl-9 text-lg text-blue-900"> Contact Us :</p>
        {footerLinks.map(({ icon: Icon, url, text }, index) => (
          <Link
            key={index}
            href={url}
            className="flex items-center gap-2 pl-9 text-gray-600"
          >
            <Icon className="h-4 w-4 fill-blue-900" />
            {text}
          </Link>
        ))}
        <div className="absolute top-1/2 right-30 -translate-y-1/2">
          <Image
            src="acherylogo.png"
            alt="Archery Club Logo"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="top--4 absolute right-10">
        <Image
          src="footerarrow.svg"
          alt="Footer Arrow"
          width={30}
          height={10}
        />
      </div>
      <p className="mt-5 border-t-3 border-blue-900 py-3 text-center text-xs text-gray-500">
        Made with 💘
      </p>
    </footer>
  );
};

export default Footer;
