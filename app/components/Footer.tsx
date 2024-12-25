import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import logo from "@/public/assets/logo_full.png";
import logo_2 from "@/public/assets/logo_mini.png";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#141949] px-6 lg:px-16 items-center">
      <div className="flex flex-row lg:pl-6 h-20 my-6 lg:mb-0 w-full">
        <Link href="/" className="flex flex-row items-center w-[27%] lg:pl-1 md:pl-3">
          <Image alt="logo" src={ logo } className="hidden lg:flex m-1 w-auto h-10 rounded-lg" />
          <Image alt="logo" src={ logo_2 } className="flex lg:hidden w-[70px] h-auto rounded-lg object-contain" />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row lg:pl-10 justify-between text-white w-full">
        <div className="flex flex-col lg:w-[40%] gap-y-6">
          <div className="flex items-center">
            <div className="flex items-center justify-center bg-[#FFFFFF23] w-9 h-9 rounded-sm">
              <Icon icon="solar:phone-bold" width={ 24 } height={ 24 } color="white" />
            </div>
            <div className="ml-4">
              <p>+260 962 352132</p>
              <p>+260 968 318036</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center bg-[#FFFFFF23] w-9 h-9 rounded-sm">
              <Icon icon="mdi:location" width={ 24 } height={ 24 } color="white" />
            </div>
            <div className="ml-4">
              <p>Plot 30121, Off Lilayi Rd, Libala South, Lusaka</p>
              <p>Plot 4097, Chibote Rd, Industrial Area, Luanshya</p>
            </div>
          </div>
          <a className="flex items-center">
            <div className="flex items-center justify-center bg-[#FFFFFF23] w-9 h-9 rounded-sm">
              <Icon icon="mdi:email-outline" width={ 24 } height={ 24 } color="white" />
            </div>
            <p className="ml-4">info@mexus.co.zm</p>
          </a>
          <div className="flex flex-col lg:flex-row">
            <p className="text-[20px] font-poppins font-bold">Social Media:</p>
            <div className="flex flex-row gap-x-6 my-3 lg:my-0 lg:mx-6">
              <a href="https://www.facebook.com/profile.php?id=100064060839577" aria-label="link to facebook" className="flex w-8 h-8 items-center justify-center bg-[#FFFFFF23] rounded-sm">
                <Icon icon="iconoir:facebook" color="white" width={ 22 } height={ 22 } />
              </a>
              <a href="https://www.x.com" aria-label="link to twitter" className="flex w-8 h-8 items-center justify-center bg-[#FFFFFF23] rounded-sm">
                <Icon icon="prime:twitter" color="white" width={ 22 } height={ 22 } />
              </a>
              <a href="https://www.linkedin.com/" aria-label="link to linkedin" className="flex w-8 h-8 items-center justify-center bg-[#FFFFFF23] rounded-sm">
                <Icon icon="jam:linkedin" color="white" width={ 24 } height={ 24 } />
              </a>
              <a href="https://www.youtube.com/" aria-label="link to youtube" className="flex w-8 h-8 items-center justify-center bg-[#FFFFFF23] rounded-sm">
                <Icon icon="si:youtube-line" color="white" width={ 24 } height={ 24 } />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-[25%] gap-y-4 my-3">
          <Link href="/services">Services</Link>
          <Link href="/services#projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="flex flex-col lg:w-[25%] gap-y-4 my-3">
          <a href="https://www.eiz.org.zm/" aria-label="link to eiz">EIZ</a>
          <a href="https://www.ncc.org.zm/" aria-label="link to ncc">NCC</a>
        </div>
      </div>
      <div className="flex flex-col w-full items-center mt-10">
        <div className="w-full h-[1px] bg-[#FFFFFF23] my-3"></div>
        <p className="flex text-[12px] text-white lg:mx-4 mb-3 items-center">
          Copyright
          <Icon icon="ic:round-copyright" color="white" width={ 14 } height={ 14 } className="mx-1" />
          2024 Mexus Industrial Solutions Ltd
        </p>
      </div>
    </div>
  );
};

export default Footer;