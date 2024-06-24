
  

import React from 'react'

export default function Drawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed z-[100] inset-0 bg-black bg-opacity-80 text-white transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } flex flex-col items-center justify-center z-50`}
    >
      <button
        className="absolute top-5 right-5 text-3xl"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="p-5 text-center">
        <h2 className="text-4xl mb-4">Contact Us</h2>
        <p className="text-lg mb-2">Email: contact@company.com</p>
        <p className="text-lg mb-2">Phone: +123 456 7890</p>
        <p className="text-lg">Address: 123 Main St, City, Country</p>
      </div>
    </div>
  );
};
