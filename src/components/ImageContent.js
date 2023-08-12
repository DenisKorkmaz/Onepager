import Img from "../../public/bg-img.png";
import Image from "next/image";

export default function ImageContent() {
  return (
    <div className="relative w-[1392px] h-[840px] ml-6 mt-6">
      <Image src={Img} alt="Image" layout="fill" objectFit="cover" />

      <div className="absolute w-[608px] h-[888px] flex flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-[#FFF] text-center font-inter text-[64px] font-bold leading-[72px] max-w-full overflow-hidden">
          The start of a great adventure.
        </h1>
        <h3 className="text-[#FFF] mt-2 text-center font-inter text-[20px] font-bold leading-6 max-w-full overflow-hidden">
          Porta dui sed mattis odio cras integer sapien proin diam. Malesuada
          purus bibendum nulla libero ut etiam ut. Amet odio felis gravida porta
          accumsan arcu. Libero neque mi vestibulum habitant neque sagittis
          venenatis.
        </h3>
        <button className="flex mt-6 h-12 px-6 items-center justify-center bg-white rounded-full font-inter text-[15px] font-bold text-[#4B4B4B]">
          Read more
        </button>
      </div>
    </div>
  );
}
