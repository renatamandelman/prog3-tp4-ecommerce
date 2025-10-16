import React from "react";
import { Formik, Form, Field } from "formik";

// Las funciones de validación permanecen iguales
function validateEmail(value) {
  let error;
  if (!value) {
    error = "El email es requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Dirección de email inválida";
  }
  return error;
}

// function validateUsername(value) {
//   let error;
//   if (!value) {
//     error = "El nombre de usuario es requerido";
//   } else if (value === "admin") {
//     error = "¡Buen intento! 😉";
//   }
//   return error;
// }

function validateRequired(value) {
  let error;
  if (!value) {
    error = 'Este campo es obligatorio';
  }
  return error;
}

export const FormCheckout = ({ handleAddOrder }) => (
  // Contenedor principal para centrar el formulario en la página
  <div className="flex items-center justify-center">
    {/* Tarjeta del formulario */}
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Registro
      </h1>
      <Formik
        initialValues={{
          email: "",
          nombre: "",
          apellidos: "",
          dni: "",
          telefono: "",
        }}
        onSubmit={(values) => {
          handleAddOrder(values);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="space-y-6">
            {/* Campo de Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                validate={validateEmail}
                className="text-black mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-[var(--naranja)]"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-xs mt-1">{errors.email}</div>
              )}
            </div>

            {/* Campo de Nombre de Usuario
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre de Usuario
              </label>
              <Field
                id="username"
                name="username"
                validate={validateUsername}
                className="text-black mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-[var(--naranja)]"
              />
              {errors.username && touched.username && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.username}
                </div>
              )}
            </div> */}

            {/* Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre*
              </label>{" "}
              <Field
                id="nombre"
                name="nombre"
                validate={validateRequired}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-[var(--naranja)]"
              />
              <div className="min-h-[1rem]">
                {errors.nombre && touched.nombre && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.nombre}
                  </div>
                )}
              </div>
            </div>

            {/* Apellidos */}
            <div>
              <label
                htmlFor="apellidos"
                className="block text-sm font-medium text-gray-700"
              >
                Apellidos*
              </label>
              <Field
                id="apellidos"
                name="apellidos"
                validate={validateRequired}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-[var(--naranja)]"
              />
              <div className="min-h-[1rem]">
                {errors.apellidos && touched.apellidos && (
                  <div className="text-red-500 text-xs mt-1">
                    {errors.apellidos}
                  </div>
                )}
              </div>
            </div>

            {/* DNI */}
            <div>
              <label
                htmlFor="dni"
                className="block text-sm font-medium text-gray-700"
              >
                DNI* (sin puntos ni espacios)
              </label>
              <Field
                id="dni"
                name="dni"
                validate={validateRequired}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-[var(--naranja)]"
              />
              <div className="min-h-[1rem]">
                {errors.dni && touched.dni && (
                  <div className="text-red-500 text-xs mt-1">{errors.dni}</div>
                )}
              </div>
            </div>

            {/* Teléfono */}
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700"
              >
                Teléfono
              </label>
              <Field
                id="telefono"
                name="telefono"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus: focus:border-[var(--naranja)]"
              />
              <div className="min-h-[1rem]"></div>
            </div>
            {/* Botón de envío */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--verde-oscuro)] hover:bg-[var(--violeta)] transition-transform transform hover:scale-105"
              >
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);
