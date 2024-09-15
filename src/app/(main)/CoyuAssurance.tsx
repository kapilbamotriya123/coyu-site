/* eslint-disable react/no-unknown-property */
'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dm_Serif_Display } from '../ui/font';
import assurityicon from '../ui/assets/assurity-icon.svg';
import Image from 'next/image';
import bg_patters from '../ui/assets/path-elements.svg';

const CoyuAssuranceSlider = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '20px',
      arrows: false,
      customPaging: function (i: number) {
         return (
            <div className="h-2 w-2 rounded-full bg-gray-300 transition-all duration-300 ease-in-out"></div>
         );
      },
      appendDots: (dots: React.ReactNode) => (
         <div>
            <ul className="flex scale-50 justify-center gap-1"> {dots} </ul>
         </div>
      ),
   };

   const slides = [
      {
         index: 0,
         title: 'Premium quality',
         description:
            'Each product is tested in store for premium fabric and exceptional craftsmanship.',
      },
      {
         index: 1,
         title: 'Premium quality',
         description:
            'Each product is tested in store for premium fabric and exceptional craftsmanship.',
      },
      {
         index: 2,
         title: 'Premium quality',
         description:
            'Each product is tested in store for premium fabric and exceptional craftsmanship.',
      },
   ];

   return (
      <div className="w-full max-w-md px-3 pt-7 space-y-3">
         <div className="flex justify-between">
            <div>
               <h3 className="text-sm font-bold leading-3 tracking-wide">
                  COYU ASSURANCE
               </h3>
               <span className="text-xs leading-3">
                  Premium quality | Perfect fit | 24x7 Support
               </span>
            </div>
         </div>
         <Slider {...settings}>
            {slides.map((slide, index) => (
               <SliderPreview key={index} {...slide} />
            ))}
         </Slider>
         <style jsx global>{`
            .slick-dots li.slick-active div {
               width: 24px;
               background-color: #000000;
               border-radius: 4px;
            }
         `}</style>
      </div>
   );
};

export default CoyuAssuranceSlider;

interface SliderPreviewProps {
   title: string;
   description: string;
   index: number;
}

const SliderPreview = ({ title, description, index }: SliderPreviewProps) => {
   return (
      <div
         key={index}
         className="relative mx-1 mb-1 -translate-x-6 overflow-hidden"
      >
         <div className="overflow-hidden">
            <Image
               src={bg_patters}
               alt=""
               width={100}
               className="absolute -left-10 -top-5 z-50 rotate-45"
            />
            <Image
               src={bg_patters}
               alt=""
               width={100}
               className="absolute -bottom-12 -right-5 z-30 rotate-45"
            />
         </div>
         <div className="flex h-fit w-full items-center gap-3 rounded-lg bg-blue-background p-4">
            <div className="rounded-lg bg-white">
               <Image src={assurityicon} alt="" width={38} className="w-9" />
            </div>
            <div>
               <h3 className={`${dm_Serif_Display.className} text-xl`}>
                  {title}
               </h3>
               <p className="text-xs text-gray-500">{description}</p>
            </div>
         </div>
      </div>
   );
};
