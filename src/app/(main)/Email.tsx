import Image from 'next/image';

import location from '../ui/assets/email/location.svg';
import email from '../ui/assets/email/email.svg';

const Email = () => {
   return (
      <div className="mt-7 p-3">
         <p className="flex flex-col gap-3 text-black">
            SIGN UP FOR EMAIL
            <br />
            <span className="text-gray-500">
               Receive early access to new arrivals, sales, exclusive content,
               events and much more!
            </span>
         </p>
         <div className="mt-8">
            <h3>EMAIL ADDRESS</h3>
            <input
               type="email"
               placeholder="Enter your email address"
               className="mt-3 w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-coyu-blue"
            />
            <button className="mt-3 w-full rounded-md bg-coyu-blue p-3 text-white">
               Submit
            </button>
            <p className="mt-5 text-xs text-gray-400">
               By Signing up, you will receive Coyu offers, Promotions and other
               commerical messages, You are also agreeing to Coyu Privacy
               policy. You may unsubscribe any time.
            </p>
         </div>
         <div className="flex justify-between mt-12">
            <div className='flex gap-2 tracking-wide '>
               <Image src={location} alt="location" />
               STORE LOCATOR
            </div>
            <div className='flex gap-2  tracking-wide'>
               <Image src={email} alt="email" />
               GET EMAIL
            </div>
         </div>
      </div>
   );
};

export default Email;
