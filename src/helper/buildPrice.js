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
