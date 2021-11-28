import React from 'react';
import RecipeContainer from '../components/RecipeContainer';
import SearchInput from '../components/SearchInput';
import fetchApi, { APPID, APPKEY } from '../helpers/fetchApi';
import sliceRecipies from '../helpers/sliceRecipe';

const search = ({ recipies, initial, searchTerm }) => {
  return (
    <section>
      <SearchInput />
      <h1 className='my-4 text-lg font-serif mx-2'>
        {searchTerm ? 'Search Results for ' : ''}
        {searchTerm ? <span className='text-blue-800'>{searchTerm}</span> : ''}
      </h1>
      <RecipeContainer recipies={recipies} initial={initial} />
    </section>
  );
};

export default search;

export const getServerSideProps = async ({ query }) => {
  if (!query?.recipe) {
    return {
      props: {
        recipies: [],
        initial: true,
      },
    };
  }
  const data = await fetchApi(
    `?type=public&q=${query.recipe}&app_id=${APPID}&app_key=${APPKEY}`
  );

  return {
    props: {
      recipies: sliceRecipies(data?.hits),
      searchTerm: query.recipe,
    },
  };
};
