import { configureStore } from "@reduxjs/toolkit";
import barberReducer from "../store/barbers/barberSlice";

export const store = configureStore({
  reducer: {
    barber: barberReducer,
  },
});
