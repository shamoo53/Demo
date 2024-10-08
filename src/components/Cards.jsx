import React from 'react';

export default function Cards({ data }) {
  return (
    <div className="bg-white shadow-md rounded-md p-3 overflow-x-auto hide-scrollbar">
      <div className="flex flex-col space-y-4 min-w-full">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 min-w-full whitespace-nowrap">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 rounded border-gray-300 mr-3"
            />
            <img src={item.icon} alt="User Icon" className="h-6 w-6" />
            <div className="flex-1 text-gray-600 font-semibold pl-8 text-sm leading-5">{item.task}</div>
            <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">{item.date}</div>
            <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">
              <ul className="list-disc list-inside font-semibold text-sm leading-5">
                <li>{item.description}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}