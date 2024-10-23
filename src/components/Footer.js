import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
export const Footer = () => {
  return (
    <div className="bg-black  py-16 px-[200px] flex flex-col gap-16">
      <div className="flex justify-between items-center">
        <div>
          <img className="w-8" src="/Symbol@2x.png" />
        </div>
        <div className="flex gap-[38px] ">
          <div className="flex gap-5">
            <Phone color="white" />
            <p className="text-white">(976) 7007-1234</p>
          </div>
          <div className="flex gap-5">
            <Mail color="white" />
            <p className="text-white">contact@ecommerce.mn</p>
          </div>
        </div>
      </div>
      <div>
        <p className="border border-solid border-[#FFFFFF1A]">test</p>
      </div>
    </div>
  );
};
