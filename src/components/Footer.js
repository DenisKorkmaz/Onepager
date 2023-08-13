import React from "react";
import Image from "next/image";
import buttonIcon from "/Users/deniskorkmaz/Desktop/onepager/public/button (2).svg";
import youtubeIcon1 from "/Users/deniskorkmaz/Desktop/onepager/public/logo-youtube 1.svg";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button onClick={scrollToTop} className="m-[40px]">
        <Image src={buttonIcon} alt="Button Icon" width={40} height={40} />
      </button>

      <div className="flex justify-center w-full items-start">
        <div className="flex justify-center w-[1440px]  h-[456px] px-[104px] py-20 items-start bg-[#F2F2F2]">
          {/* Column 1 */}
          <div className="flex flex-col items-start w-[296px]">
            <h3 className="text-[#4B4B4B] font-inter font-bold text-sm leading-6 mb-2">
              Loremipsum GmbH
            </h3>
            <p className="text-[#4B4B4B] font-inter text-sm font-normal leading-6 mb-2">
              Musterstraße 16 1245 Musterstadt
              <br />
              Telefon: 0123 / 456789-10
              <br />
              Telefax: 0123 / 456789-11
            </p>
            <button className="flex justify-center items-center h-10 px-4 text-white font-inter font-bold text-sm leading-6 bg-[#4B4B4B] rounded-[24px]">
              Zur Kontaktseite
            </button>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start w-[296px]">
            <h3 className="text-[#4B4B4B] font-inter font-bold text-sm leading-6 mb-2">
              Corporate
            </h3>
            <a
              href="#"
              className="text-[#4B4B4B] font-inter text-sm font-normal leading-6 mb-2">
              About
            </a>
            <a
              href="#"
              className="text-[#4B4B4B] font-inter text-sm font-normal leading-6 mb-2">
              Who we are
            </a>
            <a
              href="#"
              className="text-[#4B4B4B] font-inter text-sm font-normal leading-6 mb-2">
              Team
            </a>
            <a
              href="#"
              className="text-[#4B4B4B] font-inter text-sm font-normal leading-6 mb-2">
              Jobs
            </a>
            <a
              href="#"
              className="text-[#4B4B4B] font-inter text-sm font-normal leading-6">
              Development
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start w-[296px]">
            <h3 className="text-[#4B4B4B] font-inter font-bold text-sm leading-6 mb-2">
              Products
            </h3>
            {[
              "Product-A",
              "Product-B",
              "Product-C",
              "Product-D",
              "Product-E",
              "Product-F",
              "Product-G",
            ].map((product, index) => (
              <button
                key={product}
                className={`text-[#4B4B4B] font-inter text-sm font-normal leading-6 ${
                  index < 6 ? "mb-2" : ""
                }`}>
                {product}
              </button>
            ))}
            <button className="text-[#4B4B4B] font-inter text-sm font-normal leading-6">
              Show All
            </button>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col justify-between items-start w-[296px]">
            <div>
              <h3 className="text-[#4B4B4B] font-inter font-bold text-sm leading-6 mb-2">
                Service
              </h3>
              <p className="text-[#4B4B4B] font-inter text-sm font-normal leading-6 mb-2">
                Downloads
              </p>
              <p className="text-[#4B4B4B] font-inter text-sm font-normal mb-[158px] leading-6">
                FAQ
              </p>
            </div>
            <div className="flex items-center ">
              <Image
                src={youtubeIcon1}
                alt="YouTube Icon 1"
                width={24}
                height={24}
              />
              <p className="text-[#4B4B4B] font-inter text-sm font-normal ml-[8px] leading-6 ">
                Youtube
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
