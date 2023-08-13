import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import MegaBlogMenu from "./MegaBlogMenu";

function NavItem({ label, onClick, activeItem, setActiveItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeItem === label; 

  return (
    <li 
      className={`relative font-semibold	 flex items-start py-8 px-3 text-[#4B4B4B] font-inter text-[15px]  leading-7	cursor-pointer ${isHovered || isActive ? 'text-[#B0CB52]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (activeItem === label) {
          setActiveItem(""); 
        } else {
          setActiveItem(label); 
        }
        onClick && onClick();
      }}
      
    >
      {label}
      <span className={`absolute rounded-t-3xl left-0 bottom-[0px] h-1 ${isHovered || isActive ? 'w-full' : 'w-0'} bg-[#B0CB52] transition-all`}></span>
    </li>
  );
}

export default function Header() {
  const [showBlogMenu, setShowBlogMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(""); 

  return (
    <div className="relative w-full h-full">
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="flex w-[1440px] px-[104px] justify-between items-center border-b border-[#F2F2F2] bg-[#FFF] min-h-22">
          <Image src={Logo} alt="Company Logo" />
          <ul className="flex ml-auto pr-26 items-center">
            <NavItem 
              label="Blog"
              onClick={() => setShowBlogMenu(!showBlogMenu)}
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
        </nav>
        {activeItem === "Blog" && <MegaBlogMenu />}
      </div>

      <div className="pt-24"></div>
    </div>
  );
}
