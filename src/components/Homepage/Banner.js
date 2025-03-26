import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="container mx-auto mt-12 mb-12 ">
      <div className="bg-[#f4f1e8] p-14 rounded-2xl relative min-h-[280px] flex items-center">
        <div className="max-md:flex items-center flex-col w-full">
          <h1 className="text-[#3A4980] text-3xl font-bold mb-[44px] max-w-90 max-md:max-w-full max-md:text-center max-md:text-2xl">
            Grab Up to 50% Off On Selected Headphone
          </h1>
          <Link href="/" className="px-8 py-4 bg-[#3A4980] text-white rounded-full">
            Buy Now
          </Link>
        </div>
        <img src="/banner-image.png" className="absolute -top-[44px] right-28 object-contain max-md:hidden" alt="" />
      </div>
    </div>
  );
}
