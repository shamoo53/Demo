// import React from 'react';
// import Doris from '../assets/doris.svg';

// const CardText = ({ BeeIcon }) => {
//   const data = [
//     {
//       Bee: BeeIcon,
//       task: 'Take recent orders on Jumia',
//       date: 'August 23, 2023',
//       Doris: Doris,
//       name: 'Doris K. John',
//       description: 'Required to look up items on Jumia, select required item place',
//     },
//   ];

//   return (
//     <div>
//     <div className="bg-white shadow-md rounded-md p-3 w-full  hide-scrollbar  ">
//     <div className='min-w-full overflow-auto'>
//       <div className="flex flex-col space-y-4 ">
//         {data.map((item, index) => (
//           <div key={index} className="flex items-center space-x-2 whitespace-nowrap min-w-full ">
//             <input
//               type="checkbox"
//               className="form-checkbox h-5 w-5 text-gray-600 rounded border-gray-300 mr-3" 
//             />
//             <img src={item.Doris}  alt="icon" className="h-6 w-6" />
//             <div className="flex-1 text-gray-600 font-semibold pl-8 text-sm leading-5">{item.task}</div>
//             <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">{item.date}</div>
//             <img src={item.Bee} alt="profile" className="h-6 w-6 rounded-full" />
//             <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">{item.name}</div>
//             <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">
//               <ul className="list-disc list-inside font-semibold text-sm leading-5">
//                 <li>Required to look up items on Jumia</li>
//                 <li>select required item place</li>
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default CardText;

import React from 'react';
import Doris from '../assets/doris.svg';

const CardText = ({ BeeIcon }) => {
  const data = [
    {
      Bee: BeeIcon,
      task: 'Take recent orders on Jumia',
      date: 'August 23, 2023',
      Doris: Doris,
      name: 'Doris K. John',
      description: 'Required to look up items on Jumia, select required item place',
    },
  ];

  

  return (
    
    <div className="bg-white shadow-md rounded-md p-3 w-fit xl:w-full   ">
      <div className="flex flex-col space-y-4 min-w-full">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 whitespace-nowrap min-w-full w-[1170px]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 rounded border-gray-300 mr-3" 
            />
            <img src={item.Doris} alt="icon" className="h-6 w-6" />
            <div className="flex-1 text-gray-600 font-semibold px-8 text-sm leading-5">{item.task}</div>
            <div className="flex-1 text-gray-600 font-semibold  text-sm leading-5">{item.date}</div>
            <img src={item.Bee} alt="profile" className="h-6 w-6 rounded-full" />
            <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">{item.name}</div>
            <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">
              <ul className="list-disc list-inside font-semibold text-sm leading-5 ">
                <li className='overflow-x-auto '>Required to look up items on Jumia</li>
                <li className='overflow-x-auto'>select required item place</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardText;


// third trial


// import React from 'react';
// import Doris from '../assets/doris.svg';
// import Bee from '../assets/bee.svg';
// import newIcon from '../assets/icontwo.svg';
// import three from '../assets/iconthree.svg';
// import four from '../assets/iconfour.svg';

// const eventsData = [
//   {
//     event: 'Take recent orders on Jumia',
//     date: 'August 23, 2023',
//     role: 'Doris K. John',
//     icon: Bee,
//     description: (
//       <>
//         <ul className="list-disc list-inside mb-1">
//           <li>Required to look up items on Jumia.</li>
//         </ul>
//         <ul className="list-disc list-inside">
//           <li>Select required items and place.</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     event: 'Take recent orders on Jumia',
//     date: 'August 23, 2023',
//     role: 'Doris K. John',
//     icon: newIcon,
//     description: (
//       <>
//         <ul className="list-disc list-inside mb-1">
//           <li>Required to look up items on Jumia.</li>
//         </ul>
//         <ul className="list-disc list-inside">
//           <li>Select required items and place.</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     event: 'Take recent orders on Jumia',
//     date: 'August 23, 2023',
//     role: 'Doris K. John',
//     icon: three,
//     description: (
//       <>
//         <ul className="list-disc list-inside mb-1">
//           <li>Required to look up items on Jumia.</li>
//         </ul>
//         <ul className="list-disc list-inside">
//           <li>Select required items and place.</li>
//         </ul>
//       </>
//     )
//   },
//   {
//     event: 'Take recent orders on Jumia',
//     date: 'August 23, 2023',
//     role: 'Doris K. John',
//     icon: four,
//     description: (
//       <>
//         <ul className="list-disc list-inside mb-1">
//           <li>Required to look up items on Jumia.</li>
//         </ul>
//         <ul className="list-disc list-inside">
//           <li>Select required items and place.</li>
//         </ul>
//       </>
//     )
//   },
// ];

// const CardText = () => {
//   return (
//     <div className="w-full p-4"> 
//       {/* Header Card */}
//       <div className="bg-white shadow-md rounded-md p-3 flex items-center space-x-2 overflow-x-auto mb-4">
//         <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 rounded border-gray-300" />
//         <div className="flex-1 text-gray-600 font-semibold pl-0 md:pl-20 text-sm leading-5">Events</div>
//         <div className="flex-1 text-gray-600 font-semibold pl-4 text-sm leading-5">Dates</div>
//         <div className="flex-1 text-gray-600 font-semibold text-sm pl-6 leading-5">Role</div>
//         <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">Description</div>
//       </div>

      

//       <div className="overflow-x-auto"> {/* Single horizontal scroll bar */}
//         {eventsData.map((event, index) => (
         
//           <div key={index} className="bg-white shadow-md rounded-md p-3 w-full border border-gray-200 mb-4 ">
//             <div className="flex flex-row items-center space-x-2 whitespace-nowrap"> 
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-5 w-5 text-gray-600 rounded border-gray-300 mr-3" 
//               />
//               <img src={Doris} alt="icon" className="h-6 w-6" />
//            <div>
            
//            </div>   <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">{event.event}</div>
//               <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">{event.date}</div>
//               <img src={event.icon} alt="icon" className="h-6 w-6 rounded-full" />
//               <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">{event.role}</div>
//               <div className="flex-1 text-gray-600 font-semibold text-sm leading-5">
//                 <ul className="list-disc list-inside font-semibold text-sm leading-5">
//                   {event.description}
//                 </ul>
//               </div>
//             </div>
//           </div>
         
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardText;
