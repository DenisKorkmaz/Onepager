import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import MenuIcon from "../../public/Group.svg";
import MegaBlogMenu from "./MegaBlogMenu";
import MegaMenuProduct from "./MegaMenuProduct";

function NavItem({ label, activeItem, setActiveItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeItem === label;

  return (
    <li
      className={`relative font-semibold flex items-center py-2 px-3 text-gray-900 cursor-pointer ${isHovered || isActive ? 'text-green-500' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (activeItem === label) {
          setActiveItem("");
        } else {
          setActiveItem(label);
        }
      }}
    >
      {label}
      <span className={`absolute rounded-t-3xl left-0 bottom-0 h-1 ${isHovered || isActive ? 'w-full' : 'w-0'} bg-green-500 transition-all`}></span>
    </li>
  );
}

export default function Header() {
  const [activeItem, setActiveItem] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full ">
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full">
        <nav className="flex justify-between items-center p-4 border-b border-[#F2F2F2] bg-white backdrop-blur-[20px]">
          <Image src={Logo} alt="Company Logo" />
          <div className="flex items-center">
            <ul className="hidden sm:flex">
              <NavItem
                label="Blog"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
              <NavItem
                label="Products"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
              <NavItem
                label="About"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            </ul>
            <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden">
              <Image src={MenuIcon} alt="Menu Icon" />
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-[#F2F2F2] sm:hidden">
            <ul className="flex flex-col space-y-2">
              <NavItem
                label="Blog"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
              <NavItem
                label="Products"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
              <NavItem
                label="About"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            </ul>
          </div>
        )}
        {activeItem === "Blog" && <MegaBlogMenu />}
        {activeItem === "Products" && <MegaMenuProduct />}
      </div>

      <div className="pt-24"></div>
    </div>
  );
}
