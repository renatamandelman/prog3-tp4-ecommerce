import Footer from '@/components/Footer'
import NavbarShop from '@/components/NavbarShop'
import ProductsContainer from '@/components/ProductsContainer'
import React from 'react'

const ourProducts = () => {
  return (
    <>
    <NavbarShop/>
    <div className=' bg-[#E6D6C6]'>
    <ProductsContainer/>
    <Footer/>
 </div>
 </>
  )
}

export default ourProducts