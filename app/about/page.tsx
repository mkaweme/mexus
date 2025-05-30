"use client";
import React, { useState } from "react";
import Image from "next/image";
import Team from "@/public/assets/team.jpg";
import Mission from "@/public/assets/mission.jpg";
import { Icon } from "@iconify/react";

const TEAMMEMBERS = [
  {
    photo: "/assets/makoba.jpg",
    title: "Director - Mechanical",
    name: "Makoba Kaweme",
    body: `Makoba serves as the Director - Mechanical. With over 6 years 
    experince in the field, Makoba holds a Bachelor's Degree in Mechanical 
    Engineering obtained from the University of Zambia and is a registered 
    engineer.`,
  },
  {
    photo: "",
    title: "Electrician",
    name: "Michael",
    body: `Michael works as the Director - Electrical Services and has over 14 years 
    experince in the field. He holds a Diploma in Electrical Engineering
    and is a registered technologist.`,
  },
  {
    photo: "",
    title: "Mechanical Fitter",
    name: "Mofya",
    body: `Mofya works as the Mechanical Fitter. With over 14 years 
    experince in the field, Michael holds a Diploma in Mechanical Fitting
     and is a registered technologist.`,
  }
];

const About: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  //Define a function that moves to the previous item
  const prevItem = () => {
    const isFirstItem: boolean = currentIndex === 0;
    const newIndex: number = isFirstItem ? TEAMMEMBERS.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  //Define a function that moves to the next item
  const nextItem = () => {
    const isLastItem: boolean = currentIndex === TEAMMEMBERS.length - 1;
    const newIndex: number = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="w-full h-[300px] lg:h-[400px] bg-[url('/assets/services_2.jpg')] bg-cover">
        <div className="flex flex-col gap-y-10 justify-center items-center bg-[#1419499A] w-full h-full">
          <h1 className="text-[36px] lg:text-[55px] font-poppins font-bold text-[#F19221]"><span className="text-white">ABOUT</span> US</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center bg-[url('/assets/team_background.png')] bg-cover py-20">
        <div className="flex-1">
          <p className="mx-6 lg:mx-16">We are a mechanical engineering company dedicated to delivering
            quality and timely solutions that meet every client’s particular needs. Our success
            lies in the innovation we bring to every project - whether it is a simple repair
            job or full-scale turnkey project. We are always up to the challenge of
            offering professional and reliable solutions. With full capabilities to carry
            out structural steel fabrication and erection, general metal fabrication,
            machinery maintenance and repair, equipment supply and installation, we are
            fully equipped to handle projects of any scale.
          </p>
          <p className="mx-6 lg:mx-16 mt-3">At Mexus Industrial Solutions, we understand the need for excellent
            plant reliability and operational uptime. In addition to our effective maintenance
            strategies, we are dedicated to providing high quality, durable and reliable equipment
            and spare parts on time. As a trusted supplier of industrial equipment and spares, you
            can rely on us as a dependable partner for all your operational needs.
          </p>
        </div>
        <div className="relative flex flex-row flex-1 mt-10">
          <div className="absolute w-[40%] h-4 bg-[#F19221]"></div>
          <Image src={ Team } alt="team" width={ 527 } height={ 405 } className="rounded w-[350px] md:w-[450px] lg:w-[527px] h-auto" />
          <div className="absolute w-[40%] h-4 top-[217px] md:top-[283px] lg:top-[334px] left-[105px] md:left-[135px] lg:left-[130px] bg-[#F19221]"></div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:h-[400px] text-white bg-black">
        <div className="flex flex-col items-center flex-1 my-10 mx-4 lg:mx-10">
          <p className="text-[36px] lg:text-[48px] font-poppins font-bold text-[#F19221] bg-cover text-center mb-10 lg:mt-10">
            <span className="text-white border-b-4 border-[#F19221]">Our</span> Mission
          </p>
          <p className="text-center">Our mission is to deliver timely and cost-effective solutions to our
            clients while maintaining unwavering commitment to safety and uncompromising quality
            standards.
          </p>
        </div>
        <div className="relative flex flex-row flex-1 ml-20">
          <div className="absolute flex flex-row w-[130px] h-[150px] top-[260px] -left-[80px] items-center justify-center bg-black clip-hexagon z-20">
            <div className="w-[110px] h-[130px] bg-[#F19221] clip-hexagon">
            </div>
          </div>
          <div className="flex flex-row items-center justify-center align-middle w-[380px] h-[420px] clip-hexagon bg-black z-10">
            <div className="flex flex-row items-center justify-center align-middle w-[360px] h-[400px] clip-hexagon">
              <Image src={ Mission } alt="maintenance" width={ 384 } height={ 384 } className="w-[500px] h-[500px] object-cover" />
            </div>
          </div>
          <div className="absolute flex flex-row w-[450px] h-[550px] left-[190px] top-16 items-center justify-center bg-[#F19221] clip-hexagon">
          </div>
        </div>
      </div>
      <div className="relative bg-white z-20 py-10">
        <p className="text-[36px] lg:text-[48px] font-poppins font-bold text-[#f19221] mb-10 mx-16">
          <span className="text-black font-poppins border-b-4 border-[#f19221]">Core</span> Values
        </p>
        <ul className="flex flex-col mx-6 lg:mx-16 gap-y-6 list-outside">
          <li className="flex flex-row">
            <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="flex flex-row mr-4" />
            <div className="flex flex-col">
              <p className="font-poppins font-semibold text-[20px]">Quality</p>
              <p>We are dedicated to providing the highest quality
                services and products to our clients, ensuring we
                add value to their investment. Our comprehensive,
                end-to-end engineering processes and systems provide
                the means by which we can fulfil our commitments and
                deliver excellent services.
              </p>
            </div>
          </li>
          <li className="flex flex-row">
            <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="flex flex-row mr-4" />
            <div>
              <p className="font-poppins font-semibold text-[20px]">Value</p>
              <p>We treat our client&apos;s business as our own by
                providing value for money and obtaining the most
                competitive pricing on the market.
              </p>
            </div>
          </li>
          <li className="flex flex-row">
            <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="flex flex-row mr-4" />
            <div>
              <p className="font-poppins font-semibold text-[20px]">Integrity</p>
              <p>We maintain transparency and honesty in all our
                business dealings to ensure we build trust and
                long-term relationships with our clients.
              </p>
            </div>
          </li>
          <li className="flex flex-row">
            <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="flex flex-row mr-4" />
            <div>
              <p className="font-poppins font-semibold text-[20px]">Kaizen</p>
              <p>Any good idea can be made even better! We are
                committed to continuous improvement in every
                aspect of our business and actively promote
                teamwork to drive innovation and success.
              </p>
            </div>
          </li>
          <li className="flex flex-row">
            <Icon icon="material-symbols:hexagon" width="30" height="30" color="#F19221" className="flex flex-row mr-4" />
            <div>
              <p className="font-poppins font-semibold">Innovation</p>
              <p>We aspire to continuously provide our clients
                with improved, innovative and effective solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center bg-[#EDEEEE] w-full">
        <p className="text-[40px] font-poppins font-bold text-[#f19221] mt-16">
          <span className="text-black border-b-4 border-[#f19221]">Our</span> Team
        </p>
        <div className="flex flex-col mx-6 lg:mx-20 mb-20">
          <div className="flex flex-row gap-x-6 my-4 self-end">
            <button className="bg-[#F19221] rounded-full" aria-label="previous image" type="button" onClick={ () => prevItem() }>
              <Icon icon="iconamoon:arrow-left-2-light" width="24" height="24" />
            </button>
            <button className="bg-[#F19221] rounded-full" aria-label="next image" type="button" onClick={ () => nextItem() }>
              <Icon icon="iconamoon:arrow-right-2-light" width="24" height="24" />
            </button>
          </div>
          <div className="flex lg:flex-row gap-x-6 justify-center items-center align-middle transition-all">
            {
              TEAMMEMBERS.map((item, index) => {
                return (
                  <div key={ index } className={ index === currentIndex ? "flex flex-col-reverse lg:flex-row lg:w-[446px] gap-x-4" : "hidden lg:flex flex-row lg:w-[200px] gap-x-4" }>
                    <p className={ index === currentIndex ? "flex flex-col lg:w-[230px] bg-black text-white rounded-sm p-4" : "hidden" }>
                      { item.body }
                    </p>
                    <div className="flex flex-col lg:w-[200px] text-white font-poppins bg-black rounded-sm p-4">
                      { item.photo ? <Image alt="pic" src={ item.photo } width={ 300 } height={ 300 } className="self-center w-full lg:w-[250px] h-auto mb-4 rounded-sm" /> : <Icon icon="lsicon:user-filled" width="184" height="184" className="self-center" /> }
                      <p className="font-semibold text-[16px]">{ item.name }</p>
                      <p className="italic text-[14px]">{ item.title }</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;