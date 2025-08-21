import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[50px] text-white px-4 flex flex-row items-center justify-between ">
      <Image
        src="/dummy/perrito.jpg"
        width={40}
        height={40}
        alt="perrito cool"
      />

      <ul className="flex flex-row w-[400px] justify-between   font-bold mr-2 pr-2">
        <li className="flex flex-row items-center">Services <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6m0 0H9m9 0v9"></path></svg></li>
        <li>Our Work</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
