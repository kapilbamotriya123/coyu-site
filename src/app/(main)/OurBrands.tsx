import Image from 'next/image';
import arrow from '../ui/assets/arrow.svg';
import { libre_Caslon_Text } from '../ui/font';

import star from '../ui/assets/Our-brands/stars.svg';

import ourlove from '../ui/assets/Our-brands/ourLove.jpg';
import aavidi from '../ui/assets/Our-brands/adivadi.jpg';
import bunka from '../ui/assets/Our-brands/bunka.jpg';
import que from '../ui/assets/Our-brands/qua.jpg';
import mati from '../ui/assets/Our-brands/mati.jpg';
import linen from '../ui/assets/Our-brands/linen.jpg';
import kanelle from '../ui/assets/Our-brands/kannele.jpg';
import rhe from '../ui/assets/Our-brands/rhe.jpg';

const OutBrands = () => {
   return (
      <div className=" px-3 pt-7 overflow-hidden">
         <div className="mb-2 flex justify-between ">
            <div>
               <h3 className="text-sm font-bold leading-3 tracking-wide">
                  OUR BRANDS
               </h3>
            </div>
            <div className="flex gap-3 self-end text-xs text-coyu-blue">
               VIEW ALL
               <Image src={arrow} alt={''} />
            </div>
         </div>
         <div className={`${libre_Caslon_Text.className} relative text-coyu-blue bg-blue-background text-4xl text-center px-4 py-8 flex items-center justify-center `}>
            
            <Image src={star} alt="star" className='absolute z-10' />
            <p className='z-20'>
                Curated
                <br />
                for you
            </p>
         </div>

         <div className='flex gap-3 py-3 bg-blue-background'>
            <div className='flex flex-shrink-0 items-center -translate-x-2 justify-center w-24 h-24 bg-white rounded-3xl'>
                <Image src={ourlove} width={67} alt='Our Love' />
            </div>
            <div className='flex flex-shrink-0 items-center justify-center -translate-x-2 w-24 h-24 bg-white rounded-3xl'>
                <Image src={aavidi} width={67} alt='Aavidi' />
            </div>
            <div className='flex flex-shrink-0 items-center justify-center w-24 h-24 -translate-x-2 bg-white rounded-3xl'>
                <Image src={bunka} width={67} alt='Bunka' />
            </div>
            <div className='flex flex-shrink-0 items-center justify-center w-24 h-24 bg-white -translate-x-2 rounded-3xl'>
                <Image src={que} width={67} alt='Que' />
            </div>
         </div>
         <div className='flex gap-3 py-3 bg-blue-background'>
            <div className='flex flex-shrink-0 items-center justify-center w-24 h-24 bg-white -translate-x-10 rounded-3xl'>
                <Image src={mati} width={67} alt='Mati' />
            </div>
            <div className='flex flex-shrink-0 items-center justify-center w-24 h-24 bg-white -translate-x-10 rounded-3xl'>
                <Image src={linen} width={67} alt='Linen' />
            </div>
            <div className='flex flex-shrink-0 items-center justify-center w-24 h-24 bg-white -translate-x-10 rounded-3xl'>
                <Image src={kanelle} width={67} alt='Kanelle' />
                </div>
            <div className='flex flex-shrink-0 items-center justify-center w-24 h-24 bg-white -translate-x-10 rounded-3xl'>
                <Image src={rhe} width={67} alt='Rhe' />
            </div>
            <div className='flex flex-shrink-0 items-center justify-center w-24 h-24 bg-white -translate-x-10 rounded-3xl'>
                
            </div>
         </div>
      </div>
   );
};

export default OutBrands;
