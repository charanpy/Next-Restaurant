import React from 'react';
import RecipeContainer from '../components/RecipeContainer';
import fetchApi, { APPID, APPKEY } from '../helpers/fetchApi';
import sliceRecipies from '../helpers/sliceRecipe';

const Trending = ({ recipies }) => {
  return (
    <>
      <h1 className='text-blue-700 text-xl  font-serif mt-4 mx-4'>Trending</h1>
      <RecipeContainer recipies={recipies} />
    </>
  );
};

export default Trending;

export const getStaticProps = async () => {
  const data = await fetchApi(
    `?type=public&q=biriyani&app_id=${APPID}&app_key=${APPKEY}`
  );

  return {
    props: {
      recipies: sliceRecipies(data?.hits),
    },
  };
};
