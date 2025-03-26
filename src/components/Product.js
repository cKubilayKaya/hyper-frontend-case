import React from "react";
import { StarIcon } from "./Icons";

export default function Product({ product }) {
  console.log(product);
  return (
    <div className="">
      <div className="rounded-2xl">
        <img src={product?.productData?.productMainImage} className="rounded-t-2xl" alt="" />
      </div>
      <div className="border border-[#ececec] rounded-b-2xl p-4">
        <div className="flex justify-between mb-2 gap-2">
          <p className="text-[#667085] text-[18px] line-clamp-2">{product?.productName}</p>
          <p className="text-[#344054] text-[18px] whitespace-nowrap">₹ 675.00</p>
        </div>
        <span className="text-[#98A2B3] text-sm">5 types of shoos available</span>
        <div className="mt-3">
          <div className="flex items-center gap-0.5">
            <StarIcon color="#FDB022" size={20} />
            <StarIcon color="#FDB022" size={20} />
            <StarIcon color="#FDB022" size={20} />
            <StarIcon color="#FDB022" size={20} />
            <StarIcon color="#98A2B3" size={20} />
            <p className="text-[#98A2B3] text-sm ml-2">(121)</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-9">
          <button className="bg-[#3A4980] text-white rounded-full px-4 py-3 text-sm w-full cursor-pointer transition duration-200 hover:bg-[#313853]">
            Add To Cart
          </button>
          <button className="bg-white border border-[#EEEFF8] text-#344054 rounded-full px-4 py-3 text-sm w-full cursor-pointer transition duration-200 hover:bg-[#EEEFF8] ">
            Add To Favorites
          </button>
        </div>
      </div>
    </div>
  );
}
