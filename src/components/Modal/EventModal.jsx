
import React, { useState } from "react";

const EventModal = ({ isOpen, closeModal }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [role, setRole] = useState("");

  const handleAddEvent = () => {
    // Handle event submission logic here
    console.log({ eventTitle, description, date, role });
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-bold flex items-center">
            <span className="mr-2 text-2xl">➕</span> Add Events
          </h2>
          <button onClick={closeModal} className="text-xl font-bold">×</button>
        </div>

        {/* Modal Body */}
        <div className="mt-4">
          <div className="mb-4">
            <label htmlFor="eventTitle" className="block mb-2 font-semibold">
              Event title
            </label>
            <input
              type="text"
              id="eventTitle"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter event title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block mb-2 font-semibold">
              Description
            </label>
            <textarea
              id="description"
              rows="3"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter event description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="flex justify-between gap-4">
            <div className="w-full">
              <label htmlFor="date" className="block mb-2 font-semibold">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-3 py-2 border rounded-md"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="w-full">
              <label htmlFor="role" className="block mb-2 font-semibold">
                Role
              </label>
              <select
                id="role"
                className="w-full px-3 py-2 border rounded-md"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" disabled>
                  Select role
                </option>
                <option value="Doris K. John">Doris K. John</option>
                <option value="User">User</option>
                <option value="participant">Participant</option>
              </select>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleAddEvent}
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;