import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetch country data
export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get(
      "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    return response.data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    filteredCountries: [],
    loading: false,
    error: null,
  },
  reducers: {
    filterByRegion: (state, action) => {
      if (action.payload === "All") {
        state.filteredCountries = state.countries;
      } else {
        state.filteredCountries = state.countries.filter(
          (country) => country.region === action.payload
        );
      }
    },
    loadMore: (state, action) => {
      const newCount = action.payload;
      state.filteredCountries = state.countries.slice(0, newCount);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
        state.filteredCountries = action.payload.slice(0, 10);
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterByRegion, loadMore } = countriesSlice.actions;
export default countriesSlice.reducer;
