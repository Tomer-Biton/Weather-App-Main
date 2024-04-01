import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ApiKey } from './autocompleteSlice'
import axios from 'axios'
import { RootState } from '../store';
import { useAppSelector } from '../hooks';

const ForecastAPI = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';

export interface Forecast5DaysState {
  forecast: {
    Date: string,
    Temperature: {
      Minimum: {
        Value: number,
        Unit: string,
      },
      Maximum: {
        Value: number,
        Unit: string,
      }
    },
    Day: {
      Icon: number,
      IconPhrase: string,
    },
    Night: {
      Icon: number,
      IconPhrase: string,
    }
  }[]
}

export const fetch5DayForecast = createAsyncThunk(
  'forecast5Days/fetch5DayForecast',
  async ({ cityKey, degUnit }: { cityKey: string, degUnit: boolean }) => {
    // async ({ degUnit = false || true, cityKey }: { cityKey: string; degUnit: any }) => {
    try {
      const response = await axios.get(`${ForecastAPI}${cityKey}?apikey=${ApiKey}&metric=${degUnit}`);
      // const response = await axios.get(`${ForecastAPI}${cityKey}?apikey=${ApiKey}&metric=${degUnit}`);
      const result = response.data;
      // console.log("5DayForecast", result);
      return result;
    } catch (error) {
      console.log('error with 5DayForecast', error);
    }
  }
)

export const initialState: Forecast5DaysState = {
  forecast: [
    {
      Date: '2021-07-28T07:00:00+03:00',
      Temperature: {
        Minimum: {
          Value: 25,
          Unit: 'C',
        },
        Maximum: {
          Value: 32,
          Unit: 'C',
        }
      },
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
      }
    }
  ]
};

export const Forecast5DaysSlice = createSlice({
  name: 'forecast5Days',
  initialState,
  reducers: {
    set5DayForecast: (state, action) => {
      state.forecast = action.payload;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetch5DayForecast.fulfilled, (state, action) => {
      // console.log("dsdsdsd", action.payload.DailyForecasts);

      state.forecast = action.payload.DailyForecasts;
    })
  }
})

export const { set5DayForecast } = Forecast5DaysSlice.actions;

export default Forecast5DaysSlice.reducer;