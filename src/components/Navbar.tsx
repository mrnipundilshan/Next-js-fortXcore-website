import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
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
              <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                    <a href="/home"
                    className="text-black hover:bg-gray-200 rounded-lg font-montserrat font-semibold p-2">
                        Home
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
