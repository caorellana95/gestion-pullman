import Image from "next/image"
import { useRouter } from "next/navigation"
import Divider from '@mui/material/Divider';

export default function Sit(){
    
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
                
                <h1 className="text-lg">Selecciona <b>tu asiento</b></h1>
                <Image
                    src={"/images/house.png"}
                    alt="Logo"
                    width={20}
                    height={19}
                    className="  "
                    onClick={redirectToMenu}

                />
            </div>
            <div className="w-12 mb-12 mt-4 mx-12">
                <div className="rounded-md h-10 mx-12 w-72 bg-white h-24">
                    <div className="flex">
                    <Image
                        src={"/images/vector.png"}
                        alt="Logo"
                        width={40}
                        height={19}
                        className=""
                    />
                    <p className="mt-1">Origen - Hora de Salida</p>

                    </div>
                    <div className="flex">
                    <Image
                        src={"/images/vector.png"}
                        alt="Logo"
                        width={40}
                        height={19}
                        className=" "
                    />
                    <p className="mt-1">Destino - Hora de Llegada</p>
                    </div>
                </div>
            </div>
            <div>
                <Divider className="mx-14 ml-8"/>
            </div>     
        </div>
    )
}