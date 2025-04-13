import React from 'react';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className=" motion-preset-typewriter-[24] text-4xl md:text-5xl font-bold mb-4">Welcome to Madhav Battery</h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering businesses with cutting-edge web and mobile solutions.
          We build scalable, secure, and stunning digital products.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Right Logo */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-10  md:mt-0">
        <img 
          src="../public/image/MadhavBattery.jpeg" 
          alt="Company Logo" 
          className="w-64 h-64 md:w-60 md:h-60  rounded-md"
        />
      </div>
    </section>
  );
}
