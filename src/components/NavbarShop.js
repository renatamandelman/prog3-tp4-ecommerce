import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarShop = () => {
  return (
    <div className=" w-full h-[70px] text-[#3B413C] px-4 flex flex-row items-center justify-between  bg-[#e6d8c7] ">
    <Link href="/">  <Image
       src="/dummy/logoNegro.svg"
        width={100}
        height={100}
        alt="perrito cool"
      />
      </Link>

      <ul className="flex flex-row w-[30%] justify-between font-bold mr-4 pr-2">
        <li className="flex flex-row items-center"><Link href='/categories/plantilla'>Plantillas</Link> </li>
        <li><Link href='/categories/mockup'>Mockups</Link></li>
        <li><Link href=''>Contact Us</Link></li>
        <li><Link href='/checkout'>Cart</Link></li>
      </ul>
    </div>
  );
};

export default NavbarShop;
