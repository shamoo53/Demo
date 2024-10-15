import { Dialog } from '@headlessui/react';
import Doris from '../../assets/doris.svg';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

export default function EventModal({ isOpen, closeModal, addEvent }) {
  // useState hook to manage the state of the event form
  const [event, setEvent] = useState({ eventTitle: '', description: '', date: null, role: '', Doris: Doris });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add event with formatted date
    addEvent({
      ...event,
      date: event.date ? format(event.date, 'MMMM dd, yyyy') : '',
    });
    // Close the modal after submitting
    closeModal();
  };

  // Function to handle changes in the input fields
  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle date change
  const handleDateChange = (date) => {
    setEvent({
      ...event,
      date: date,
    });
  };

  // If the modal is not open, do not render anything
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      {/* Overlay to darken the background when the modal is open */}
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        {/* Modal container */}
        <div className="bg-white rounded-lg p-8 w-full max-w-lg relative">
          {/* Modal Header */}
          <div className="flex justify-center items-center border-b pb-3 relative">
            {/* Plus button, currently not functional */}
            <button className="w-6 h-6 bg-[#000000] text-white rounded-full flex items-center justify-center hover:bg-[#000000] mr-2">
              +
            </button>
            {/* Modal title */}
            <span className="text-lg font-semibold">Add Event</span>
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-2 text-2xl font-bold text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
          </div>

          {/* Modal Body - Form */}
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              {/* Event Title Input */}
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

              {/* Description Input */}
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

              {/* Date and Role Inputs */}
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

            {/* Modal Footer - Submit Button */}
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
