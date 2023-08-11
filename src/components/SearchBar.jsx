import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setCountries } from "../redux/countriesSlice";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    axios
      .get(
        `http://dev.abroadinquiry.com:5001/countries?page=1&name=${searchTerm}`
      )
      .then((response) => {
        dispatch(setCountries(response.data.data));
      })
      .catch((error) => {
        console.error("Error searching countries:", error);
      });
  };

  return (
    <div className="search-box">
      <SearchIcon className="search-icon" />
      <input
        className="w-100"
        type="text"
        placeholder="Search by country name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
