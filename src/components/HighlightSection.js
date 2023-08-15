import React from "react";
import Image from "next/image";
import img5 from "/public/img (5).png";

function HighlightSection() {
  return (
    <div className="highlight-section flex flex-col w-[1440px] px-[104px] py-10 items-start gap-2 overflow-hidden">
      <div className="combined-box flex items-center w-full h-full">
        {/* Content Box */}
        <div className="content-box flex flex-col w-[400px] h-[468px] p-10 rounded-tl-md rounded-bl-md items-start bg-[#009CC4]">
          <h2 className="w-full text-white font-inter text-[32px] font-[300] mb-0 leading-none">
            Enim nulla facilisis viverra lobortis
          </h2>

          <p className="w-full text-white font-normal text-sm leading-6 mt-4">
            Lectus orci lectus in leo vel a. Venenatis sagittis nunc fermentum
            urna morbi. Sed luctus mi vulputate posuere quis. Amet dolor rhoncus
            tincidunt porta faucibus lorem in integer et.
          </p>

          <button className="flex items-center justify-center h-10 px-4 bg-white rounded-full mt-auto ">
            Button Text
          </button>
        </div>

        {/* Image */}
        <div className="image-box flex flex-1 bg-cover bg-center">
          <Image
            src={img5}
            alt="Highlight Image"
            width={832}
            height={468}
            layout="responsive"
            className="rounded-tr-md rounded-br-md"
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 390px) {
          .highlight-section {
            width: 390px;
            padding: 40px 16px;
          }

          .combined-box {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .image-box {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            align-self: stretch;
          }

          .content-box {
            display: flex;
            padding: 40px 32px;
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
            align-self: stretch;
          }
        }
      `}</style>
    </div>
  );
}

export default HighlightSection;
