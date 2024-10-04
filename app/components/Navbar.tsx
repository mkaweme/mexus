import Image from "next/image";
import logo from "@/public/assets/logo.jpg";
import { Icon } from "@iconify/react";

type Navlink = {
  title: string;
  link: string;
}

const NAVLINKS: Navlink[] = [
  { title: "Home", link: "/" },
  { title: "Services", link: "/services" },
  { title: "About", link: "/about" },
  { title: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between w-full h-24 bg-gray-300">
      <div className="flex flex-row items-center bg-[#e46c0a] w-[27%] pl-1 md:pl-3 lg:pl-6">
        <Image alt="logo" src={logo} className="m-1 w-[50px] h-auto rounded-lg"/>
        <div className="hidden md:flex lg:flex flex-col">
          <p className="text-4xl text-gray-300">MEXUS</p>
          <p className="text-sm text-gray-300">Industrial Solutions</p>
        </div>
      </div>
      <div className="hidden md:flex lg:flex bg-[#e46c0a] relative w-16 top-0 -left-9 w h-full transform -skew-x-[26deg]">
      </div>
      <ul className="hidden lg:flex flex-row text-[18px] justify-end bg-gray-300 text-blue-950 w-[70%] pr-60">
        {NAVLINKS.map((navlink) => ( 
          <li key={navlink.title} className="flex mx-6 align-text-bottom items-end">
            <a href={navlink.link} className="mb-1 font-medium hover:text-[#e46c0a] hover:shadow-lg">{navlink.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center align-middle bg-yellow-200">
        <Icon icon="line-md:menu-to-close-transition" width="30" height="30" className="self-end cursor-pointer"/>
      </div>
    </nav>
  );
};

export default Navbar;