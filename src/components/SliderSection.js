import React, { useState } from 'react';
import Image from 'next/image';

import img1 from '/Users/deniskorkmaz/Desktop/onepager/public/img (1).png';
import img2 from '/Users/deniskorkmaz/Desktop/onepager/public/img (2).png';
import img3 from '/Users/deniskorkmaz/Desktop/onepager/public/img (3).png';
import img4 from '/Users/deniskorkmaz/Desktop/onepager/public/img (4).png';
import buttonSVG from '/Users/deniskorkmaz/Desktop/onepager/public/button (1).svg';

function SliderSection() {
  const images = [img1, img2, img3, img4, img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length / 2));
  };

  const progressPercentage = ((currentIndex + 1) / (images.length / 2)) * 100;

  return (
    <div className="flex flex-col w-[1440px] px-[104px] pt-10 items-start gap-4">
      {/* Buttons */}
      <div className="flex gap-2">
        {['Show All', 'City', 'Forest', 'Water'].map((label) => (
          <button 
            key={label}
            className={`flex items-center justify-center h-10 px-4 py-2 text-sm font-bold leading-6 rounded-full bg-[#F2F2F2] text-[#4B4B4B] border border-transparent
              ${label === activeButton ? 'bg-[#F2F2F2] text-[#4B4B4B] border-[#4B4B4B]' : 'hover:bg-[#A0A0A0] hover:text-[#4B4B4B]'}
            `}
            onClick={() => setActiveButton(label === activeButton ? null : label)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="flex overflow-x-hidden relative w-full h-[393px] overflow-hidden ">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${(294.5 + 18) * currentIndex}px)` }}>
          {images.map((imgSrc, index) => (
            <div key={index} className="relative w-[294.5px] h-[393px] overflow-hidden rounded-lg mr-[18px] last:mr-0">
              <Image src={imgSrc} alt={`Carousel Image ${index + 1}`} width={294.5} height={393} layout="responsive" className="rounded-lg" />
              <button 
                className="absolute left-[75px] bottom-[36.333px] flex items-center justify-center h-12 px-6 bg-white rounded-full"
              >
                Lorem Ipsum
              </button>
            </div>
          ))}
        </div>
        <button 
          className="absolute right-[10px] bottom-[176.333px] flex items-center justify-center w-10 h-10 rounded-full bg-[#4B4B4B]"
          onClick={handleNextImage}
        >
          <Image src={buttonSVG} alt="Next" width={40} height={40} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="relative w-[1232px] h-[2px] mb-[40px] mx-auto bg-[#F2F2F2]">
        <div className="absolute left-0 top-0 h-full bg-[#4B4B4B]" style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
}

export default SliderSection;
