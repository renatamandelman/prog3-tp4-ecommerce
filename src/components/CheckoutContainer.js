"use client";
import { useMemo } from "react";
import { useAppContext } from "@/app/contexts/AppContext";
import { FormCheckout } from "./FormCheckout";
import Image from "next/image";
import Link from "next/link";

const CheckoutContainer = () => {
  const { cart, addOrder } = useAppContext();
  console.log('cart',cart);

  const handleAddOrder = (values) => {
    addOrder(values);
  };

  const { subtotal, total } = useMemo(() => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const total = subtotal;
    return { subtotal, total };
  }, [cart]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(amount);
  };

  if (cart.length === 0) {
    return (
      <div className="bg-[#e6d8c7] min-h-screen flex items-center justify-center font-sans">
        <div className="text-center bg-white p-12 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-gray-700 flex justify-center items-center gap-0.5">
            Tu carrito está vacío <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="#001" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Z" className="clr-i-outline clr-i-outline-path-1"/><circle cx="25.16" cy="14.28" r="1.8" fill="#001" className="clr-i-outline clr-i-outline-path-2"/><circle cx="11.41" cy="14.28" r="1.8" fill="#001" className="clr-i-outline clr-i-outline-path-3"/><path fill="#001" d="M18.16 20a9 9 0 0 0-7.33 3.78a1 1 0 1 0 1.63 1.16a7 7 0 0 1 11.31-.13a1 1 0 0 0 1.6-1.2A9 9 0 0 0 18.16 20Z" className="clr-i-outline clr-i-outline-path-4"/><path fill="none" d="M0 0h36v36H0z"/></svg>
          </h1>
          <p className="text-gray-500 mt-2 mb-7">
            No hay productos para mostrar en el checkout. 
          </p>
          <Link href="/ourProducts" className="bg-[var(--verde-oscuro)] font-bold py-3 px-6 rounded-lg hover:bg-[var(--naranja)] transition">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#e6d8c7] min-h-screen font-sans">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Finalizar Compra
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna del Formulario */}
          <FormCheckout handleAddOrder={handleAddOrder} />
          {/* Columna del Resumen del Pedido */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 sticky top-8">
              <h2 className="text-2xl font-semibold text-gray-700 border-b pb-4 mb-6">
                Tu Pedido
              </h2>
           <div className="space-y-4">
  {cart.map((product) => (
    <div
      key={product._id}
      className="flex justify-between items-center"
    >
      <div className="flex items-center gap-4">
    
          <Image
            src={`/assets/${product.image}`}
            alt={product.name}
            width={64}
            height={64}
            className="w-16 h-16 object-cover rounded-md"
          />
  

        <div>
          <h3 className="font-semibold text-gray-800">
            {product.name} {/* Mostrará el nombre del producto o de la licencia */}
          </h3>
         <p className="text-sm text-gray-500">
            {product.license}
          </p>
          <p className="text-sm text-gray-500">
            Cantidad: {product.qty}
          </p>
        </div>
      </div>
      <p className="font-medium text-gray-700">
        {formatCurrency(product.price * product.qty)}
      </p>
    </div>
  ))}
</div>

              <div className="border-t my-6"></div>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
              </div>
              <div className="border-t my-6"></div>
              <div className="flex justify-between font-bold text-gray-800 text-xl">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
              <button className="w-full bg-[var(--verde-oscuro)] text-white font-bold py-3 mt-8 rounded-lg hover:bg-[var(--naranja)] transition-transform transform hover:scale-105 shadow-lg">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContainer;
