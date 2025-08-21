import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceCard = ({image}) => {
  return (
    <Link href="/">
        <Image className="rounded-2xl hover:transition hover:shadow-2xl" src={image} width={200} height={200} alt={`${image}`}/>
    </Link>
  )
}

export default ServiceCard