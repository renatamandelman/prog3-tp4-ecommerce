"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/app/contexts/AppContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductsGrid from "./ProductsGrid";

const filters = [
  {
    _id: "all_products",
    name: "Todos",
  },
  {
    _id: "packaging",
    name: "Packaging",
  },
  {
    _id: "branding",
    name: "Branding",
  },
  {
    _id: "Redes sociales",
    name: "Redes Sociales",
  },
];

const ProductsContainer = () => {
  const { products, getProducts } = useAppContext();
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    if (selectedFilter._id === "all_products") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.tags.some(
          (tag) => tag.toLowerCase() === selectedFilter._id.toLowerCase()
        )
      );
      setFilteredProducts(filtered);
    }
  }, [selectedFilter, products]);

  return (
    <>
      <div className="min-h-screen bg-[#e6d8c7] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full mb-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#3B413C] mb-6 md:mb-0 font-serif">
              Todos los productos disponibles
            </h1>

           
            <div className="relative w-full md:w-auto">
              
       
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="sm:hidden w-full p-3 text-black bg-gray-100 rounded-lg flex justify-between items-center"
              >
                <span className="font-medium">{selectedFilter.name}</span>
                
             
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7" 
                    />
                  )}
                </svg>
              </button>

             
              {isMobileMenuOpen && (
                <div className="sm:hidden absolute top-full left-0 right-0 z-10 mt-2 bg-gray-100 rounded-lg shadow-lg p-2 flex flex-col space-y-2">
                  {filters.map((filter) => (
                    <button
                      key={filter._id}
                      onClick={() => {
                        setSelectedFilter(filter);
                        setIsMobileMenuOpen(false); 
                      }}
                      className={`py-2 px-4 text-sm text-black font-medium transition-all duration-200 border-2 rounded w-full text-left ${
                        selectedFilter._id === filter._id
                          ? "bg-black text-white border-black"
                          : "border-transparent hover:border-gray-400"
                      }`}
                    >
                      {filter.name}
                    </button>
                  ))}
                </div>
              )}

            
              <div className="hidden sm:flex p-2 text-black bg-gray-100 rounded-lg md:max-w-4xl text-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {filters.map((filter) => (
                  <button
                    key={filter._id}
                    onClick={() => setSelectedFilter(filter)}
                    className={`py-2 px-4 text-sm  font-medium transition-all duration-200 border-2 rounded ${
                      selectedFilter._id === filter._id
                        ? "bg-black text-white border-black shadow-md"
                        : "border-transparent hover:border-gray-400"
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
        

          </div>

          <div className="flex justify-center items-center ">
            <ProductsGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsContainer;