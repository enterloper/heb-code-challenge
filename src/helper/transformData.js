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

/**
 * Returns objects from an array of objects 
 * that meet the criteria based on parameters.
 *
 * @param {array} data array of items that contain the population of objects.
 * @param {string} minprice minimum price of items used for filtering items
 * @param {string} maxprice maximum price of items used for filtering items
 * @param {string} orderPreference determines how to order the items
 * @param {number} numberOfItems limit of returned items
 * @return {array} array of objects that meet the criteria of the arguments
 */
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
