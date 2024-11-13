import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between bg-[#131949] h-20 px-10 items-center">
        <Link href="/" className="text-white">Home</Link>
        <div className="flex flex-row self-end">
          <Icon icon="ic:round-copyright" color="white" width={14} height={14} />
          <p className="text-white text-[12px]">2024</p>
        </div>
        <div className="flex flex-row w-[10%] justify-between items-center">
          <a href="https://www.facebook.com/profile.php?id=100064060839577">
            <Icon icon="ic:baseline-facebook" color="white" width={20} height={20}/>
          </a>
          <Icon icon="arcticons:x-twitter" color="white" width={20} height={20}/>
          <Icon icon="mdi:linkedin" color="white" width={20} height={20}/>
          <Icon icon="mdi:youtube" color="white" width={20} height={20}/>
        </div>
      </div>
    </>
  );
};

export default Footer;