import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const ApiKey = 'B6x41H1kaF0t9vIi0D3AwGuVQ6lRS5yR';
export const AutoCompleteUrl = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';

export interface CityACArray {
  Key: number,
  LocalizedName: string,
  Country: {
    ID: string,
    LocalizedName: string
  }
}

export interface AutocompleteState {
  search: CityACArray[];
}

const initialState: AutocompleteState = {
  search: [
    {
      Key: 215854,
      LocalizedName: 'Loading...',
      Country: {
        ID: 'Loading...',
        LocalizedName: 'Loading...'
      }
    }
  ],
};

const noResultsFound = 'No results found, please refresh the page and try again.';

export const fetchAutocomplete = createAsyncThunk(
  'cityNameSearch/fetchAutocomplete',
  async (search: string) => {
    try {
      const response = await axios.get(`${AutoCompleteUrl}?apikey=${ApiKey}&q=${search}`);
      const result = response.data;
      if (result.length === 0) {
        alert(noResultsFound);
      }
      return result;
    } catch (error) {

    }
  }
);

// export const fetchAutocomplete = createAsyncThunk(
//   'citySearch/fetchAutocomplete',
//   async (search: string) => {
//     const response = await axios.get(`${AutoCompleteUrl}?apikey=${ApiKey}&q=${search}`);
//     const result = response.data.map(() => ({
//       LocalizedName: search,
//     }))
//     console.log("Key&CityName&CountryName", result);
//     return result;
//Returns Key&CityName&CountryName
// i get here an array of 10 objects.
// i can use the result to get the city key and then use it to get the current weather.
// i need to pass the city key to the fetchCurrentWeather function.
// to do so i need to fetch the key from the store and pass it to the fetchCurrentWeather function.
//   }
// );

export const autocompleteSlice = createSlice({
  name: 'citySearch',
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.search = (initialState as AutocompleteState).search;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAutocomplete.fulfilled, (state, action) => {
      state.search = action.payload;
    });
  },
});

export const { clearSearch } = autocompleteSlice.actions;

export default autocompleteSlice.reducer;
