import React from 'react'

const Hero = () => {
  return (
     <section
      className="relative w-full h-[600px] rounded-xl overflow-hidden bg-cover bg-center flex items-center p-6 text-white"
      style={{
        backgroundImage: `url('/hero.png')` 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0" />

      <div className="relative lg:z-10 max-w-[600px] family-sans  p-20">
       <h1 className='uppercase text-4xl md:text-6xl font-bold'>BMR - Studio</h1>
       <p className='italic md:text-2xl'>Your story, shaped into design.</p>
      </div>
    </section>
  )
}

export default Hero