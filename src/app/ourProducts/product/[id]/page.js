import NavbarShop from '@/components/NavbarShop'
import SingleProduct from '@/components/SingleProduct'
import React from 'react'

const page = async ({params}) => {
  const {id} = await params
  return (
    <>
     <NavbarShop/>
    <SingleProduct id={id}/>
    </>
  )
}

export default page