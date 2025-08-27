import React from 'react'

const Hero = () => {
  return (
     <section
      className="w-full h-[600px]  bg-[#9db5b2] flex items-center justify-center p-2  text-[#3B413C] "
    >
<div className='flex items-end justify-around w-[90%] md:w-[80%]'>
      <div className=" max-w-[600px] family-sans  text-4xl md:text-[130px] ">
        <h1 className="font-bold">Think.</h1>
        <h1 className=" font-bold ">Build.</h1>
        <h1 className="text-[#ECECAB] underline family-serif">Connect.</h1>
      </div>
      <div className='text-lg md:text-2xl p-10'>
        <p >Design that speaks.</p>
        <p> Experiences that engage.</p>
      </div>
      </div>
    </section>
  )
}

export default Hero