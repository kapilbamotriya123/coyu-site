import Image from 'next/image';
import arrow from '../ui/assets/arrow.svg';
import grid_img_1 from '../ui/assets/fresh-grid-image-1.jpg';
import grid_img_2 from '../ui/assets/fresh-grid-image-2.jpg';
import grid_img_3 from '../ui/assets/fresh-grid-image-3.jpg';
import grid_img_4 from '../ui/assets/fresh-grid-image-4.jpg';
import grid_img_5 from '../ui/assets/fresh-grid-image-5.jpg';
import grid_img_6 from '../ui/assets/fresh-grid-image-6.jpg';
import { dm_Serif_Display } from '../ui/font';

const FreshDrops = () => {
   return (
      <div className="px-3 pt-7">
         <div className="flex justify-between">
            <div>
               <p className="text-sm font-bold leading-3 tracking-wide">
                  FRESH DROPS OF THE WEEK
               </p>
               <span className="text-xs font-light leading-3">
                  300+ styles dropped
               </span>
            </div>
            <div className="flex gap-3 self-end text-xs text-coyu-blue">
               VIEW ALL
               <Image src={arrow} alt={''} />
            </div>
         </div>
         <div className="mt-3 grid grid-cols-3 grid-rows-3 gap-1">
            <div className="relative col-span-2 row-span-2  overflow-hidden">
               <div className="absolute inset-0 z-20 h-full w-full  rounded-md  bg-gray-700 opacity-35"></div>
               <Image
                  src={grid_img_1}
                  className="absolute inset-0 z-10 h-full w-full rounded-md object-cover"
                  alt="Large Image"
               />
               <div className="gap leading-2 absolute bottom-3 z-50 w-full px-3 items-end flex justify-between text-xs font-light tracking-widest text-white">
                  <p className="flex flex-col">
                     NEW BRAND
                     <span
                        className={`${dm_Serif_Display.className} text-2xl leading-5`}
                     >
                        Stavoss
                     </span>
                  </p>
                  <div className="h-fit bg-white p-2 rounded-sm ">
                     <Image src={arrow} alt={''}  />
                  </div>
               </div>
            </div>
            <div className="relative h-full">
               <Image
                  src={grid_img_2}
                  className="h-full w-full rounded-lg object-cover"
                  alt="Small Image 1"
               />
            </div>
            <div className="relative h-full">
               <Image
                  src={grid_img_3}
                  className="h-full w-full rounded-lg object-cover"
                  alt="Small Image 2"
               />
            </div>
            <div className="relative">
               <Image
                  src={grid_img_4}
                  className="h-[185px] w-full rounded-lg object-cover"
                  alt="Small Image 3"
               />
            </div>
            <div className="relative">
               <Image
                  src={grid_img_5}
                  className="h-[185px] w-full rounded-lg object-cover"
                  alt="Small Image 4"
               />
            </div>
            <div className="relative">
               <Image
                  src={grid_img_6}
                  className="h-[185px] w-full rounded-lg object-cover"
                  alt="Small Image 5"
               />
            </div>
         </div>
      </div>
   );
};

export default FreshDrops;
