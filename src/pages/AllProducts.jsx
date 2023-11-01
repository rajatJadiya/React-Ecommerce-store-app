import React from "react";
import Navbar from "../components/Navbar";
import CategoriesBar from "../components/CategoriesBar";
import TitleBar from "../components/TitleBar";
import useFetch from "../hooks/useFetch";
import { BASE_URL, ENDPOINTS } from "../api/Endpoints";
import ProductCard from "../components/ProductCard";
import BallTriangle from "react-loading-icons/dist/esm/components/ball-triangle";
import Footer from "../components/Footer";
import { useState } from "react";

const AllProducts = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch(BASE_URL + ENDPOINTS.ALL_PRODUCTS);
  // console.log(products)

  const [filteredValue, setFilteredValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedProducts =
    filteredValue === "all"
      ? products
      : [...(products ?? [])].sort((a, b) => {
          switch (filteredValue) {
            case "highest_rated":
              return b.rating.rate - a.rating.rate;
            case "lowest to highest":
              return a.price - b.price;
            case "highest to lowest":
              return b.price - a.price;
            case "lowest_rated":
              return a.rating.rate - b.rating.rate;
          }
        });
  
  const productSearch = products?.filter((prd) => {
    return prd.title.toLowerCase().includes(searchQuery)
  })

  return (
    <div>
      <TitleBar
        setFilteredValue={setFilteredValue}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      {loading ? (
        <div className="shop-container my-[3rem] h-[100vh]">
          <div className="flex flex-col items-center gap-5 justify-center">
            <BallTriangle stroke="#57bfdc" speed={1} fontSize={200} />
            <p className="text-[#57bfdc] text-2xl font-semibold">Loading, please wait...</p>
          </div>
        </div>
      ) : searchQuery === "" ? (
        <div className="shop-container grid sm:grid-cols-2 lg:grid-cols-4 justify-center gap-5 my-[3rem]">
          {sortedProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : productSearch.length ? (
        <div className="shop-container  grid sm:grid-cols-2 lg:grid-cols-4 justify-center gap-5 my-[3rem]">
          {productSearch?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) :(
        <div className="h-[80vh] text-center text-3xl">
          <p>No results found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
