const sliceRecipies = (recipies) => {
  if (!recipies?.length) return [];

  return recipies.length > 10 ? recipies.slice(0, 10) : recipies;
};

export const sliceLabel = (label) => {
  const splitArr = label.split(' ');
  const finalArr = splitArr.slice(0, splitArr.length - 1);
  return finalArr.join(' ').slice(0, 14) + '...';
};

export default sliceRecipies;
