"use client";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import getProductsService from "@/services/getProductsService";

// export async function getProductsList() {
//   const productsList = await getProductsService();
//   return productsList;
// }

export default function Products() {
  // const productsList = await getProductsList();
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

  console.log("products", products.slice(0, 10));

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl text-[#3A4980] font-bold mb-8">Products</h3>
      {products?.length >= 1 ? (
        <div className="grid grid-cols-4 gap-5">
          {products.slice(0, 10).map((product) => (
            <Product product={product} key={product?.productID} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
