import React from "react";
import ProductCard from "./ProductCard";


const ProductsGrid = ({products}) => {

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
