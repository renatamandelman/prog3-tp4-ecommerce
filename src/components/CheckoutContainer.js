"use client"
import React from 'react'
import { useAppContext } from '@/app/contexts/AppContext'


const CheckoutContainer = () => {
    const {cart} = useAppContext();
  return (
    <div>
    
        {cart.map((product)=>(
            <div>
            <h3>{product.name}</h3>
            <p>Cantidad: {product.qty}</p>
                </div>
            
        ))
        }
    
    </div>
  )
}

export default CheckoutContainer