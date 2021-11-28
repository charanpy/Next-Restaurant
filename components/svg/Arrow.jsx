import React from 'react';

const Arrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 mx-1'
      fill='none'
      viewBox='0 0 24 24'
      stroke='#6D28D9'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M14 5l7 7m0 0l-7 7m7-7H3'
      />
    </svg>
  );
};

export default Arrow;
