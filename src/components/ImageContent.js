import Img from "../../public/bg-img.png";
import Image from "next/image";

export default function ImageContent() {
  return (
    <div className="flex items-center justify-center w-[1440px] h-[888px] m-[24px] relative">
      <div className="absolute top-0">
        <Image
          src={Img}
          alt="Image"
          width={1392}
          height={840}
          objectFit="cover"
        />
      </div>

      <div className="absolute w-[608px] flex flex-col items-center justify-center align-self-stretch ml-[104px] mr-[104px]" >
      <h1 className="text-white text-center font-inter text-[64px] font-bold leading-[112.5%] drop-shadow-md	">
    The start of a great adventure.
</h1>

        <h3 className="mt-2  text-[#FFF] text-center font-inter font-bold text-lg leading-6">
          Porta dui sed mattis odio cras integer sapien proin diam.
          <br />
          Malesuada purus bibendum nulla libero ut etiam ut. Amet odio
          <br />
          felis gravida porta accumsan arcu. Libero neque mi
          <br />
          vestibulum habitant neque sagittis venenatis.
        </h3>

        <button className="flex mt-6 h-12 px-6 items-center justify-center bg-white rounded-full font-inter text-[15px] font-bold text-[#4B4B4B] m-[24px]">
          Read more
        </button>
      </div>
    </div>
  );
}
