import React from "react";
import {HiOutlineSearch} from 'react-icons/hi'
import { BASE_URL, ENDPOINTS } from "../api/Endpoints";

const TitleBar = ({setFilteredValue, setSearchQuery, searchQuery, title}) => {

  const handleSelect = (e) =>{
    setFilteredValue(e.target.value)
  }

  const handleSearch = (e) =>{
    console.log(searchQuery)
    setSearchQuery( e.target.value)
  }
 
  return (
    <div className="shop-container mt-5">
      <div className="flex items-center md:justify-between gap-5 flex-col md:flex-row">
        {/* title  */}
        <div>
          <h3 className="text-4xl font-thin text-center capitalize">{title}</h3>
        </div>

        {/* search  */}
        <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full max-w-[300px] w-[300px]">
            <input onChange={handleSearch} value={searchQuery} type="text" className="outline-none border-none bg-gray-200 flex-1" placeholder="Search a product..."/>
            <HiOutlineSearch />
        </div>

        {/* filter Products  */}
        <div className="flex flex-col items-end">
            <span className="text-xl font-robotoMono">Sort by: </span>
            <select onChange={handleSelect} className="border-2 rounded px-2 py-2 outline-none max-w-[150px] font-robotoMono">
                <option value="all">All</option>
                <option value="highest_rated">Rating(Highest)</option>
                <option value="lowest_rated">Rating(Lowest)</option>
                <option value="lowest to highest">Price (Lowest)</option>
                <option value="highest to lowest">Price (Highest)</option>
            </select>
        </div>
        
      </div>
    </div>
  );
};

TitleBar.defaultProps = {
  title: 'All Products'
}

export default TitleBar;
