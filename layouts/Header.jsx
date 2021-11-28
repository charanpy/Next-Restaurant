import React from 'react';
import Link from 'next/link';
import Search from '../components/svg/Search';
import Trending from '../components/svg/Trending';

const Header = () => {
  return (
    <header>
      <nav className='py-5 px-6 border-b-2 border-indigo-100'>
        <div className='flex font-semibold flex-row flex-wrap justify-between items-center full-w leading-10'>
          <Link href='/' passHref>
            <h1 className='text-3xl text-gray-700 font-sans cursor-pointer'>
              Recipe
            </h1>
          </Link>
          <div className='flex flex-row flex-wrap'>
            <Link href='/search' passHref>
              <li className='text-gray-500 font-sans text-medium cursor-pointer flex flex-row items-center mr-4 hover:text-indigo-500'>
                <Search /> Search
              </li>
            </Link>
            <Link href='/trending' passHref>
              <li className='text-gray-500 font-sans text-medium cursor-pointer flex flex-row items-center mr-4 hover:text-indigo-500'>
                <Trending /> Trending
              </li>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// f8274c84
// 5de9f2e0d59cb945cb865674af632bf3
