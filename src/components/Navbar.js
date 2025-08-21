import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[50px] bg-amber-500 px-4 flex flex-row items-center justify-between">
      <Image
        src="/dummy/perrito.jpg"
        width={40}
        height={40}
        alt="perrito cool"
      />

      <ul className="flex flex-row w-[400px] justify-between pr-2 text-black font-bold">
        <li className="flex flex-row items-center"><span><Image className="transform rotate-180" src="/angulo.png" width={25} height={25} alt="flecha"/></span>Services</li>
        <li>Our Work</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
