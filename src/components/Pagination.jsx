import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange, themeColor = '#413FA0' }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center border-t border-gray-200 px-4 py-4 sm:px-6 mt-4">
      <nav aria-label="Pagination" className="isolate inline-flex rounded-md space-x-2">
        {/* Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative inline-flex items-center justify-center w-9 h-9 text-gray-400 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed text-xl transition-colors"
        >
          <span className="sr-only">Previous</span>
          &laquo;
        </button>

        {/* Page numbers */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className="relative inline-flex items-center justify-center w-9 h-9 text-sm font-semibold rounded-md border border-gray-300 transition-all duration-150"
            style={
              page === currentPage
                ? { backgroundColor: themeColor, color: '#ffffff', borderColor: themeColor }
                : { backgroundColor: '#ffffff', color: '#111827' }
            }
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center justify-center w-9 h-9 text-gray-400 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed text-xl transition-colors"
        >
          <span className="sr-only">Next</span>
          &raquo;
        </button>
      </nav>
    </div>
  );
}