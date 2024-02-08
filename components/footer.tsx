import React from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";



export default function Footer(){
    return(
    <footer className='bg-gray-600 lg:w-full w-full lg:h-full flex justify-around '>
            <Image
                 src={"/images/pngegg.png"}
                 alt="Logo"
                 width={150}
                 height={19}
                 className="p-12" 
            />
            <Image
                 src={"/images/pngegg.png"}
                 alt="Logo"
                 width={150}
                 height={19}
                 className="p-12" 
            />
            <Image
                 src={"/images/pngegg.png"}
                 alt="Logo"
                 width={150}
                 height={19}
                 className="p-12" 
            />
      
        </footer>
    )
}