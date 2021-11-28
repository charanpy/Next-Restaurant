import React, { useRef } from 'react';
import { useRouter } from 'next/router';

const SearchInput = () => {
  const searchRef = useRef();

  const router = useRouter();
  const searchFood = (e) => {
    e.preventDefault();
    const recipe = searchRef?.current?.value;
    if (!recipe) return;
    router.push(`/search?recipe=${recipe}`);
  };

  return (
    <div
      style={{ minHeight: '230px', background: '#494d60', color: 'white' }}
      className='flex flex-col justify-center px-6 py-8'
    >
      <div>
        <h1 className='text-white-500 font-normal font-serif text-3xl'>
          Explore Foods
        </h1>
      </div>
      <div className='mt-4'>
        <p className='text-lg font-serif' style={{ color: '#fc8019' }}>
          Search Food by Name
        </p>
      </div>
      <form className='my-4' onSubmit={searchFood}>
        <input
          autoFocus
          className='bg-white-200 my-4 md:my-0 appearance-none border-2 border-gray-200 px-6 py-2.5 font-sans text-sm text-gray-700 leading-tight focus:outline-none bg-white border-purple-500'
          type='search'
          placeholder='Enter Food'
          style={{ width: '250px' }}
          ref={searchRef}
        />
        <button
          className='px-5 py-2.5 m-0 focus:outline-none bg-blue-500 text-sm font-sans'
          style={{ background: '#fc8019' }}
          type='submit'
        >
          FIND FOOD
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
