"use client";
import React, { useEffect, useState } from "react";
import Product from "./Homepage/Product";
import getProductsService from "@/services/getProductsService";
import CartSkeleton from "./CartSkeleton";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await getProductsService();
        if (data) {
          setProducts(data);
        }
      } catch (err) {
        setProducts([]);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto mb-24">
      <h3 className="text-3xl text-[#3A4980] font-bold mb-8">Products</h3>
      {products?.length >= 1 ? (
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {products?.map((product) => (
            <Product product={product} key={product?.productID} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
          <CartSkeleton />
        </div>
      )}
    </div>
  );
}
