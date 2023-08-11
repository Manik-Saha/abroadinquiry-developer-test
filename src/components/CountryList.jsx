import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setCountries, selectCountry } from "../redux/countriesSlice";
import Pagination from '@mui/material/Pagination';

const CountryList = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.list);

  useEffect(() => {
    axios
      .get("http://dev.abroadinquiry.com:5001/countries?page=1&name=a")
      .then((response) => {
        dispatch(setCountries(response.data.data));
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, [dispatch]);

  const handleCountryClick = (country) => {
    dispatch(selectCountry(country));
  };

  console.log(countries ? countries : null);

  return (
    <div>
      <h2 className="mb-3">Country List</h2>
      <div className="w-100">
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Country Name</th>
            <th>Capital</th>
            <th>Action</th>
          </thead>
          <tbody>
            {countries
              ? countries.map((country) => (
                  <tr
                    key={country.id}
                    onClick={() => handleCountryClick(country)}
                  >
                    <td>{country.id}</td>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                    <td>
                      <button
                        key={country.id}
                        onClick={() => handleCountryClick(country)}
                        className="btn btn-success"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryList;
