import React from 'react'

const Footer = () => {
  return (
    <div className='h-[275px] text-white px-4 flex flex-col bg-gray-800'>
        <p className='text-sm font-bold'>Got a project in mind?</p>
        <p className='text-sm'>bmr@design.com</p>
        
        <ul className='flex flex-col items-start'>
            <li><a href='#' className='text-sm hover:underline'>Instagram</a></li>
            <li><a href='#' className='text-sm hover:underline'>LinkedIn</a></li>
            <li><a href='#' className='text-sm hover:underline'>Behance</a></li>
            <li><a href='#' className='text-sm hover:underline'>TikTok</a></li>
            <li><a href='#' className='text-sm hover:underline'>Pinterest</a></li>
        </ul>
    </div>
  )
}

export default Footer