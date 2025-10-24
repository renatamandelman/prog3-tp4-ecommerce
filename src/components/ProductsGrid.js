import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = ({ products }) => {
  
  if (!products || products.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-10 w-full col-span-1 md:col-span-4">
        <p>No se encontraron productos para esta selección.</p>
      </div>
    );
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
      {products.map((product) => (
        <ProductCard
          ruta={"ourProducts/"}
          key={product._id}
          id={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
