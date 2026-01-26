import { IconType } from "react-icons";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

interface FooterLink {
  icon: IconType;
  url: string;
  text: string;
}

export const footerLinks: FooterLink[] = [
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/archeryatucr/",
    text: "@archeryatucr",
  },
  {
    icon: FaEnvelope,
    url: "mailto:ucrarcheryclub@gmail.com",
    text: "ucrarcheryclub@gmail.com",
  },
];
