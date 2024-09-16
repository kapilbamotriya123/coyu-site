'use client';

import { useEffect, useState } from 'react';
import path_cruve from '../ui/assets/path-elements-gray.svg';
import Image from 'next/image';

const NewDrops = () => {
   const [time, setTime] = useState({
      days: 3,
      hours: 15,
      minutes: 40,
      seconds: 0,
   });

   useEffect(() => {
      const countdown = setInterval(() => {
         setTime((prevTime) => {
            let { days, hours, minutes, seconds } = prevTime;

            if (seconds > 0) {
               seconds--;
            } else if (minutes > 0) {
               minutes--;
               seconds = 59;
            } else if (hours > 0) {
               hours--;
               minutes = 59;
               seconds = 59;
            } else if (days > 0) {
               days--;
               hours = 23;
               minutes = 59;
               seconds = 59;
            } else {
               clearInterval(countdown);
            }

            return { days, hours, minutes, seconds };
         });
      }, 1000);

      return () => clearInterval(countdown);
   }, []);

   return (
      <div className="px-3 pt-7">
         <h3 className="text-sm font-bold leading-3 tracking-wide">
            GET NEW DROPS & OFFERS ON WHATSAPP
         </h3>
         <div className="relative mt-3 flex flex-col bg-gray-100 p-3 gap-3 rounded overflow-hidden">
            <Image src={path_cruve} alt="" className="absolute -top-10 -left-5 z-50 rotate-45" />
            <Image src={path_cruve} alt="" className="absolute -bottom-8 -right-4 z-50 rotate-45" />
            <div className="flex items-center justify-between">
               <p className="text-xs">NEXT DROP IN</p>
               <p className="flex gap-3">
                  <span className="flex flex-col items-center">
                     <span className="text-base font-bold">
                        {String(time.days).padStart(2, '0')}
                     </span>
                     <span className="text-[9px]">DAYS</span>
                  </span>
                  <span className="flex flex-col items-center">
                     <span className="text-base font-bold">
                        {String(time.hours).padStart(2, '0')}
                     </span>
                     <span className="text-[9px]">HOURS</span>
                  </span>
                  <span className="flex flex-col items-center">
                     <span className="text-base font-bold">
                        {String(time.minutes).padStart(2, '0')}
                     </span>
                     <span className="text-[9px]">MINS</span>
                  </span>
                  <span className="flex flex-col items-center">
                     <span className="text-base font-bold">
                        {String(time.seconds).padStart(2, '0')}
                     </span>
                     <span className="text-[9px]">SECS</span>
                  </span>
               </p>
            </div>

            <div className="w-full flex justify-between rounded-md  border border-black  bg-white">
               <input
                  type="text"
                  placeholder="ENTER YOUR MOBILE NUMBER"
                  className="mr-2 text-xs w-full focus:outline-none pl-2 rounded-md focus:ring-2 focus:ring-coyu-blue"
               />
               <button className="text-coyu-blue text-xs bg-none p-3 tracking-wider">
                  SUBMIT
               </button>
            </div>
         </div>
      </div>
   );
};

export default NewDrops;
