import React from 'react';

interface MenuProps {
    menuOpen: boolean;
  menu: () => void;
}

const Menu: React.FC<MenuProps> = ({ menuOpen, menu }) => {
  return (
    menuOpen && (
      <div className="fixed left-0 top-0 h-full bg-gray-800 w-64 z-10">
        {/* Contenido del menú */}
        <div className="px-4 py-6">
          <h2 className="text-white text-lg mb-4">Menú</h2>
          <ul className="text-white">
            <li className="mb-2">Opción 1</li>
            <li className="mb-2">Opción 2</li>
            <li className="mb-2">Opción 3</li>
          </ul>
        </div>
      </div>
    )
  );
}

export default Menu;
