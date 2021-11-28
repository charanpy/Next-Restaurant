import React from 'react';
import Image from 'next/image';
import fetchApi, { APPID, APPKEY } from '../../helpers/fetchApi';
import Heart from '../../components/svg/Heart';
import Arrow from '../../components/svg/Arrow';

const Recipe = ({ recipe }) => {
  console.log(recipe, 23);
  return (
    <div className='myContainer-md mx-auto flex flex-row flex-wrap my-10 justify-center items-center'>
      <div className='md:mr-9 flex items-center'>
        <Image
          src={recipe.images['REGULAR']?.url || recipe.image}
          alt='recipe'
          width={300}
          height={300}
          // layout='responsive'
        />
      </div>
      <div className='px-2 md:px-0'>
        <h1 className='font-serif font-medium text-gray-900 text-xl flex flex-row items-center'>
          {recipe.label} <Heart />
        </h1>

        <div className='my-4 flex flex-col md:flex-row'>
          <p className='font-serif font-medium text-blue-400 mx-2'>
            Cuisine:{' '}
            <span className='text-gray-700 capitalize'>
              {recipe.cuisineType[0]}
            </span>
          </p>
          <p className='font-serif font-medium text-blue-400 mx-2'>
            Type:{' '}
            <span className='text-gray-700 capitalize'>
              {recipe.dishType[0]}
            </span>
          </p>
        </div>

        <div className='my-4 flex flex-col md:flex-row'>
          <p className='font-serif font-medium text-blue-400 mx-2'>
            Meal Type:{' '}
            <span className='text-gray-700 capitalize'>
              {recipe.mealType[0]}
            </span>
          </p>
          <p className='font-serif font-medium text-blue-400 mx-2'>
            Source:{' '}
            <span className='text-gray-700 capitalize'>{recipe.source}</span>
          </p>
        </div>
        <div className='my-4 flex flex-col'>
          <p className='font-serif font-medium text-blue-400 mx-2'>
            Ingredients:
          </p>
          {recipe.ingredientLines.map((incredient, index) => (
            <>
              {index < 5 ? (
                <p
                  className='text-gray-700 capitalize flex flex-row items-center my-2'
                  key={incredient}
                >
                  <Arrow />
                  {incredient}
                </p>
              ) : (
                ''
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;

export const getServerSideProps = async ({ query }) => {
  const data = await fetchApi(
    `/${query.id}?type=public&app_id=${APPID}&app_key=${APPKEY}`
  );
  return {
    props: {
      recipe: data?.recipe,
    },
  };
};
