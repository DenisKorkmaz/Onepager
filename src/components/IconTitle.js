import React from 'react';
import Image from 'next/image';
import iconGermany from '/Users/deniskorkmaz/Desktop/onepager/public/Heel-Produktdetail-Badges_20220519_GERMANY 1.svg';
import iconWorldwide from '/Users/deniskorkmaz/Desktop/onepager/public/Heel-Produktdetail-Badges_20220519_WORLDWIDE 1.svg';
import iconScience from '/Users/deniskorkmaz/Desktop/onepager/public/Heel-Produktdetail-Badges_20220519_SCIENCE 1.svg';

function IconTitle({ iconSrc, title, description }) {
  return (
    <div className="flex flex-col h-[192px] p-10 items-center justify-center gap-4 bg-[#F2F2F2] rounded-md flex-1">
      <Image src={iconSrc} alt="Icon" width={24} height={24} className="flex-shrink-0" />
      <button className="text-[#4B4B4B] font-inter font-bold text-sm leading-6">
        {title}
      </button>
      <p className="text-[#4B4B4B] font-inter text-sm font-normal leading-6 text-center">
        {description}
      </p>
    </div>
  );
}

function IconTitleSection() {
  return (
    <div className="flex w-[1440px] px-[104px] py-10 items-start gap-2 mb-[10px]">
      <IconTitle 
        iconSrc={iconGermany} 
        title="Highlight A" 
        description="Eros elit duis arcu et risus lorem quis rutrum libero. At et diam orci sed leo vestibulum."
      />
      <IconTitle 
        iconSrc={iconWorldwide} 
        title="Highlight B" 
        description="Felis nunc rutrum ullamcorper cursus felis risus est sapien faucibus. Gravida aliquam."
      />
      <IconTitle 
        iconSrc={iconScience} 
        title="Highlight C" 
        description="Pulvinar diam pellentesque facilisi elementum pellentesque. Commodo leo fermentum leo."
      />
    </div>
  );
}

export default IconTitleSection;
