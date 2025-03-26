"use client";
import CartProduct from "@/components/CartProduct";
import React from "react";
import { useSelector } from "react-redux";

export default function CartProducts() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="container mx-auto mt-12 mb-12 ">
      <h1 className="text-[#3A4980] text-3xl font-bold mb-[44px]">Cart</h1>
      <div className="flex flex-col gap-4">
        {cartItems?.length >= 1 ? (
          cartItems?.map((product) => <CartProduct key={product?.productID} product={product} />)
        ) : (
          <p>You don't have any product in your cart.</p>
        )}
      </div>
    </div>
  );
}
