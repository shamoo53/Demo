import React from 'react';
import Doris from '../assets/doris.svg';
import Bee from '../assets/bee.svg';
import { FaTimes } from 'react-icons/fa'; 

export default function Cards({ data, onDelete }) {
  return (
    <div className='w-full'>
      <div className="bg-white shadow-md rounded-md p-3 w-fit xl:w-full">
        <div className="flex flex-col space-y-4 min-w-full">
          {data.map((item, index) => (
            <div key={index} className="relative flex items-center space-x-2 whitespace-nowrap min-w-full w-[1170px]">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600 rounded border-gray-300 mr-3"
              />
              <img src={item.Doris} alt="User Icon" className="h-6 w-6" />
              <div className="flex-1 text-gray-600 font-semibold pl-8 text-sm leading-5">{item.eventTitle}</div>
              <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">{item.date}</div>
              <div className="flex-1 text-gray-600 font-semibold text-sm leading-5 pl-0 flex items-center">
                <img src={Bee} alt="Bee Icon" className="h-6 w-6 mr-2" />
                <span className="mr-16">{item.role}</span>
              </div>
              <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">
                <ul className="list-disc list-inside font-semibold text-sm leading-5 pr-12">
                  <li>{item.description}</li>
                </ul>
              </div>
              <button 
                onClick={() => onDelete(index)} 
                className="absolute top-1 right-1 text-gray-600 hover:text-red-600 p-1"
              >
                <FaTimes className="h-4 w-4" /> 
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
