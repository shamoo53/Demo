import React from 'react';
import { FaTh, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-[#3F3D56] h-full w-16 flex flex-col items-center py-4">
      <div className="text-white mb-6 h-fu">
        <button aria-label="Menu" className="mb-6">
          <FaTh size={24} />
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <button className="text-white mb-4">
          <FaTh size={24} />
        </button>
        <button className="text-white">
          <FaCog size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;