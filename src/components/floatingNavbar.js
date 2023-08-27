import { useState } from 'react';
import Link from 'next/link'

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={toggleMenu}
        className="bg-stone-500 text-white py-2 px-4 rounded-full shadow-lg"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      {isOpen && (
        <ul className="absolute top-12 right-0 bg-white w-48 p-4 rounded-lg shadow-lg text-neutralBrown font-cocogothic text-lg">
          <li className="py-2">
            <Link href="/" onClick={toggleMenu} className="block">Home</Link>
          </li>
          <li className="py-2">
            <Link href="/services" onClick={toggleMenu} className="block">Services</Link>
          </li>
          <li className="py-2">
            <Link href="/form" onClick={toggleMenu} className="block">Contact Us</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default FloatingNavbar;