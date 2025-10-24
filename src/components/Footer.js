import React from 'react'

const Footer = () => {
  return (
    <div className="h-[275px] md:h-[250px] lg:h-[275px] text-white px-4 flex flex-col items-center md:items-start justify-center bg-[#3B413C] text-center md:text-left">
      <div className="ml-0 md:ml-10">
        <p className="text-base md:text-sm font-bold mt-5">Got a project in mind?</p>
        <p className="text-base md:text-sm mb-5">bmr@design.com</p>

        <ul className="flex flex-col items-center md:items-start space-y-1">
          <li>
            <a href="#" className="text-base md:text-sm hover:underline">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="text-base md:text-sm hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" className="text-base md:text-sm hover:underline">
              Behance
            </a>
          </li>
          <li>
            <a href="#" className="text-base md:text-sm hover:underline">
              TikTok
            </a>
          </li>
          <li>
            <a href="#" className="text-base md:text-sm hover:underline">
              Pinterest
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
