import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sliceLabel } from '../helpers/sliceRecipe';

const RecipeCard = ({ recipe }) => {
  return (
    <Link href={`/recipe/${recipe.uri.split('_')[1]}`} passHref>
      <div className='flex flex-col leading-4 my-6 md:w-1/4 md:mx-3 cursor-pointer sm:w-1/2 shadow-lg p-5 pb-0 border-2 transition duration-300 hover:border-indigo-500'>
        <div className='justify-center items-center'>
          <Image
            src={recipe.images['REGULAR']?.url || recipe.image}
            alt='recipe'
            width={300}
            height={300}
            objectFit='cover'
          />
        </div>
        <div>
          <p className='text-gray-900 font-sans text-medium my-2 font-bold'>
            {sliceLabel(recipe?.label)}
          </p>
          <p className='my-4 font-light text-gray-600 capitalize font-serif'>
            {recipe?.cuisineType?.length ? recipe?.cuisineType[0] : 'Italian'}
          </p>
        </div>
        <div className='mt-2 mx-1 h-0.5 bg-gray-300'></div>
        <div className='text-center text-sm font-medium font-serif text-blue-500 my-4'>
          VIEW
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
