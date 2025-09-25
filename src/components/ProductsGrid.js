"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/app/contexts/AppContext";
import { useEffect } from "react";

const ProductsGrid = () => {
  const {products, getProducts } = useAppContext();
    
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="min-h-screen bg-[#e6d8c7] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#3B413C] mb-10 font-serif">
          Templates disponibles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
