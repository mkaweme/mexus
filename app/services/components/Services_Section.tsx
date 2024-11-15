import React from "react";
import Image from "next/image";
import Metal_Fab from "@/public/assets/metal_fab_resized.jpg";
import { Icon } from "@iconify/react";

const Services_Section: React.FC = () => {

  return (
      <div className="overflow-hidden">
        <div className="w-full h-[300px] lg:h-[400px] bg-[url('/assets/services_2.jpg')] bg-cover">
          <div className="flex flex-col gap-y-10 justify-center items-center bg-[#1419499A] w-full h-full">
            <h1 className="text-[36px] lg:text-[55px] font-bold text-[#F19221]"><span className="text-white">OUR</span> SERVICES</h1>
            <p className="text-[16px] text-center w-[50%] text-white">We offer comprehensive and reliable mechanical and
              and electrical engineering services to the manufacturing, 
              mining, agriculture, civil and transport sectors.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-14 my-24 z-0">
          <div className="flex flex-col mx-24">
            <p className="text-[36px] text-[#F19221] font-bold mb-10"><span className="text-black border-b-4 border-[#F19221]">OUR SERVICES</span> INCLUDE </p>
            <ul className="flex flex-col text-[20px] gap-4">
              <li className="flex flex-row">
                <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="mr-4"/>
                Steel Fabrication: Structural steel, tanks, sheet metalwork etc.
              </li>
              <li className="flex flex-row">
                <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="mr-4"/>
                Plant intallation and maintenance.
              </li>
              <li className="flex flex-row">
                <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="mr-4"/>
                Plant shutdown maintenance
              </li>
              <li className="flex flex-row">
                <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="mr-4"/>
                Industrial equipment and spare parts supply
              </li>
              <li className="flex flex-row">
                <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="mr-4"/>
                Pulley rubber lagging and belt splicing
              </li>
              <li className="flex flex-row">
                <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="mr-4"/>
                Gearbox, cylinders and pump repair and overhaul
              </li>
            </ul>
          </div>
          <div className="relative flex flex-row z-0">
            <div className="absolute flex flex-row w-[130px] h-[150px] top-[260px] -left-[80px] items-center justify-center bg-white clip-hexagon z-20">
              <div className="w-[110px] h-[130px] bg-[#F19221] clip-hexagon">
              </div>
            </div>
            <div className="flex flex-row items-center justify-center align-middle w-[380px] h-[420px] clip-hexagon bg-white z-10">
              <div className="flex flex-row items-center justify-center align-middle w-[360px] h-[400px] clip-hexagon">
                <Image src={Metal_Fab} alt="maintenance" width={1620} height={1080} className="w-[360px] h-[400px]"/>
              </div>
            </div>
            <div className="absolute flex flex-row w-[450px] h-[550px] left-[190px] top-16 items-center justify-center bg-[#F19221] clip-hexagon">
            </div>
          </div>
        </div>
        <div className="relative flex flex-col text-white bg-black">
          <div className="flex flex-col m-24">
            <p className="text-[36px] text-[#F19221] font-bold mb-10"><span className="text-white border-b-4 border-b-[#F19221]">WE SUPPLY</span> MECHANICAL CONSUMABLES</p>
            <ul className="flex flex-col lg:flex-row text-[20px]  justify-between">
              <li className="flex flex-row">
                <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="mr-4"/>
                  Lubricants
              </li>
              <li className="flex flex-row">
                <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="mr-4"/>
                  Belts
              </li>
              <li className="flex flex-row">
                <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="mr-4"/>
                  Fasteners
              </li>
              <li className="flex flex-row">
                <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="mr-4"/>
                  Couplings
              </li>
              <li className="flex flex-row">
                <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="mr-4"/>
                  Bearings
              </li>
              <li className="flex flex-row">
                <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="mr-4"/>
                  Welding Rods
              </li>
            </ul>
          </div>
        </div> 
      </div>
  );
}

export default Services_Section;