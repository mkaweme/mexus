import Image from "next/image";
import NFCA from "@/public/assets/nfca.jpg";
import BAT from "@/public/assets/batz.webp";
import Hudtech from "@/public/assets/hudtech.png";
import RITC from "@/public/assets/ritc.jpeg";
import MBZC from "@/public/assets/mbz.png";

const Clients = () => {
  return (
    <>
      <div className="flex flex-col items-center my-4">
        <h1 className="text-[48px] font-bold text-[#e46c0a]">Our Clients</h1>
        <p className="w-1/3 bg-black text-white font-medium text-center p-4 rounded">
          “Mexus Industrial Solutions Limited is committed to  putting it’s clients 
          first and to promoting long-term relationships within the Private and Public 
          sectors.”
        </p>
        <div className="flex flex-row w-full gap-x-8 items-center justify-center">
          <div className="flex flex-col items-center">
            <Image src={NFCA} alt="nfca" className="w-[150px] h-auto object-contain" />
            <p className="font-bold text-blue-700">NFCA</p>
          </div>
          <Image src={BAT} alt="bat" className="w-[150px] h-auto object-contain" />
          <Image src={Hudtech} alt="hudtech" className="w-[150px] h-auto object-contain" />
          <Image src={RITC} alt="ritc" className="w-[150px] h-auto object-contain"/>
          <Image src={MBZC} alt="mbz" className="w-[150px] h-auto object-contain" />
          <p className="text-[24px] font-bold">NJATI FOOD PROCCESING</p>
        </div>
      </div>
    </>
  );
}

export default Clients;
