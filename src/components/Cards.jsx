import { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Doris from '../assets/doris.svg';
import { FiTrash2, FiAlertTriangle } from 'react-icons/fi';

function DeleteConfirmModal({ isOpen, onConfirm, onCancel, eventTitle, themeColor }) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={onCancel} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="h-1.5 w-full" style={{ backgroundColor: themeColor }} />
        <div className="px-8 pt-7 pb-8 text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ backgroundColor: `${themeColor}15` }}
          >
            <FiAlertTriangle size={30} style={{ color: themeColor }} />
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Delete Event?</h2>
          <p className="text-sm text-gray-500 mb-7 leading-relaxed">
            Are you sure you want to delete{' '}
            {/* Use &ldquo; and &rdquo; to avoid react/no-unescaped-entities */}
            <span className="font-semibold text-gray-800">&ldquo;{eventTitle}&rdquo;</span>?
            <br />
            This action <span className="font-semibold text-red-500">cannot be undone</span>.
          </p>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-3 rounded-xl text-sm font-semibold text-white hover:opacity-90 active:scale-95 transition-all"
              style={{ backgroundColor: themeColor }}
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

DeleteConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  eventTitle: PropTypes.string,
  themeColor: PropTypes.string,
};

DeleteConfirmModal.defaultProps = {
  eventTitle: 'this event',
  themeColor: '#413FA0',
};

function formatDescription(text = '') {
  const words = text.trim().split(/\s+/);
  const lines = [];
  for (let i = 0; i < words.length; i += 6) {
    lines.push(words.slice(i, i + 6).join(' '));
  }
  return lines;
}

export default function Cards({ data, onDelete, themeColor }) {
  const [confirmIndex, setConfirmIndex] = useState(null);

  const handleConfirm = () => {
    onDelete(confirmIndex);
    setConfirmIndex(null);
  };

  const pendingEvent = confirmIndex !== null ? data[confirmIndex] : null;

  return (
    <>
      <DeleteConfirmModal
        isOpen={confirmIndex !== null}
        onConfirm={handleConfirm}
        onCancel={() => setConfirmIndex(null)}
        eventTitle={pendingEvent?.eventTitle || 'this event'}
        themeColor={themeColor}
      />

      {data.map((event, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-3 w-fit xl:w-full mb-2">
          <div className="flex items-start space-x-2 whitespace-nowrap min-w-full w-[1170px]">

            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 rounded border-gray-300 mr-3 shrink-0 mt-0.5"
              style={{ accentColor: themeColor }}
            />

            <div className="flex-1 pl-12 md:pl-24 flex items-center gap-2">
              <img src={event.dorisIcon || Doris} alt="avatar" className="h-6 w-6 rounded-full shrink-0" />
              <span className="text-gray-800 font-semibold text-sm leading-5 whitespace-normal break-words">
                {event.eventTitle}
              </span>
            </div>

            <div className="flex-1 pl-12 text-gray-600 font-semibold text-sm leading-5">
              {event.date}
            </div>

            <div className="flex-1 pl-6 flex items-start">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold text-white whitespace-nowrap"
                style={{ backgroundColor: themeColor }}
              >
                {event.role}
              </span>
            </div>

            <div className="flex-1 text-gray-600 font-semibold text-sm leading-6 whitespace-normal pr-10 relative">
              {formatDescription(event.description).map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              <button
                onClick={() => setConfirmIndex(index)}
                className="absolute right-0 top-0 p-2 rounded-lg hover:bg-red-50 group transition-all"
                title="Delete event"
              >
                <FiTrash2 size={17} className="text-gray-400 group-hover:text-red-500 transition-colors" />
              </button>
            </div>

          </div>
        </div>
      ))}
    </>
  );
}

Cards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  themeColor: PropTypes.string,
};

Cards.defaultProps = {
  data: [],
  themeColor: '#413FA0',
};