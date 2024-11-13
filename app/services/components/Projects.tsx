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
import BAT4 from "@/public/assets/bat_4.jpg";
import BAT5 from "@/public/assets/bat_5.jpg";
import BAT6 from "@/public/assets/bat_6.jpg";

const Projects = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState("fade-in");

  const images = [
    { src: NFCA2, title: "Installation of impact bed"  },
    { src: BAT1, title: "Installation of an Eye wash station" },
    { src: BAT5, title: "Repair of a Tobacco Feeder"  },
  ];
  const images2 = [
    { src: NFCA1, title: "Installation of impact bed"  },
    { src: BAT2, title: "Installation of an Eye wash station" },
    { src: BAT6, title: "Repair of a Tobacco Feeder"  },
  ];
  const images3 = [
    { src: NFCA3, title: "Installation of impact bed"  },
    { src: BAT3, title: "Installation of an Eye wash station" },
    { src: BAT6, title: "Repair of a Tobacco Feeder"  },
  ];
  const images4 = [
    { src: NFCA4, title: "Installation of impact bed"  },
    { src: BAT4, title: "Installation of an Eye wash station" },
    { src: BAT6, title: "Repair of a Tobacco Feeder"  },
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
      <div className="relative flex flex-col w-full h-screen my-4 items-center align-middle">
        <h1 className="text-[48px] font-bold text-[#e46c0a]">Projects</h1>
        <p className="text-[20px] my-4">Some of our past projects.</p>
        <div className="relative flex flex-col-reverse w-[600px] mx-20 my-10 z-0 bg-gray-500">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-auto transition-opacity duration-1000 ease-in-out z-10 ${
                index === currentImage ? "fade-in" : "opacity-0"
              }`}
            >
              <div className="w-full font-bold my-3 p-2 text-center">
                <h2 className="text-lg">{image.title}</h2>
              </div>
            </div>
          ))}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-1/2 h-auto transition-opacity duration-1000 ease-in-out z-10 ${
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
            </div>
          ))}
          {images2.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 right-0 w-1/2 h-auto transition-opacity duration-1000 ease-in-out z-10 ${
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
            </div>
          ))}
          {images3.map((image, index) => (
            <div
              key={index}
              className={`absolute bottom-[-450px] left-0 w-1/2 h-auto transition-opacity duration-1000 ease-in-out z-10 ${
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
            </div>
          ))}
          {images4.map((image, index) => (
            <div
              key={index}
              className={`absolute bottom-[-450px] right-0 w-1/2 h-auto transition-opacity duration-1000 ease-in-out z-10 ${
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
            </div>
          ))}
          <div className="absolute top-[-20px] left-[-20px]">
            <div className="bg-[#F39224] w-[120px] h-[120px]"></div>
            <div className="absolute bottom-0 right-0 bg-white w-[110px] h-[110px]"></div>
          </div>
          <div className="absolute top-[-20px] right-[-20px]">
            <div className="bg-[#F39224] w-[120px] h-[120px]"></div>
            <div className="absolute bottom-0 left-0 bg-white w-[110px] h-[110px]"></div>
          </div>
          <div className="absolute bottom-[-470px] left-[-20px]">
            <div className="bg-[#F39224] w-[120px] h-[120px]"></div>
            <div className="absolute top-0 right-0 bg-white w-[110px] h-[110px]"></div>
          </div>
          <div className="absolute bottom-[-470px] right-[-20px]">
            <div className="bg-[#F39224] w-[120px] h-[120px]"></div>
            <div className="absolute top-0 left-0 bg-white w-[110px] h-[110px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;