import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setCountries, selectCountry } from "../redux/countriesSlice";

const CountryDetails = () => {
  const dispatch = useDispatch();
  const [countryDetails, setcountryDetails] = useState();
  const countries = useSelector((state) => state.countries.list);
  const selectedCountry = useSelector(
    (state) => state.countries.selectedCountry
  );

  if (!selectedCountry) {
    return null;
  }
  else{
    axios
      .get(`http://dev.abroadinquiry.com:5001/get-a-country-details?cid=${selectedCountry.id}&cname=${selectedCountry.name}`)
      .then((response) => {
        setcountryDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }

  return (
    <div>
      <h2>Country Details</h2>
      <p><strong>Country ID: </strong>{countryDetails ? countryDetails.id :null}</p>
      <p><strong>Country Name: </strong>{countryDetails ? countryDetails.name :null}</p>
      <p><strong>Population: </strong>{countryDetails ? countryDetails.population :null}</p>
      <p><strong>Capital: </strong>{countryDetails ? countryDetails.capital :null}</p>
      <p><strong>Currency: </strong>{countryDetails ? countryDetails.currency :null}</p>
      <p><strong>ISO Code:</strong> {countryDetails ? countryDetails.isocode :null}</p>
      <p><strong>Description: </strong>{countryDetails ? countryDetails.description :null}</p>
      <p><strong>
        Flag: </strong><img src={countryDetails ? countryDetails.flagimage :null} alt="flag" srcset="" />
      </p>
    </div>
  );
};

export default CountryDetails;
