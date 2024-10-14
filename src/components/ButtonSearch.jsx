// src/components/ButtonSearch.js
import React from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';

const Button = ({ children, variant, className, width, height, onClick }) => {
  const baseStyles = 'flex items-center justify-center rounded-md text-sm font-semibold transition-transform duration-200';
  const styles = {
    primary: `${baseStyles} bg-[#413FA0] text-white hover:bg-[#3a36a0] hover:scale-105`,
    secondary: `${baseStyles} border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:scale-105`,
  };

  return (
    <button 
      style={{ width, height }} 
      className={`${styles[variant]} ${className} text-xs leading-5`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const SearchBar = () => (
  <div className="hidden lg:flex items-center border rounded-full px-3 py-2 w-full max-w-md">
    <FiSearch className="text-gray-400 mr-2" />
    <input
      type="text"
      placeholder="Search"
      className="w-full outline-none bg-[#F2F2F2] text-xs leading-5"
    />
  </div>
);

const ButtonSearch = ({ openModal }) => {
  return (
    <div className="flex items-center justify-between px-4 py-1 bg-[#F2F2F2] text-xs leading-5">
      <div className="flex space-x-4" style={{ marginLeft: '-15px' }} data-aos="fade-up-right">
        <Button variant="primary" width="86px" height="35px">Upcoming</Button>
        <Button variant="secondary" className="hidden sm:flex" width="86px" height="35px">Past</Button>
      </div>
      <SearchBar /> 

      <div data-aos="fade-up-left">
        <Button variant="primary" className="flex items-center space-x-2" width="126px" height="42px" onClick={openModal}>
          <div className="bg-white rounded-full p-1">
            <FiPlus className="text-[#413FA0]" />
          </div>
          <span>Add Event</span>
        </Button>
      </div>
    </div>
  );
};

export default ButtonSearch;