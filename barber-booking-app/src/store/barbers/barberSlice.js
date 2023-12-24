import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBarber: null,
};

export const barberSlice = createSlice({
  name: "barber",
  initialState,
  reducers: {
    selectBarber: (state, action) => {
      state.selectedBarber = action.payload;
    },
  },
});

export const { selectBarber } = barberSlice.actions;
export default barberSlice.reducer;
