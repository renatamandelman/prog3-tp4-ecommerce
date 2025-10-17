
import CategoryGrid from '@/components/CategoryGrid'
import NavbarShop from '@/components/NavbarShop'
import React from 'react'

const Categories = async ({params}) => {
  const {slug} =  await params
  return (
    <>
    <NavbarShop/>
    <CategoryGrid slug={slug} />
    </>
  )
}

export default Categories