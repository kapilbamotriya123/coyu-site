import home from '../ui/assets/home-icon.svg';
import search from '../ui/assets/search-icon.svg';
import grid_icon from '../ui/assets/grid-icon.svg';
import occasion from '../ui/assets/occasion-icon.svg';
import stylist from '../ui/assets/stylis-img.jpg';
import Image from 'next/image';

const Menubar = () => {
   return (
      <div className="sticky bottom-0 z-50 flex items-center justify-between bg-white px-5 py-3 shadow-2xl shadow-gray-500">
         <div className="flex flex-col items-center gap-1 text-xs">
            <Image src={home} alt={''} />
            Home
         </div>
         <div className="flex flex-col items-center gap-1 text-xs">
            <Image src={search} alt={''} />
            Search
         </div>
         <div className="relative self-end items-center text-sm font-bold">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-14 border-2 border-coyu-blue p-1 rounded-full overflow-hidden">
               <Image src={stylist} alt={''} className='rounded-full'/>
            </div>
               Speak To Stylist
         </div>
         <div className="flex flex-col items-center gap-1 text-xs">
            <Image src={grid_icon} alt={''} />
            Grid
         </div>
         <div className="flex flex-col items-center gap-1 text-xs">
            <Image src={occasion} alt={''} />
            Occasion
         </div>
      </div>
   );
};

export default Menubar;
