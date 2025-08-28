import React from 'react'

const Footer = () => {
  return (
    <div className='h-[275px] text-white px-4 flex flex-col bg-[#3B413C]'>
        <div className='ml-10'>
        <p className='text-sm font-bold mt-5'>Got a project in mind?</p>
        <p className='text-sm mb-5'>bmr@design.com</p>
        
        <ul className='flex flex-col items-start'>
            <li><a href='#' className='text-sm hover:underline'>Instagram</a></li>
            <li><a href='#' className='text-sm hover:underline'>LinkedIn</a></li>
            <li><a href='#' className='text-sm hover:underline'>Behance</a></li>
            <li><a href='#' className='text-sm hover:underline'>TikTok</a></li>
            <li><a href='#' className='text-sm hover:underline'>Pinterest</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Footer