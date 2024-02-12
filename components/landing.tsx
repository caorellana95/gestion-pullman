"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image"
import Divider from '@mui/material/Divider';
import Menu from '../pages/menu';



const Landing: React.FC = ()=>{
    
    const router = useRouter();
    const redirectToComprar = () => {
        router.push('/comprar')
    }
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const menu = () => {
        setMenuOpen(!menuOpen)
    }
    const closeMenu = () => {
        if(menuOpen){
            menu()
        }
    }


    return(
        <div className='' onClick={closeMenu}>
            <div className="mt-10 flex px-12">
                <div className="mt-9" onClick={menu}>
                <Image
                    src={"/images/menu.png"}
                    alt="Logo"
                    width={40}
                    height={9}
                />
                </div>
                <div className=" sm:mx-48">
                <Image
                    src={"/images/pullman.png"}
                    alt="Logo"
                    width={400}
                    height={99}
                />
                </div>
            </div>
            <Menu menuOpen={menuOpen} menu={menu} /> 
                <div className="sm:mt-12">
                    <div className=" bg-blue-600 justify-around sm:mx-96 py-4 h-[450px] mx-6 text-white rounded-md">
                        <h1 className="text-xl px-12">¿Dónde estás?</h1>
                            <div className="w-12 mb-12">
                                <div className="rounded-md h-10 mx-12 w-72 bg-white h-24">
                                    <Image
                                        src={"/images/exchange.png"}
                                        alt="Logo"
                                        width={180}
                                        height={19}
                                        className="px-16 mt-6 ml-44 absolute" 
                                    />
                                    <Image
                                        src={"/images/vector.png"}
                                        alt="Logo"
                                        width={49}
                                        height={19}
                                        className="mt-2  absolute"
                                    />
                                    <Image
                                        src={"/images/vector.png"}
                                        alt="Logo"
                                        width={49}
                                        height={19}
                                        className=" mt-12  absolute"
                                    />
                                    <input
                                        type="text"
                                        className="mt-2 h-10 mx-10  w-48 "
                                        placeholder="Escribe una ubicación"
                                     />

                                    <Divider className="mx-14 ml-8"/>

                                    <input 
                                        type="text" 
                                        className="mb-2 h-10 mx-10 w-48 "
                                        placeholder="Escribe una ubicación" />
                                </div>
                            </div>
                            <h1 className="text-xl px-12">¿Cuándo viajas?</h1>
                            <div className="w-12 mb-1">
                                <Image
                                    src={"/images/calendario.png"}
                                    alt="Logo"
                                    width={20}
                                    height={19}
                                    className=" mt-2 ml-14  absolute"
                                />
                                <Image
                                    src={"/images/calendario.png"}
                                    alt="Logo"
                                    width={20}
                                    height={19}
                                    className=" mt-20 ml-14 absolute"
                                />
                                <input 
                                    type="text" 
                                    className="rounded-md pl-8 h-10 mx-12 w-72"
                                    placeholder="Elige una fecha" />
                            </div>
                            <h1 className="text-xl px-12">¿Cuándo regresas?</h1>
                            <div className="w-12 mb-8">
                                <input
                                    type="text"
                                    className="rounded-md pl-8 h-10 mx-12 w-72"
                                    placeholder="Opcional" />
                            </div>
                            <button className="bg-orange-600 mt-4 mx-12 px-20 rounded-md h-10 w-72" onClick={redirectToComprar}>
                                <p>BUSCAR</p>
                            </button>
                    </div>
              </div>
        </div>
    )
}

export default Landing;
