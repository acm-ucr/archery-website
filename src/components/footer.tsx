import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/footerLinks";
import ArcheryLogo from "@/public/archery-ucr-logo.svg";
import FooterArrow from "@/public/footer-arrow.svg";

const Footer = () => {
  return (
    <div className="border-archery-blue-600 border-t-3">
      <div className="flex items-center justify-between p-2">
        <div className="space-y-3 py-5">
          <p className="text-archery-blue-600 mt-5 pl-9 text-lg">
            Contact Us :
          </p>
          {footerLinks.map(({ icon: Icon, url, text }, index) => (
            <Link
              key={index}
              href={url}
              target="_blank"
              className="text-archery-grey-300 flex items-center gap-2 pl-9"
            >
              <Icon className="fill-archery-blue-600 h-6 w-6" />
              {text}
            </Link>
          ))}
        </div>
        <div>
          <Image src={ArcheryLogo} alt="Archery Club Logo" className="pr-10" />
        </div>
      </div>
      <div className="border-archery-blue-600 relative border-t-3 py-3">
        <Image
          src={FooterArrow}
          alt="Footer Arrow"
          className="absolute top-0 right-10 -translate-y-1/2"
        />

        <p className="text-archery-grey-200 mt-5 text-center text-xs">
          Made with 💘
        </p>
      </div>
    </div>
  );
};

export default Footer;
