'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarShop = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[70px] text-[#3B413C] px-4 flex items-center justify-between bg-[#e6d8c7] relative z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/dummy/logoNegro.svg"
          width={100}
          height={100}
          alt="perrito cool"
        />
      </Link>

      {/* menu hamburguesa */}
      <button
        className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`h-[3px] w-full bg-[#3B413C] transition-transform ${
            menuOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>
        <span
          className={`h-[3px] w-full bg-[#3B413C] transition-opacity ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-[3px] w-full bg-[#3B413C] transition-transform ${
            menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        ></span>
      </button>

      {/* Menú principal */}
      <ul
        className={`
          md:flex md:flex-row md:w-[50%] md:justify-between md:font-bold md:mr-4 md:pr-2
          absolute md:static top-[70px] left-0 w-full bg-[#e6d8c7] text-[#3B413C]
          flex-col items-start md:items-center font-semibold
          transition-all duration-300 ease-in-out
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"}
        `}
      >
        <li className="px-4 py-2 md:p-0">
          <Link href="/ourProducts" onClick={() => setMenuOpen(false)}>
            Todos los productos
          </Link>
        </li>
        <li className="px-4 py-2 md:p-0">
          <Link href="/categories/plantilla" onClick={() => setMenuOpen(false)}>
            Plantillas
          </Link>
        </li>
        <li className="px-4 py-2 md:p-0">
          <Link href="/categories/mockup" onClick={() => setMenuOpen(false)}>
            Mockups
          </Link>
        </li>
        <li className="px-4 py-2 md:p-0">
          <Link href="" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </li>
        <li className="px-4 py-2 md:p-0">
          <Link href="/checkout" onClick={() => setMenuOpen(false)}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarShop;
