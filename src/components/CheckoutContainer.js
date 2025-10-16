"use client";
import { useMemo } from "react";
import { useAppContext } from "@/app/contexts/AppContext";
import { FormCheckout } from "./FormCheckout";
import Image from "next/image";

const CheckoutContainer = () => {
  const { cart, addOrder } = useAppContext();

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
      <div className="bg-gray-50 min-h-screen flex items-center justify-center font-sans">
        <div className="text-center bg-white p-12 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-gray-700">
            Tu carrito está vacío
          </h1>
          <p className="text-gray-500 mt-2">
            No hay productos para mostrar en el checkout.
          </p>
          <button className="mt-6 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition">
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
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
            src={`/assets/${product.imageUrl}`}
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
              <button className="w-full bg-indigo-600 text-white font-bold py-3 mt-8 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
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
