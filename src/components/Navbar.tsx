"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    
  return (
    <>
      <nav className="fixed top-5 left-20 right-20 bg-white flex items-center justify-between px-8">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="relative w-32 h-8">
              <Image
                src="/fortxcore-logo.png"
                alt="FORTXCORE Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-6 border-2 rounded-lg p-1">
            <a
              href="/home"
              className="text-black hover:bg-gray-200 rounded-lg font-montserrat font-semibold p-2"
            >
              Home
            </a>
            <a
              href="/home"
              className="text-black hover:bg-gray-200 rounded-lg font-montserrat font-semibold p-2"
            >
              About
            </a>
            <a
              href="/home"
              className="text-black hover:bg-gray-200 rounded-lg font-montserrat font-semibold p-2"
            >
              Work
            </a>
            <a
              href="/home"
              className="text-black hover:bg-gray-200 rounded-lg font-montserrat font-semibold p-2"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="md:hidden flex items-center">
        <button
        onClick={() => setOpen(!open)}
        className="w-25 py-3 border-1 border-gray-200 rounded-xl bg-white font-bold text-black  focus:outline-none"
      >
        Home
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute left-52 mt-65 w-25 border-1 border-gray-200 rounded-xl bg-white shadow-lg flex flex-col items-center py-4 z-50">
          <div className="w-20 px-4 py-2   rounded-xl hover:bg-gray-100 font-bold text-black">
            Home
          </div>
          <a href="#about" className= "text-black hover:bg-gray-100 w-20 px-4 py-2 rounded-xl">
            About
          </a>
          <a href="#work" className= "text-black hover:bg-gray-100 w-20 px-4 py-2  rounded-xl">
            Work
          </a>
          <a href="#contact" className= "text-black hover:bg-gray-100 w-20 px-4 py-2  rounded-xl">
            Contact
          </a>
        </div>
      )}        
        </div>
      </nav>
    </>
  );
};

export default Navbar;
