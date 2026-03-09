"use client";
import { navbarLinks } from "@/data/navbarLinks";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarLogo from "@/public/NavBar.webp";
import { MenuIcon } from "lucide-react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <div className="relative flex flex-col shadow-md">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="mt-2 ml-2">
          <Image
            src={NavbarLogo}
            onClick={closeMenu}
            alt="NavbarLogo"
            className="w-1/2 xl:w-1/3"
          />
        </Link>

        <div className="hidden items-center gap-4 p-4 text-base md:flex lg:gap-6 lg:p-7 lg:text-xl xl:gap-8 xl:p-10 xl:text-2xl">
          {navbarLinks.map(({ link, name }, index) => (
            <Link
              key={index}
              href={link}
              className={`last:bg-archery-blue-600 flex items-center justify-center px-4 text-black last:rounded-full last:text-white`}
            >
              {name}
            </Link>
          ))}
        </div>

        <div className="text-archery-blue-600 px-4 py-2 md:hidden">
          <MenuIcon
            size={30}
            onClick={handleClick}
            className={`${isOpen ? "hidden" : ""}`}
          />

          <IoMdClose
            size={30}
            onClick={closeMenu}
            className={` ${isOpen ? "" : "hidden"}`}
          />
        </div>
      </div>

      <div
        className={`absolute top-full z-50 flex w-full flex-col items-end overflow-hidden border-t-1 border-black/30 bg-white text-sm shadow-md md:hidden ${isOpen ? "h-auto" : "hidden h-0"}`}
      >
        <div className="flex w-max flex-col">
          {navbarLinks.map(({ link, name }, index) => (
            <Link
              key={index}
              href={link}
              onClick={closeMenu}
              className={`last:bg-archery-blue-600 mt-2 px-4 text-center text-black last:mx-2 last:mb-4 last:rounded-full last:text-white`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
