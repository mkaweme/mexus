import React from "react";
import Image from "next/image";

const About = () => {

  const teammembers = [
    {
      photo: require("@/public/assets/caesar.jpeg"),
      title: "Managing Director",
      name: "Caesar Chellah",
      body: `Caesar is the managing director and has been serving as 
      managing director from inception. With over 8 years experince in 
      the field, Caesar holds a Bachelor's Degree in Mechanical Engineering 
      obtained from the University of Zambia and is a registered engineer.`,
    },
    {
      photo: require("@/public/assets/makoba.jpg"),
      title: "Director - Mechanical",
      name: "Makoba Kaweme",
      body: `Makoba is the Director - Mechanical Services. With over 8 years 
      experince in the field, Caesar holds a Bachelor's Degree in Mechanical 
      Engineering obtained from the University of Zambia and is a registered 
      engineer.`,
    },
    {
      photo: require("@/public/assets/caesar.jpeg"),
      title: "Director - Electrical",
      name: "Michael",
      body: `Michael is the Director - Electrical Services. With over 14 years 
      experince in the field, Michael holds a Diploma in Electrical Engineering
      and is a registered technologist.`,
    },
    {
      photo: require("@/public/assets/caesar.jpeg"),
      title: "Deputy Director - Mechanical",
      name: "Mofya",
      body: `Mofya is the Director - Mechanical Services. With over 14 years 
      experince in the field, Michael holds a Diploma in Mechanical 
      Engineering and is a registered technologist.`,
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <p className="text-[48px] font-bold text-[#e46c0a] my-10">
        <span className="text-black font-poppins border-b-4 border-[#e46c0a]">About</span> Us
      </p>
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
      <p className="text-[48px] font-bold text-[#e46c0a] my-10">
        <span className="text-black border-b-4 border-[#e46c0a]">Our</span> Mission
      </p>
      <p className="mx-16">Our mission is to deliver timely and cost-effective solutions to our
        clients while maintaining unwavering commitment to safety and uncompromising quality
        standards.
      </p>
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
      <p className="text-[48px] font-bold text-[#e46c0a] my-10">
        <span className="text-black border-b-4 border-[#e46c0a]">Our</span> Team
      </p>
      <div className="flex flex-col lg:[&>*:nth-child(even)]:flex-row-reverse mx-16">
        { teammembers.map((item, index) => {
          return (
            <div key={ index } className="flex rounded-xl pt-8 m-5 lg:w-[90%] items-center">
              <div className="flex flex-col items-center">
                <Image alt="pic" src={ item.photo } className="self-center lg:w-[900px] mb-4 rounded-lg" />
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