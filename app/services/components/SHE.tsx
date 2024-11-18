import React from "react";
import Image from "next/image";
import PPE from "@/public/assets/ppe.jpg"

const SHE = () => {
  return (
    <div className="relative flex flex-col items-center bg-[#EDEEEE]">
      <h1 className="text-[32px] lg:text-[40px] font-bold text-[#F19221] my-10"><span className="text-black border-b-4 border-[#F19221]">SAFETY, HEALTH</span> &ENVIRONMENT</h1>
      <Image src={PPE} alt="ppe" className="rounded w-[400px] lg:w-[650px] h-auto my-10 border-8 border-[#e46c0a]" />
      <p className="mx-10 lg:mx-64 my-4 text-[14px] lg:text-[16px]">We are fully committed to improving Health, safety and environmental performance 
        across all areas of our business in accordance with ISO 14001, OHSAS 18001 and all 
        relevant legal requirements.
      </p>
      <div className="absolute flex flex-row w-[130px] h-[140px] -left-[65px] top-36 items-center justify-center bg-[#F19221] clip-hexagon">
        <div className="flex flex-row w-[98px] h-[108px] top-[260px] -left-[80px] items-center justify-center bg-white clip-hexagon z-20">
          <div className="w-[90px] h-[100px] bg-[#F19221] clip-hexagon">
          </div>
        </div>
      </div>
      <div className="absolute flex flex-row w-[230px] h-[270px] -right-[115px] top-36 items-center justify-center bg-[#F19221] clip-hexagon overflow-hidden">
        <div className="flex flex-row w-[168px] h-[198px] top-[260px] -left-[80px] items-center justify-center bg-white clip-hexagon z-20">
          <div className="w-[160px] h-[190px] bg-[#F19221] clip-hexagon">
          </div>
        </div>
      </div>
    </div>
  );
}

export default SHE;