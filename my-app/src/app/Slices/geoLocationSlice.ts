// get the users longitute and latitude from the browser and then use the fetchLocationKey function to get the city key.

import { createSlice } from "@reduxjs/toolkit";
import { ApiKey } from "./autocompleteSlice";

// const geoLocationAPI = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=' + ApiKey + '&q=';


export const geolocationSlice = createSlice({
  name: 'geoLocation',
  initialState: {
    latitude: 0,
    longitude: 0,
  },
  reducers: {
    setGeoLocation: (state, action) => {
      const finalPosition = state.latitude + ',' + state.longitude;
      // state.latitude = action.payload.latitude;
      // state.longitude = action.payload.longitude;
    },
  },
});

export const { setGeoLocation } = geolocationSlice.actions;

export default geolocationSlice.reducer;