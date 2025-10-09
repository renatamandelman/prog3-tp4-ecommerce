"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/app/contexts/AppContext";
import { useEffect } from "react";
import Link from "next/link";
import ProductsGrid from "./ProductsGrid";

const ProductsContainer = () => {
  const {products, getProducts } = useAppContext();
    
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  
  const sortByFilter = () => {

  }
  return (
    <>
    <div className="min-h-screen bg-[#e6d8c7] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between w-full">
          <h1 className="text-3xl font-bold text-[#3B413C] mb-10 font-serif">
          Templates disponibles
        </h1>
  
          <div className="p-2 text-black bg-gray-100 rounded-lg max-w-4xl my-2 text-center flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button to='/'
                  className="py-2 px-4 cursor-pointer text-sm font-medium transition-all duration-200 border-2 
             border-black bg-gray-100  shadow-md"
                >
                  Branding
                </button>

                <button to='/' 
                  className="py-2 px-4 cursor-pointer text-sm font-medium transition-all duration-200 border-2 
             border-transparent  hover:border-gray-300 hover:text-black"
                >
                  Packaging
                </button>

                <button to='/' 
                  className="py-2 px-4 cursor-pointer text-sm font-medium transition-all duration-200 border-2 
             border-transparent  hover:border-gray-300 hover:text-black"
                >
                  Redes Sociales
                </button>
           
              </div>
              </div>
      <div className="flex justify-center items-center ">
        
        <ProductsGrid products={products} />
      </div>
      </div>
      </div>
    </>
  );
};

export default ProductsContainer;
