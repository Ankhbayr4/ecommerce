import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-between items-center bg-black py-4 px-6">
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <img className="w-8" src="/Symbol@2x.png" />
          <p className="text-[#FFFFFF] font-normal text-sm">ECOMMERCE</p>
        </div>
        <div>
          <p className="text-[#71717A]">Ангилал</p>
        </div>
      </div>
      <div className="flex relative items-center">
        <Search color="#FFFFFF" />
        <input
          type="text"
          placeholder="Бүтээгдэхүүн хайх"
          className="bg-[#18181B] w-[300px] p-2 border border-gray-600 rounded ml-2"
        />
      </div>
      <div className="flex gap-4 items-center">
        <Heart color="#FFFFFF" />
        <ShoppingCart color="#FFFFFF" />
        <button className="text-white border border-[#2563EB] py-2 px-3 rounded-[18px]">
          Бүртгүүлэх
        </button>
        <button className="bg-[#2563EB] text-white py-2 px-3 rounded-[18px]">
          Нэвтрэх
        </button>
      </div>
    </div>
  );
};
