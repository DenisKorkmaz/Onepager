import Img from "../../public/bg-img.png";
import Image from "next/image";

export default function ImageContent() {
  return (
    <div className="flex items-center justify-center w-full lg:w-[1440px] h-[720px] lg:h-[888px] m-6 lg:m-[24px] relative">
      <div className="absolute top-0 w-full max-w-[390px] h-[720px] lg:w-full lg:max-w-none">
        <Image
          src={Img}
          alt="Image"
          layout="responsive"
          width={1392}
          height={840}
          objectFit="cover"
        />
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center align-self-stretch text-white text-center text-shadow-md">
        <h1 className="font-inter text-[64px] font-bold leading-[112.5%] text-white text-center text-shadow-[0px 4px 15px rgba(0, 0, 0, 0.80)] lg:hidden">
          The start <br/> of a great <br/> adventure.
        </h1>
        <h1 className="font-inter text-[64px] font-bold leading-[112.5%] text-white text-center text-shadow-[0px 4px 15px rgba(0, 0, 0, 0.80)] hidden lg:block">
          The start of a great <br/> adventure.
        </h1>

        <h3 className="mt-2 font-inter font-bold text-lg leading-6 hidden lg:block">
          Porta dui sed mattis odio cras integer sapien proin diam.
          <br />
          Malesuada purus bibendum nulla libero ut etiam ut. Amet odio
          <br />
          felis gravida porta accumsan arcu. Libero neque mi
          <br />
          vestibulum habitant neque sagittis venenatis.
        </h3>

        <button className="flex mt-6 h-12 px-6 items-center justify-center bg-white rounded-full font-inter text-[15px] font-bold text-[#4B4B4B] m-6">
          Read more
        </button>
      </div>
    </div>
  );
}
