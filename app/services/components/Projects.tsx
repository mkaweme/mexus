"use client";
import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";
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

type Project = {
  title: string;
  description: string;
  type: string;
  images: StaticImageData[];
};

const PROJECTS: Project[] = [
  {
    title: "Installation of Impact Bed",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum.`,
    type: "mechanical",
    images: [NFCA1, NFCA2, NFCA3, NFCA4],
  },
  {
    title: "Installation of An Eye Wash Station",
    description: `Donec sed dui tincidunt, ullamcorper lacus at,
      fermentum libero. Mauris laoreet sagittis urna et lobortis.
      Quisque ut augue consectetur, malesuada quam eget, 
      facilisis tortor. Phasellus dapibus magna non tincidunt 
      laoreet. Curabitur volutpat in dui ac ornare. Fusce eu 
      ultrices magna. Vivamus quis felis turpis. Integer 
      faucibus sollicitudin sollicitudin. In commodo tempor 
      turpis ac dignissim. Phasellus sollicitudin orci vel 
      ligula pulvinar, nec vehicula nunc ornare. Vivamus ac 
      lobortis sem, quis ultrices est. Vestibulum ante ipsum 
      primis in faucibus orci luctus et ultrices posuere cubilia
      curae; Pellentesque ornare urna eros, sed pretium lorem 
      sollicitudin quis`,
    type: "mechanical",
    images: [BAT1, BAT2, BAT3, BAT4],
  },
  {
    title: "Repair of a Tobacco Feeder",
    description: `Suspendisse lacinia erat a fringilla ornare. 
      Sed lobortis ipsum eu metus blandit, sed tincidunt metus 
      congue. Morbi quis turpis eget justo efficitur laoreet. 
      Cras eget purus lorem. Donec cursus, tellus ut feugiat 
      volutpat, est dui hendrerit est, nec porttitor dui velit 
      non lacus. Maecenas vel enim mi. In eget eros finibus, 
      viverra eros et, efficitur augue. Phasellus tempor 
      facilisis diam eu gravida. Donec convallis est a aliquet 
      maximus.`,
    type: "electrical",
    images: [BAT5, BAT6, BAT5, BAT6],
  },
];

const Projects: React.FC = () => {

  const [currentIndices, setCurrentIndices] = useState<number[]>(PROJECTS.map(() => 0));

  const handlePreviousImage = (projectIndex: number) => {
    setCurrentIndices((prevIndices) => 
      prevIndices.map((currentIndex, index) => 
        (index === projectIndex) 
          ? (currentIndex === 0 
            ? PROJECTS[projectIndex].images.length - 1 
            : currentIndex - 1)
          : (currentIndex)
    ));
  };


  const handleNextImage = (projectIndex: number) => {
    setCurrentIndices((prevIndices) => 
      prevIndices.map((currentIndex, index) => 
        (index === projectIndex) 
          ? (currentIndex === PROJECTS[projectIndex].images.length - 1 
            ? 0
            : currentIndex + 1)
          : (currentIndex)
    ));
  };

  return (
    <div id="projects" className="flex flex-col w-full items-center align-middle">
      <h1 className="text-[32px] lg:text-[40px] font-bold text-[#F19221] my-6 lg:my-10"><span className="text-black border-b-4 border-[#F19221]">OUR</span> PROJECTS</h1>
      <div className="flex flex-col lg:[&>*:nth-child(even)]:flex-row-reverse mx-24">
        {
          PROJECTS.map((project, projectIndex) => {
            return (
              <div key={ projectIndex } className="flex flex-col lg:flex-row my-4 lg:my-16 gap-x-12">
                <div className="flex flex-col flex-1 lg:py-20">
                  <h2 className="text-poppins text-[20px] font-semibold text-center">{ project.title }</h2>
                  <p className="my-4 lg:my-10 font-light">{ project.description }</p>
                </div>
                <div className="flex flex-col items-center">
                  <div style={ { backgroundImage: `url(${project.images[currentIndices[projectIndex]].src})` } } className="flex flex-col w-[350px] lg:w-[550px] h-[350px] lg:h-[400px] items-center duration-500 rounded-md bg-cover bg-center">
                  </div>
                  <div className="flex flex-row my-2">
                    { project.images.map((image: StaticImageData, index: number) => (
                      <Icon key={ index } icon="icon-park-outline:dot" width="16" height="16" color={ index === currentIndices[projectIndex] ? "#F19221" : "#D9D9D9" } />
                    )) }
                  </div>
                  <div className="flex flex-row gap-x-6 my-3">
                    <button className="bg-[#F19221] rounded-full" aria-label="previous image" type="button" onClick={ () => handlePreviousImage(projectIndex) }>
                      <Icon icon="iconamoon:arrow-left-2-light" width="24" height="24" />
                    </button>
                    <button className="bg-[#F19221] rounded-full" aria-label="next image" type="button" onClick={ () => handleNextImage(projectIndex) }>
                      <Icon icon="iconamoon:arrow-right-2-light" width="24" height="24" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Projects;