import React from 'react';

const CardComponent = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-3 flex items-center space-x-2 overflow-x-auto">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded border-gray-300" />
      <div className="flex-1 text-gray-600 font-semibold pl-20 text-sm leading-5">Events</div>
      <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">Dates</div>
      <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">Role</div>
      <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">Description</div>
    </div>
  );
};

export default CardComponent;
