import { Dialog } from '@headlessui/react';
import Doris from '../../assets/doris.svg';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

const emptyEvent = { eventTitle: '', description: '', date: null, role: '' };

export default function EventModal({ isOpen, closeModal, addEvent, themeColor = '#413FA0' }) {
  const [event, setEvent] = useState(emptyEvent);

  // Reset form every time the modal opens
  useEffect(() => {
    if (isOpen) {
      setEvent(emptyEvent);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({
      ...event,
      dorisIcon: Doris,
      date: event.date ? format(event.date, 'MMMM dd, yyyy') : '',
    });
    closeModal();
  };

  const handleChange = (e) => {
    setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (date) => {
    setEvent((prev) => ({ ...prev, date }));
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-lg relative shadow-xl">
          {/* Header */}
          <div className="flex justify-center items-center border-b pb-3 relative">
            <button
              type="button"
              className="w-6 h-6 text-white rounded-full flex items-center justify-center mr-2"
              style={{ backgroundColor: themeColor }}
            >
              +
            </button>
            <span className="text-lg font-semibold">Add Event</span>
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-2 text-2xl font-bold text-gray-400 hover:text-gray-700"
            >
              ×
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mt-4 space-y-4">
              {/* Event Title */}
              <div>
                <label htmlFor="eventTitle" className="block mb-1 text-sm font-semibold text-gray-700">
                  Event title
                </label>
                <input
                  type="text"
                  id="eventTitle"
                  name="eventTitle"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': themeColor }}
                  value={event.eventTitle}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block mb-1 text-sm font-semibold text-gray-700">
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2"
                  value={event.description}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Date + Role */}
              <div className="flex gap-4">
                <div className="w-full">
                  <label className="block mb-1 text-sm font-semibold text-gray-700">Date</label>
                  <DatePicker
                    selected={event.date}
                    onChange={handleDateChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    placeholderText="Select a date"
                    required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="role" className="block mb-1 text-sm font-semibold text-gray-700">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none"
                    value={event.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select role</option>
                    <option value="Doris K. John">Doris K. John</option>
                    <option value="User">User</option>
                    <option value="Participant">Participant</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="text-white text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
                style={{ width: '282px', height: '48px', backgroundColor: themeColor }}
              >
                Add Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
}