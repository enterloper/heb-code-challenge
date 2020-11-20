/**
 * Returns a string formatted for display purposes
 *
 * @param {number} price value pulled from original item object
 * @return {string} string of the original numeric price in format $0.00
 */

const buildPrice = price => {
  const priceArray = price.toString().split(".");

  if (!priceArray[1]) {
    priceArray[1] = "00";
  } else if (priceArray[1].length === 1) {
    priceArray[1] += "0";
  }

  return `$${priceArray[0]}.${priceArray[1]}`;
};

export default buildPrice;
