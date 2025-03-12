// import React, { useState } from "react";

// const App = () => {
//   const [shownMore, isShownMore] = useState(false);

//   return (
//     <div className="flex p-16 justify-center items-center">
//       <div className="h-44 w-80 border border-slate-400 rounded-md shadow-md p-4 bg-white">
//         <h2 className="text-xl font-bold font-serif py-3">Paragraph Here!</h2>
//         <p className="py-2">{shownMore ? "More content here..." : ""}</p>
//         <button
//           onClick={() => isShownMore(!shownMore)}
//           className="px-4 py-3 rounded-md bg-slate-800 text-white text-base"
//         >
//           {shownMore ? "Show Less" : "Show More"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;




// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-purple-900 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-2xl font-bold">MyLogo</h1>

     
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-white md:hidden"
//         >
//           ☰
//         </button>

       
//         <ul
//           className={`absolute md:static top-16 left-0 w-full  bg-purple-600 md:flex md:space-x-6 md:bg-transparent md:w-auto ${
//             isOpen ? "block" : "hidden"
//           }`}
//         >
//           <li className="p-2  text-white hover:bg-blue-700 md:hover:bg-transparent">
//             <a href="#">Home</a>
//           </li>
//           <li className="p-2 text-white hover:bg-blue-700 md:hover:bg-transparent">
//             <a href="#">About</a>
//           </li>
//           <li className="p-2 text-white hover:bg-blue-700 md:hover:bg-transparent">
//             <a href="#">Services</a>
//           </li>
//           <li className="p-2 text-white hover:bg-blue-700 md:hover:bg-transparent">
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from 'react'
import Data from './assets/data'
import Card from './card'

const App = () => {
  return (
   <div className='py-16'>
   <Card />
    
   </div>
  )
}

export default App