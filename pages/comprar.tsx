import Image from "next/image"
import { useRouter } from "next/navigation";
import Services from "../components/services";

export default function Comprar(){

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
                
                <h1 className="text-lg">Selecciona <b>tu servicio</b></h1>
                <Image
                    src={"/images/house.png"}
                    alt="Logo"
                    width={20}
                    height={19}
                    className="  "
                    onClick={redirectToMenu}

                />
            </div>
            <div>
                <Services/>
            </div>
        </div>
    )
}