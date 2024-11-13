import React from "react";
import Image from "next/image";
import NFCA from "@/public/assets/nfca.png";
import BAT from "@/public/assets/batz.webp";
import Hudtech from "@/public/assets/hudtech.png";
import RITC from "@/public/assets/ritc.png";
import MBZC from "@/public/assets/mbz.png";

const Clients = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-[32px] lg:text-[40px] font-bold text-[#F19221] my-4"><span className="text-black border-b-4 border-black">
          OUR</span> CLIENTS
        </h1>
        <div className="grid grid-cols-3 lg:flex flex-row w-full gap-x-3 my-10 items-center justify-between bg-[#EDEEEE] px-6 lg:px-32">
          <div className="flex flex-col items-center">
            <Image src={NFCA} alt="nfca" className="w-[75px] h-auto object-contain" />
            <p className="font-bold">NFCA</p>
          </div>
          <Image src={BAT} alt="bat" className="w-[150px] h-auto object-contain" />
          <Image src={Hudtech} alt="hudtech" className="w-[150px] h-auto object-contain" />
          <Image src={RITC} alt="ritc" className="w-[150px] h-auto object-contain"/>
          <Image src={MBZC} alt="mbz" className="w-[150px] h-auto object-contain" />
          <p className="text-[14px] lg:text-[20px] font-bold w-[150px] text-center">NJATI FOOD SYSTEMS</p>
        </div>
        <h1 className="text-[40px] font-bold text-[#F19221] my-4"><span className="text-black border-b-4 border-black">
          CLIENT&apos;S</span> TESTIMONIALS
        </h1>
        <div className="w-[90%] lg:w-1/3 bg-black text-white">
          <p className="font-medium text-center p-4 rounded">
            “Mexus Industrial Solutions Limited is committed to  putting it&apos;s clients 
            first and to promoting long-term relationships within the Private and Public 
            sectors.”
          </p>
        </div>
      </div>
    </>
  );
}

export default Clients;
