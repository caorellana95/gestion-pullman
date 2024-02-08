import Image from "next/image"


export default function Card(){
    return(
        <div className=''>
              <div className="pb-24 flex mr-48 ">
                {/* <Image
                    src={"/images/menu.png"}
                    alt="Logo"
                    width={10}
                    height={19}
                    className=""
                /> */}
                <div className="mx-auto">
                <Image
                    src={"/images/pullman-logo.png"}
                    alt="Logo"
                    width={400}
                    height={99}
                    className=""
                />

                </div>
                
              </div>
              <div className="">
                <div className=" bg-blue-600 justify-around  py-4 h-[450px] mx-6 text-white rounded-md">
                    <h1 className="text-xl px-12">¿Dónde estás?</h1>
                    <div className="w-12 mb-12">
                    <input type="text" className="rounded-md h-10 mx-12 w-72"
                        placeholder="Escribe una ubicación" />
                    </div>
                    <h1 className="text-xl px-12">¿Cuándo viajas?</h1>
                    <div className="w-12 mb-12">
                    <input type="text" className="rounded-md h-10 mx-12 w-72"
                        placeholder="Elige una fecha" />
                    </div>
                    <h1 className="text-xl px-12">¿Cuándo regresas?</h1>
                    <div className="w-12 mb-8">
                    <input type="text" className="rounded-md h-10 mx-12 w-72"
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