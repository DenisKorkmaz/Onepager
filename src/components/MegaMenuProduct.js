import React from "react";
import Image from "next/image";
import arrowIcon from "/public/state=default, size=40, icon=only, style=text, color=black.svg";

function MegaMenuProduct() {
  const products = [
    {
      title: "Product A",
      description:
        "At proin ipsum massa turpis viverra mi tristique nisi at. <br/> Sapien sed leo sit faucibus mattis augue morbi leo.",
      imagePath: "/img (9).png",
    },
    {
      title: "Product B",
      description:
        "Ante sit congue arcu morbi. Id diam id erat ultrices </br>cursus eu at in mi. Euismod at a nibh sed duis ac.",
      imagePath: "/img (10).png",
    },
  ];

  return (
    <div className="relative flex w-[1440px] h-[525px] px-[104px] py-10 items-start border-b border-[#F2F2F2] bg-white shadow-b">
      {/* Produktlinks */}
      <div className="flex flex-col w-[400px] justify-between m-[8px] items-start flex-shrink-0">
        <h1 className="text-[#4B4B4B] font-inter font-thin text-4xl leading-[40px] mb-4">
          Product
        </h1>
        <div className="flex justify-between mr-[8px] font-bold mb-2">
          {["Product-A", "Product-B", "Product-C"].map((product, index) => (
            <button
              key={product}
              className={`flex justify-center items-center h-10 px-4 bg-[#F2F2F2] rounded-full text-[#4B4B4B] font-inter text-sm leading-6 ${
                index !== 2 ? "mr-2" : ""
              }`}>
              {product}
            </button>
          ))}
        </div>
        <div className="flex mr-[8px] font-bold justify-between mb-2">
          {["Product-D", "Product-E", "Product-F"].map((product, index) => (
            <button
              key={product}
              className={`flex justify-center items-center h-10 px-4 bg-[#F2F2F2] rounded-full text-[#4B4B4B] font-inter text-sm leading-6 ${
                index !== 2 ? "mr-2" : ""
              }`}>
              {product}
            </button>
          ))}
        </div>
        <div className="flex mr-[8px] font-bold justify-between mb-2">
          <button className="flex justify-center items-center h-10 px-4 bg-[#F2F2F2] rounded-full text-[#4B4B4B] font-inter text-sm leading-6">
            Product-G
          </button>
        </div>

        <button className="absolute bottom-0 left-[104px] flex justify-center items-center h-10 px-4 text-[#4B4B4B] mb-[40px] font-inter text-sm leading-6 tracking-wide font-bold underline">
          <Image src={arrowIcon} alt="Arrow Icon" width={40} height={20} />
          Show All
        </button>
      </div>

      {/* Produktkarten */}
      {products.map((product, index) => (
        <div key={index} className="flex flex-col items-start">
          <Image
            src={product.imagePath}
            alt="Product Image"
            width={400}
            height={225}
            className="rounded-md mb-4"
          />
          <p className="text-[#C8C8C8] font-inter font-thin text-xs uppercase mb-2">
            PRODUCT
          </p>
          <h2 className="text-[#4B4B4B] font-inter font-thin text-4xl leading-[40px] mb-4">
            {product.title}
          </h2>
          <p className="text-[#4B4B4B] font-inter font-thin text-sm leading-6 mb-4">
            {product.description}
          </p>
          <button className="flex justify-center items-center font-bold h-12 px-6 bg-[#F2F2F2] rounded-full text-[#4B4B4B] font-inter tracking-wide  text-[15px] leading-6 gap-2">
            <Image src={arrowIcon} alt="Arrow Icon" width={40} height={20} />
            Read more
          </button>
        </div>
      ))}
    </div>
  );
}

export default MegaMenuProduct;
