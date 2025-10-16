// src/components/SingleProduct.js

"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define tus licencias como un array de objetos.
// Esto hace que el código sea más limpio y escalable.
const licenses = [
  {
    _id: "license_standard", // ID único
    name: "LICENCIA ESTÁNDAR",
    price: 0, // Sin costo adicional
  },
  {
    _id: "license_basic",
    name: "LICENCIA COMERCIAL BÁSICA",
    price: 50, // Precio de ejemplo
  },
  {
    _id: "license_extended",
    name: "LICENCIA COMERCIAL AMPLIADA",
    price: 150, // Precio de ejemplo
  },
];

const SingleProduct = ({ id }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { getSingleProduct, handleAddToCart } = useAppContext();

  // Estado para guardar la licencia seleccionada. Por defecto, la estándar.
  const [selectedLicense, setSelectedLicense] = useState(licenses[0]);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const product = await getSingleProduct({ id });
        setSingleProduct(product);
      };
      fetchProduct();
    }
  }, [getSingleProduct, id]);

  // Nueva función para agregar ambos productos al carrito
  const handleAddToCartClick = () => {
    if (!singleProduct) return;

    // 1. Agrega el producto principal al carrito
    handleAddToCart({
      ...singleProduct,
      qty: 1,
    });

    // 2. Agrega la licencia como un producto separado
    // Le damos una estructura de "producto" para que el carrito la entienda
    const licenseProduct = {
      ...selectedLicense,
      _id: `${singleProduct._id}_${selectedLicense._id}`, // ID único para evitar conflictos
      qty: 1,
      isLicense: true, // Propiedad opcional para identificarla
    };
    handleAddToCart(licenseProduct);

  };

  if (!singleProduct) {
    return <div>Cargando producto...</div>; // Estado de carga
  }

  return (
    <div className="bg-[#e6d8c7] min-h-screen flex items-center justify-center text-[#3B413C]">
      <div className="bg-[#9db5b2] w-full mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-6 px-12">
          <h1 className="text-4xl font-bold">{singleProduct.name}</h1>
          <p className="text-gray-600 leading-relaxed">
            {singleProduct.description}
          </p>
          {/* Muestra el precio del producto + el de la licencia */}
          <span className="text-3xl font-semibold">
            ${singleProduct.price + selectedLicense.price} USD
          </span>

          <div className="flex flex-col">
            {/* Renderizado dinámico de licencias */}
            <div className="p-4 bg-gray-100 rounded-lg flex flex-col sm:flex-row gap-2">
              {licenses.map((license) => (
                <button
                  key={license._id}
                  onClick={() => setSelectedLicense(license)}
                  className={`py-2 px-4 text-sm font-medium transition-all duration-200 border-2 rounded ${
                    selectedLicense._id === license._id
                      ? "bg-black text-white border-black shadow-md"
                      : "border-transparent hover:border-gray-400"
                  }`}
                >
                  {license.name} 
                </button>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <button className="w-full bg-[#3B413C] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Comprar con Paypal
              </button>
              <button
                className="w-full border-[#3B413C] border-2 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
                onClick={handleAddToCartClick} 
              >
                Agregar al carrito
              </button>
            </div>
            <Link href={"/checkout"} className="mt-4 text-center text-blue-600 underline">
              Ir al Checkout
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="relative w-full h-96 md:h-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src={`/assets/${singleProduct.imageUrl}`}
              alt={singleProduct.name || "Product Image"}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
