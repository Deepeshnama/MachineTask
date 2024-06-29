import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cards/cardSlice";

const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export default store;