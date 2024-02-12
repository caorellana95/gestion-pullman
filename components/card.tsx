import React from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Card(){
    const router = useRouter()
    const redirectSit = () =>{
        router.push("/sit")
    }
    return(
        <div>
            <div className='bg-white flex rounded-md shadow mx-4 mt-4 cursor-pointer' onClick={redirectSit}>
                <Image
                    src={"/images/pullman.png"}
                    alt="Logo"
                    width={120}
                    height={19}
                    className="  "
                />  
                <p className='mt-2'> PULLMAN BUS</p>
                <Image
                    src={"/images/info.png"}
                    alt="Logo"
                    width={100}
                    height={2}
                    className="ml-24 w-8"
                />  
            </div>
        </div>
    )
}