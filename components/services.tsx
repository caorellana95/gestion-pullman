import Card from "./card";

export default function Services(){
    return(
        <div>
            <div className="justify-around ml-36 mt-4">
                <p className="font-bold">Origen - Destino</p> {/* {array.origen - arrayy.destino} */}
            </div>
            <div className="justify-around mx-48 mt-4">
                <p>Fecha</p> {/* {fecha} */}
            </div>
            <div>
                {/* <Filter/> */}
            </div>
            <div>
                <Card/>
            </div>
        </div>
    )
}