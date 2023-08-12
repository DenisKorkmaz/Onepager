import React from "react";
import Image from "next/image";
import ProductImage from "../../public/img.png";
import ButtonSVG from "../../public/button.svg";

export default function ProductCard({ h3Text, pText, bgColor }) {
    return (
        <div style={{ backgroundColor: bgColor }} className="flex flex-col items-start flex-shrink-0 rounded-lg p-4 w-[398.667px] h-[590.67px]">
          <div className="flex-grow w-full">
            <Image src={ProductImage} alt="Product" layout="responsive" />
          </div>

          <h3 className="text-white font-inter font-bold text-xl w-full mb-2">{h3Text}</h3>

          <p className="font-inter font-thin leading-6 text-white">{pText}</p>

          <button className="flex justify-center items-center mt-6 rounded-full bg-white p-0 border-0 focus:outline-none focus:border-none focus:ring-0">
            <Image src={ButtonSVG} alt="Button" width={40} height={40} className="p-0 m-0" />
          </button>
        </div>
    );
}
