import { Dialog } from '@headlessui/react';
import Doris from '../../assets/doris.svg';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

export default function EventModal({ isOpen, closeModal, addEvent }) {
  const [event, setEvent] = useState({ eventTitle: '', description: '', date: null, role: '', Doris: Doris });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({
      ...event,
      date: event.date ? format(event.date, 'MMMM dd, yyyy') : '', // Format date here
    });
    closeModal();
  };

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setEvent({
      ...event,
      date: date,
    });
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-lg relative">
          {/* Modal Header */}
          <div className="flex justify-center items-center border-b pb-3 relative">
            <button className="w-6 h-6 bg-[#000000] text-white rounded-full flex items-center justify-center hover:bg-[#000000] mr-2">
              +
            </button>
            <span className="text-lg font-semibold">Add Event</span>
            <button
              onClick={closeModal}
              className="absolute right-4 top-2 text-2xl font-bold text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
          </div>

          {/* Modal Body */}
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <div className="mb-4">
                <label htmlFor="eventTitle" className="block mb-2 font-semibold">
                  Event title
                </label>
                <input
                  type="text"
                  id="eventTitle"
                  name="eventTitle"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder=""
                  value={event.eventTitle}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block mb-2 font-semibold">
                  Description
                </label>
                <input
                  id="description"
                  name="description"
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder=""
                  value={event.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex justify-between gap-4">
                <div className="w-full">
                  <label className="block mb-2 font-semibold">Date</label>
                  <DatePicker
                    selected={event.date}
                    onChange={handleDateChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholderText="Select a date"
                    required
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="role" className="block mb-2 font-semibold">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-3 py-2 border rounded-md"
                    value={event.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled></option>
                    <option value="Doris K. John">Doris K. John</option>
                    <option value="User">User</option>
                    <option value="Participant">Participant</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="bg-[#413FA0] text-white rounded-md hover:bg-[#413FA0]"
                style={{ width: '282px', height: '48px', borderRadius: '5px' }}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
}