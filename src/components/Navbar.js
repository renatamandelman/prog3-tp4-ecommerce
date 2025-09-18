import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute w-full h-[50px] text-[#3B413C] px-4 flex flex-row items-center justify-between ">
    <Link href="">  <Image
        src="/dummy/perrito.jpg"
        width={40}
        height={40}
        alt="perrito cool"
      />
</Link>
      <ul className="flex flex-row w-[40%] justify-between font-bold mr-4 pr-2">
        <li className="flex flex-row items-center"><Link href='/services'>Services</Link> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6m0 0H9m9 0v9"></path></svg></li>
        <li><Link href='/ourProducts'>Our Products</Link></li>
        <li><Link href=''>About Us</Link></li>
        <li><Link href=''>Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
