export const APPID = process.env.NEXT_PUBLIC_APP_ID;
export const APPKEY = process.env.NEXT_PUBLIC_APP_KEY;

const fetchApi = async (url) => {
  try {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2${url}`);
    const data = await response.json();

    return data;
  } catch (error) {}
};

export default fetchApi;
