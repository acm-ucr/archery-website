import { IconType } from "react-icons";
import { FaInstagram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
interface FooterLink {
  icon: IconType;
  url: string;
  text: string;
}

export const footerLinks: FooterLink[] = [
  {
    icon: GoMail,
    url: "mailto:ucrarcheryclub@gmail.com",
    text: "ucrarcheryclub@gmail.com",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/archeryatucr/",
    text: "@archeryatucr",
  },
];
