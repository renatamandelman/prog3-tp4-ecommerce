'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/app/contexts/AppContext";

const NavbarShop = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useAppContext();

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

      {/* Botón menú (mobile) */}
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

      {/* Menú */}
      <ul
        className={`
          md:flex md:flex-row md:w-[40%] md:justify-between md:font-bold md:mr-4 md:pr-2
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

        <li className="relative px-4 py-2 md:p-0">
          <Link
            href="/checkout"
            onClick={() => setMenuOpen(false)}
            className="flex items-center relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 2.25h1.386c.51 0 .956.342 1.09.834l.478 1.781M7.5 13.5h11.25l2.25-7.5H6.114M7.5 13.5L5.25 4.865M7.5 13.5l-1.125 4.5h12.75M9 21.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            {/* Cantidad del carrito */}
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarShop;

