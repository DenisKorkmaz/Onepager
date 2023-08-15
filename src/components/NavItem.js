import React, { useState } from "react";

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

export default NavItem;
