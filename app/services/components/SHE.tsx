import React from "react";
import Image from "next/image";
import PPE from "@/public/assets/ppe.jpg"

const SHE = () => {
  return (
    <div className="relative flex flex-col w-full">
      <div className="relative flex flex-col items-center bg-[#EDEEEE] overflow-hidden py-10 lg:py-0">
        <h1 className="text-[30px] lg:text-[40px] font-poppins font-bold text-[#F19221] text-center lg:text-start my-10"><span className="text-black border-b-4 border-[#F19221]">SAFETY, HEALTH</span> &ENVIRONMENT</h1>
        <div className="relative flex flex-row">
          <div className="absolute w-[40%] h-4 bg-[#F19221]"></div>
          <Image src={ PPE } alt="ppe" className="rounded w-[350px] lg:w-[700px] h-auto" />
          <div className="absolute w-[60%] h-4 top-[450px] left-[130px] bg-[#F19221]"></div>
        </div>
        <p className="mx-10 lg:w-[700px] lg:mx-64 my-4 text-[14px] lg:text-[16px]">We are fully committed to improving Health, safety and environmental performance
          across all areas of our business in accordance with ISO 14001, OHSAS 18001 and all
          relevant legal requirements.
        </p>
        <div className="hidden absolute lg:flex flex-row w-[130px] h-[140px] -left-[65px] top-36 items-center justify-center bg-[#F19221] clip-hexagon">
          <div className="flex flex-row w-[98px] h-[108px] top-[260px] -left-[80px] items-center justify-center bg-white clip-hexagon z-20">
            <div className="w-[90px] h-[100px] bg-[#F19221] clip-hexagon">
            </div>
          </div>
        </div>
        <div className="hidden absolute lg:flex flex-row w-[115px] lg:w-[230px] h-[135px] lg:h-[270px] -right-[65px] lg:-right-[115px] top-36 items-center justify-center bg-[#F19221] clip-hexagon">
          <div className="flex flex-row w-[168px] h-[198px] top-[260px] -left-[80px] items-center justify-center bg-white clip-hexagon z-20">
            <div className="w-[160px] h-[190px] bg-[#F19221] clip-hexagon">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SHE;