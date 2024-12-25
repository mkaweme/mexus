import React from "react";

const Hero: React.FC = () => {

  return (
    <div className='h-screen bg-[url("/assets/metal_fab_resized.jpg")] animate-fade-in bg-cover'>
      <div className="flex justify-center items-center w-full h-full bg-[#14194978]">
        <div className="flex flex-col text-white align-middle items-center lg:items-start lg:mb-20">
          <h4 className="text-[30px] font-medium">We are</h4>
          <h1 className="text-[32px] lg:text-[54px] font-poppins text-center lg:text-start my-6 font-bold lg:w-[50%] text-[#F39224]">
            MEXUS INDUSTRIAL SOLUTIONS LIMITED
          </h1>
          <h4 className="text-[14px] lg:text-[16px] font-futurastdbook text-center lg:text-start mt-4 lg:w-[50%]">
            Your trusted partner for Mechanical and Electrical engineering solutions
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Hero;