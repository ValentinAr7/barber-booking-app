import { configureStore } from "@reduxjs/toolkit";
import barberReducer from "../store/barbers/barberSlice";
import calendarReducer from "../store/barbers/calendarSlice";

export const store = configureStore({
  reducer: {
    barber: barberReducer,
    calendat: calendarReducer,
  },
});
