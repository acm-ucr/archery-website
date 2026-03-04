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
  //const closeMenu = () => setIsOpen(false);
  return (
    <div className="flex flex-col shadow-md">
      <div className="flex w-full items-center justify-between ">
        <Link href="/" className="mt-2 ml-2">
          <Image src={NavbarLogo} alt="NavbarLogo" className="w-full lg:w-1/3" />
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
          
          <Link href="/">
            <MenuIcon size={32} onClick={handleClick} className="text-archery-blue-600"/>
          </Link>
        </div>

    </div>

    <div className={`overflow-hidden md:hidden ${isOpen ? "h-auto" : "h-0"}`}>
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

    </div>
  );
};

export default Navbar;
