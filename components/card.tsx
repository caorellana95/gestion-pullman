import Image from "next/image"
import Divider from '@mui/material/Divider';


export default function Card(){
    return(
        <div className=''>
              <div className="mt-10 flex px-12">
                <div className="mt-9 ">
                <Image
                    src={"/images/menu.png"}
                    alt="Logo"
                    width={40}
                    height={9}
                />

                </div>
                
                <div className="">
                <Image
                    src={"/images/pullman.png"}
                    alt="Logo"
                    width={400}
                    height={99}
                />

                </div>
                
              </div>
              <div className="">
                <div className=" bg-blue-600 justify-around  py-4 h-[450px] mx-6 text-white rounded-md">
                    <h1 className="text-xl px-12">¿Dónde estás?</h1>
                    <div className="w-12 mb-12">
                        <div className="rounded-md h-10 mx-12 w-72 bg-white h-24">
                        <input type="text" className="mt-2 h-10 mx-8 w-48 "
                        placeholder="Escribe una ubicación" />
                        <Divider className="mx-14 ml-8"/>
                        <input type="text" className="mb-2 h-10 mx-8 w-48 "
                        placeholder="Escribe una ubicación" />
                        </div>
                    </div>
                    <h1 className="text-xl px-12">¿Cuándo viajas?</h1>
                    <div className="w-12 mb-2">
                    <input type="text" className="rounded-md pl-8 h-10 mx-12 w-72"
                        placeholder="Elige una fecha" />
                    </div>
                    <h1 className="text-xl px-12">¿Cuándo regresas?</h1>
                    <div className="w-12 mb-8">
                    <input type="text" className="rounded-md pl-8 h-10 mx-12 w-72"
                        placeholder="Opcional" />
                    </div>
                    
                    <button className="bg-orange-600 mt-4 mx-12 px-20 rounded-md h-10 w-72">
                        <p>BUSCAR</p>
                    </button>
                </div>  

              </div>
        </div>
    )
}