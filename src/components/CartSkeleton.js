import React from "react";

const CartSkeleton = () => {
  return (
    <div className="w-full h-[400px] flex flex-col gap-4">
      <div className="bg-gray-200 w-full h-[217px] animate-pulse rounded-lg"></div>

      <div className="flex justify-between items-center">
        <div className="bg-gray-200 w-2/3 h-4 animate-pulse rounded-md"></div>
        <div className="bg-gray-200 w-1/4 h-4 animate-pulse rounded-md"></div>
      </div>

      <div className="bg-gray-200 w-1/2 h-3 animate-pulse rounded-md"></div>

      <div className="flex gap-4 flex-col mt-auto">
        <div className="bg-gray-200 h-10 animate-pulse rounded-md"></div>
        <div className="bg-gray-200 h-10 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
};

export default CartSkeleton;
