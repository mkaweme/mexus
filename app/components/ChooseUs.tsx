import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ChooseUs: React.FC = () => {

  return (
    <div className="flex flex-col items-center bg-black py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row lg:mx-16 justify-around gap-x-40">
        <div className="flex flex-col text-white">
          <h1 className="text-[32px] lg:text-[40px] font-poppins font-bold text-[#F19221] text-center">
            <span className="text-white border-b-4 border-[#F19221] my-10">WHY</span> CHOOSE US?
          </h1>
          <div className="flex flex-row mx-4 lg:mx-0 my-2 lg:my-6">
            <Icon icon="material-symbols:hexagon" width="24" height="24" color="#F19221" className="mt-1" />
            <div className="flex flex-col ml-3 py-0">
              <h3 className="text-[20px] font-poppins font-[600]">
                Superior Customer Service
              </h3>
              <p className="lg:text-center my-2">We are committed to attaining one hundred percent customer satisfaction.</p>
            </div>
          </div>
          <div className="flex flex-row mx-4 lg:mx-0 my-2 lg:my-6">
            <Icon icon="material-symbols:hexagon" width="24" height="24" color="#F19221" className="mt-1" />
            <div className="flex flex-col ml-3">
              <h3 className="text-[20px]  font-poppins font-[600]">
                Dedicated Team
              </h3>
              <p className="lg:text-center my-2">Our team members bring compentence and experience to every project.</p>
            </div>
          </div>
          <div className="flex flex-row mx-4 lg:mx-0 my-2 lg:my-6">
            <Icon icon="material-symbols:hexagon" width="24" height="24" color="#F19221" className="mt-1" />
            <div className="flex flex-col ml-3">
              <h3 className="text-[20px] font-poppins font-[600]">
                Competitive pricing
              </h3>
              <p className="lg:text-center my-2">We offer the best price so our clients can get full value for their money.</p>
            </div>
          </div>
          <div className="flex flex-row mx-4 lg:mx-0 my-2 lg:my-6">
            <Icon icon="material-symbols:hexagon" width="24" height="24" color="#F19221" className="mt-1" />
            <div className="flex flex-col ml-3">
              <h3 className="text-[20px] font-poppins font-[600]">
                Quality work Delivery
              </h3>
              <p className="lg:text-center my-2">We always deliver quality work that adds value to our clients investments.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-6">
          <Image src="/assets/choose_us.jpg" width={ 328 } height={ 508 } alt="Choose Us w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;