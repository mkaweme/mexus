import React from "react";
import Image from "next/image";
import Team from "@/public/assets/team.jpg";
import Mission from "@/public/assets/mission_3.jpg";

const About = () => {

  const teammembers = [
    {
      photo: "/assets/caesar.jpeg",
      title: "Managing Director",
      name: "Caesar Chellah",
      body: `Caesar is the managing director and has been serving as 
      managing director from inception. With over 8 years experince in 
      the field, Caesar holds a Bachelor's Degree in Mechanical Engineering 
      obtained from the University of Zambia and is a registered engineer.`,
    },
    {
      photo: "/assets/makoba.jpg",
      title: "Director - Mechanical",
      name: "Makoba Kaweme",
      body: `Makoba is the Director - Mechanical Services. With over 8 years 
      experince in the field, Caesar holds a Bachelor's Degree in Mechanical 
      Engineering obtained from the University of Zambia and is a registered 
      engineer.`,
    },
    {
      photo: "/assets/caesar.jpeg",
      title: "Director - Electrical",
      name: "Michael",
      body: `Michael is the Director - Electrical Services. With over 14 years 
      experince in the field, Michael holds a Diploma in Electrical Engineering
      and is a registered technologist.`,
    },
    {
      photo: "/assets/caesar.jpeg",
      title: "Deputy Director - Mechanical",
      name: "Mofya",
      body: `Mofya is the Director - Mechanical Services. With over 14 years 
      experince in the field, Michael holds a Diploma in Mechanical 
      Engineering and is a registered technologist.`,
    }
  ];

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="w-full h-[300px] lg:h-[400px] bg-[url('/assets/services_2.jpg')] bg-cover">
        <div className="flex flex-col gap-y-10 justify-center items-center bg-[#1419499A] w-full h-full">
          <h1 className="text-[36px] lg:text-[55px] font-poppins font-bold text-[#F19221]"><span className="text-white">ABOUT</span> US</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row bg-[url('/assets/team_background.png')] bg-cover py-20">
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
        <div className="relative flex flex-row flex-1">
          <div className="absolute w-[40%] h-4 bg-[#F19221]"></div>
          <Image src={ Team } alt="team" width={527} height={405} className="rounded w-[300px] lg:w-[527px] h-auto" />
          <div className="absolute w-[40%] h-4 top-[334px] left-[130px] bg-[#F19221]"></div>
        </div>
      </div>
      <div className="flex flex-row w-full h-[400px] text-white bg-black">
        <div className="flex flex-col items-center flex-1 my-10 mx-10">
          <p className="text-[48px] font-poppins font-bold text-[#F19221] bg-cover text-center my-10">
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
              <Image src={ Mission } alt="maintenance" width={ 535 } height={ 357 } className="w-[535px] h-[357px]" content="cover"/>
            </div>
          </div>
          <div className="absolute flex flex-row w-[450px] h-[550px] left-[190px] top-16 items-center justify-center bg-[#F19221] clip-hexagon">
          </div>
        </div>
      </div>
      <div className="relative bg-white z-20">
        <p className="text-[48px] font-bold text-[#e46c0a] my-10">
          <span className="text-black border-b-4 border-[#e46c0a]">Core</span> Values
        </p>
        <ul className="flex flex-col mx-6 lg:mx-16 gap-y-6 list-outside">
          <li><span className="font-bold text-[#e46c0a]">Quality - </span> We are dedicated to providing the
            highest quality services and products to our clients, ensuring we add value to their
            investment. Our comprehensive, end-to-end engineering processes and systems provide
            the means by which we can fulfil our commitments and deliver excellent services.
          </li>
          <li><span className="font-bold text-[#e46c0a]">Value - </span> We treat our clients’ business as
            our own by providing value for money and obtaining the most competitive pricing on the market.
          </li>
          <li><span className="font-bold text-[#e46c0a]">Integrity - </span> We maintain transparency and
            honesty in all our business dealings to ensure we build trust and long-term relationships with
            our clients.
          </li>
          <li><span className="font-bold text-[#e46c0a]">Kaizen - </span> Any good idea can be made even
            better! We are committed to continuous improvement in every aspect of our business and actively
            promote teamwork to drive innovation and success.
          </li>
          <li><span className="font-bold text-[#e46c0a]">Innovation - </span> We aspire to continuously
            provide our clients with improved, innovative and effective solutions.
          </li>
        </ul>
      </div>
      <p className="text-[48px] font-bold text-[#e46c0a] my-10">
        <span className="text-black border-b-4 border-[#e46c0a]">Our</span> Team
      </p>
      <div className="flex flex-col lg:[&>*:nth-child(even)]:flex-row-reverse mx-16">
        { teammembers.map((item, index) => {
          return (
            <div key={ index } className="flex rounded-xl pt-8 m-5 lg:w-[90%] items-center">
              <div className="flex flex-col items-center">
                <Image alt="pic" src={ item.photo } width={300} height={300} className="self-center lg:w-[900px] mb-4 rounded-lg" />
                <p className="font-bold text-[16px]">{ item.name }</p>
                <p className="font-bold text-[16px]">{ item.title }</p>
              </div>
              <p className="text-[14px] mx-32">{ item.body }</p>
            </div>
          )
        }) }
      </div>
    </div>
  );
};

export default About;