'use client';

import heroImage from '../ui/assets/hero_Image.jpg';
import { ArrowRight } from 'lucide-react';
import sliderdots from '../ui/assets/slider-dots.svg';
import delivery_truck_wrapper from '../ui/assets/deliver-truck-wrapper.svg';
import delivery from '../ui/assets/Delivery.svg';
import bg_patters from '../ui/assets/path-elements.svg';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dm_Serif_Display } from '../ui/font';

import Image from 'next/image';

const HeroSectionSlider = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '10px',
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
      <div className="w-full max-w-md space-y-3 px-3 pt-7">
         <Slider {...settings}>
            <HeroSliderPreview />
            <HeroSliderPreview />
            <HeroSliderPreview />
            <HeroSliderPreview />
         </Slider>
         <style jsx global>{`
            .slick-dots li.slick-active div {
               width: 24px;
               background-color: #000000;
               border-radius: 4px;
            }
         `}</style>
         <br className="my-3" />
         <div className="relative overflow-hidden flex w-full items-center gap-3 bg-blue-background p-3">
            
         <div >
            <Image
               src={bg_patters}
               alt=""
               width={100}
               className="absolute -left-10 -top-15 z-10 rotate-45"
            />
            <Image
               src={bg_patters}
               alt=""
               width={100}
               className="absolute -bottom-12 -right-5 z-30 rotate-45"
            />
         </div>
            <div className="bg-red relative z-10 p-2">
               <Image
                  src={delivery_truck_wrapper}
                  alt=""
                  objectFit="cover"
                  sizes="100%"
                  className="absolute inset-0 z-20"
               />
               <Image
                  src={delivery}
                  alt=""
                  width={20}
                  className="relative z-30"
               />
            </div>

            <div className="relative overflow-hidden text-sm leading-4 tracking-wide text-black">
               90 MINUTES EXPRESS DELIVERY

               <br />
               <span className="text-xs text-gray-400">*In Delhi-NCR</span>
            </div>
         </div>
      </div>
   );
};

export default HeroSectionSlider;

const HeroSliderPreview = () => {
   return (
      <div className="scale flex flex-col items-center gap-5 px-3 pt-7">
         <div className="relative flex h-[35rem] w-full items-end justify-center overflow-hidden rounded-full shadow-lg">
            <div className="z-10 mb-10 flex flex-col items-center text-center">
               <p>
                  <span className="align-middle text-[10px] font-extralight leading-5 tracking-widest text-white">
                     NEW COLLECTION
                  </span>
                  <br />
                  <span
                     className={`${dm_Serif_Display.className} track text-2xl leading-5 text-white`}
                  >
                     Winter Edit
                  </span>
               </p>
               <div className="z-10 mt-1 w-fit rounded-sm bg-white p-1">
                  <ArrowRight size={24} className="text-coyu-blue" />
               </div>
            </div>
            <div className="absolute inset-0">
               <Image
                  src={heroImage}
                  layout="fill"
                  objectFit="cover"
                  alt={''}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
         </div>
      </div>
   );
};
