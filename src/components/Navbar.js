'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ color, logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className={`absolute w-full h-[70px] text-[${color}] px-4 flex items-center justify-between z-50`}
    >
      {/* LOGO */}
      <Link href="/" className="flex items-center">
        <Image
          src={`/dummy/${logo}`}
          width={100}
          height={100}
          alt="perrito cool"
        />
      </Link>

      {/* MENU HAMBURGUESA */}
      <button
        className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`h-[3px] w-full bg-current transition-transform ${
            isOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>
        <span
          className={`h-[3px] w-full bg-current transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-[3px] w-full bg-current transition-transform ${
            isOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        ></span>
      </button>

      {/* MENÚ PRINCIPAL */}
      <ul
        className={`
          md:flex md:flex-row md:w-[40%] md:justify-between md:font-bold md:mr-4 md:pr-2
          absolute md:static top-[70px] left-0 w-full bg-white md:bg-transparent text-black md:text-current font-semibold
          flex-col items-start md:items-center transition-all duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"}
        `}
      >
        {/* Dropdown */}
        <li className="relative flex flex-col md:flex-row items-start md:items-center w-full md:w-auto cursor-pointer">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex flex-row items-center w-full px-4 py-2 md:p-0 focus:outline-none"
          >
            Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              className={`ml-1 transition-transform duration-200 ${
                dropdownOpen ? "rotate-90" : ""
              }`}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6m0 0H9m9 0v9"
              />
            </svg>
          </button>

          {/* Dropdown Items */}
          {dropdownOpen && (
            <ul className="md:absolute top-full left-0 md:mt-2 bg-white text-black shadow-lg md:rounded-xl md:py-2 w-full md:w-40 z-50">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/services/branding" onClick={() => setDropdownOpen(false)}>
                  Branding
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/services/uxui" onClick={() => setDropdownOpen(false)}>
                  UX/UI
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/services/webdesign" onClick={() => setDropdownOpen(false)}>
                  Web Design
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="px-4 py-2 md:p-0">
          <Link href="/ourProducts">Our Products</Link>
        </li>
        <li className="px-4 py-2 md:p-0">
          <Link href="">About Us</Link>
        </li>
        <li className="px-4 py-2 md:p-0">
          <Link href="">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
