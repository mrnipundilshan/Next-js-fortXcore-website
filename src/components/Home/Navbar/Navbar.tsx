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
      <nav className="relative bg-white flex items-center justify-between px-6 py-3 mx-4 md:mx-8 lg:mx-12 rounded-lg">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center">
          <div className="flex-shrink-0">
            <div className="relative w-32 h-8">
              <Image
                src="/fortxcore-logo.png"
                alt="FORTXCORE Logo"
                fill
                sizes="(min-width: 1024px) 200px, 120px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-15 border-2 pl-1 pr-1 pt-1 pb-1 rounded-lg ">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => onSelectSection(section)}
                className={`text-primary hover:bg-gray-200  rounded-lg  font-montserrat font-semibold p-2 ${selectedSection === section ?"bg-gray-200" : ""}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile Layout - Centered */}
        <div className="md:hidden flex items-center justify-center w-full">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <div className="relative w-32 h-8">
                <Image
                  src="/fortxcore-logo.png"
                  alt="FORTXCORE Logo"
                  fill
                  sizes="(min-width: 1024px) 200px, 120px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="w-28 py-3 border-1 border-gray-200 rounded-xl bg-white font-bold text-black focus:outline-none"
              >
                {selectedSection}
              </button>

              {/* Dropdown Menu */}
              {open && (
                <div className="absolute top-full left-0 mt-2 w-28 border border-gray-200 rounded-xl bg-white shadow-lg flex flex-col items-center py-2 z-50">
                {navItems.map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      onSelectSection(section);
                      setOpen(false);
                    }}
                    className={`text-primary hover:bg-gray-200 rounded-lg font-montserrat font-semibold px-5 py-2 mx-2 my-1 text-center ${selectedSection === section ? "bg-gray-200" : ""}`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
