"use client";
import CartProduct from "@/components/CartProduct";
import React from "react";
import { useSelector } from "react-redux";

export default function FavoritesProducts() {
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  return (
    <div className="container mx-auto mt-12 mb-12 ">
      <h1 className="text-[#3A4980] text-3xl font-bold mb-[44px]">Favorites</h1>
      <div className="flex flex-col gap-4">
        {favoriteItems?.length >= 1 ? (
          favoriteItems?.map((item) => <CartProduct key={item?.productID} product={item} isFavorite={true} />)
        ) : (
          <p>You don't have any product in your favorites.</p>
        )}
      </div>
    </div>
  );
}
