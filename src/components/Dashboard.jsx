import React, { useState, useEffect } from 'react';
import hamburgericon from '../assets/hamburger.svg';
import userIcon from '../assets/user-icon.svg';
import { RxDashboard } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import ButtonSearch from '../components/ButtonSearch'; // ButtonSearch Component
import CardComponent from '../components/CardComponent';
import Cards from './Cards';
import CardText from './CardText';
import Pagination from '../components/Pagination';
import EventModal from './Modal/EventModal'; // Modal Import
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bee from '../assets/bee.svg';
import newIcon from '../assets/icontwo.svg'
import three from '../assets/iconthree.svg'
import four from '../assets/iconfour.svg'
import five from '../assets/iconfive.svg'
import six from '../assets/iconsix.svg'

import {
  Dialog, DialogBackdrop,DialogPanel,Menu,MenuButton, MenuItem,MenuItems, TransitionChild,} from '@headlessui/react';
import {Bars3Icon,BellIcon, HomeIcon, XMarkIcon,} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
];
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [events, setEvents] = useState([]); // State to store events

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };
  

  return (
    <>
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />
          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#413FA0] px-4 pb-6=">
                <div className="flex h-16 shrink-0 items-center justify-center ">
                  <img
                    alt="hamburgericon"
                    src={hamburgericon}
                    className="h-6 w-6"
                  />
                </div>
                <nav className="flex flex-1 flex-col ">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                     
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-24 lg:flex-col">
          {/* Sidebar component */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#413FA0] px-4 pb-4">
            <div className="flex h-16 shrink-0 items-center justify-center  cursor-pointer">
              <img
                alt="hamburgericon"
                src={hamburgericon}
                className="h-6 w-6"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 mt-6 space-y-10"> 
                  <div className="relative flex items-center justify-center">
                  <div>

                  <div className="absolute inset-y-0 left-0 right-0 w-full bg-white rounded-l-[15px] py-4 " />
                  <RxDashboard className="relative  pt-2 z-10 cursor-pointer" style={{ fontSize: '24px', color: '#413FA0' }} />
                </div>
                  </div>

                    <div className="relative flex items-center justify-center  cursor-pointer">
                      <FiSettings className="relative z-10" style={{ fontSize: '20px', color: '#ffffff' }} />
                    </div>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-24">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            <div className="flex flex-1 items-center justify-between lg:gap-x-6 ">
              <span className="text-xl font-semibold leading-5 text-gray-900">Event List</span>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt="user Icon"
                      src={userIcon}
                      className="h-8 w-8 rounded-full bg-gray-50"
                    />
                    <div className="flex flex-col ml-4">
                      <span aria-hidden="true" className="text-sm font-semibold leading-5 text-gray-900">
                        Jay Daniel
                      </span>
                      <span className="text-sm text-gray-600 pr-5">
                        Owner
                      </span>
                    </div>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-150"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-50' : '',
                              'block px-3 py-1 text-sm leading-6 text-gray-900',
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-2 bg-[#F2F2F2]">
            <div className="px-4 sm:px-6 lg:px-8  bg-[#F2F2F2]">
              {/* Your content */}
              <ButtonSearch openModal={openModal} />
      <div className='pt-4' data-aos="fade-up">
        <CardComponent />
      </div>

      {events.map((event, index) => (
        <div key={index} className='pt-4' data-aos="fade-down-right">
          <Cards data={[event]} />
        </div>
      ))}

      {/* Modal Component */}
      <div data-aos="zoom-in-up">
      <div className='mt-2'>
        <CardText BeeIcon={Bee} />
      </div>
      <div className='mt-2'>
        <CardText BeeIcon={newIcon} />
      </div>
      <div className='mt-2'>
        <CardText BeeIcon={three} />
      </div>
      <div className='mt-2'>
        <CardText BeeIcon={four} />
      </div>
      <div className='mt-2'>
        <CardText BeeIcon={five} />
      </div>
      </div>

      <EventModal isOpen={isModalOpen} closeModal={closeModal} addEvent={addEvent} />


              <Pagination />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
