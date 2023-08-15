import React from 'react';
import Image from 'next/image';
import iconGermany from '/public/Heel-Produktdetail-Badges_20220519_GERMANY 1.svg';
import iconWorldwide from '/public/Heel-Produktdetail-Badges_20220519_WORLDWIDE 1.svg';
import iconScience from '/public/Heel-Produktdetail-Badges_20220519_SCIENCE 1.svg';

function IconTitle({ iconSrc, title, description }) {
  return (
    <div className="icon-card flex flex-col h-[192px] p-10 items-center justify-center gap-4 bg-[#F2F2F2] rounded-md flex-1">
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
    <div className="icon-section flex w-[1440px] px-[104px] py-10 items-start gap-2 mb-[10px]">
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

      <style jsx>{`
        @media (max-width: 390px) {
          .icon-section {
            flex-direction: column;
            align-items: flex-start;
            width: 390px;
            padding: 40px 16px;
            gap: 8px;
          }

          .icon-card {
            display: flex;
            height: 192px;
            padding: 40px;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            align-self: stretch;
          }
        }
      `}</style>
    </div>
  );
}

export default IconTitleSection;
