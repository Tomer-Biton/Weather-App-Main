// import { CurrentWeatherState } from './currentWeatherSlice';
// import { currentWeather } from './currentWeatherSlice';
// import { initialState } from './../../Components/api';
// this Slice is for the current weather of the city that the user has selected and the base city that shows when you first load the page.in this slice i will create the fetch for the current weather seince there is no fetchCurrentWeather function yet. all of this using AccuWeather API for 'Current Conditions' and 'Autocomplete Search'. everything using redux toolkit and axios for the fetches. typescript is used for the types of the data that is being fetched.

import { ApiKey } from './autocompleteSlice'
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface CityCWData {
  IsDayTime: boolean;
  WeatherIcon: number;
  WeatherText: string;
  Temperature: {
    Metric: {
      Value: number,
      Unit: string,
    },
    Imperial: {
      Value: number,
      Unit: string,
    }
  }
}

export interface CurrentWeatherState {
  city: CityCWData[];

}

// this is the initial state of the current weather slice. the base city is Tel Aviv and the current weather is an empty object.

//i want a state to show me the current temperature and i need it to change with redux toolkit between celsius and farenheit. i plan on using this is a button later in the project to change the whole project temperature units.

const baseCityKey = "215854";

export const fetchCurrentWeather = createAsyncThunk(
  'getCurrentWeather/fetchCurrentWeather',
  async (anyCityKey: string) => {
    try {
      const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${anyCityKey}?apikey=${ApiKey}`);
      const result = response.data;
      return result;
    } catch (error) {
    }
  }
)

const baseCityData = fetchCurrentWeather(baseCityKey);

export const initialState: CurrentWeatherState = {
  city: [
    {
      IsDayTime: true,
      WeatherIcon: 1,
      WeatherText: 'Loading Weather...',
      Temperature: {
        Metric: {
          Value: 0,
          Unit: '',
        },
        Imperial: {
          Value: 0,
          Unit: '',
        }
      }
    }
  ],
};

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
    setNewCity: (state) => {
      state.city = (initialState as CurrentWeatherState).city;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
      state.city = action.payload;
      state.city[0].WeatherText = action.payload[0].WeatherText;
    });
  },
});

export const { setNewCity } = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;