import Image from 'next/image';
import bg_patters from '../ui/assets/path-elements.svg';
import shopFromStore from '../ui/assets/shop-from-store.jpg';
import videoCallIcon from '../ui/assets/video-call-icon.svg';
import chatIcon from '../ui/assets/chat-icon.svg';

const ShopFromStore = () => {
   return (
      <div className="space-y-3 px-3 pt-7">
         <h3 className="text-sm font-bold leading-3 tracking-wide">
            SHOP FROM OUT STORE VIA VIDEO CALL
         </h3>
         <div className="w-full">
            <Image src={shopFromStore} alt="Shop from store" />
            <div className="relative overflow-hidden bg-blue-background">
               <Image
                  src={bg_patters}
                  alt=""
                  width={100}
                  className="absolute -left-10 -top-5 z-30 rotate-45"
               />
               <Image
                  src={bg_patters}
                  alt=""
                  width={100}
                  className="absolute -bottom-12 -right-5 z-30 rotate-45"
               />

               <div className="relative z-50 space-y-2 p-4">
                  <p className="text-xs leading-4">
                     Let our stylist give you a store tour and show you the
                     perfect items for your needs - fast and easy!
                  </p>
                  <div className="flex justify-between gap-2">
                     <button className="flex w-full items-center justify-center gap-1 rounded-lg bg-white px-4 py-2 text-xs text-coyu-blue">
                        <Image src={videoCallIcon} alt="Video call icon" />
                        VIDEO CALL
                     </button>
                     <button className="flex w-full items-center justify-center gap-1 rounded-lg bg-white px-4 py-2 text-xs text-coyu-blue">
                        <Image src={chatIcon} alt="Chat icon" />
                        CHAT NOW
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShopFromStore;
