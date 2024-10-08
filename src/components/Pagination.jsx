import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
];

export default function Example() {
  return (
    <div className="flex items-center justify-center border-t border-gray-200 bg-[#F2F2F2] px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex rounded-md shadow-sm space-x-2">
            {/* "<< Previous" Button with increased size */}
            <a
              href="#"
              className="relative inline-flex items-center px-5 py-3 text-gray-400 focus:z-20 focus:outline-offset-0 text-xl" // increased size
              style={{ width: '36px', height: '36px' }} // increased dimensions
            >
              <span className="sr-only">Previous</span>
              &laquo;
            </a>
            
            {/* Page numbers styled with gaps */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-md focus:z-20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-[#413FA0] border border-gray-300 rounded-md focus:z-20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              2
            </a>
            <a
              href="#"
              className="relative items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-md focus:z-20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-md focus:z-20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              4
            </span>
            <a
              href="#"
              className="relative items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded-md focus:z-20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:inline-flex"
            >
              5
            </a>
            
            {/* "Next >>" Button with increased size */}
            <a
              href="#"
              className="relative inline-flex items-center px-3 py-3 text-gray-400 focus:z-20 focus:outline-offset-0 text-xl" // increased size
              style={{ width: '36px', height: '36px' }} // increased dimensions
            >
              <span className="sr-only">Next</span>
              &raquo;
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}