import React from 'react';
import Doris from '../assets/doris.svg';
import Bee from '../assets/bee.svg';
import newIcon from '../assets/icontwo.svg'
import three from '../assets/iconthree.svg'
import four from '../assets/iconfour.svg'
import five from '../assets/iconfive.svg'
import six from '../assets/iconsix.svg'

const CardText = () => {
  const data = [
    {
      Bee: Bee,
      task: 'Take recent orders on Jumia',
      date: 'August 23, 2023',
      Doris: Doris,
      name: 'Doris K. John',
      description: 'Required to look up items on Jumia, select required item place',
    },
  
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-3 overflow-x-auto hide-scrollbar">
      <div className="flex flex-col space-y-4 min-w-full">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 min-w-full whitespace-nowrap">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 rounded border-gray-300 mr-3" 
            />
            <img src={item.Doris} alt="icon" className="h-6 w-6" />
            <div className="flex-1 text-gray-600 font-semibold pl-8 text-sm leading-5">{item.task}</div>
            <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">{item.date}</div>
            <img src={item.Bee} alt="profile" className="h-6 w-6 rounded-full" />
            <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">{item.name}</div>
            <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">
              <ul className="list-disc list-inside font-semibold text-sm leading-5">
                <li>Required to look up items on Jumia</li>
                <li>select required item place</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardText;