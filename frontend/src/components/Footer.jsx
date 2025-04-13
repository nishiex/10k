import React from 'react';

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="flex justify-center gap-6">
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('products')}>Products</button>
        <button onClick={() => scrollToSection('contact')}>Contact Us</button>
        <button onClick={() => scrollToSection('services')}>Service</button>
      </div>
    </footer>
  );
}
