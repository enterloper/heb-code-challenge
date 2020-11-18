import React, { useEffect, useState } from "react";
import "./style.css";
import transformData from "./helper/transformData";
import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";
import fetchData from "./helper/fetchCalls";
import amzUrls from "../public/urls";

export default function App() {
  const initialFilterValues = {
    itemLimit: "50",
    minPrice: "5",
    maxPrice: "20",
    sortby: "priceLowHigh"
  };
  const [filterValues, setFilterValues] = useState(initialFilterValues);

  const handleInputChange = e => {
    e.persist();
    setFilterValues({
      ...filterValues,
      [e.target.name]: e.target.value
    });
  };

  const [items, setItems] = useState([]);

  useEffect(async () => {
    const response = await fetchData(amzUrls.amznItems);
    const { itemLimit, minPrice, maxPrice, sortby } = filterValues;
    setItems(transformData(response, minPrice, maxPrice, sortby, itemLimit));
  }, [
    filterValues.itemLimit,
    filterValues.sortby,
    filterValues.minPrice,
    filterValues.maxPrice
  ]);

  return (
    <>
      <Header />
      <Items
        filterValues={filterValues}
        handleInputChange={handleInputChange}
        items={items}
      />
      <Footer />
    </>
  );
}
