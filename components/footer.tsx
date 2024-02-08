import React from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";



export default function Footer(){
    return(
    <footer className=' lg:w-full w-full lg:h-full justify-around pt-60'>
     <div className='flex items-center'>
          <div className=''>
          <Image
                 src={"/images/pngegg.png"}
                 alt="Logo"
                 width={150}
                 height={19}
                 className="px-6" 
               />
               <p className='text-center'>Comprar</p>
          </div>
          <div>
          <Image
                 src={"/images/pngegg.png"}
                 alt="Logo"
                 width={150}
                 height={19}
                 className="px-6" 
               />
               <p className='text-center'>Cambiar</p>
          </div>
          <div>
          <Image
                 src={"/images/pngegg.png"}
                 alt="Logo"
                 width={150}
                 height={19}
                 className="px-6" 
               />
               <p className='text-center'>Anular</p>

          </div>
               
               
               

     </div>
            
      
        </footer>
    )
}