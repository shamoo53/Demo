// import { useState } from 'react';
// import { Dialog } from '@headlessui/react';

// export default function EventModal({ isOpen, closeModal, addEvent }) {
//   const [event, setEvent] = useState({ task: '', date: '', description: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addEvent(event);
//     closeModal();
//   };

//   const handleChange = (e) => {
//     setEvent({
//       ...event,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
//       <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
//       <div className="fixed inset-0 flex items-center justify-center p-4">
//         <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
//           <Dialog.Title className="text-lg font-medium">Add Event</Dialog.Title>
//           <form onSubmit={handleSubmit}>
//             <div className="mt-4">
//               <label className="block text-sm font-medium text-gray-700">Task</label>
//               <input
//                 type="text"
//                 name="task"
//                 value={event.task}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div className="mt-4">
//               <label className="block text-sm font-medium text-gray-700">Date</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={event.date}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div className="mt-4">
//               <label className="block text-sm font-medium text-gray-700">Description</label>
//               <textarea
//                 name="description"
//                 value={event.description}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div className="mt-4 flex justify-end">
//               <button
//                 type="button"
//                 onClick={closeModal}
//                 className="mr-2 inline-flex justify-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//               >
//                 Add Event
//               </button>
//             </div>
//           </form>
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// }


// this is the other modal
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';


export default function EventModal({ isOpen, closeModal, addEvent }) {
  const [event, setEvent] = useState({ eventTitle: '', description: '', date: '', role: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event);
    closeModal();
  };

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-lg relative">
          {/* Modal Header */}
          <div className="flex justify-center items-center border-b pb-3 relative">
            {/* "+" button on the left-hand side of the text */}
            <button className="w-8 h-8 bg-[#000000] text-white rounded-full flex items-center justify-center hover:bg-[#000000] mr-2">
              +
            </button>

            {/* "Add Event" text */}
            <span className="text-lg font-semibold">Add Event</span>
            


            {/* "×" close button */}
          
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
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-3 py-2 border rounded-md"
                    value={event.date}
                    onChange={handleChange}
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