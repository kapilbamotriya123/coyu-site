import type { Metadata } from 'next';

import './globals.css';
import { hanken_Grotesk } from './ui/font';
import Navbar from './(main)/Navbar';
import Menubar from './(main)/MenuBar';

export const metadata: Metadata = {
   title: 'Coyu Test App',
   description: 'created By Kapil Bamotriya',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${hanken_Grotesk.className} font-normal text-black bg-white antialiased max-w-[500px] mx-auto`}>
            <Navbar />
            {children}
            <Menubar />
         </body>
      </html>
   );
}
