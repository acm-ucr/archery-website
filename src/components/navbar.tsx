"use client";
import { navbarLinks } from "@/data/navbarLinks";
import Link from "next/link";
import Image from "next/image";
import NavbarLogo from "@/public/NavBar.png";

const navbar = () => {
  return (
    <nav className="">
      <div className="flex">
        <Link href="/" className="mt-2 ml-2">
          <Image src={NavbarLogo} alt="NavbarLogo" className="w-1/3" />
        </Link>

        <div className="flex items-center gap-20 text-2xl">
          {navbarLinks.map(({ link, name }) => (
            <Link
              key={link}
              href={link}
              className={`last:bg-archery-blue-600 flex h-10 items-center justify-center px-4 text-black last:rounded-full last:text-white`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default navbar;
