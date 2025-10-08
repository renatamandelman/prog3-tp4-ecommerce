"use client"
import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/app/contexts/AppContext";
import { useEffect } from "react";

const CategoryGrid =  ({slug}) => {
    const {productsFromCategory, getProductsFromCategory, loading } = useAppContext();
    
      useEffect(() => {

      getProductsFromCategory({slug});
    
      }, [slug, getProductsFromCategory]);


   if (loading) {
      return (
        <div className="min-h-screen flex justify-center items-center bg-[#e6d8c7] text-[#3B413C] text-xl">
          Cargando productos...
        </div>
      );
    }

    // 2. Mostrar si no hay productos (el array es nulo o vacío)
    if (!productsFromCategory || productsFromCategory.length === 0) {
      return (
        <div className="min-h-screen bg-[#e6d8c7] py-2 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-[#3B413C] mb-10 font-serif">
                    {slug.charAt(0).toUpperCase() + slug.slice(1)}
                </h1>
                <p className="text-xl text-[#3B413C]">No hay productos disponibles en esta categoría.</p>
            </div>
        </div>
      );
    }

   return (
    <div className="min-h-screen bg-[#e6d8c7] py-2 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#3B413C] mb-10 font-serif">
         {slug.charAt(0).toUpperCase() + slug.slice(1)} disponibles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {productsFromCategory.map((product) => (
            <ProductCard
            
              key={product._id}
              id={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryGrid