import Image from "next/image"


export default function Card(){
    return(
        <div className=' w-full'>
              <div className="pb-24 flex mr-24 ">
                <Image
                    src={"/images/menu.png"}
                    alt="Logo"
                    width={120}
                    height={19}
                    className="w-96 p-12"
                />
                <div className="mx-auto">
                <Image
                    src={"/images/pullman-logo.png"}
                    alt="Logo"
                    width={200}
                    height={99}
                    className="w-[500px]"
                />

                </div>
                
              </div>
        </div>
    )
}