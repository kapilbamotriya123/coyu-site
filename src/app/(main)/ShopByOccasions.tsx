'use client';

/* eslint-disable react/no-unknown-property */
import Image from 'next/image';

import sun from '../ui/assets/occasions-button/sun.svg';
import party from '../ui/assets/occasions-button/party.svg';
import vacation from '../ui/assets/occasions-button/vacation.svg';
import festive from '../ui/assets/occasions-button/festive.svg';
import arrow from '../ui/assets/arrow.svg';

//this are all the images import
import grid_image1 from '../ui/assets/occasions-button/image1.jpg';
import grid_image2 from '../ui/assets/occasions-button/image2.jpg';
import grid_image3 from '../ui/assets/occasions-button/image3.jpg';
import grid_image4 from '../ui/assets/occasions-button/image4.jpg';
import grid_image5 from '../ui/assets/occasions-button/image5.jpg';
import grid_image6 from '../ui/assets/occasions-button/image6.jpg';
import grid_image7 from '../ui/assets/occasions-button/image7.jpg';
import { dm_Serif_Display } from '../ui/font';
import { useState } from 'react';

const ShopByOccasions = () => {

   const [selected, setSelected] = useState('Day-out');

   return (
      <div className="space-y-3 pt-7">
         <h3 className="px-3 text-sm font-bold uppercase leading-3 tracking-wide">
            Shop by occasions
         </h3>
         <div className="flex items-center justify-between px-3">
            <button onClick={() => setSelected('Day-out')}
               className={`flex gap-1 rounded-sm px-3 py-2 text-xs ${selected === 'Day-out' ? `bg-coyu-blue text-white` : `border border-black text-black`} `}
            >
               <Image
                  src={sun}
                  alt="Day-out"
                  className={`${selected === 'Day-out' ? '' : `invert`}`}
               />
               Day-out
            </button>
            <button onClick={() => setSelected('Party')}
               className={`flex gap-1 rounded-sm px-3 py-2 text-xs ${selected === 'Party' ? `bg-coyu-blue text-white` : `border border-black text-black`} `}
            >
               <Image
                  src={party}
                  alt="Party"
                  className={`${selected === 'Party' && `invert`}`}
               />
               Party
            </button>
            <button onClick={() => setSelected('Vacation')}
               className={`flex gap-1 rounded-sm px-3 py-2 text-xs ${selected === 'Vacation' ? `bg-coyu-blue text-white` : `border border-black text-black`} `}
            >
               <Image
                  src={vacation}
                  alt="Vacation"
                  className={`${selected === 'Vacation' && `invert`}`}
               />
               Vacation
            </button>
            <button onClick={() => setSelected('Festive')}
               className={`flex gap-1 rounded-sm px-3 py-2 text-xs ${selected === 'Festive' ? `bg-coyu-blue text-white` : `border border-black text-black`} `}
            >
               <Image
                  src={festive}
                  alt="Festive"
                  className={`${selected === 'Festive' && `invert`}`}
               />
               Festive
            </button>
         </div>
         <div className="scrollbar-hide overflow-x-auto">
            <div className="grid w-[150%] grid-cols-5 grid-rows-2 gap-2 p-2">
               <div className="relative col-span-2 row-span-2 rounded-md">
                  <Image
                     src={grid_image1}
                     alt="Image 1"
                     objectFit="cover"
                     className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 z-20 h-full w-full bg-gray-700 opacity-20" />
                  <div className="gap leading-2 absolute bottom-3 z-50 flex w-full items-end justify-between px-3 text-xs font-light tracking-widest text-white">
                     <p className="flex flex-col gap-1">
                        OCCASION
                        <span
                           className={`${dm_Serif_Display.className} text-2xl leading-5`}
                        >
                           {selected}
                        </span>
                     </p>
                     <div className="h-fit rounded-sm bg-white p-2">
                        <Image src={arrow} alt={''} />
                     </div>
                  </div>
               </div>

               <div className="rounded-md">
                  <Image
                     src={grid_image2}
                     alt="Image 2"
                     objectFit="cover"
                     className="h-full w-full object-cover"
                  />
               </div>

               <div className="col-span-1 rounded-md">
                  <Image
                     src={grid_image3}
                     alt="Image 3"
                     objectFit="cover"
                     className="h-full w-full object-cover"
                  />
               </div>
               <div className="col-span-1 rounded-md">
                  <Image
                     src={grid_image4}
                     alt="Image 4"
                     objectFit="cover"
                     className="h-full w-full object-cover"
                  />
               </div>

               <div className="col-span-1 row-span-1 rounded-md">
                  <Image
                     src={grid_image5}
                     alt="Image 5"
                     objectFit="cover"
                     className="h-full w-full object-cover"
                  />
               </div>
               <div className="col-span-1 row-span-1 rounded-md">
                  <Image
                     src={grid_image6}
                     alt="Image 6"
                     objectFit="cover"
                     className="h-full w-full object-cover"
                  />
               </div>
               <div className="col-span-1 row-span-1 rounded-md">
                  <Image
                     src={grid_image7}
                     alt="Image 7"
                     objectFit="cover"
                     className="h-full w-full object-cover"
                  />
               </div>
            </div>
            <style jsx>{`
               .scrollbar-hide::-webkit-scrollbar {
                  display: none;
               }
               .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
               }
            `}</style>
         </div>
         <div className="mx-3 flex justify-center gap-3 rounded-md bg-blue-background p-3 tracking-wider text-coyu-blue">
            DAY-OUT COLLECTION
            <Image src={arrow} alt={''} />
         </div>
      </div>
   );
};

export default ShopByOccasions;
