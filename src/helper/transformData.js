/**** SORTING FUNCTIONS ****/
export const sortByPriceLowToHigh = (a, b) =>
  a.amzn_price < b.amzn_price ? -1 : a.amzn_price > b.amzn_price ? 1 : 0;

export const sortByPriceHighToLow = (a, b) =>
  a.amzn_price > b.amzn_price ? -1 : a.amzn_price < b.amzn_price ? 1 : 0;

export const sortByRatingLowToHigh = (a, b) =>
  a.rating < b.rating ? -1 : a.rating > b.rating ? 1 : 0;

export const sortByRatingHighToLow = (a, b) =>
  a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0;

const sortingOptions = {
  priceLowHigh: sortByPriceLowToHigh,
  priceHighLow: sortByPriceHighToLow,
  ratingLowHigh: sortByRatingLowToHigh,
  ratingHighLow: sortByRatingHighToLow
};

const transformData = (
  data = [],
  minprice,
  maxprice,
  orderPreference,
  numberOfItems
) => {
  return data
    .filter(item => item.amzn_price >= minprice && item.amzn_price < maxprice)
    .sort(sortingOptions[orderPreference])
    .slice(0, Number(numberOfItems));
};

export default transformData;
