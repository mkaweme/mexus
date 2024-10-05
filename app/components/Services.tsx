import React from "react";

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
          <p className="text-[36px] my-3">We supply mechanical consumables: </p>
          <ul className="flex flex-col text-[20px] list-outside list-disc gap-4">
            <li>Lubricants</li>
            <li>Belts.</li>
            <li>Fasteners</li>
            <li>Couplings</li>
            <li>Bearings</li>
            <li>Welding rods</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Services;