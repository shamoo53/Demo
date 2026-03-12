import React, { useState, useEffect } from 'react';
import hamburgericon from '../assets/hamburger.svg';
import userIcon from '../assets/user-icon.svg';
import { RxDashboard } from "react-icons/rx";
import { FiSettings, FiLogOut } from "react-icons/fi";
import ButtonSearch from '../components/ButtonSearch';
import CardComponent from '../components/CardComponent';
import Cards from './Cards';
import CardText from './CardText';
import Pagination from '../components/Pagination';
import EventModal from './Modal/EventModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bee from '../assets/bee.svg';
import newIcon from '../assets/icontwo.svg';
import three from '../assets/iconthree.svg';
import four from '../assets/iconfour.svg';
import five from '../assets/iconfive.svg';
import seven from '../assets/seven.svg';
import eight from '../assets/eight.svg';
import { FiHome } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import Settings from '../components/Settings';

import {
  Dialog, DialogBackdrop, DialogPanel, Menu, MenuButton, MenuItem, MenuItems, TransitionChild,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const defaultTheme = {
  id: 'purple',
  name: 'Royal Purple',
  primary: '#413FA0',
  light: '#6B69C1',
  bg: '#F2F2F2',
  accent: '#EBE7E7',
};

// Static icon rows that are always present
const STATIC_ICONS = [Bee, newIcon, three, four, five, seven, eight, userIcon];
const ITEMS_PER_PAGE = 5;

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '/' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [activePage, setActivePage] = useState(1);

  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('appTheme');
      return saved ? JSON.parse(saved) : defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'Jay Daniel';
  const userRole = localStorage.getItem('userRole') || 'Owner';

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('appTheme', JSON.stringify(newTheme));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Add event and jump to the last page so it's immediately visible
  const addEvent = (event) => {
    setEvents((prev) => [event, ...prev]); // prepend so newest is first
    setActivePage(1);                      // jump to page 1 to show it immediately
  };

  // Delete by event index within the events array
  const handleDelete = (eventIndex) => {
    setEvents((prev) => {
      const next = prev.filter((_, i) => i !== eventIndex);
      const totalRows = STATIC_ICONS.length + next.length;
      const newTotal = Math.max(1, Math.ceil(totalRows / ITEMS_PER_PAGE));
      setActivePage((p) => Math.min(p, newTotal));
      return next;
    });
  };

  // Events first (newest at top), then static rows below
  const allRows = [
    ...events.map((event, i) => ({
      type: 'event',
      event,
      eventIndex: i,
      id: `event-${i}`,
    })),
    ...STATIC_ICONS.map((icon, i) => ({
      type: 'static',
      icon,
      id: `static-${i}`,
    })),
  ];

  const totalPages = Math.max(1, Math.ceil(allRows.length / ITEMS_PER_PAGE));
  const paginatedRows = allRows.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    navigate('/');
  };

  const SidebarContent = () => (
    <div
      className="flex grow flex-col gap-y-5 overflow-y-auto px-4 pb-4 h-full"
      style={{ backgroundColor: theme.primary }}
    >
      <div className="flex h-16 shrink-0 items-center justify-center cursor-pointer">
        <img alt="menu" src={hamburgericon} className="h-6 w-6" />
      </div>

      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 mt-6 space-y-10">
              <div
                className="relative flex items-center justify-center transform transition-transform hover:scale-110 cursor-pointer"
                onClick={() => setCurrentPage('dashboard')}
                title="Dashboard"
              >
                <div>
                  {currentPage === 'dashboard' && (
                    <div className="absolute inset-y-0 left-0 right-0 w-full bg-white rounded-l-[15px] py-4" />
                  )}
                  <RxDashboard
                    className="relative pt-2 z-10"
                    style={{ fontSize: '24px', color: currentPage === 'dashboard' ? theme.primary : '#ffffff' }}
                  />
                </div>
              </div>

              <div
                className="relative flex items-center justify-center transform transition-transform hover:scale-110 cursor-pointer"
                onClick={() => setCurrentPage('settings')}
                title="Settings"
              >
                {currentPage === 'settings' && (
                  <div className="absolute inset-y-0 left-0 right-0 w-full bg-white rounded-l-[15px] py-4" />
                )}
                <FiSettings
                  className="relative z-10"
                  style={{ fontSize: '20px', color: currentPage === 'settings' ? theme.primary : '#ffffff' }}
                />
              </div>
            </ul>
          </li>

          <li className="mt-auto">
            <button
              onClick={handleSignOut}
              className="flex items-center justify-center w-full py-3 rounded-lg transition-all hover:bg-white/10"
              title="Sign out"
            >
              <FiLogOut style={{ fontSize: '20px', color: '#ffffff' }} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh' }}>
      {/* Mobile sidebar */}
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
            <SidebarContent />
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-24 lg:flex-col">
        <SidebarContent />
      </div>

      <div className="lg:pl-24">
        {/* Navbar */}
        <div
          className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 bg-white"
          style={{ borderBottomColor: theme.accent }}
        >
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>

          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link to="/">
                <FiHome className="h-5 w-5" style={{ color: theme.primary }} />
              </Link>
              <span className="text-xl font-semibold" style={{ color: theme.primary }}>
                {currentPage === 'settings' ? 'Settings' : 'Event List'}
              </span>
            </div>

            <Menu as="div" className="relative">
              <MenuButton className="-m-1.5 flex items-center p-1.5 gap-3">
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: theme.primary }}
                >
                  {userName.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-gray-900">{userName}</span>
                  <span className="text-xs text-gray-500 pr-2">{userRole}</span>
                </div>
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2.5 w-36 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150"
              >
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={classNames(active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm text-gray-900')}
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

        {/* Main content */}
        <main className="py-2" style={{ backgroundColor: theme.bg }}>
          {currentPage === 'settings' ? (
            <Settings currentTheme={theme} onThemeChange={handleThemeChange} />
          ) : (
            <div className="px-4 sm:px-6 lg:px-8 overflow-auto" style={{ backgroundColor: theme.bg }}>
              <ButtonSearch openModal={openModal} themeColor={theme.primary} />

              <div className="mt-2 space-y-2 w-full overflow-x-auto">
                {/* Sticky header row — always visible */}
                <div className="pt-4">
                  <CardComponent themeColor={theme.primary} accentColor={theme.accent} />
                </div>

                {/* Unified list: static rows + new event rows together */}
                {paginatedRows.map((row) => {
                  if (row.type === 'static') {
                    return (
                      <div key={row.id} data-aos="fade-up">
                        <CardText
                          BeeIcon={row.icon}
                          themeColor={theme.primary}
                          accentColor={theme.accent}
                        />
                      </div>
                    );
                  }

                  if (row.type === 'event') {
                    return (
                      <div key={row.id} data-aos="fade-up">
                        <Cards
                          data={[row.event]}
                          onDelete={() => handleDelete(row.eventIndex)}
                          themeColor={theme.primary}
                        />
                      </div>
                    );
                  }

                  return null;
                })}
              </div>

              <EventModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                addEvent={addEvent}
                themeColor={theme.primary}
              />

              <Pagination
                currentPage={activePage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                themeColor={theme.primary}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}