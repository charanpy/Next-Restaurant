import React from 'react';
import Image from 'next/image';
import RecipeCard from './RecipeCard';
import NoResult from '../assets/noresult.svg';

const RecipeContainer = ({ recipies, initial = false }) => {
  return (
    <section className='flex flex-row justify-around flex-wrap my-12'>
      {recipies.length ? (
        recipies.map((data) => (
          <RecipeCard recipe={data?.recipe} key={data?.recipe?.label} />
        ))
      ) : initial ? (
        ''
      ) : (
        <div className='flex flex-col items-center'>
          <Image src={NoResult} alt='no-result' />
          <p className='my-6 text-red-500 font-serif text-lg'>No Data Found</p>
        </div>
      )}
    </section>
  );
};

export default RecipeContainer;
