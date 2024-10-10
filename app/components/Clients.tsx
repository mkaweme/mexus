import Image from "next/image";
import NFCA from "@/public/assets/nfca.jpg";
import BAT from "@/public/assets/batz.webp";
import Hudtech from "@/public/assets/hudtech.png";
import RITC from "@/public/assets/ritc.jpeg";
import MBZC from "@/public/assets/mbz.png";

const Clients = () => {
  return (
    <>
      <div>
        <h3>Our Clients</h3>
        <div className="flex flex-row">
          <Image src={NFCA} alt="nfca" className="w-[250px] h-auto object-contain" />
          <Image src={BAT} alt="bat" className="w-[250px] h-auto object-contain" />
          <Image src={Hudtech} alt="hudtech" className="w-[250px] h-auto object-contain" />
          <Image src={RITC} alt="ritc" className="w-[250px] h-auto object-contain"/>
          <Image src={MBZC} alt="mbz" className="w-[250px] h-auto object-contain" />
          <p className="text-[24px] font-bold">NJATI FOOD PROCCESING</p>
        </div>
      </div>
    </>
  );
}

export default Clients;
