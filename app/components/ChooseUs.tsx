import Image from "next/image";
import CustomerService from "@/public/assets/customer_service.jpg";
import Team from "@/public/assets/team_3.jpg";
import Pricing from "@/public/assets/pricing.jpg";
import Quality from "@/public/assets/quality_work.jpg";

const ChooseUs = () => {

  return (
    <>
      <div className="flex flex-col mx-16 my-10 gap-y-4">
        <h1 className="text-[48px] font-bold text-[#e46c0a]">Why Choose Us?</h1>
        <div className="flex flex-row">
          <div className="flex flex-col align-middle justify-center items-center px-3">
            <h3 className="text-white text-[24px] bg-[#e46c0a] p-5 rounded-3xl my-6">
              Superior Customer Service
            </h3>
            <p>We are committed to attaining one hundred percent customer satisfaction.</p>
          </div>
          <Image src={CustomerService} alt="customer service" className="rounded-xl w-1/2 h-auto mx-16"/>
        </div>
        <div className="flex flex-row">
          <Image src={Team} alt="customer service" className="rounded-xl w-1/2 h-auto mx-16"/>
          <div className="flex flex-col align-middle justify-center items-center px-3">
            <h3 className="text-white text-[24px] bg-[#e46c0a] p-5 rounded-3xl my-6">
            Dedicated Team  
            </h3>
            <p>Our team members bring compentence and experience to every project.</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col align-middle justify-center items-center px-3">
            <h3 className="text-white text-[24px] bg-[#e46c0a] p-5 rounded-3xl my-6">
              Competitive pricing
            </h3>
            <p>We offer the best price so our clients can get full value for their money</p>
          </div>
          <Image src={Pricing} alt="customer service" className="rounded-xl w-1/2 h-auto mx-16"/>
        </div>
        <div className="flex flex-row">
          <Image src={Quality} alt="customer service" className="rounded-xl w-1/2 h-auto mx-16"/>
          <div className="flex flex-col align-middle justify-center items-center px-3">
            <h3 className="text-white text-[24px] bg-[#e46c0a] p-5 rounded-3xl my-6">
              Quality work Delivery
            </h3>
            <p>We always deliver quality work that adds value to our clients investments</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;