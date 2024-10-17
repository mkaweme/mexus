"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NFCA1 from "@/public/assets/nfca_1.jpg";
import NFCA2 from "@/public/assets/nfca_2.jpg";
import NFCA3 from "@/public/assets/nfca_3.jpg";
import NFCA4 from "@/public/assets/nfca_4.jpg";
import BAT1 from "@/public/assets/bat_1.jpg";
import BAT2 from "@/public/assets/bat_2.jpg";
import BAT3 from "@/public/assets/bat_3.jpg";

const Projects = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState("fade-in");

  const images = [
    { src: NFCA2, title: "Installation of impact bed"  },
    { src: BAT1, title: "Installation of an Eye wash station" },
    { src: BAT3, title: "Repair of a Tobacco Feeder"  },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade("fade-out");
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade("fade-in");
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="flex flex-col mx-16 my-10 items-center justify-center align-middle">
        <h1 className="text-[48px] font-bold text-[#e46c0a]">Projects</h1>
        <p className="text-[20px] my-4">Some of our past projects.</p>
        {/* <div className="flex flex-col items-center">
          <h3 className="text-[24px] font-bold text-[#e46c0a]">NFCA Mining PLC</h3>
          <p className="text-[20px] my-4">Installation of impact bed</p>
          <div className="flex flex-row flex-wrap gap-4 justify-center p-2">
            <Image src={NFCA2} alt="nfca2" className="w-1/3 h-auto"/>
          </div>   
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-[24px] font-bold">British American Tobacco (BAT) PLC</h3>
          <p className="text-[20px] my-4">Installation of an Eye wash station</p>
          <div className="flex flex-row gap-4 p-2">
            <Image src={BAT1} alt="bat1" className="w-full max-w-[500px] object-contain"/>
          </div>   
          <p className="text-[20px] my-4">Repair of a Tobacco Feeder</p>
          <div className="flex flex-row flex-wrap gap-4 justify-center p-2">
            <Image src={BAT3} alt="bat3" className="w-1/2 h-auto"/>
          </div>   
        </div> */}
        <div className="relative flex flex-row w-[600px] mx-20 my-10 z-0 bg-yellow-700">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? "fade-in" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black text-white text-center">
                <h2 className="text-lg">{image.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-[24px] font-bold">Njati Food Systems</h3>
          <ul>
            <li>Maintenance of agro-processing machines and spare parts supply.</li>
            <li>Supply of Electric Motors.</li>
            <li>Maintenance of mills, gearbox servicing andmaintenance.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[24px] font-bold">Hudtech Solutions</h3>
          <ul>
            <li>Mechanical survey (A.C, Fire, Plumbing, Sewer and power backup 
              system inspection) and report writing
            </li>
            <li>Production of as-built mechanical drawings</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Projects;