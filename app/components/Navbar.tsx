"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo_full.png";
import logo_2 from "@/public/assets/logo_mini.png"
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();
  return (
    <nav className="flex flex-col justify-between w-full bg-[#131949] shadow top-0 fixed z-20">
      <div className="flex flex-row h-20 mx-10 justify-between">
        <div className="flex flex-row items-center w-[27%] pl-1 md:pl-3">
          <Image alt="logo" src={logo} className="hidden lg:flex m-1 w-[250px] h-auto rounded-lg"/>
          <Image alt="logo" src={logo_2} className="lfex lg:hidden m-1 w-[70px] h-auto rounded-lg object-contain"/>
          <div className="hidden md:flex lg:flex bg-slate-400 flex-col">
          </div>
        </div>
        <div className="flex items-end justify-end align-bottom">
          <ul className="hidden lg:flex flex-row text-[18px] justify-end text-[#D9D9D9]">
            {NAVLINKS.map((navlink) => {
              const isActive = pathname.endsWith(navlink.link);
              return (
                <li key={navlink.title} className="flex mx-10 align-text-bottom items-end">
                  <Link href={navlink.link} className={isActive ? "flex font-bold h-full px-1 pb-3 items-center text-[#F39224] border-b-4  border-[#F39224]" : "pb-3 hover:text-[#F39224]"}>{navlink.title}</Link>
                </li>)
            })}
          </ul>
          <div className="flex lg:hidden items-center align-middle bg-yellow-200">
            <Icon icon="line-md:menu-to-close-transition" width="30" height="30" className="self-end cursor-pointer"/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;