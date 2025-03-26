import React, { useEffect, useState } from "react";
import { StarIcon } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCart, increaseCart, removeFromCart } from "@/store/slices/cartSlice";
import { addToFavorite, removeFromFavorite } from "@/store/slices/favoriteSlice";
import { toast } from "react-toastify";
import Link from "next/link";
import formatNumberWithCommas from "@/lib/formatNumberWithCommas";

export default function CartProduct({ product, isFavorite = false }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);

  const [quantity, setQuantity] = useState(product?.quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(product?.quantity);
  }, [product]);

  const changeHandle = (e) => {
    setQuantity(Number(e.target.value));
    dispatch(increaseCart({ product: product, quantity: Number(e.target.value) }));
  };

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
    <div className="flex h-50 items-stretch max-lg:h-full max-sm:flex-col">
      <div className="rounded-2xl max-lg:flex-1">
        <img
          src={product?.productData?.productMainImage}
          className="rounded-tl-2xl rounded-bl-2xl h-50 min-w-50 max-lg:h-full max-sm:w-full max-sm:rounded-none max-sm:rounded-t-2xl object-cover"
          alt=""
        />
      </div>
      <div className="border border-[#ececec] rounded-br-2xl rounded-tr-2xl p-4 h-full w-full flex flex-col justify-between gap-4 max-sm:rounded-none max-sm:rounded-b-2xl">
        <div>
          <div className="flex justify-between mb-2 gap-2">
            <Link href="/" className="text-[#667085] text-[18px] line-clamp-2 underline">
              {product?.productName}
            </Link>
            <p className="text-[#344054] text-[18px] whitespace-nowrap">
              ₺ {formatNumberWithCommas((product?.salePrice * (product?.quantity || 1)).toFixed(2))}
            </p>
          </div>
          <span className="text-[#98A2B3] text-sm">5 types of shoes available</span>
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
        </div>
        <div className="flex items-center gap-3 max-lg:flex-col max-lg:items-start max-lg:gap-3">
          <button
            className="bg-[#3A4980] text-white rounded-full px-4 py-3 text-sm cursor-pointer transition duration-200 hover:bg-[#313853]"
            onClick={CartHandle}
          >
            {cartItems?.find((i) => i?.productID === product?.productID) ? "Remove From Cart" : "Add To Cart"}
          </button>
          <button
            className="bg-white border border-[#EEEFF8] text-#344054 rounded-full px-4 py-3 text-sm cursor-pointer transition duration-200 hover:bg-[#EEEFF8]"
            onClick={favoriteHandle}
          >
            {favoriteItems?.find((i) => i?.productID === product?.productID) ? "Remove From Favorites" : "Add To Favorites"}
          </button>
          {!isFavorite && (
            <div className="flex items-center">
              <button className="w-[46px] h-[46px] bg-[#EEEFF8] cursor-pointer text-xl text-[#3A4980]" onClick={() => dispatch(decreaseCart(product))}>
                -
              </button>
              <input type="number" value={quantity} className="w-[90px] h-[46px] bg-[#3A4980] text-white text-center outline-0" onChange={changeHandle} />
              <button className="w-[46px] h-[46px] bg-[#EEEFF8] cursor-pointer text-xl text-[#3A4980]" onClick={() => dispatch(addToCart(product))}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
