import React from 'react'
import ProductCard from './ProductCard'

const ProductsGrid = () => {
  return (
    <div className="min-h-screen bg-[#e6d8c7] py-12 px-6">

    <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#3B413C] mb-10 font-serif">
          Templates disponibles
        </h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
          {/* {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))} */}
        </div>
        </div>
  </div>
  )
}

export default ProductsGrid