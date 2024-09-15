import Image from 'next/image';
import arrow from '../ui/assets/arrow.svg';

import grid_img_1 from '../ui/assets/bestsellers/image1.jpg';
import grid_img_2 from '../ui/assets/bestsellers/image2.jpg';
import grid_img_3 from '../ui/assets/bestsellers/image3.jpg';
import grid_img_4 from '../ui/assets/bestsellers/image4.jpg';
import grid_img_5 from '../ui/assets/bestsellers/image5.jpg';
import grid_img_6 from '../ui/assets/bestsellers/image6.jpg';
import grid_img_7 from '../ui/assets/bestsellers/image7.jpg';

const BestSellers = () => {
   return (
      <div className="overflow-hidden px-3 pt-7">
         <div className="mb-2 flex justify-between">
            <div>
               <h3 className="text-sm font-bold leading-3 tracking-wide">
                  BESTSELLERS
               </h3>
            </div>
            <div className="flex gap-3 self-end text-xs text-coyu-blue">
               VIEW ALL
               <Image src={arrow} alt={''} />
            </div>
         </div>
         <div className="grid w-[125%] -translate-x-5 grid-cols-3 gap-1">
            <div className="col-span-1 h-56">
               <Image
                  src={grid_img_1}
                  alt="Image 1"
                  objectFit="cover"
                  className="h-full w-full rounded-md object-cover"
               />
            </div>
            <div className="col-span-1 h-56">
               <Image
                  src={grid_img_2}
                  alt="Image 2"
                  objectFit="cover"
                  className="h-full w-full rounded-md object-cover"
               />
            </div>
            <div className="col-span-1 h-56">
               <Image
                  src={grid_img_3}
                  alt="Image 3"
                  objectFit="cover"
                  className="h-full w-full rounded-md object-cover"
               />
            </div>
         </div>
         <div className="mt-1 grid w-[160%] -translate-x-32 grid-cols-4 gap-1">
            <div className="col-span-1 h-56">
               <Image
                  src={grid_img_4}
                  alt="Image 4"
                  objectFit="cover"
                  className="h-full w-full rounded-md object-cover"
               />
            </div>
            <div className="col-span-1 h-56">
               <Image
                  src={grid_img_5}
                  alt="Image 5"
                  objectFit="cover"
                  className="h-full w-full rounded-md object-cover"
               />
            </div>
            <div className="col-span-1 h-56">
               <Image
                  src={grid_img_6}
                  alt="Image 6"
                  objectFit="cover"
                  className="h-full w-full rounded-md object-cover"
               />
            </div>
            <div className="col-span-1 h-56">
               <Image
                  src={grid_img_7}
                  alt="Image 7"
                  objectFit="cover"
                  className="h-full w-full rounded-md object-cover"
               />
            </div>
         </div>
      </div>
   );
};
export default BestSellers;
