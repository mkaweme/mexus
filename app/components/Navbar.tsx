import Image from "next/image";
import Link from "next/link";
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
    <nav className="flex flex-col justify-between w-full bg-gray-300 shadow top-0 fixed">
      <div className="flex flex-row h-24">
        <div className="flex flex-row items-center bg-[#e46c0a] w-[27%] pl-1 md:pl-3 lg:pl-6">
          <Image alt="logo" src={logo} className="m-1 w-[50px] h-auto rounded-lg"/>
          <div className="hidden md:flex lg:flex flex-col">
            <p className="text-4xl text-gray-300">MEXUS</p>
            <p className="text-sm text-gray-300">Industrial Solutions</p>
          </div>
        </div>
        <div className="hidden md:flex lg:flex bg-[#e46c0a] relative w-16 top-0 -left-9 w h-full transform -skew-x-[26deg]">
        </div>
        <ul className="hidden lg:flex flex-row text-[18px] justify-end bg-gray-300 text-blue-950 w-[70%] pr-32">
          {NAVLINKS.map((navlink) => ( 
            <li key={navlink.title} className="flex mx-10 align-text-bottom items-end">
              <Link href={navlink.link} className="mb-2 font-medium hover:text-[#e46c0a] hover:shadow-lg">{navlink.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex lg:hidden items-center align-middle bg-yellow-200">
          <Icon icon="line-md:menu-to-close-transition" width="30" height="30" className="self-end cursor-pointer"/>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between bg-white h-16 shadow-lg">
        <div className="flex flex-row items-center">
          <div className="flex flex-row mx-20 items-center">
            <Icon icon="iconoir:phone-solid" width="36" height="36" color="#e46c0a"/>
            <p className="ml-4">+260962352312</p>
          </div>
          <div className="flex flex-row mx-20 items-center">
            <Icon icon="octicon:mail-16" width="36" height="36" color="#e46c0a"/>
            <p className="ml-4">info@mexus.co.zm</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-16 mr-20 items-center">
          <a href="https://www.facebook.com">
            <Icon icon="logos:facebook" width="24" height="24" />
          </a>
          <a href="https://www.twitter.com">
            <Icon icon="pajamas:twitter" width="24" height="24" />
          </a>
          <a href="https://www.linkedin.com">
            <Icon icon="skill-icons:linkedin" width="24" height="24" />
          </a>
          <a href="https://www.youtube.com">
            <Icon icon="logos:youtube-icon" width="24" height="24" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;