import Img from "../../public/bg-img.png";
import Image from "next/image";

export default function ImageContent() {
  return (
    <div className="flex items-center justify-center w-[1440px] h-[888px] m-6 relative">
      <div className="absolute top-0">
        <Image
          src={Img}
          alt="Image"
          width={1392}
          height={840}
          objectFit="cover"
        />
      </div>

      <div className="absolute w-[608px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center align-self-stretch">
        <h1 className="text-white text-center font-inter text-[64px] font-bold leading-[72px]">
          The start of a great adventure.
        </h1>
        <h3 className="mt-2 text-white text-center font-inter font-bold">
          Porta dui sed mattis odio cras integer sapien proin diam. Malesuada
          purus bibendum nulla libero ut etiam ut. Amet odio felis gravida porta
          accumsan arcu. Libero neque mi vestibulum habitant neque sagittis
          venenatis.
        </h3>
        <button className="flex mt-6 h-12 px-6 items-center justify-center bg-white rounded-full font-inter text-[15px] font-bold text-[#4B4B4B] m-[24px]">
          Read more
        </button>
      </div>
    </div>
  );
}
