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
      <div className="flex w-full items-center justify-between ">
        <Link href="/" className="mt-2 ml-2">
          <Image src={NavbarLogo} onClick={closeMenu} alt="NavbarLogo" className="w-1/2 lg:w-1/3" />
        </Link>

        <div className="hidden md:flex items-center gap-8 p-10 text-2xl">
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

        <div className="md:hidden p-4">

          <MenuIcon size={18} onClick={handleClick} className="text-archery-blue-600 "/>
          
        </div>

    </div>

<div className={`overflow-hidden md:hidden flex flex-col border-t-1 items-end border-black/30 ${isOpen ? "h-auto" : "h-0 hidden"}`}>
    <div className="w-max flex flex-col">
      {navbarLinks.map(({ link, name }, index) => (
        <Link
          key={index}
          href={link}
          onClick={closeMenu}
          className={`last:bg-archery-blue-600 text-sm last:mx-2 last:mb-4  px-4 mt-2 text-center text-black last:rounded-full last:text-white`}
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
