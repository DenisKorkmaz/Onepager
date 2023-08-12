import React from "react";
import Logo from "../../public/logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative w-full h-full">
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="flex w-[1440px] px-[104px] justify-between items-center border-b border-[#F2F2F2] bg-[#FFF] min-h-22">
          <Image src={Logo} alt="Company Logo" />
          <ul className="flex gap-8 ml-auto pr-26 items-center">
            <li className="flex items-start gap-2 py-8 px-3 text-[#4B4B4B] text-[15px]">
              Blog
            </li>
            <li className="flex items-start gap-2 py-8 px-3 text-[#4B4B4B] text-[15px]">
              Products
            </li>
            <li className="flex items-start gap-2 py-8 px-3 text-[#4B4B4B] text-[15px]">
              About
            </li>
          </ul>
        </nav>
      </div>

      <div className="pt-24"></div>
    </div>
  );
}
