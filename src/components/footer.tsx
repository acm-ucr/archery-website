import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/footerLinks";
import ArcheryLogo from "@/public/archery-ucr-logo.svg";
import FooterArrow from "@/public/footer-arrow.svg";

const Footer = () => {
  return (
    <div className="border-archery-blue-500 border-t-3">
      <div className="flex flex-row-reverse items-center justify-center gap-1 p-2 md:flex-row md:justify-between">
        <div className="space-y-3 md:p-8">
          <p className="text-archery-blue-500 text-md font-bold md:pl-9 md:text-lg">
            Contact Us :
          </p>
          <div className="md:text-md pr-4 text-xs">
            {footerLinks.map(({ icon: Icon, url, text }, index) => (
              <Link
                key={index}
                href={url}
                target="_blank"
                className="text-archery-grey-200 flex items-center gap-2 md:pl-9"
              >
                <Icon className="fill-archery-blue-500 h-auto w-3 md:w-6" />
                {text}
              </Link>
            ))}
          </div>
        </div>
        <Image
          src={ArcheryLogo}
          alt="Archery Club Logo"
          className="h-auto w-1/2 p-6 pr-3 md:w-auto md:pr-10"
        />
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
