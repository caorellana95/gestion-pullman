import Image from "next/image"

export default function Cambiarr(){
    return (
        <div>
            <div className=" flex mt-8 justify-around">
                <Image
                    src={"/images/arrow-left.png"}
                    alt="Logo"
                    width={20}
                    height={19}
                    className="  "
                />  
                
                <h1 className="text-lg">Cambia de <b>pasaje</b></h1>
                <Image
                    src={"/images/house.png"}
                    alt="Logo"
                    width={20}
                    height={19}
                    className="  "
                />
            </div>
            <div className="bg-white  mt-8 rounded-md border-2 shadow mx-12 ">
                <div className="flex mt-8 px-auto">
                <div className="mb-12">
                <label className="font-bold">Número de reserva</label>
                <input type="text" 
                       className="rounded-md border-black  border-2 h-10 w-28 mx-2 "
                       placeholder="PMXXXXXXXX" />


                </div>
                <div className="">
                <label className="font-bold">Fechs de reserva</label>
                <input type="text"
                       className="rounded-md border-black  border-2 h-10  w-28 mx-2"
                       placeholder="XX-XX-XXXX" />

                </div>
                </div>
                <div className="mb-8">
                <label className="font-bold">Correo electrónico</label>
                <input type="text"
                       className="rounded-md border-black  border-2 h-10  w-48 mx-2"
                       placeholder="Correo electrónico" />

                </div>

            </div>
        </div>
    )
}