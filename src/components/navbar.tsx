import { navbarLinks } from "@/data/navbarLinks";
import Link from "next/link";
import Image from "next/image";
import NavbarLogo from "@/public/NavBar.png";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between shadow-md">
      <Link href="/" className="mt-2 ml-2">
        <Image src={NavbarLogo} alt="NavbarLogo" className="w-1/3" />
      </Link>

      <div className="flex items-center gap-8 p-10 text-2xl">
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
