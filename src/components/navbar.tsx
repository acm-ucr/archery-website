"use client";
import { navbarLinks } from "@/data/navbarLinks";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarLogo from "@/public/NavBar.webp";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <div className="flex flex-col shadow-md">
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

        <div className="my-2 mr-4 md:hidden">
          <MenuIcon
            size={22}
            onClick={handleClick}
            className="text-archery-blue-600"
          />
        </div>
      </div>

      <div
        className={`flex flex-col items-end overflow-hidden border-t-1 border-black/30 text-sm md:hidden ${isOpen ? "h-auto" : "hidden h-0"}`}
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
