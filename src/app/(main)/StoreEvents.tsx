'use client';

/* eslint-disable react/no-unknown-property */
import Image from 'next/image';
import button_icon from '../ui/assets/our stores/button-icon.svg';

import storeEvent1 from '../ui/assets/storeEvents/store1.jpg';
import storeEvent2 from '../ui/assets/storeEvents/store2.jpg';
import arrow from '../ui/assets/arrow.svg';

const StoreEvents = () => {
   return (
      <div className="space-y-3 overflow-hidden px-3 pt-7">
         <h3 className="text-sm font-bold leading-3 tracking-wide">
            STORE EVENTS
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
               <div className="h-fit shadow-md rounded-lg  overflow-hidden">
                  <Image
                     src={storeEvent1}
                     alt="Store 1"
                     objectFit="cover"
                     className="h-full w-full object-cover"
                  />
                  <div className="px-2 py-3">
                     <div className="mb-1 flex justify-between">
                        <div>
                           <h3 className="text-xs font-semibold leading-3 tracking-wide">
                              Ambience Mall, Vasant Kunj
                           </h3>
                        </div>

                     </div>
                     <p className="text-xs leading-5 text-gray-700">
                     Collection drop: Evening Glamour
                        <br />
                        26-Aug-2024
                     </p>
                     <div className="flex gap-1 self-end text-xs text-coyu-blue mt-2">
                           BOOK A SLOT
                           <Image src={arrow} alt={''} />
                        </div>
                  </div>
               </div>
               <div className="shadow-md rounded-lg overflow-hidden">
                  <Image
                     src={storeEvent2}
                     alt="Store 2"
                     objectFit="cover"
                     className=" object-cover "
                  />
                  <div className="px-2 py-3">
                     <div className="mb-1 flex justify-between">
                        <div>
                           <h3 className="text-xs font-semibold leading-3 tracking-wide">
                           Ambience Mall, Vasant Kunj
                           </h3>
                        </div>
                     </div>
                     <p className="text-xs leading-5 text-gray-700">
                     Independence day edit
                        <br />
                        26-Aug-2024
                     </p>
                     <div className="flex gap-1 self-end text-xs text-coyu-blue mt-2">
                           BOOK A SLOT
                           <Image src={arrow} alt={''} />
                        </div>
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

export default StoreEvents;
