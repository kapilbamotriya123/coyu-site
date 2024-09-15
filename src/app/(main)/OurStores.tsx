'use client';

/* eslint-disable react/no-unknown-property */
import Image from 'next/image';
import button_icon from '../ui/assets/our stores/button-icon.svg';

import store1 from '../ui/assets/our stores/store1.jpg';
import store2 from '../ui/assets/our stores/store2.jpg';
import arrow from '../ui/assets/arrow.svg';

const OurStore = () => {
   return (
      <div className="space-y-3 overflow-hidden px-3 pt-7">
         <h3 className="text-sm font-bold leading-3 tracking-wide">
            Our Stores
         </h3>
         <div className="flex items-center justify-start gap-3">
            <button className="flex items-center gap-1 rounded-sm bg-coyu-blue px-3 py-2 text-xs text-white">
               <Image src={button_icon} alt="location" />
               Delhi
            </button>
            <button className="flex items-center gap-1 rounded-sm border border-black px-3 py-2 text-xs text-black">
               <Image src={button_icon} alt="location" className="invert" />
               Gurgaon
            </button>
         </div>

         <div className="scrollbar-hide overflow-x-auto">
            <div className="grid w-[150%] grid-cols-2 gap-2 py-3">
               <div className="h-fit shadow-md">
                  <Image
                     src={store1}
                     alt="Store 1"
                     objectFit="cover"
                     className="h-full w-full object-cover"
                  />
                  <div className="px-2 py-3">
                     <div className="mb-1 flex justify-between">
                        <div>
                           <h3 className="text-xs font-semibold leading-3 tracking-wide">
                              Ambience Mall
                           </h3>
                        </div>
                        <div className="flex gap-1 self-end text-xs text-coyu-blue">
                           VIEW DETAILS
                           <Image src={arrow} alt={''} />
                        </div>
                     </div>
                     <p className="text-xs leading-5 text-gray-700">
                        Ambience Island, Vasant Kunj, Delhi
                        <br />
                        10:00 AM to 09:00 PM
                     </p>
                  </div>
               </div>
               <div className="h-fit shadow-md">
                  <Image
                     src={store2}
                     alt="Store 2"
                     objectFit="cover"
                     className="h-full w-full object-cover"
                  />
                  <div className="px-2 py-3">
                     <div className="mb-1 flex justify-between">
                        <div>
                           <h3 className="text-xs font-semibold leading-3 tracking-wide">
                              Cyber Hub
                           </h3>
                        </div>
                        <div className="flex gap-1 self-end text-xs text-coyu-blue">
                           VIEW DETAILS
                           <Image src={arrow} alt={''} />
                        </div>
                     </div>
                     <p className="text-xs leading-5 text-gray-700">
                        DLF Cyber City, Gurgaon
                        <br />
                        10:00 AM to 09:00 PM
                     </p>
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
      </div>
   );
};

export default OurStore;
