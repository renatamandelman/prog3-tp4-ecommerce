import React from 'react';
import { Formik, Form, Field } from 'formik';

// Las funciones de validación permanecen iguales
function validateEmail(value) {
  let error;
  if (!value) {
    error = 'El email es requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Dirección de email inválida';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (!value) {
    error = 'El nombre de usuario es requerido';
  } else if (value === 'admin') {
    error = '¡Buen intento! 😉';
  }
  return error;
}

export const FormCheckout = ({handleAddOrder}) => (
  // Contenedor principal para centrar el formulario en la página
  <div className="flex items-center justify-center">
    
    {/* Tarjeta del formulario */}
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Registro
      </h1>
      
      <Formik
        initialValues={{
          username: '',
          email: '',
        }}
        onSubmit={(values) => {
          handleAddOrder(values)
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="space-y-6">
            
            {/* Campo de Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                validate={validateEmail}
                className="text-black mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-xs mt-1">{errors.email}</div>
              )}
            </div>

            {/* Campo de Nombre de Usuario */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Nombre de Usuario
              </label>
              <Field
                id="username"
                name="username"
                validate={validateUsername}
                className="text-black mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.username && touched.username && (
                <div className="text-red-500 text-xs mt-1">{errors.username}</div>
              )}
            </div>

            {/* Botón de envío */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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