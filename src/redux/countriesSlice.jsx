import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    list: [],
    selectedCountry: null,
  },
  reducers: {
    setCountries: (state, action) => {
      state.list = action.payload;
    },
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setCountries, selectCountry } = countriesSlice.actions;

export default countriesSlice.reducer;
