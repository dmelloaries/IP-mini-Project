// Search Page ! not able to Load Restaurants , need some fix

import React, { useState } from "react";
import MockRes from "./MockRes";

const Search = ({ handleSearch }) => {
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(null); 

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError(null); 
    setFilteredData(null); 
  };

  const handleSearchClick = async () => {
    try {
      const searchData = await handleSearch();
      const searchTerm = inputValue.toLowerCase();

      
      const filteredResList = searchData.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchTerm)
      );

     
      setFilteredData(filteredResList);
    } catch (error) {
      setError("Search From Home Page "); 
    }
  };

  return (
    <div className="flex w-1/2 mx-20">
      <input
        type="text"
        className="search-box mt-7 px-4 py-2 w-full border border-gray-300 rounded-l-3xl focus:border-black"
        placeholder="Search your favorite..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="bg-gray text-black mt-7 px-4 py-2 rounded-r-3xl border border-gray-300 hover:bg-blue-100"
        onClick={handleSearchClick}
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      
      {filteredData && <MockRes data={filteredData} />}
    </div>
  );
};

export default Search;
