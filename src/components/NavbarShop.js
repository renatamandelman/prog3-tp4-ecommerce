import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarShop = () => {
  return (
    <div className="absolute w-full h-[50px] text-[#3B413C] px-4 flex flex-row items-center justify-between ">
    <Link href="/">  <Image
        src="/dummy/perrito.jpg"
        width={40}
        height={40}
        alt="perrito cool"
      />
      </Link>

      <ul className="flex flex-row w-[30%] justify-between font-bold mr-4 pr-2">
        <li className="flex flex-row items-center"><Link href='/templates'>Templates</Link> </li>
        <li><Link href='/mockups'>Mockups</Link></li>
        <li><Link href=''>Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default NavbarShop;
