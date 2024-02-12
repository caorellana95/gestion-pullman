import Image from "next/image"
import { useRouter } from "next/navigation";

export default function Anular(){
    const router = useRouter()
    const redirectToMenu = () => {
    router.push('/')
}
    return (
        <div>
            <div className=" flex mt-8 justify-around">
                <Image
                    src={"/images/arrow-left.png"}
                    alt="Logo"
                    width={20}
                    height={19}
                    className="  "
                    onClick={redirectToMenu}
                />  
                
                <h1 className="text-lg">Anulación de <b>pasaje</b></h1>
                <Image
                    src={"/images/house.png"}
                    alt="Logo"
                    width={20}
                    height={19}
                    className="  "
                    onClick={redirectToMenu}
                />
            </div>
            <div className="bg-white px-2 mt-8 rounded-md  shadow mx-12 ">
                <div className="flex mt-8 px-auto">
                <div className="mb-12">
                <label className="font-bold text-sm ml-2">Número de reserva</label>
                <input type="text" 
                       className="rounded-md border-2 h-10 w-28 mx-2 "
                       placeholder="PMXXXXXXXX" />


                </div>
                <div className="">
                <label className="font-bold text-sm ml-2">Fecha de reserva</label>
                <input type="text"
                       className="rounded-md border-2 h-10 w-36 mx-2"
                       placeholder="XX-XX-XXXX" />

                </div>
                </div>
                <div className="mb-8">
                <label className="font-bold text-sm ml-2">Correo electrónico</label>
                <input type="text"
                       className="rounded-md border-2 h-10  w-72 mx-2"
                       placeholder="Correo electrónico" />

                </div>
                <div className="pb-8">
                    <button className="bg-orange-400 text-white rounded-md shadow mx-12 py-2 px-12">ANULAR</button>
                </div>

            </div>
        </div>
    )
}