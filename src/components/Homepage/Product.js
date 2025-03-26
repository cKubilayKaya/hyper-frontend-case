import React from "react";
import { StarIcon } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slices/cartSlice";
import { addToFavorite, removeFromFavorite } from "@/store/slices/favoriteSlice";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import formatNumberWithCommas from "@/lib/formatNumberWithCommas";

export default function Product({ product }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);

  const dispatch = useDispatch();

  const favoriteHandle = () => {
    const foundItem = favoriteItems?.find((i) => i?.productID === product?.productID);
    if (foundItem) {
      dispatch(removeFromFavorite(product?.productID));
      toast.success("Product removed from favorites!");
    } else {
      dispatch(addToFavorite(product));
      toast.success("Product added to favorites!");
    }
  };

  const CartHandle = () => {
    const foundItem = cartItems?.find((i) => i?.productID === product?.productID);
    if (foundItem) {
      dispatch(removeFromCart(product?.productID));
      toast.success("Product removed from cart!");
    } else {
      dispatch(addToCart(product));
      toast.success("Product added to cart!");
    }
  };

  return (
    <div className="">
      <div className="rounded-2xl">
        <img src={product?.productData?.productMainImage} className="rounded-t-2xl w-full" alt="" />
      </div>
      <div className="border border-[#ececec] rounded-b-2xl p-4">
        <div className="flex justify-between mb-2 gap-2">
          <Link href="/" className="text-[#667085] text-[18px] line-clamp-2 underline cursor-pointer">
            {product?.productName}
          </Link>
          <p className="text-[#344054] text-[18px] whitespace-nowrap">₺ {formatNumberWithCommas(product?.salePrice)}</p>
        </div>
        <span className="text-[#98A2B3] text-sm">{product?.totalStock} in stock</span>
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
        <div className="flex items-center gap-3 mt-9 flex-col">
          <button
            className="bg-[#3A4980] text-white rounded-full px-4 py-3 text-sm w-full cursor-pointer transition duration-200 hover:bg-[#313853]"
            onClick={CartHandle}
          >
            {cartItems?.find((i) => i?.productID === product?.productID) ? "Remove From Cart" : "Add To Cart"}
          </button>
          <button
            className="bg-white border whitespace-nowrap border-[#EEEFF8] text-#344054 rounded-full px-4 py-3 text-sm w-full cursor-pointer transition duration-200 hover:bg-[#EEEFF8]"
            onClick={favoriteHandle}
          >
            {favoriteItems?.find((i) => i?.productID === product?.productID) ? "Remove From Favorites" : "Add To Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
