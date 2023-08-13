import React from 'react';

function LinkBar() {
  return (
    <div className="flex w-[1440px] px-[104px] py-6 justify-between items-start">
      <span className="text-[#4B4B4B] font-inter text-xs font-normal leading-4">
        © 2023 Loremipsum GmbH
      </span>

      <div className="flex gap-4">
        <a href="#" className="text-[#4B4B4B] font-inter text-xs font-normal leading-4">
          Impressum
        </a>
        <a href="#" className="text-[#4B4B4B] font-inter text-xs font-normal leading-4">
          Datenschutz
        </a>
      </div>
    </div>
  );
}

export default LinkBar;
