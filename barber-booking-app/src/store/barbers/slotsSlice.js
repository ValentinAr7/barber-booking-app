// slotsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSlots: [],
};

export const slotsSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {
    selectSlot: (state, action) => {
      state.selectedSlots = [action.payload];
    },
  },
});

export const { selectSlot } = slotsSlice.actions;
export const selectSelectedSlots = (state) => state?.slots?.selectedSlots; // Use optional chaining

export default slotsSlice.reducer;
