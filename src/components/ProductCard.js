import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({id,title,description,price}) => {
  return (
      // <Link href={`product/${product.id}`} >
      <div className="bg-[white] rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition duration-300">
      
      <div className="bg-gray-200 h-64 flex items-center justify-center">
         <Image
            src={"/public/dummy/perrito.jpg"}
            alt={title}
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
      </div>

     
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
        <span className="mt-4 text-xl font-bold text-gray-900">{price}</span>
      </div>
    </div>
    // </Link>
  )
}



export default ProductCard