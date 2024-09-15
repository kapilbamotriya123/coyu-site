import Image from 'next/image';

import grid_img_1 from '../ui/assets/categories-grid/image.jpg';
import grid_img_2 from '../ui/assets/categories-grid/image2.jpg';
import grid_img_3 from '../ui/assets/categories-grid/image3.jpg';
import grid_img_4 from '../ui/assets/categories-grid/image4.jpg';
import grid_img_5 from '../ui/assets/categories-grid/image5.svg';
import grid_img_6 from '../ui/assets/categories-grid/image6.jpg';

import arrow from '../ui/assets/arrow.svg';

const ShopByCategories = () => {
   return (
      <div className="px-3 pt-7">
         <div className="px-3 pt-7">
            <div className="mb-2 flex justify-between">
               <div>
                  <h3 className="text-sm font-bold leading-3 tracking-wide">
                     SHOP BY CATEGORIES
                  </h3>
               </div>
               <div className="flex gap-3 self-end text-xs text-coyu-blue">
                  VIEW ALL
                  <Image src={arrow} alt={''} />
               </div>
            </div>
         </div>
         <div className="grid grid-cols-2 gap-1">
            <div className="relative col-span-1 row-span-2 h-fit rounded-md">
               <Image
                  src={grid_img_1}
                  alt="Image 1"
                  objectFit="cover"
                  className="h-full w-full object-cover"
               />
               <div className="absolute inset-0 z-20 h-full w-full bg-gray-500 opacity-20" />

               <div className="absolute top-[80px] z-30 w-full space-y-1">
                  <span className="ml-3 font-semibold text-white">Topwear</span>
                  <hr className="w-full border-2 fill-white text-white" />
               </div>

               <span className="absolute bottom-2 ml-3 font-semibold text-white z-30">
                  Bottomwear
               </span>
            </div>
            <div className="relative col-span-1 row-span-2 h-fit overflow-hidden rounded-md">
               <Image
                  src={grid_img_2}
                  alt="Image 2"
                  objectFit="cover"
                  className="h-full w-full object-cover"
               />
               <div className="absolute inset-0 z-20 h-full w-full bg-gray-500 opacity-20" />
               <span className="absolute bottom-2 ml-3 font-semibold text-white z-30">
                  Dresses
               </span>
            </div>
            <div className="relative col-span-1 h-fit rounded-md">
               <Image
                  src={grid_img_3}
                  alt="Image 2"
                  objectFit="cover"
                  className="h-full w-full object-cover"
               />
               <div className="absolute inset-0 z-20 h-full w-full bg-gray-500 opacity-20" />
               <span className="absolute bottom-2 ml-3 font-semibold text-white z-30">
                  Co-ord Sets
               </span>
            </div>
            <div className="relative col-span-1 h-fit rounded-md">
               <Image
                  src={grid_img_4}
                  alt="Image 2"
                  objectFit="cover"
                  className="h-full w-full object-cover"
               />
               <div className="absolute inset-0 z-20 h-full w-full bg-gray-500 opacity-20" />
               <div className="absolute top-[120px] w-full space-y-1 z-30">
                  <span className="ml-3 font-semibold text-white ">Jackets</span>
                  <hr className="w-full border-2 fill-white text-white" />
               </div>
               <div className="absolute inset-0 z-20 h-full w-full bg-gray-500 opacity-20" />
               <span className="absolute bottom-2 ml-3 font-semibold text-white z-30">
                  Jeans
               </span>
            </div>

            <div className="relative col-span-1 h-fit overflow-hidden rounded-md">
               <Image
                  src={grid_img_5}
                  alt="Image 2"
                  objectFit="cover"
                  className="h-full w-full object-cover"
               />
               <div className="absolute inset-0 z-20 h-full w-full bg-gray-500 opacity-20" />
               <span className="absolute bottom-2 ml-3 font-semibold text-white z-30">
                  Bags
               </span>
            </div>
            <div className="relative col-span-1 overflow-hidden rounded-md">
               <Image
                  src={grid_img_6}
                  alt="Image 2"
                  objectFit="cover"
                  className="h-full w-full object-cover"
               />
               <div className="absolute inset-0 z-20 h-full w-full bg-gray-500 opacity-20" />
               <span className="absolute bottom-2 ml-3 font-semibold text-white z-30">
                  Jwellery
               </span>
            </div>
         </div>
      </div>
   );
};
export default ShopByCategories;
