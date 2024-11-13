"use client";
import React, { useState } from "react";
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

  //Create state variables
  const [mNavOpen, setMNavOpen] = useState<boolean>(false);
  const pathName = usePathname();
  
  return (
    <nav className="flex flex-col justify-between w-full h-20 bg-[#131949] shadow top-0 fixed z-20">
      <div className="flex flex-row justify-between h-full mx-6 lg:mx-16">
        <Link href="/" className="flex flex-row items-center w-[27%] pl-1 md:pl-3">
          <Image alt="logo" src={logo} className="hidden lg:flex m-1 w-auto h-10 rounded-lg"/>
          <Image alt="logo" src={logo_2} className="lfex lg:hidden m-1 w-[70px] h-auto rounded-lg object-contain"/>
        </Link>
        <div className="flex flex-col justify-end">
          <ul className="hidden lg:flex flex-row text-[16px] justify-end text-[#D9D9D9]">
            {NAVLINKS.map((navlink) => {
              const isActive = pathName.endsWith(navlink.link);
              return (
                <li key={navlink.title} className="flex mx-8 align-text-bottom items-end">
                  <Link href={navlink.link} className={isActive ? "flex font-bold h-full px-1 pb-3 items-center text-[#F39224] border-b-4  border-[#F39224]" : "pb-3 hover:text-[#F39224]"}>{navlink.title}</Link>
                </li>)
            })}
          </ul>
        </div>
        <div className="flex flex-col lg:hidden justify-center items-center align-middle">
          {
            mNavOpen ? (
              <Icon icon="line-md:menu-to-close-transition" width="30" height="30" color="#D9D2D6" onClick={() => setMNavOpen(false)} className="lg:hidden cursor-pointer mr-5"/>
            ) : (
              <Icon icon="line-md:close-to-menu-transition" width="30" height="30" color="#D9D2D6" onClick={() => setMNavOpen(true)} className="lg:hidden cursor-pointer mr-5"/>
            )
          }
        </div>
      </div>
      { mNavOpen && (
          <div onClick={() => setMNavOpen(false)} className="bg-white">
            <MobileNavbar/>
          </div>
        )}
    </nav>
  );
};

export default Navbar;

const MobileNavbar = () => {
  return (
    <div className="flex flex-col gap-y-4 mt-4 mx-4">
      {NAVLINKS.map((link, index) => {
        return (
          <Link key={index} href={link.link} className={"hover:text-[#F89E3E] font-semibold text-[14px] border-b-2"}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};