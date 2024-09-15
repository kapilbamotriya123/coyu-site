import Image from 'next/image';
import heroImage from '../ui/assets/hero_Image.jpg';
import { ArrowRight } from 'lucide-react';
import sliderdots from '../ui/assets/slider-dots.svg';
import delivery_truck_wrapper from '../ui/assets/deliver-truck-wrapper.svg';
import delivery from '../ui/assets/Delivery.svg';
import { dm_Serif_Display } from '../ui/font';

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center gap-5 px-3 pt-7">
            <div className="relative flex h-[35rem] w-full items-end justify-center overflow-hidden rounded-full shadow-lg">
               <div className="z-10 mb-10 flex flex-col items-center text-center">
                  <p>
                     <span className="align-middle text-[10px] text-white font-extralight leading-5 tracking-widest">
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
            <div className="items-center">
               <Image src={sliderdots} alt={''} />
            </div>
            <div className="flex w-full items-center gap-3 bg-blue-background p-3">
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
               <p className="text-sm leading-4 tracking-wide text-black">
                  90 MINUTES EXPRESS DELIVERY
                  <br />
                  <span className="text-xs text-gray-400">*In Delhi-NCR</span>
               </p>
            </div>
         </div>
    )
}

export default HeroSection;