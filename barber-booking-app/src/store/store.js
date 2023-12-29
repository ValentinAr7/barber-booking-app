import { configureStore } from "@reduxjs/toolkit";
import barberReducer from "../store/barbers/barberSlice";
import calendarReducer from "../store/barbers/calendarSlice";
import slotsReducer from "../store/barbers/slotsSlice";

export const store = configureStore({
  reducer: {
    barber: barberReducer,
    calendar: calendarReducer,
    slots: slotsReducer,
  },
});
