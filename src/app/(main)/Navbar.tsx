import Image from 'next/image';
import logo from '../ui/assets/coyu.svg';
import { ShoppingBag } from 'lucide-react';

import hamburger from '../ui/assets/hamburger.svg';
import shopping_icon from '../ui/assets/shopping-bag-icon.svg';

const Navbar = () => {
   return (
      <div className="sticky top-0 z-50 flex w-full items-center justify-between px-4 pt-5">
         <div className="">
            <Image src={hamburger} width={24} alt="hamburger" />
         </div>

         <div className="">
            <Image src={logo} width={150} className="App-logo" alt="logo" />
         </div>

         <div className="">
            <ShoppingBag size={24} className="text-black" />
         </div>
      </div>
   );
};

export default Navbar;
