"use client";

import React from "react";
import Image from "next/image";


type NavbarProps = {
  selectedSection: string;
  onSelectSection: (section: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ selectedSection, onSelectSection }) => {
  const [open, setOpen] = React.useState(false);

  const navItems = ["Home", "About", "Work", "Contact"];

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
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => onSelectSection(section)}
                className={`text-primary hover:bg-gray-200 rounded-lg font-montserrat font-semibold p-2 ${selectedSection === section ? "bg-gray-200" : ""}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="w-25 py-3 border-1 border-gray-200 rounded-xl bg-white font-bold text-black  focus:outline-none"
          >
            {selectedSection}
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute left-52 mt-65 w-25 border-1 border-gray-200 rounded-xl bg-white shadow-lg flex flex-col items-center py-4 z-50">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    onSelectSection(section);
                    setOpen(false);
                  }}
                  className={`w-20 px-4 py-2 rounded-xl font-bold text-black hover:bg-gray-100 ${selectedSection === section ? "bg-gray-200 text-blue-600" : ""}`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
