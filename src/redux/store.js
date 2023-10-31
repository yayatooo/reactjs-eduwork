import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterNumber";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
