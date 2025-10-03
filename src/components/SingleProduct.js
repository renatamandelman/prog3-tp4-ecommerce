"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({ id }) => {
  const [singleProduct, setSingleProduct, handleAddToCart] = useState([]);
  const { getSingleProduct } = useAppContext();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getSingleProduct({ id });
      setSingleProduct(product);
    };
    fetchProduct();
  }, [getSingleProduct, id]);

  const addToCart = (product) => {
    const productToAdd = {
      ...product,
      qty:1
    };
    handleAddToCart(productToAdd)
  }

  return (
    <div className="bg-[#e6d8c7] min-h-screen flex items-center justify-center">
      <div className="bg-[#9db5b2] w-full mx-auto  p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div className="flex flex-col space-y-6 px-12">
          <h1 className="text-4xl font-bold text-gray-800">
            {singleProduct.name}
          </h1>
          <p className="text-gray-600 leading-relaxed">
            {singleProduct.description}
          </p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
            <div className="flex-1">
              <span className="text-2xl font-semibold text-gray-900">
                ${singleProduct.price}USD
              </span>
              <div className="flex gap-4">
                <button className="w-full mt-2 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Comprar con Paypal
                </button>
                <button className="w-full mt-2 border-gray-900 border-2 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors" 
                onClick={() => addToCart(product)}>
                  Agregar al carrito
                </button>
              </div>
              <Link
                href="#"
                className="block mt-3 text-white underline text-center"
              >
                Otras formas de pago
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-4">
          <div className="relative md:h-full rounded-lg overflow-hidden shadow-xl w-full h-95">
            <Image
              src={`/assets/${singleProduct.imageUrl}`}
              alt={singleProduct.title}
            layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105 w-50 h-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
