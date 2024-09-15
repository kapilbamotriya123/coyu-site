'use client';

/* eslint-disable react/no-unknown-property */
import Image from 'next/image';
import arrow from '../ui/assets/arrow.svg';

import grid_img_1 from '../ui/assets/instagram/img1.jpg';
import grid_img_2 from '../ui/assets/instagram/img2.jpg';
import grid_img_3 from '../ui/assets/instagram/img3.jpg';
import grid_img_4 from '../ui/assets/instagram/img4.jpg';
import grid_img_5 from '../ui/assets/instagram/img5.jpg';
import grid_img_6 from '../ui/assets/instagram/img6.jpg';
import grid_img_7 from '../ui/assets/instagram/img7.jpg';
import grid_img_8 from '../ui/assets/instagram/img8.jpg';

const Instagram = () => {
   return (
      <div className="space-y-3 overflow-hidden  pt-7">
         <div className="mb-2 flex justify-between px-3">
            <div>
               <h3 className="text-sm font-bold uppercase leading-3 tracking-wide">
                  Our InstagrAm @Coyu
               </h3>
            </div>
            <div className="flex gap-3 self-end text-xs text-coyu-blue">
               INSTAGRAM
               <Image src={arrow} alt={''} />
            </div>
         </div>
         <div className="scrollbar-hide overflow-x-auto">
            <div className="grid w-[150%] grid-cols-4 grid-rows-2 gap-1">
               <div  className='shadow-sm'>
                  <Image
                     src={grid_img_1}
                     alt="Image 1"
                     objectFit="cover"
                     className="h-full w-full rounded-md object-cover"
                  />
               </div>
               <div className='shadow-sm'>
                  <Image
                     src={grid_img_2}
                     alt="Image 2"
                     objectFit="cover"
                     className="h-full w-full rounded-md object-cover"
                  />
               </div>
               <div className='shadow-sm'>
                  <Image
                     src={grid_img_3}
                     alt="Image 3"
                     objectFit="cover"
                     className="h-full w-full rounded-md object-cover"
                  />
               </div>
               <div className='shadow-sm'>
                  <Image
                     src={grid_img_4}
                     alt="Image 4"
                     objectFit="cover"
                     className="h-full w-full rounded-md object-cover"
                  />
               </div>
               <div className='shadow-sm'>
                  <Image
                     src={grid_img_5}
                     alt="Image 5"
                     objectFit="cover"
                     className="h-full w-full rounded-md object-cover"
                  />
               </div>
               <div className='shadow-sm'>
                  <Image
                     src={grid_img_6}
                     alt="Image 6"
                     objectFit="cover"
                     className="h-full w-full rounded-md object-cover"
                  />
               </div>
               <div className='shadow-sm'>
                  <Image
                     src={grid_img_7}
                     alt="Image 7"
                     objectFit="cover"
                     className="h-full w-full rounded-md object-cover"
                  />
               </div>
               <div className='shadow-sm'>
                  <Image
                     src={grid_img_8}
                     alt="Image 8"
                     objectFit="cover"
                     className="h-full w-full rounded-md object-cover"
                  />
               </div>
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
   );
};

export default Instagram;
