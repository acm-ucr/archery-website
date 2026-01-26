import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/footerLinks";

const Footer = () => {
  return (
    <footer className="border-t border-blue-900 bg-white">
      <div className="space-y-3">
        <p className="text-lg text-blue-900 pl-9 mt-5"> Contact Us :</p>
        {footerLinks.map(({ icon: Icon, url, text }, index) => (
          <Link
            key={index}
            href={url}
            className="flex items-center gap-2 text-gray-500 pl-9"
          >
            <Icon className="h-4 w-4 fill-blue-900"/>
            {text}
          </Link>
        ))}
      </div>
      <div className = "absolute right-1 top--0">
        <Image src="footerarrow.svg" alt="Archery Club Logo" width={50} height={50} />
      </div>
      <p className="text-center text-xs mt-5 text-gray-500 border-t border-blue-900 py-3">Made with 💘</p>
    </footer>
  );
};

export default Footer;
