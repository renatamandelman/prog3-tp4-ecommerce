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
          <div className="flex justify-between w-full">
            <h1 className="text-3xl font-bold text-[#3B413C] mb-10 font-serif">
              Todos los productos disponibles
            </h1>

            <div className="p-2 text-black bg-gray-100 rounded-lg max-w-4xl my-2 text-center flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {filters.map((filter) => (
                <button
                  key={filter._id}
                  onClick={() => setSelectedFilter(filter)}
                  className={`py-2 px-4 text-sm font-medium transition-all duration-200 border-2 rounded ${
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
          <div className="flex justify-center items-center ">
            <ProductsGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsContainer;
