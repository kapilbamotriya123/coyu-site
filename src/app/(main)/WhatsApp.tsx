import Image from 'next/image';
import arrow from '../ui/assets/arrow.svg';

import whatslogo from '../ui/assets/whatsApp/logos_whatsapp-icon.svg';
const WhatsApp = () => {
   return (
      <div className="mt-7 flex justify-between bg-green-50 px-10 py-8 ">
         <div>
            <h3 className="font-bold">
               Need any help? Simply
               <br /> drop us a text.
            </h3>
            <div className="flex gap-3 self-end tracking-wide mt-3 text-coyu-blue">
               WHATSAPP US
               <Image src={arrow} alt={''} />
            </div>
         </div>
         <Image src={whatslogo} alt="WhatsApp" />
      </div>
   );
};

export default WhatsApp;
