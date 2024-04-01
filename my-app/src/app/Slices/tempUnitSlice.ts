import { createSlice } from '@reduxjs/toolkit';

interface TempUnitState {
  tempUnit: boolean;
}

const initialState = {
  tempUnit: true,
};

export const tempUnitSlice = createSlice({
  name: 'tempUnit',
  initialState,
  reducers: {
    toggleTempUnit: (state: any) => {
      state.tempUnit = !state.tempUnit //toggle between true and false => But please check it!
    },
  },
});

export const { toggleTempUnit } = tempUnitSlice.actions;

export default tempUnitSlice.reducer;