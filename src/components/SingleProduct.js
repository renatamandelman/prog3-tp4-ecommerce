import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleProduct = () => {
  return (

    <div className="bg-[#e6d8c7] min-h-screen flex items-center justify-center p-8 ">
      <div className="max-w-7xl mx-auto  p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">Trend Aesthetic - Plantilla editable</h1>
          <p className="text-gray-600 leading-relaxed">
            Incluye: - 12 plantillas  listas para usar - Diseños adaptados Link las tendencias actuales de Instagram - 100% personalizables (colores, tipografías, imágenes) ✨ Entrega inmediata. 💌 Ideal para emprendedoras, creadoras de contenido y marcas personales.
            <Link href="#" className="block mt-2 text-blue-600 hover:underline">Ver más detalles</Link>
          </p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
            <div className="flex-1">
              <span className="text-2xl font-semibold text-gray-900">$8000</span>
              <button className="w-full mt-2 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Comprar en Pesos argentinos
              </button>
              <div className="text-sm text-gray-500 mt-2">
                Pagando con: Mercadopago, PayPal y Transferencia bancaria
                <Link href="#" className="block mt-1 text-blue-600 hover:underline">Más info</Link>
              </div>
            </div>

            <div className="flex-1">
              <span className="text-2xl font-semibold text-gray-900">US$8</span>
              <button className="w-full mt-2 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Comprar en Dólares estadounidenses
              </button>
              <div className="text-sm text-gray-500 mt-2">
                Pagando con: PayPal
                <Link href="#" className="block mt-1 text-blue-600 hover:underline">Más info</Link>
              </div>
            </div>
          </div>

    
        </div>

      <div className="flex items-center justify-center p-4"> 
          <div className="relative w-full h-96 md:h-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://bu-cdn.tiendup.com/business/44712/products/DxnQG3_68adf61e0af6f_medium.png" 
              alt="Imagen principal del producto"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105 w-50 h-50"

            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct