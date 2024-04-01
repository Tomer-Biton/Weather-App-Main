import { AnyAction, configureStore } from '@reduxjs/toolkit';
import citySearchReducer from '../app/Slices/autocompleteSlice';
import currentWeatherReducer from '../app/Slices/currentWeatherSlice';
import forecast5DaysReducer from '../app/Slices/forecast5DaysSlice';
import tempUnitReducer from '../app/Slices/tempUnitSlice';
import geoLocationReducer from '../app/Slices/geoLocationSlice';

//do not import anything but the reducers from the slices.

export const store = configureStore({
  reducer: {
    citySearch: citySearchReducer,
    currentWeather: currentWeatherReducer,
    forecast5Days: forecast5DaysReducer,
    tempUnit: tempUnitReducer,
    geoLocation: geoLocationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;