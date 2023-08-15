import React from 'react';

function LinkBar() {
  return (
    <div className="link-bar flex w-[1440px] px-[104px] py-6 justify-between items-start">
      <span className="link-text">
        © 2023 Loremipsum GmbH
      </span>

      <div className="flex gap-4">
        <a href="#" className="link-text">
          Impressum
        </a>
        <a href="#" className="link-text">
          Datenschutz
        </a>
      </div>

      <style jsx>{`
        .link-text {
          color: var(--neutrals-gray-900, #4B4B4B);
          font-family: Inter;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
        }

        @media (max-width: 390px) {
          .link-bar {
            width: 390px;
            padding: 24px 16px;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}

export default LinkBar;
