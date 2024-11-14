"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import NFCA2 from "@/public/assets/nfca_2.jpg";
import BAT1 from "@/public/assets/bat_1.jpg";
import BAT3 from "@/public/assets/bat_3.jpg";

type project = {
  src: StaticImageData;
  title: string;
}

const PROJECTS: project[] = [
  { src: NFCA2, title: "Installation of impact bed"  },
  { src: BAT1, title: "Installation of an Eye wash station" },
  { src: BAT3, title: "Repair of a Tobacco Feeder"  },
];
const Projects = () => {

  //Create state variables
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState("fade-in");

  //Create a useEffect for running the function that changes the image
  useEffect(() => {
    const interval = setInterval(() => {
      setFade("fade-out");
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % PROJECTS.length);
        setFade("fade-in");
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="relative flex flex-col w-full h-screen items-center align-middle bg-pink-500">
        <h1 className="text-[32px] lg:text-[40px] font-bold text-[#F19221] my-10"><span className="text-black border-b-4 border-black">OUR</span> PROJECTS</h1>
        <div className="relative flex flex-col-reverse w-[250px] lg:w-[550px] h-auto mx-20 my-8 z-0">
          {PROJECTS.map((image, index) => (
            <div
              key={index}
              className={`absolute bottom-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out z-10 ${
                index === currentImage ? "fade-in" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={500}
                height={500}
                className={`w-full h-auto object-cover ${fade}`}
              />
              <div className="absolute w-full font-bold my-6 lg:my-3 p-2 text-center">
                <h2 className="text-lg">{image.title}</h2>
              </div>
            </div>
          ))}
          <div className="absolute -top-[20px] -left-[20px]">
            <div className="bg-[#F39224] w-[60px] lg:w-[120px] h-[60px] lg:h-[120px]"></div>
            <div className="absolute bottom-0 right-0 bg-white w-[50px] lg:w-[110px] h-[50px] lg:h-[110px]"></div>
          </div>
          <div className="absolute -top-[20px] -right-[20px]">
            <div className="bg-[#F39224] w-[60px] lg:w-[120px] h-[60px] lg:h-[120px]"></div>
            <div className="absolute bottom-0 left-0 bg-white w-[50px] lg:w-[110px] h-[50px] lg:h-[110px]"></div>
          </div>
          <div className="absolute -bottom-[210px] lg:-bottom-[435px] -left-[20px]">
            <div className="bg-[#F39224] w-[60px] lg:w-[120px] h-[60px] lg:h-[120px]"></div>
            <div className="absolute top-0 right-0 bg-white w-[50px] lg:w-[110px] h-[50px] lg:h-[110px]"></div>
          </div>
          <div className="absolute -bottom-[210px] lg:-bottom-[435px] -right-[20px]">
            <div className="bg-[#F39224] w-[60px] lg:w-[120px] h-[60px] lg:h-[120px]"></div>
            <div className="absolute top-0 left-0 bg-white w-[50px] lg:w-[110px] h-[50px] lg:h-[110px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;