import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[600px] bg-[#9db5b2] flex items-center justify-center p-4 text-[#3B413C]">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-around w-[90%] md:w-[80%] text-center md:text-left">
        <div className="max-w-[600px] family-sans text-5xl md:text-[130px] lg:text-[150px]">
          <h1 className="font-bold">Think.</h1>
          <h1 className="font-bold">Build.</h1>
          <h1 className="text-[#ECECAB] underline family-serif">Connect.</h1>
        </div>

        <div className="text-xl md:text-2xl lg:text-3xl p-6 md:p-10 mt-6 md:mt-0">
          <p>Design that speaks.</p>
          <p>Experiences that engage.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
