import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CountryList from "./components/CountryList";
import SearchBar from "./components/SearchBar";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  return (
    <Provider store={store}>
      <div className="body-content">
        <h1 className="text-center mb-3">Country Information App</h1>
        <SearchBar />
        <CountryList />
        <CountryDetails />
      </div>
    </Provider>
  );
};

export default App;