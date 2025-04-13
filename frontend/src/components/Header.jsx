import React from 'react';

export default function Header() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
       <a href="/admin">
        <img 
            src="/image/Madhavlogo.png" 
            alt="Company Logo" 
            className="h-10"
            />
          </a>
           
      </div>
    </nav>
  );
}


// import React from 'react';

// export default function Header() {
//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
//       <button onClick={() => window.location.href = '#adminLogin'} className="px-4 py-2 bg-blue-500 rounded">Admin</button>
//       <div className="text-xl font-bold">Your Logo</div>
//     </nav>
//   );
// }
