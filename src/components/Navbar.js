'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({color, logo}) => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className={`absolute w-full h-[70px] text-[${color}] px-4 flex flex-row items-center justify-between`}>
      <Link href="/">
        {" "}
        <Image
          src={`/dummy/${logo}`}
          width={100}
          height={100}
          alt="perrito cool"
        />
      </Link>

      <ul className="flex flex-row w-[40%] justify-between font-bold mr-4 pr-2">
        <li className="relative flex flex-row items-center cursor-pointer">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-row items-center focus:outline-none"
          >
            Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              className={`ml-1 transition-transform duration-200 ${
                isOpen ? "rotate-90" : ""
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

          {/* Dropdown */}
          {isOpen && (
            <ul className="absolute top-full left-0 mt-2 text-black bg-white shadow-lg rounded-xl py-2 w-40 z-50">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/services/branding" onClick={() => setIsOpen(false)}>
                  Branding
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/services/uxui" onClick={() => setIsOpen(false)}>
                  UX/UI
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link
                  href="/services/webdesign"
                  onClick={() => setIsOpen(false)}
                >
                  Web Design
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/ourProducts">Our Products</Link>
        </li>
        <li>
          <Link href="">About Us</Link>
        </li>
        <li>
          <Link href="">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
