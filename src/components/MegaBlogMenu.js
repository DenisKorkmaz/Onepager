import React from "react";
import Image from "next/image";
import blogImage1 from "/Users/deniskorkmaz/Desktop/onepager/public/img (6).png";
import blogImage2 from "/Users/deniskorkmaz/Desktop/onepager/public/img (8).png";
import blogImage3 from "/Users/deniskorkmaz/Desktop/onepager/public/img (7).png";
import arrowIcon from "/Users/deniskorkmaz/Desktop/onepager/public/state=default, size=40, icon=only, style=text, color=black.svg";

function BlogItem({ imageSrc, title, description }) {
  return (
    <div className="flex flex-col items-start m-[8px] flex-1 h-full justify-between">
      <div>
        <div className="mt-10 mb-[16px]">
          <Image src={imageSrc} alt="Blog Image" width={400} height={225} />
        </div>
        <span className="text-[#C8C8C8] font-inter text-xs mb-[8px] uppercase">
          Article
        </span>
        <h2 className="text-[#4B4B4B] leading-10 self-stretch font-light font-inter mb-[8px] text-[32px]">
          {title}
        </h2>
        <p className="text-[#4B4B4B] font-light leading-6 font-inter  text-[15px] ">
          {description}
        </p>
      </div>
      <button className="flex m- text-[#4B4B4B] text-[15px] font-bold	 items-center justify-center h-12 bg-[#F2F2F2] p-[24px] rounded-full ">
        <Image src={arrowIcon} alt="Arrow Icon" width={40} height={20} />
        Read more
      </button>
    </div>
  );
}

function MegaBlogMenu() {
  return (
    <div className="flex w-[1440px] px-[104px] h-[550px] items-start  pb-[40px] bg-white border-b border-[#F2F2F2] ">
      <BlogItem
        imageSrc={blogImage1}
        title="City"
        description="Orci sit nibh diam tellus. Ac turpis morbi amet nec mauris posuere dui. Id gravida mattis sed justo magna. Semper ac ipsum eget lorem duis at ac gravida amet."
      />
      <BlogItem
        imageSrc={blogImage3}
        title="Forest"
        description="Et fusce placerat ipsum dignissim ullamcorper. Sed ullamcorper felis egestas augue. Nibh egestas massa nulla lectus. Adipiscing accumsan semper."
      />
      <BlogItem
        imageSrc={blogImage2}
        title="Water"
        description="Morbi neque enim enim faucibus ac vestibulum nisl eu. Purus augue convallis tempus odio auctor purus."
      />
    </div>
  );
}

export default MegaBlogMenu;
