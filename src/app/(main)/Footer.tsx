
import Image from "next/image";
import instagram from "../ui/assets/FOOTER/Vector.svg";
import facebook from "../ui/assets/FOOTER/facebook.svg";
import twitter from "../ui/assets/FOOTER/x.svg";


const Footer = () => {
   return (
      <div className="mt-5 space-y-5">
         <hr />
         <div className="px-3 uppercase items-center flex justify-between">
            <span>Products</span>
            <span className="text-3xl">+</span>
        </div>
         <hr />
         <div className="px-3 uppercase items-center flex justify-between">
            <span>SERVICES</span>
            <span className="text-3xl">+</span>
        </div>
         <hr />
         <div className="px-3 uppercase items-center flex justify-between">
            <span>CONNECT</span>
            <span className="text-3xl">+</span>
        </div>
         <hr />
         <div className="mt-5">
            <div className="flex items-center justify-center gap-5 px-3">
               <Image src={instagram} alt="Instagram" />
                <Image src={facebook} alt="Facebook" />
                <Image src={twitter} alt="Twitter" />
            </div>
            <p className="text-center text-gray-400 uppercase mt-6 tracking-wider">
                © 2024 Coyu.com. All Rights Reserved.
            </p>
         </div>
      </div>
   );
};

export default Footer;
