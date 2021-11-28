import React from 'react';

const Footer = () => {
  return (
    <footer className='p-6 text-center bg-gray-100 border-t-2 border-gray-200'>
      <p className='text-indigo-500 font-serif'>
        <span className='font-sans'>{new Date().getFullYear()}</span> Recipe
        Ltd.
      </p>
    </footer>
  );
};

export default Footer;
