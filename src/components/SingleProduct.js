"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const licenses = [
  {
    _id: "license_standard",
    name: "LICENCIA ESTÁNDAR",
    price: 0,
  },
  {
    _id: "license_basic",
    name: "LICENCIA COMERCIAL BÁSICA",
    price: 50,
  },
  {
    _id: "license_extended",
    name: "LICENCIA COMERCIAL AMPLIADA",
    price: 150,
  },
];

const SingleProduct = ({ id }) => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { getSingleProduct, handleAddToCart } = useAppContext();
  const [selectedLicense, setSelectedLicense] = useState(licenses[0]);
  const [isLicenseMenuOpen, setIsLicenseMenuOpen] = useState(false); // Estado del dropdown

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const product = await getSingleProduct({ id });
        setSingleProduct(product);
      };
      fetchProduct();
    }
  }, [getSingleProduct, id]);

  const handleAddToCartClick = () => {
    if (!singleProduct) return;

    const licenseProduct = {
      ...selectedLicense,
      _id: `${singleProduct._id}_${selectedLicense._id}`,
      qty: 1,
      isLicense: true,
      name: `${singleProduct.name} `,
      license: `${selectedLicense.name}`,
      price: singleProduct.price + selectedLicense.price,
      image: `${singleProduct.imageUrl}`,
    };
    console.log(licenseProduct);
    handleAddToCart(licenseProduct);
  };

  if (!singleProduct) {
    return (
      <div className="bg-[#e6d8c7] min-h-screen flex items-center justify-center text-[#3B41C]">
        Cargando producto...
      </div>
    );
  }

  return (
    <div className="bg-[#e6d8c7] min-h-screen flex items-center justify-center text-[#3B413C] ">
      <div className="bg-[#9db5b2] w-full  mx-auto p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-6 px-6 md:px-8 justify-center">
          <h1 className="text-3xl md:text-4xl font-bold">{singleProduct.name}</h1>
          <p className=" leading-relaxed">
            {singleProduct.description}
          </p>
          <span className="text-2xl md:text-3xl font-semibold">
            ${singleProduct.price + selectedLicense.price} USD
          </span>

          <div className="flex flex-col">
           
            <div className="relative">
              
              <button
                onClick={() => setIsLicenseMenuOpen(!isLicenseMenuOpen)}
                className="md:hidden w-full p-3 text-[#3B413C] bg-gray-100 rounded-lg flex justify-between items-center text-left"
              >
                <span className="text-sm font-medium">{selectedLicense.name}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    isLicenseMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLicenseMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 z-10 mt-2 bg-gray-100 rounded-lg shadow-lg p-2 flex flex-col space-y-2">
                  {licenses.map((license) => (
                    <button
                      key={license._id}
                      onClick={() => {
                        setSelectedLicense(license);
                        setIsLicenseMenuOpen(false); 
                      }}
                      className={`py-2 px-4 text-[#3B413C] text-sm font-medium transition-all duration-200 border-2 rounded w-full text-left ${
                        selectedLicense._id === license._id
                          ? "bg-black text-white border-black"
                          : "border-transparent hover:border-gray-400"
                      }`}
                    >
                      {license.name}
                    </button>
                  ))}
                </div>
              )}

              {/* --- CORRECCIÓN: hidden md:flex (en lugar de hidden sm:flex) --- */}
              {/* --- CORRECCIÓN: Error de sintaxis en className (comilla) --- */}
              <div className="hidden md:flex p-4 bg-gray-100 rounded-lg flex-row gap-2">
                {licenses.map((license) => (
                  <button
                    key={license._id}
                    onClick={() => setSelectedLicense(license)}
                    className={`py-2 px-4 text-sm font-medium transition-all duration-200 border-2 rounded ${
                      selectedLicense._id === license._id
                        ? "bg-black text-white border-black shadow-md"
                        : "border-transparent hover:border-gray-400" // Aquí estaba el error
                    }`}
                  >
                    {license.name}
                  </button>
                ))}
              </div>
            </div>
            {/* --- FIN SECCIÓN DE LICENCIAS --- */}

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
       
          </div>
        </div>

        <div className="flex items-center justify-center p-4 order-first md:order-last">
          <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden shadow-xl min-h-[300px] md:min-h-[450px]">
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