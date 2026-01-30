import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/footerLinks";
import ArcheryLogo from "@/public/archery-ucr-logo.svg";
import FooterArrow from "@/public/footer-arrow.svg";

const Footer = () => {
  return (
    <div className="border-archery-blue-500 border-t-3">
      <div className="flex items-center justify-between p-2">
        <div className="space-y-3 p-8">
          <p className="text-archery-blue-500 pl-9 text-lg font-bold">
            Contact Us :
          </p>
          {footerLinks.map(({ icon: Icon, url, text }, index) => (
            <Link
              key={index}
              href={url}
              target="_blank"
              className="text-archery-grey-200 flex items-center gap-2 pl-9"
            >
              <Icon className="fill-archery-blue-500 h-6 w-6" />
              {text}
            </Link>
          ))}
        </div>
        <Image src={ArcheryLogo} alt="Archery Club Logo" className="pr-10" />
      </div>
      <div className="border-archery-blue-500 relative border-t-3 py-3">
        <Image
          src={FooterArrow}
          alt="Footer Arrow"
          className="absolute top-0 right-10 -translate-y-[56%]"
        />

        <p className="text-archery-grey-200 mt-5 text-center text-xs">
          Made with 💘
        </p>
      </div>
    </div>
  );
};

export default Footer;
