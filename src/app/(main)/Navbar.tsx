'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../ui/assets/coyu.svg';
import { ShoppingBag } from 'lucide-react';
import hamburger from '../ui/assets/hamburger.svg';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-[10000] flex w-full items-center justify-between px-4 py-3 transition-transform duration-300 bg-slate-200 bg-opacity-50 backdrop-blur-md ${
        !showNavbar && '-translate-y-full'
      }`}
    >
      <div>
        <Image src={hamburger} width={24} alt="hamburger" />
      </div>

      <div>
        <Image src={logo} width={150} className="App-logo" alt="logo" />
      </div>

      <div>
        <ShoppingBag size={24} className="text-black" />
      </div>
    </div>
  );
};

export default Navbar;