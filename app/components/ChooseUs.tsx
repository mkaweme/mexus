import Image from "next/image";
import CustomerService from "@/public/assets/customer_service.jpg";
import Team from "@/public/assets/team_3.jpg";
import Pricing from "@/public/assets/pricing.jpg";
import Quality from "@/public/assets/quality_work.jpg";

const ChooseUs = () => {

  return (
    <>
      <div className="flex flex-col items-center mx-12 my-10 gap-y-4">
        <h1 className="text-[48px] font-bold text-[#e46c0a]">Why Choose Us?</h1>
        <div className="flex flex-col lg:flex-row my-2 lg:my-6 gap-x-16">
          <div className="flex flex-col align-middle justify-center items-center px-3">
            <h3 className="text-[18px] bg-[#FBF1E2] px-10 py-6 rounded-xl my-6 border-2 border-[#e46c0a]">
              Superior Customer Service
            </h3>
            <p className="text-center">We are committed to attaining one hundred percent customer satisfaction.</p>
          </div>
          <Image src={CustomerService} alt="customer service" className="rounded-xl w-1/2 h-auto mx-16"/>
        </div>
        <div className="flex flex-col lg:flex-row my-2 lg:my-6 gap-x-16">
          <Image src={Team} alt="customer service" className="rounded-xl w-1/2 h-auto mx-16"/>
          <div className="flex flex-col align-middle justify-center items-center px-3">
            <h3 className="text-[18px] bg-[#FBF1E2] px-10 py-6 rounded-xl my-6 border-2 border-[#e46c0a]">
              Dedicated Team  
            </h3>
            <p className="text-center">Our team members bring compentence and experience to every project.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row my-2 lg:my-6 gap-x-16">
          <div className="flex flex-col align-middle justify-center items-center px-3">
            <h3 className="text-[18px] bg-[#FBF1E2] px-10 py-6 rounded-xl my-6 border-2 border-[#e46c0a]">
              Competitive pricing
            </h3>
            <p className="text-center">We offer the best price so our clients can get full value for their money</p>
          </div>
          <Image src={Pricing} alt="customer service" className="rounded-xl w-1/2 h-auto mx-16"/>
        </div>
        <div className="flex flex-col lg:flex-row my-2 lg:my-6 gap-x-16">
          <Image src={Quality} alt="customer service" className="rounded-xl w-1/2 h-auto mx-16"/>
          <div className="flex flex-col align-middle justify-center items-center px-3">
            <h3 className="text-[18px] bg-[#FBF1E2] px-10 py-6 rounded-xl my-6 border-2 border-[#e46c0a]">
              Quality work Delivery
            </h3>
            <p className="text-center">We always deliver quality work that adds value to our clients investments</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;