import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import logo from "@/public/assets/logo_full.png";

const Footer: React.FC = () => {
  return (
      <div className="flex flex-col bg-[#131949] px-16 items-center">
        <div className="flex flex-row pl-6 h-20 w-full">
          <Link href="/" className="flex flex-row items-center w-[27%] pl-1 md:pl-3">
            <Image alt="logo" src={logo} className="hidden lg:flex m-1 w-auto h-10 rounded-lg"/>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row text-white w-full">
          <div className="flex flex-col gap-y-6 w-[40%]">
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-[#FFFFFF23] w-9 h-9 rounded-sm">
                <Icon icon="solar:phone-bold" width={24} height={24} color="white" />
              </div>
              <p className="ml-4">+260962352132</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-[#FFFFFF23] w-9 h-9 rounded-sm">
                <Icon icon="mdi:location" width={24} height={24} color="white"/>
              </div>
              <div className="ml-4">
                <p>Plot 30121, Off Lilayi Rd, Libala South, Lusaka</p>
                <p>Plot 4097, Chibote Rd, Industrial Area, Luanshya</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center bg-[#FFFFFF23] w-9 h-9 rounded-sm">
                <Icon icon="mdi:email-outline" width={24} height={24} color="white" />
              </div>
              <p className="ml-4">info@mexus.co.zm</p>
            </div>
            <div className="flex items-center">
              <p className="text-[20px] font-bold">Social Media:</p>
              <div className="flex flex-row gap-x-6 mx-6">
                <a href="https://www.facebook.com/profile.php?id=100064060839577" aria-label="link to facebook" className="flex w-10 h-10 items-center justify-center bg-[#FFFFFF23] rounded-sm">
                  <Icon icon="iconoir:facebook"  color="white" width={26} height={26} />
                </a>
                <a href="https://www.x.com" aria-label="link to twitter" className="flex w-10 h-10 items-center justify-center bg-[#FFFFFF23] rounded-sm">
                  <Icon icon="prime:twitter" color="white" width={26} height={26} />
                </a>
                <a href="https://www.linkedin.com/" aria-label="link to linkedin" className="flex w-10 h-10 items-center justify-center bg-[#FFFFFF23] rounded-sm">
                  <Icon icon="jam:linkedin" color="white" width={30} height={30} />
                </a>
                <a href="https://www.youtube.com/" aria-label="link to youtube" className="flex w-10 h-10 items-center justify-center bg-[#FFFFFF23] rounded-sm">
                  <Icon icon="si:youtube-line" color="white" width={30} height={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-[20%] gap-y-4">
            <Link href="/services">Services</Link>
            <Link href="/services#projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="flex flex-col lg:w-[20%] gap-y-4">
            <Link href="/services">Services</Link>
            <Link href="/services#projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
          <div className="flex flex-col w-full items-center">
            <hr className="w-full"/>
            <div className="flex flex-row">
              <Icon icon="ic:round-copyright" color="white" width={14} height={14} />
              <p className="text-white text-[12px]">2024</p>
            </div>
          </div>  
      </div>
  );
};

export default Footer;