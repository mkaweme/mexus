import Image from "next/image";
import PPE from "@/public/assets/ppe.jpg"

const SHE = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[48px] font-bold text-[#e46c0a]">Safety, Health & Environment</h1>
      <p className="mx-10 lg:mx-64 my-4 text-[18px] text-center">We are fully committed to improving Health, safety and environmental performance 
        across all areas of our business in accordance with ISO 14001, OHSAS 18001 and all 
        relevant legal requirements.
      </p>
      <Image src={PPE} alt="ppe" className="rounded w-[300px] lg:w-[600px] h-auto my-10 border-8 border-[#e46c0a]" />
    </div>
  );
}

export default SHE;