import React from 'react';
import Image from 'next/image';

interface MenuProps {
    menuOpen: boolean;
  menu: () => void;
}

const Menu: React.FC<MenuProps> = ({ menuOpen, menu }) => {
  return (
    menuOpen && (
      <div className="fixed left-0 top-0 h-full bg-white w-64 z-10">
        <div className="px-4 py-6">
            <div className='flex'>
                <Image
                    src={"/images/plus.png"}
                    alt="Logo"
                    width={20}
                    height={19}
                    className=" ml-10 mt-12 absolute"
                 />
                <Image
                    src={"/images/camera.png"}
                    alt="Logo"
                    width={70}
                    height={19}
                    className=" mt-2 "
                 />
            <h2 className="text-gray-400 text-lg mt-8">¡Hola!</h2>

            </div>
          <ul className="text-gray-400 mt-4 ml-4">
                <Image
                    src={"/images/smartphone.png"}
                    alt="Logo"
                    width={35}
                    height={19}
                    className=" mr-2 absolute"
                 />
            <li className="mb-4 ml-8">Recargar PullmanPay</li>
            <Image
                    src={"/images/smartphone.png"}
                    alt="Logo"
                    width={35}
                    height={19}
                    className=" mr-2 absolute"
                 />
                 <Image
                    src={"/images/exchange lr.png"}
                    alt="Logo"
                    width={12}
                    height={19}
                    className=" ml-3 mt-3 absolute"
                 />
            <li className="mb-4 ml-8">Compartir Saldo</li>
            <Image
                    src={"/images/profile.png"}
                    alt="Logo"
                    width={20}
                    height={19}
                    className=" ml-2 mt-1 absolute"
                 />
            <li className="mb-4 ml-8">Mi cuenta</li>
            <Image
                    src={"/images/boleto.png"}
                    alt="Logo"
                    width={25}
                    height={19}
                    className=" mr-2 ml-1 absolute"
                 />
            <li className="mb-4 ml-8">Mis viajes</li>
            <Image
                    src={"/images/statistics.png"}
                    alt="Logo"
                    width={30}
                    height={19}
                    className=" mr-2 absolute"
                 />
            <li className="mb-4 ml-8">Mis movimientos</li>
            <Image
                    src={"/images/coupon.png"}
                    alt="Logo"
                    width={35}
                    height={19}
                    className=" mr-2 mt-1 absolute"
                 />
            <li className="mb-4 ml-8">Promociones</li>
            <Image
                    src={"/images/chat.png"}
                    alt="Logo"
                    width={30}
                    height={19}
                    className=" mr-2 mb-1 absolute"
                 />
            <li className="mb-4 ml-8">Comparte y gana</li>
            <Image
                    src={"/images/info.png"}
                    alt="Logo"
                    width={20}
                    height={19}
                    className=" mr-2 ml-2 absolute"
                 />
            <li className="mb-4 ml-8">Términos de uso</li>
            <Image
                    src={"/images/politics.png"}
                    alt="Logo"
                    width={25}
                    height={19}
                    className=" mr-2 absolute"
                 />
            <li className="mb-4 ml-8">Políticas de privacidad</li>
            <Image
                    src={"/images/headphone.png"}
                    alt="Logo"
                    width={30}
                    height={19}
                    className=" mr-2 absolute"
                 />
            <li className="mb-2 ml-8">Contáctanos</li>
          </ul>
        </div>
      </div>
    )
  );
}

export default Menu;
