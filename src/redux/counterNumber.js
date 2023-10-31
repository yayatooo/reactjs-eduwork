import { createSlice } from "@reduxjs/toolkit";

const counterNumber = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = counterNumber.actions;
export default counterNumber.reducer;
