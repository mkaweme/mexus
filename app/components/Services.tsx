import Image from "next/image";
import React from "react";
import Maintenance from "@/public/assets/maintenance.jpg";
import Bolts from "@/public/assets/bolts.jpg";

const Services = () => {
  return (
    <>
      <div className="mx-16 my-10">
        <div className="flex flex-col align-middle justify-center items-center">
          <h1 className="text-[48px] font-bold text-[#e46c0a]">Our Services</h1>
          <p className="text-[24px]">We offer comprehensive and reliable mechanical and
            and electrical engineering services to the manufacturing, 
            mining, agriculture, civil and transport sectors.
          </p>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row my-2">
            <div className="flex flex-col">
              <p className="text-[36px] my-3"> Our services include: </p>
              <ul className="flex flex-col text-[20px] list-outside list-disc gap-4">
                <li>Steel Fabrication: Structural steel, tanks, sheet metalwork etc.</li>
                <li>Plant intallation and maintenance.</li>
                <li>Plant shutdown maintenance</li>
                <li>Mechanical survey, inspection and consultancy</li>
                <li>Industrial equipment and spare parts supply</li>
                <li>Pulley rubber lagging and belt splicing</li>
                <li>Gearbox, cylinders and pump repair and overhaul</li>
              </ul>
            </div>
            <Image src={Maintenance} alt="maintenance" className="rounded-full w-[450px] h-auto mx-32 border-8 border-[#e46c0a]"/>
          </div>
          <div className="flex flex-col lg:flex-row my-4">
            <div className="flex flex-col">
              <p className="text-[36px] my-3">We supply mechanical consumables: </p>
              <ul className="flex flex-col text-[20px] list-outside list-disc gap-4">
                <li>Lubricants</li>
                <li>Belts</li>
                <li>Fasteners</li>
                <li>Couplings</li>
                <li>Bearings</li>
                <li>Welding rods</li>
              </ul>
            </div>
            <Image src={Bolts} alt="bolts" className="rounded-full w-[400px] h-auto mx-32 border-8 border-[#e46c0a]"/>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Services;