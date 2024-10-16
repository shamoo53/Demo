import React from 'react';

const CardComponent = () => {
  return (
    <div className='w-full'>
      <div className="bg-white shadow-md rounded-md p-3 w-fit xl:w-full">
        <div className="flex items-center space-x-2 whitespace-nowrap min-w-full w-[1170px]">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded border-gray-300 mr-3" />
          <div className="flex-1 text-gray-600 font-semibold pl-12 md:pl-24 text-sm leading-5">Events</div> 
          <div className="flex-1 text-gray-600 font-semibold pl-12 text-sm leading-5">Dates</div> 
          <div className="flex-1 text-gray-600 font-semibold text-sm pl-6 leading-5">Role</div>
          <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">Description</div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
