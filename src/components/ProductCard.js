import React from 'react';
import Image from 'next/image';
import ProductImage from '../../public/img.png';
import ButtonSVG from '../../public/button.svg'; 

export default function ProductCard({ h3Text, pText, bgColor }) {
    return (
        <div 
            style={{ backgroundColor: bgColor }} 
            className="product-card flex flex-col items-start flex-shrink-0 rounded-lg p-4 w-[398.667px] h-[590.67px]"
        >
            <Image src={ProductImage} alt="Product" layout="responsive" />

            <h3 className="text-white font-inter font-bold text-xl w-full mb-2">{h3Text}</h3>

            <p className="font-inter font-thin leading-6 text-white">{pText}</p>

            <button className="flex justify-center items-center mt-6 rounded-full bg-white p-0 border-0 focus:outline-none focus:border-none focus:ring-0">
                <Image src={ButtonSVG} alt="Button" width={40} height={40} className="p-0 m-0" />
            </button>

            <style jsx>{`
                @media (max-width: 390px) {
                    .product-card {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        align-self: stretch;
                        border-radius: 8px;
                        background: url(${ProductImage}), lightgray 50% / cover no-repeat, ${bgColor};
                    }

                    .product-card h3,
                    .product-card p,
                    .product-card button {
                        display: none; // Versteckt Text und Button
                    }
                }
            `}</style>
        </div>
    );
}
