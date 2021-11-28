import RecipeContainer from '../components/RecipeContainer';
import fetchApi, { APPID, APPKEY } from '../helpers/fetchApi';
import sliceRecipies from '../helpers/sliceRecipe';

const Home = ({ recipies }) => {
  return <RecipeContainer recipies={recipies} />;
};

export default Home;

export const getStaticProps = async () => {
  const data = await fetchApi(
    `?type=public&q=pasta&app_id=${APPID}&app_key=${APPKEY}`
  );

  return {
    props: {
      recipies: sliceRecipies(data?.hits),
    },
  };
};
